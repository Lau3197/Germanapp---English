// Configuration de l'API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Types
interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

interface SyncData {
  favorites: any[];
  annotations: any[];
  stats: any;
}

interface SyncResponse {
  success: boolean;
  message?: string;
  data?: SyncData;
  syncedAt?: string;
}

// Gestion du token
const getToken = (): string | null => {
  return localStorage.getItem('authToken');
};

const setToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

const removeToken = (): void => {
  localStorage.removeItem('authToken');
};

// Headers avec authentification
const getAuthHeaders = (): HeadersInit => {
  const token = getToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

// Fonction générique pour les requêtes API
const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const url = `${API_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Une erreur est survenue');
  }

  return data;
};

// ==================== AUTH API ====================

export const authAPI = {
  // Inscription
  register: async (email: string, password: string, name?: string): Promise<AuthResponse> => {
    const data = await apiRequest<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
    
    if (data.success && data.token) {
      setToken(data.token);
    }
    
    return data;
  },

  // Connexion
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const data = await apiRequest<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (data.success && data.token) {
      setToken(data.token);
    }
    
    return data;
  },

  // Déconnexion
  logout: (): void => {
    removeToken();
  },

  // Profil utilisateur
  getProfile: async (): Promise<AuthResponse> => {
    return apiRequest<AuthResponse>('/auth/me');
  },

  // Mettre à jour le profil
  updateProfile: async (data: { name?: string; email?: string }): Promise<AuthResponse> => {
    return apiRequest<AuthResponse>('/auth/updateprofile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Changer le mot de passe
  updatePassword: async (currentPassword: string, newPassword: string): Promise<AuthResponse> => {
    const data = await apiRequest<AuthResponse>('/auth/updatepassword', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    
    if (data.success && data.token) {
      setToken(data.token);
    }
    
    return data;
  },

  // Supprimer le compte
  deleteAccount: async (): Promise<AuthResponse> => {
    const data = await apiRequest<AuthResponse>('/auth/deleteaccount', {
      method: 'DELETE',
    });
    
    if (data.success) {
      removeToken();
    }
    
    return data;
  },

  // Vérifier si connecté
  isAuthenticated: (): boolean => {
    return !!getToken();
  },

  // Obtenir le token
  getToken,
};

// ==================== SYNC API ====================

export const syncAPI = {
  // Récupérer les données
  getData: async (): Promise<SyncResponse> => {
    return apiRequest<SyncResponse>('/sync');
  },

  // Sauvegarder les données (remplace tout)
  saveData: async (data: Partial<SyncData>): Promise<SyncResponse> => {
    return apiRequest<SyncResponse>('/sync', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Fusionner les données
  mergeData: async (data: Partial<SyncData>): Promise<SyncResponse> => {
    return apiRequest<SyncResponse>('/sync/merge', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Réinitialiser les données
  resetData: async (): Promise<SyncResponse> => {
    return apiRequest<SyncResponse>('/sync', {
      method: 'DELETE',
    });
  },

  // Synchroniser depuis le localStorage vers le serveur
  syncToServer: async (): Promise<SyncResponse> => {
    const favorites = JSON.parse(localStorage.getItem('grammarFavorites') || '[]');
    const annotations = JSON.parse(localStorage.getItem('grammarAnnotations') || '[]');
    const stats = JSON.parse(localStorage.getItem('grammarStats') || '{}');

    return syncAPI.mergeData({ favorites, annotations, stats });
  },

  // Synchroniser depuis le serveur vers le localStorage
  syncFromServer: async (): Promise<void> => {
    const response = await syncAPI.getData();
    
    if (response.success && response.data) {
      localStorage.setItem('grammarFavorites', JSON.stringify(response.data.favorites || []));
      localStorage.setItem('grammarAnnotations', JSON.stringify(response.data.annotations || []));
      localStorage.setItem('grammarStats', JSON.stringify(response.data.stats || {}));
    }
  },

  // Synchronisation bidirectionnelle
  fullSync: async (): Promise<SyncResponse> => {
    // D'abord envoyer les données locales
    const response = await syncAPI.syncToServer();
    
    // Puis récupérer les données fusionnées
    if (response.success && response.data) {
      localStorage.setItem('grammarFavorites', JSON.stringify(response.data.favorites || []));
      localStorage.setItem('grammarAnnotations', JSON.stringify(response.data.annotations || []));
      localStorage.setItem('grammarStats', JSON.stringify(response.data.stats || {}));
    }
    
    return response;
  },
};

export default { authAPI, syncAPI };

