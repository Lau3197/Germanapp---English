# 🇩🇪 GermanApp Backend

API backend pour l'application d'apprentissage de l'allemand.

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- MongoDB (local ou Atlas)

### Configuration

1. **Copiez le fichier de configuration :**
   ```bash
   cp env.sample.txt .env
   ```

2. **Modifiez le fichier `.env` :**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/germanapp
   JWT_SECRET=votre_cle_secrete_unique_et_longue
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:3000
   ```

3. **Installez les dépendances :**
   ```bash
   npm install
   ```

4. **Lancez le serveur :**
   ```bash
   # Mode développement (avec rechargement auto)
   npm run dev
   
   # Mode production
   npm start
   ```

## 📚 API Endpoints

### Authentification (`/api/auth`)

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| POST | `/register` | Créer un compte | ❌ |
| POST | `/login` | Se connecter | ❌ |
| GET | `/me` | Profil utilisateur | ✅ |
| PUT | `/updateprofile` | Modifier le profil | ✅ |
| PUT | `/updatepassword` | Changer mot de passe | ✅ |
| DELETE | `/deleteaccount` | Supprimer le compte | ✅ |

### Synchronisation (`/api/sync`)

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| GET | `/` | Récupérer les données | ✅ |
| POST | `/` | Sauvegarder (remplace) | ✅ |
| PUT | `/merge` | Fusionner les données | ✅ |
| DELETE | `/` | Réinitialiser | ✅ |

## 🔐 Authentification

L'API utilise **JWT (JSON Web Tokens)**.

Incluez le token dans le header :
```
Authorization: Bearer <votre_token>
```

## 📦 Structure des données utilisateur

```json
{
  "email": "user@example.com",
  "name": "Jean Dupont",
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

## 🛠️ Déploiement

### Heroku
```bash
heroku create germanapp-api
heroku config:set MONGODB_URI=<votre_uri>
heroku config:set JWT_SECRET=<votre_secret>
git push heroku main
```

### Railway / Render
1. Connectez votre repo GitHub
2. Configurez les variables d'environnement
3. Déployez automatiquement

## 📝 Notes

- Les mots de passe sont hashés avec bcrypt
- Les tokens expirent après 7 jours (configurable)
- CORS configuré pour le frontend


