# Configuration Google Analytics

## Étapes pour activer le tracking des visites

### 1. Créer un compte Google Analytics

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Cliquez sur "Commencer la mesure" ou "Créer une propriété"
3. Suivez les étapes pour créer votre propriété
4. Choisissez "Web" comme plateforme
5. Récupérez votre **ID de mesure** (format: `G-XXXXXXXXXX`)

### 2. Ajouter votre ID de mesure

Créez un fichier `.env.local` à la racine du projet avec votre ID :

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

⚠️ **Important** : Remplacez `G-XXXXXXXXXX` par votre vrai ID de mesure Google Analytics.

### 3. Redémarrer le serveur de développement

```bash
npm run dev
```

### 4. Vérifier que ça fonctionne

1. Ouvrez votre site dans un navigateur
2. Allez dans Google Analytics > Rapports > Temps réel
3. Vous devriez voir votre visite en temps réel

## 📊 Que peut-on tracker ?

Google Analytics trackera automatiquement :
- ✅ Nombre de visiteurs
- ✅ Pages visitées
- ✅ Durée des sessions
- ✅ Localisation géographique
- ✅ Appareil utilisé (mobile/desktop)
- ✅ Source de trafic (direct, Google, réseaux sociaux, etc.)

## 🔒 Conformité RGPD

Pour être conforme au RGPD, il est recommandé d'ajouter une bannière de consentement aux cookies. Si vous souhaitez l'ajouter, faites-le moi savoir !

