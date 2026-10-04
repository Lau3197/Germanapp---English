import { getStore } from '@netlify/blobs';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';

const USERS_STORE = 'deutschmeister-users';
const DEFAULT_STATS = {
  totalTimeSpent: 0,
  completedLessons: [],
  dailyGoal: 15,
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: '',
  dailyHistory: [],
  quizResults: []
};

const getEnv = (key) => {
  if (typeof Netlify !== 'undefined' && Netlify.env?.get) {
    return Netlify.env.get(key);
  }

  return process.env[key];
};

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  }
});

const normalizeEmail = (email) => String(email || '').trim().toLowerCase();
const emailKey = (email) => `email/${crypto.createHash('sha256').update(normalizeEmail(email)).digest('hex')}`;
const userKey = (id) => `users/${id}`;

const getUsersStore = () => getStore({ name: USERS_STORE, consistency: 'strong' });

const getJwtSecret = () => {
  const secret = getEnv('JWT_SECRET');
  if (!secret) {
    throw new Error('JWT_SECRET is not configured');
  }
  return secret;
};

const getRegistrationAccessCode = () => (
  getEnv('REGISTRATION_ACCESS_CODE') || ''
).trim();

const safeUser = (user) => ({
  id: user.id,
  email: user.email,
  name: user.name,
  createdAt: user.createdAt,
  lastLogin: user.lastLogin
});

const defaultAppData = () => ({
  favorites: [],
  annotations: [],
  stats: { ...DEFAULT_STATS }
});

const hashPassword = (password) => {
  const iterations = 120000;
  const salt = crypto.randomBytes(16).toString('base64');
  const hash = crypto.pbkdf2Sync(String(password), salt, iterations, 32, 'sha256').toString('base64');
  return `pbkdf2_sha256$${iterations}$${salt}$${hash}`;
};

const verifyPassword = (password, storedHash) => {
  const [algorithm, iterations, salt, hash] = String(storedHash || '').split('$');
  if (algorithm !== 'pbkdf2_sha256' || !iterations || !salt || !hash) return false;

  const calculated = crypto.pbkdf2Sync(String(password), salt, Number(iterations), 32, 'sha256');
  const expected = Buffer.from(hash, 'base64');
  return expected.length === calculated.length && crypto.timingSafeEqual(expected, calculated);
};

const signToken = (user) => jwt.sign(
  { id: user.id },
  getJwtSecret(),
  { expiresIn: getEnv('JWT_EXPIRE') || '7d' }
);

const getBearerToken = (req) => {
  const header = req.headers.get('authorization') || '';
  if (!header.toLowerCase().startsWith('bearer ')) return null;
  return header.slice(7).trim();
};

const getUserById = async (store, id) => {
  if (!id) return null;
  return store.get(userKey(id), { type: 'json' });
};

const requireUser = async (req, store) => {
  const token = getBearerToken(req);
  if (!token) {
    return { error: json({ success: false, message: 'Not authorized - Please sign in' }, 401) };
  }

  try {
    const decoded = jwt.verify(token, getJwtSecret());
    const user = await getUserById(store, decoded.id);
    if (!user) {
      return { error: json({ success: false, message: 'User not found' }, 401) };
    }
    return { user };
  } catch (error) {
    return { error: json({ success: false, message: 'Invalid or expired token' }, 401) };
  }
};

const readBody = async (req) => {
  try {
    return await req.json();
  } catch {
    return {};
  }
};

const findUserByEmail = async (store, email) => {
  const index = await store.get(emailKey(email), { type: 'json' });
  if (!index?.id) return null;
  return getUserById(store, index.id);
};

const saveUser = async (store, user) => {
  await store.set(userKey(user.id), JSON.stringify(user));
  await store.set(emailKey(user.email), JSON.stringify({ id: user.id }));
};

