# 🇩🇪 GermanApp Backend

Backend API for the German learning application.

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)

### Configuration

1. **Copy the configuration file:**
   ```bash
   cp env.sample.txt .env
   ```

2. **Edit the `.env` file:**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/germanapp
   JWT_SECRET=your_unique_and_long_secret_key
   JWT_EXPIRE=7d
   REGISTRATION_ACCESS_CODE=choose_a_private_access_code
   FRONTEND_URL=http://localhost:3000
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

## 📚 API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| POST | `/register` | Create an account with the access code | ❌ |
| POST | `/login` | Sign in | ❌ |
| GET | `/me` | User profile | ✅ |
| PUT | `/updateprofile` | Update the profile | ✅ |
| PUT | `/updatepassword` | Change password | ✅ |
| DELETE | `/deleteaccount` | Delete the account | ✅ |

### Synchronization (`/api/sync`)

| Method | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| GET | `/` | Retrieve the data | ✅ |
| POST | `/` | Save (replace) | ✅ |
| PUT | `/merge` | Merge the data | ✅ |
| DELETE | `/` | Reset | ✅ |

## 🔐 Authentication

The API uses **JWT (JSON Web Tokens)**.

Include the token in the header:
```
Authorization: Bearer <your_token>
```

## 📦 User data structure

```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "appData": {
    "favorites": [],
    "annotations": [],
    "stats": {
      "totalTimeSpent": 0,
      "completedLessons": [],
      "dailyGoal": 15,
      "currentStreak": 0,
      "longestStreak": 0,
      "lastActivityDate": "",
      "dailyHistory": [],
      "quizResults": []
    }
  }
}
```

## 🛠️ Deployment

### Heroku
```bash
heroku create germanapp-api
heroku config:set MONGODB_URI=<your_uri>
heroku config:set JWT_SECRET=<your_secret>
git push heroku main
```

### Railway / Render
1. Connect your GitHub repo
2. Configure the environment variables
3. Deploy automatically

## 📝 Notes

- Passwords are hashed with bcrypt
- Tokens expire after 7 days (configurable)
- CORS configured for the frontend
