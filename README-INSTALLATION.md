# 🚀 GUIDE D'INSTALLATION - PARIS19 AVEC NETLIFY CMS

## 📋 CE QUI A ÉTÉ PRÉPARÉ

✅ Structure complète du site avec Netlify CMS
✅ Configuration de l'interface d'administration
✅ Fichiers de données JSON pour les coffee shops
✅ Scripts pour chargement dynamique du contenu
✅ Toutes les pages HTML du site

---

## 🔧 ÉTAPES D'INSTALLATION

### ÉTAPE 1 : PRÉPARER LE DÉPÔT GITHUB

1. **Aller sur GitHub** : https://github.com
2. **Créer un nouveau repository** :
   - Cliquer sur le bouton vert "New" (ou le + en haut à droite)
   - Nom du repository : `paris19`
   - Description : `Site Paris19 - Guide du 19e arrondissement`
   - **Public** (ou Private si tu préfères)
   - ❌ **NE PAS** cocher "Add a README file"
   - Cliquer sur "Create repository"

3. **Uploader les fichiers** :
   - Sur la page du repository vide, cliquer sur "uploading an existing file"
   - Glisser-déposer TOUT le contenu du dossier `paris19-netlify-cms`
   - Ou utiliser "choose your files" pour sélectionner tous les fichiers
   - En bas, écrire "Initial commit" dans le champ de commit
   - Cliquer sur "Commit changes"

---

### ÉTAPE 2 : CONNECTER NETLIFY À GITHUB

1. **Aller sur Netlify** : https://app.netlify.com
2. **Se connecter** avec ton compte
3. **Ajouter un nouveau site** :
   - Cliquer sur "Add new site" > "Import an existing project"
   - Choisir "Deploy with GitHub"
   - **Autoriser Netlify** à accéder à GitHub (fenêtre pop-up)
   - Sélectionner le repository `paris19`
   
4. **Configuration du déploiement** :
   - Branch to deploy : `main`
   - Build command : (laisser vide)
   - Publish directory : `/` (racine)
   - Cliquer sur "Deploy site"

---

### ÉTAPE 3 : ACTIVER NETLIFY IDENTITY & GIT GATEWAY

1. **Dans ton site Netlify** (paris19.netlify.app) :
   - Aller dans **Site settings** > **Identity**
   - Cliquer sur **"Enable Identity"**

2. **Configurer Git Gateway** :
   - Toujours dans **Identity** > **Services**
   - Scroller jusqu'à **"Git Gateway"**
   - Cliquer sur **"Enable Git Gateway"**
   - Confirmer

3. **Configurer Registration** :
   - Dans **Identity** > **Registration**
   - Choisir **"Invite only"** (recommandé)
   - Cela empêche n'importe qui de créer un compte admin

---

### ÉTAPE 4 : T'INVITER COMME ADMINISTRATEUR

1. **Toujours dans Identity** :
   - Cliquer sur **"Invite users"**
   - Entrer TON email (celui que tu veux utiliser pour te connecter)
   - Cliquer sur **"Send"**

2. **Vérifier ton email** :
   - Tu vas recevoir un email de Netlify
   - Cliquer sur **"Accept the invite"**
   - Créer ton mot de passe admin
   - C'est fait ! ✅

---

### ÉTAPE 5 : ACCÉDER À L'INTERFACE ADMIN

1. **Aller sur** : `https://paris19.netlify.app/admin`
2. **Se connecter** avec l'email/mot de passe que tu viens de créer
3. **Bienvenue dans ton CMS !** 🎉

---

## 🎯 UTILISER L'INTERFACE ADMIN

### MODIFIER UN COFFEE SHOP

1. Dans l'admin, cliquer sur **"Coffee Shops"** dans le menu
2. Cliquer sur le coffee shop à modifier (ex: "Oh My Cappuccino")
3. Modifier les champs (nom, description, horaires, etc.)
4. Cliquer sur **"Publish"** en haut à droite
5. **Les modifications sont en ligne !** 🎉

### AJOUTER UN NOUVEAU COFFEE SHOP

1. Dans **"Coffee Shops"**, cliquer sur **"New Coffee Shop"**
2. Remplir tous les champs :
   - Nom *
   - Quartier *
   - Description *
   - Adresse *
   - Métro
   - Horaires
   - Tags (appuyer sur Entrée après chaque tag)
   - Priorité (1, 2 ou 3)
   - Ambiance
   - Section (19e ou proximite)
   - **ID** : Créer un identifiant unique (ex: "le-cafe-noir")
3. Cliquer sur **"Publish"**
4. **C'est ajouté !** ✨

---

## 📝 STRUCTURE DES FICHIERS

```
paris19/
├── admin/                      # Interface d'administration
│   ├── index.html             # Page admin Netlify CMS
│   └── config.yml             # Configuration CMS
├── assets/
│   └── js/
│       └── coffee-shops-loader.js  # Script chargement dynamique
├── data/
│   ├── coffee-shops/          # Fichiers individuels coffee shops
│   │   ├── oh-my-cappuccino.json
│   │   ├── koko-coffee-shop.json
│   │   └── ...
│   └── coffee-shops.json      # Liste complète (pour référence)
├── index.html                 # Page d'accueil
├── coffee-shops.html          # Page coffee shops
├── patrimoine-industriel.html
├── street-art.html
└── ... (autres pages)
```

---

## ⚠️ IMPORTANT À SAVOIR

### PRIORITÉS DES COFFEE SHOPS
- **3** = ⭐⭐⭐ Incontournable
- **2** = ⭐⭐ Recommandé
- **1** = ⭐ Pour les passionnés

### SECTIONS
- **19e** = Strictement dans le 19e arrondissement
- **proximite** = À la frontière (20e, mais proche)

### FORMAT DE L'ID
- Toujours en minuscules
- Tirets au lieu d'espaces
- Pas d'accents
- Exemple : "Oh My Cappuccino" → `oh-my-cappuccino`

---

## 🆘 EN CAS DE PROBLÈME

### Je ne reçois pas l'email d'invitation
- Vérifier les spams
- Réessayer l'invitation depuis Netlify > Identity > Invite users

### Je ne peux pas me connecter à /admin
- Vérifier que Git Gateway est activé
- Vérifier que Identity est activé
- Vider le cache du navigateur (Ctrl+Shift+R)

### Les modifications ne s'affichent pas
- Attendre 30 secondes (temps de déploiement)
- Rafraîchir la page (Ctrl+F5)
- Vérifier que tu as bien cliqué sur "Publish"

---

## 📞 PROCHAINES ÉTAPES

Une fois que tout fonctionne :

1. ✅ Vérifier que tu peux modifier un coffee shop
2. ✅ Vérifier que tu peux en ajouter un nouveau
3. ✅ Les modifications apparaissent sur le site
4. ✅ Ajouter la section "Restaurants" (même principe)
5. ✅ Personnaliser le design si besoin

---

## 🎉 C'EST PRÊT !

Ton site est maintenant :
- ✅ Sur Netlify avec ton domaine
- ✅ Connecté à GitHub pour versionning
- ✅ Avec une interface admin facile à utiliser
- ✅ Prêt pour ajouter du contenu sans coder !

Profite bien de ton CMS ! 🚀