const handleRegister = async (req, store) => {
  const { email, password, name, registrationCode } = await readBody(req);
  const normalizedEmail = normalizeEmail(email);

  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
    return json({ success: false, message: 'Invalid email' }, 400);
  }
  if (!password || password.length < 6) {
    return json({ success: false, message: 'Password must be at least 6 characters long' }, 400);
  }
  const expectedRegistrationCode = getRegistrationAccessCode();
  if (!expectedRegistrationCode) {
    return json({ success: false, message: 'Registration access code is not configured' }, 500);
  }
  if (registrationCode !== expectedRegistrationCode) {
    return json({ success: false, message: 'Invalid access code' }, 403);
  }
  if (await findUserByEmail(store, normalizedEmail)) {
    return json({ success: false, message: 'This email is already in use' }, 400);
  }

  const now = new Date().toISOString();
  const user = {
    id: crypto.randomUUID(),
    email: normalizedEmail,
    passwordHash: hashPassword(password),
    name: String(name || '').trim() || undefined,
    createdAt: now,
    lastLogin: now,
    appData: defaultAppData()
  };

  await saveUser(store, user);

  return json({
    success: true,
    message: 'Account created successfully',
    token: signToken(user),
    user: safeUser(user)
  }, 201);
};

const handleLogin = async (req, store) => {
  const { email, password } = await readBody(req);
  const user = await findUserByEmail(store, email);
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return json({ success: false, message: 'Incorrect email or password' }, 401);
  }

  user.lastLogin = new Date().toISOString();
  await saveUser(store, user);

  return json({
    success: true,
    message: 'Signed in successfully',
    token: signToken(user),
    user: safeUser(user)
  });
};

const handleMe = async (req, store) => {
  const { user, error } = await requireUser(req, store);
  if (error) return error;
  return json({ success: true, user: safeUser(user) });
};

const handleUpdateProfile = async (req, store) => {
  const { user, error } = await requireUser(req, store);
  if (error) return error;

  const { name, email } = await readBody(req);
  const updateEmail = email !== undefined ? normalizeEmail(email) : undefined;

  if (updateEmail && !/^\S+@\S+\.\S+$/.test(updateEmail)) {
    return json({ success: false, message: 'Invalid email' }, 400);
  }

  if (updateEmail && updateEmail !== user.email) {
    const existing = await findUserByEmail(store, updateEmail);
    if (existing) {
      return json({ success: false, message: 'This email is already in use' }, 400);
    }

    await store.delete(emailKey(user.email));
    user.email = updateEmail;
  }

  if (name !== undefined) {
    user.name = String(name || '').trim() || undefined;
  }

  await saveUser(store, user);
  return json({ success: true, message: 'Profile updated', user: safeUser(user) });
};

const handleUpdatePassword = async (req, store) => {
  const { user, error } = await requireUser(req, store);
  if (error) return error;

  const { currentPassword, newPassword } = await readBody(req);
  if (!verifyPassword(currentPassword, user.passwordHash)) {
    return json({ success: false, message: 'Current password is incorrect' }, 401);
  }
  if (!newPassword || newPassword.length < 6) {
    return json({ success: false, message: 'The new password must be at least 6 characters long' }, 400);
  }

  user.passwordHash = hashPassword(newPassword);
  await saveUser(store, user);

  return json({ success: true, message: 'Password updated', token: signToken(user) });
};

const handleDeleteAccount = async (req, store) => {
  const { user, error } = await requireUser(req, store);
  if (error) return error;

  await store.delete(emailKey(user.email));
  await store.delete(userKey(user.id));

  return json({ success: true, message: 'Account deleted successfully' });
};

