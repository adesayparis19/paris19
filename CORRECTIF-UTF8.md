# 🔤 CORRECTIF UTF-8 - GUIDE D'INSTALLATION

## 🎯 PROBLÈME RÉSOLU

Tous les fichiers HTML ont été ré-encodés en UTF-8 parfait.
Les caractères spéciaux (é, à, è, etc.) s'afficheront correctement !

---

## 📦 CE QUI A ÉTÉ CORRIGÉ

✅ Tous les fichiers HTML (11 fichiers)
✅ Configuration netlify.toml avec headers UTF-8
✅ Tous les fichiers JSON
✅ Configuration Netlify CMS maintenue

---

## 🚀 INSTALLATION EN 3 ÉTAPES

### ÉTAPE 1 : Supprimer l'ancien contenu sur GitHub

1. Va sur ton repository : `https://github.com/TON-USERNAME/paris19`
2. **Sélectionne TOUS les fichiers** (coche la case en haut)
3. Clique sur les **3 points** → **Delete file**
4. Écris "Clean pour correctif UTF-8" dans le message
5. Clique **"Commit changes"**

---

### ÉTAPE 2 : Uploader les nouveaux fichiers

1. Sur la page vide du repository, clique **"Add file"** → **"Upload files"**
2. **Dézippe** le fichier `paris19-utf8-FIXED.zip`
3. **Glisse-dépose TOUT** le contenu dans GitHub
4. Message : "Correctif UTF-8 - caractères spéciaux"
5. Clique **"Commit changes"**

---

### ÉTAPE 3 : Vérifier le déploiement

1. Va sur **Netlify** : https://app.netlify.com/sites/paris19
2. Attends que le déploiement se termine (30-60 secondes)
3. Rafraîchis **paris19.netlify.app** (Ctrl+F5)
4. ✅ **Les accents sont corrects !**

---

## ✨ C'EST RÉGLÉ !

Tu devrais maintenant voir :
- ✅ "Découvrez" au lieu de "DÃ©couvrez"
- ✅ "Café" au lieu de "CafÃ©"
- ✅ Tous les caractères français corrects

---

## 🔄 SUITE DU PROJET

Une fois que l'affichage est correct, tu pourras continuer avec :

### ÉTAPE 4 : Activer Netlify CMS (si pas encore fait)

1. Site settings → Identity → **"Enable Identity"**
2. Services → Git Gateway → **"Enable Git Gateway"**
3. Identity → **"Invite users"** → Entre ton email
4. Vérifie ton email et accepte l'invitation
5. Va sur `paris19.netlify.app/admin` et connecte-toi

---

## 🆘 EN CAS DE PROBLÈME

**Les caractères sont toujours bizarres ?**
- Vide le cache : Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)
- Vérifie que le déploiement Netlify est terminé
- Attends 1-2 minutes supplémentaires

**Autre problème ?**
- Vérifie que tous les fichiers sont bien dans le repository
- Le fichier `netlify.toml` doit être à la racine

---

## 📞 PROCHAINES ÉTAPES

1. ✅ Vérifier que les accents s'affichent bien
2. ✅ Activer Netlify CMS (Identity + Git Gateway)
3. ✅ T'inviter comme admin
4. ✅ Tester l'interface admin
5. ✅ Modifier un coffee shop pour tester

Tout est prêt pour que ton site fonctionne parfaitement ! 🎉
