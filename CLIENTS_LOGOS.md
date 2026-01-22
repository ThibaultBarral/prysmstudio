# 🎨 Logos Clients - Guide Simple

## 📍 État actuel

La section "Clients conquis" affiche actuellement les **initiales** des clients comme placeholders :
- **PS** pour Purpose Studio
- **AD** pour Annabelle Dutertre  
- **PV** pour Pinterest Vision

## 🎯 Option 1 : Garder les initiales (Recommandé)

Les initiales fonctionnent très bien et donnent un aspect professionnel et minimaliste. **Aucune action requise !**

✅ Avantages :
- Design épuré et moderne
- Pas de gestion de fichiers
- Chargement instantané
- Look cohérent

## 🖼️ Option 2 : Ajouter les vrais logos

Si vous souhaitez utiliser les vrais logos des clients :

### Étape 1 : Récupérer les logos

1. **Méthode simple** : Copier depuis les sites clients
   - Clic droit sur le logo du site → "Enregistrer l'image sous"
   - Format recommandé : SVG ou PNG transparent

2. **Méthode automatique** : Télécharger les favicons
   ```bash
   # Purpose Studio
   curl https://purposestudio.fr/favicon.ico -o public/logos/purpose-studio.png
   
   # Annabelle Dutertre
   curl https://annabelledutertredecoration.com/favicon.ico -o public/logos/annabelle-dutertre.png
   
   # Pinterest Vision
   curl https://pinterest-vision.vercel.app/favicon.ico -o public/logos/pinterest-vision.png
   ```

### Étape 2 : Créer le dossier logos

```bash
mkdir -p public/logos
```

### Étape 3 : Ajouter les logos

Placez vos logos dans `public/logos/` :
- `purpose-studio.png` ou `.svg`
- `annabelle-dutertre.png` ou `.svg`
- `pinterest-vision.png` ou `.svg`

**Format recommandé** :
- Taille : 80x80px minimum
- Format : PNG transparent ou SVG
- Poids : < 50 KB

### Étape 4 : Modifier le composant

Ouvrir `src/app/components/PortfolioSection.tsx` et remplacer :

```typescript
// AVANT (avec initiales)
{
    name: "Purpose Studio",
    // ...
    logo: "PS",
    bgColor: "#1a1a1a",
}

// APRÈS (avec image)
{
    name: "Purpose Studio",
    // ...
    logo: "/logos/purpose-studio.png", // ou .svg
    bgColor: "#1a1a1a",
}
```

Puis dans le rendu, remplacer :

```typescript
// AVANT
<div 
    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg"
    style={{ backgroundColor: client.bgColor }}
>
    {client.logo}
</div>

// APRÈS
<div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white shadow-lg overflow-hidden p-3">
    <img 
        src={client.logo} 
        alt={`${client.name} logo`}
        className="w-full h-full object-contain"
    />
</div>
```

## ➕ Ajouter un nouveau client

1. Ouvrir `src/app/components/PortfolioSection.tsx`
2. Ajouter dans le tableau `clients` :

```typescript
{
    name: "Nom du Client",
    tagline: "Activité du client",
    description: "Courte description du projet réalisé.",
    category: "Type de site",
    url: "https://site-client.com",
    logo: "NC", // Initiales du client
    bgColor: "#couleur", // Couleur de marque du client
    delay: 0.4
}
```

## 🎨 Personnaliser les couleurs

Chaque client a sa propre couleur (`bgColor`). Pour la choisir :
- Utilisez la couleur principale du client
- Ou utilisez un outil comme https://coolors.co/
- Format : `"#HEXCODE"` (ex: `"#FF5D00"`)

## 💡 Conseils

### Pour les initiales
- ✅ Utilisez 2-3 lettres maximum
- ✅ En majuscules pour plus d'impact
- ✅ Choisissez une couleur qui représente le client

### Pour les logos
- ✅ Demandez l'autorisation au client avant
- ✅ Utilisez des fichiers légers (< 50 KB)
- ✅ Préférez le SVG pour la qualité
- ❌ Évitez les logos trop détaillés (illisibles en petit)

## 🚀 Résultat

Une section simple et efficace qui montre que vous avez déjà des clients satisfaits, sans avoir besoin de gérer des dizaines d'images ou de captures d'écran !