const mergeAppData = (currentData, incoming) => {
  const current = currentData || defaultAppData();

  if (incoming.favorites && Array.isArray(incoming.favorites)) {
    const existingIds = new Set((current.favorites || []).map(f => f.id));
    const newFavorites = incoming.favorites.filter(f => !existingIds.has(f.id));
    current.favorites = [...(current.favorites || []), ...newFavorites];
  }

  if (incoming.annotations && Array.isArray(incoming.annotations)) {
    const annotationMap = new Map();
    (current.annotations || []).forEach(a => annotationMap.set(a.topicId, a));
    incoming.annotations.forEach(a => annotationMap.set(a.topicId, a));
    current.annotations = Array.from(annotationMap.values());
  }

  if (incoming.stats) {
    const currentStats = current.stats || {};
    const completedLessons = new Set([
      ...(currentStats.completedLessons || []),
      ...(incoming.stats.completedLessons || [])
    ]);
    const historyMap = new Map();
    (currentStats.dailyHistory || []).forEach(d => historyMap.set(d.date, d));
    (incoming.stats.dailyHistory || []).forEach(d => {
      const existing = historyMap.get(d.date);
      historyMap.set(d.date, existing ? {
        date: d.date,
        timeSpent: Math.max(existing.timeSpent || 0, d.timeSpent || 0),
        lessonsCompleted: [...new Set([
          ...(existing.lessonsCompleted || []),
          ...(d.lessonsCompleted || [])
        ])]
      } : d);
    });

    current.stats = {
      totalTimeSpent: Math.max(currentStats.totalTimeSpent || 0, incoming.stats.totalTimeSpent || 0),
      completedLessons: Array.from(completedLessons),
      dailyGoal: incoming.stats.dailyGoal || currentStats.dailyGoal || 15,
      currentStreak: Math.max(currentStats.currentStreak || 0, incoming.stats.currentStreak || 0),
      longestStreak: Math.max(currentStats.longestStreak || 0, incoming.stats.longestStreak || 0),
      lastActivityDate: incoming.stats.lastActivityDate || currentStats.lastActivityDate,
      dailyHistory: Array.from(historyMap.values()).sort((a, b) => a.date.localeCompare(b.date)),
      quizResults: [...(currentStats.quizResults || []), ...(incoming.stats.quizResults || [])]
    };
  }

  return current;
};

const handleSync = async (req, store, route) => {
  const { user, error } = await requireUser(req, store);
  if (error) return error;

  if (req.method === 'GET' && route === '/sync') {
    return json({ success: true, data: user.appData || defaultAppData(), lastSync: new Date().toISOString() });
  }

  if (req.method === 'POST' && route === '/sync') {
    const incoming = await readBody(req);
    user.appData = {
      favorites: incoming.favorites ?? user.appData?.favorites ?? [],
      annotations: incoming.annotations ?? user.appData?.annotations ?? [],
      stats: incoming.stats ?? user.appData?.stats ?? DEFAULT_STATS
    };
    await saveUser(store, user);
    return json({ success: true, message: 'Data synced successfully', data: user.appData, syncedAt: new Date().toISOString() });
  }

  if (req.method === 'PUT' && route === '/sync/merge') {
    user.appData = mergeAppData(user.appData, await readBody(req));
    await saveUser(store, user);
    return json({ success: true, message: 'Data merged successfully', data: user.appData, syncedAt: new Date().toISOString() });
  }

  if (req.method === 'DELETE' && route === '/sync') {
    user.appData = defaultAppData();
    await saveUser(store, user);
    return json({ success: true, message: 'Data reset', data: user.appData });
  }

  return json({ success: false, message: 'Route not found' }, 404);
};

const getRoute = (req) => {
  const path = new URL(req.url).pathname;
  return path
    .replace(/^\/\.netlify\/functions\/api/, '')
    .replace(/^\/api/, '')
    .replace(/\/$/, '') || '/';
};

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: json({}).headers });
  }

  const route = getRoute(req);
  const store = getUsersStore();

  try {
    if (req.method === 'GET' && route === '/health') {
      return json({ status: 'healthy', timestamp: new Date().toISOString() });
    }
    if (req.method === 'POST' && route === '/auth/register') return handleRegister(req, store);
    if (req.method === 'POST' && route === '/auth/login') return handleLogin(req, store);
    if (req.method === 'GET' && route === '/auth/me') return handleMe(req, store);
    if (req.method === 'PUT' && route === '/auth/updateprofile') return handleUpdateProfile(req, store);
    if (req.method === 'PUT' && route === '/auth/updatepassword') return handleUpdatePassword(req, store);
    if (req.method === 'DELETE' && route === '/auth/deleteaccount') return handleDeleteAccount(req, store);
    if (route.startsWith('/sync')) return handleSync(req, store, route);

    return json({ success: false, message: 'Route not found' }, 404);
  } catch (error) {
    console.error('API function error:', error);
    return json({ success: false, message: error.message || 'Internal server error' }, 500);
  }
};
