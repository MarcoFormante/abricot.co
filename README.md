# Guide d’installation du projet Abricot

Ce document explique étape par étape comment installer et exécuter le projet **ABRICOT** en local.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :
* **Node.js** (Version LTS recommandée) : Le moteur qui fait tourner l'application.
* **Serveur MySQL** : Vous pouvez utiliser **XAMPP**, **WAMP**, **MAMP** ou une instance **Docker**. L'essentiel est d'avoir accès à une base de données MySQL et à un outil de gestion comme **phpMyAdmin**.
* **Un navigateur web** moderne (Chrome, Firefox, Edge).

## Étapes d’installation

### 1. Récupérer le projet depuis GitHub

Clonez le dépôt ou téléchargez et extrayez le pack ZIP : 
https://github.com/MarcoFormante/abricot.co.git


### 2. Installation des dépendances
Ouvrez un terminal dans à la racine du projet et exécutez :
```bash
npm install
```

### 3. Configuration des variables d'environnement
Créez un fichier nommé .env à la racine du projet et insérez les variables suivantes :

```
(Adaptez la ligne DATABASE_URL selon votre configuration locale (Port, User, Password))

DATABASE_URL="mysql://root:@127.0.0.1:3306/abricot?serverVersion=10.11.2-MariaDB&charset=utf8mb4"
JWT_SECRET="votre_secret_ici"
NEXT_PUBLIC_BASE_URL="http://localhost:8000/"
NODE_ENV="development"
GEMINI_API_KEY="VOTRE_CLÉ_API_GOOGLE_AI_STUDIO"

```

### 4. Configuration de la Base de Données
- Accédez à votre gestionnaire (ex: phpMyAdmin via http://localhost/phpmyadmin).
- Créez une nouvelle base de données nommée "abricot".
- Importez le fichier abricot.sql qui se trouve à la root du projet.

### Utilisateurs de Test (10)
Mot de passe commun : password123

Alice Martin (alice@example.com) - Propriétaire principal

Bob Dupont (bob@example.com)

Caroline Leroy (caroline@example.com)

(Et 7 autres utilisateurs...)

### Lancement de l'Application en local
Pour démarrer l'écosystème complet (Frontend + Backend), exécutez :
```
npm run dev
```

L'application utilise deux serveurs distincts :
- Serveur Backend (Node.js) : http://localhost:8000
- Interface Frontend (Next.js) : http://localhost:3000/

Visualiser le projet depuis http://localhost:3000/
