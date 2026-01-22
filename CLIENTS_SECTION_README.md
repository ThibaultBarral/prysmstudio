# 🎯 Section "Clients Conquis" - README

## ✨ Vue d'ensemble

Une section simple et élégante qui affiche vos clients avec leurs **initiales** dans des carrés colorés.

**Emplacement** : Entre "Process" et "Témoignages"

**Design** : Minimaliste, 3 colonnes, responsive, animations au hover

## 🎨 Ce qui est affiché

### 3 clients actuels :

1. **Purpose Studio** (PS)
   - Barbershop & Salon de coiffure Bordeaux
   - Carré noir avec initiales blanches
   - https://purposestudio.fr/

2. **Annabelle Dutertre** (AD)
   - Décoratrice d'intérieur
   - Carré beige doré avec initiales blanches
   - https://annabelledutertredecoration.com/

3. **Pinterest Vision** (PV)
   - Formation E-commerce
   - Carré rouge Pinterest avec initiales blanches
   - https://pinterest-vision.vercel.app

### Stats affichées :
- **50+** Projets livrés
- **100%** Clients satisfaits
- **5+** Années d'expertise

## 📁 Fichiers

- **Composant** : `src/app/components/PortfolioSection.tsx`
- **Documentation** :
  - `CLIENTS_LOGOS.md` - Guide pour personnaliser les logos
  - `PORTFOLIO_QUICKSTART.md` - Démarrage rapide
  - `PORTFOLIO_IMPLEMENTATION.md` - Détails de l'implémentation

## 🚀 Utilisation

### Voir la section
```bash
npm run dev
```
Puis aller sur http://localhost:3000#portfolio

### Ajouter un client

Ouvrir `src/app/components/PortfolioSection.tsx` et ajouter :

```typescript
{
    name: "Nom du Client",
    tagline: "Type d'activité",
    description: "Description du projet.",
    category: "Type de site",
    url: "https://site-client.com",
    logo: "NC", // Initiales
    bgColor: "#FF5D00", // Couleur
    delay: 0.4
}
```

### Modifier un client existant

1. Ouvrir `src/app/components/PortfolioSection.tsx`
2. Trouver le client dans `clients`
3. Modifier les propriétés
4. Sauvegarder

### Changer les couleurs

Modifier `bgColor` avec un code couleur hexadécimal.

Générateur : https://coolors.co/

## 💡 Pourquoi des initiales ?

✅ **Simple** - Pas de gestion d'images
✅ **Rapide** - Chargement instantané
✅ **Cohérent** - Toujours parfait
✅ **Moderne** - Look minimaliste pro
✅ **Flexible** - Facile à personnaliser

## 🎨 Passer aux vrais logos (optionnel)

Si vous voulez utiliser les vrais logos : `CLIENTS_LOGOS.md`

## 🔧 Navigation

La section est accessible via :
- **Navbar** : Lien "Portfolio"
- **Footer** : Lien "Portfolio"
- **URL directe** : `#portfolio`
- **Sitemap** : Inclus automatiquement

## 📊 SEO

✅ Données structurées Schema.org (CreativeWork)
✅ Liens externes optimisés (noopener noreferrer)
✅ Texte riche en mots-clés
✅ Alt tags et descriptions

## 🎉 Résultat

Une preuve sociale simple et efficace qui montre que vous avez déjà des clients conquis, sans complexité technique !
