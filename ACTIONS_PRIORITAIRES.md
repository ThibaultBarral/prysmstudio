# 🎯 Actions Prioritaires - À FAIRE MAINTENANT

## 📝 Étape 1 : Personnaliser les Informations (15 min)

### 1.1 Mettre à jour les coordonnées dans `StructuredData.tsx`

Ouvrez `/src/app/components/StructuredData.tsx` et modifiez :

**Ligne 26-30 - Adresse complète :**
```typescript
"address": {
  "@type": "PostalAddress",
  "streetAddress": "VOTRE_ADRESSE_EXACTE", // 🔴 À AJOUTER
  "addressLocality": "Bordeaux",
  "addressRegion": "Nouvelle-Aquitaine",
  "postalCode": "33000", // 🔴 VÉRIFIER et modifier si nécessaire
  "addressCountry": "FR"
},
```

**Ligne 32-36 - Coordonnées GPS :**
```typescript
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "44.8378", // 🔴 À REMPLACER avec vos coordonnées
  "longitude": "-0.5792"  // 🔴 À REMPLACER avec vos coordonnées
},
```

👉 **Comment trouver vos coordonnées GPS :**
1. Allez sur [Google Maps](https://maps.google.com)
2. Trouvez votre emplacement exact
3. Clic droit sur le point
4. Cliquez sur les coordonnées pour les copier (format : 44.8378, -0.5792)

**Ligne 51-56 - Liens réseaux sociaux :**
```typescript
"sameAs": [
  "https://www.linkedin.com/company/VOTRE_PAGE", // 🔴 À REMPLACER
  "https://www.instagram.com/VOTRE_COMPTE",      // 🔴 À REMPLACER
  // Ajoutez d'autres réseaux si vous en avez
]
```

### 1.2 Vérifier l'URL du domaine dans `layout.tsx`

Ouvrez `/src/app/layout.tsx` ligne 12 :

```typescript
metadataBase: new URL('https://pryzm.agency'), // 🔴 Vérifier que c'est bien votre domaine
```

Si votre domaine est différent, remplacez aussi dans :
- `/src/app/components/StructuredData.tsx` (plusieurs occurrences)
- `/src/app/sitemap.ts`
- `/src/app/robots.ts`

---

## 📝 Étape 2 : Google Search Console (10 min)

### 2.1 Créer un compte Google Search Console

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Cliquez sur "Ajouter une propriété"
3. Choisissez "Préfixe d'URL" : `https://pryzm.agency`
4. Choisissez la méthode "Balise HTML"
5. **Copiez le code** (ressemble à : `google1234567890abcdef`)

### 2.2 Ajouter le code de vérification

Ouvrez `/src/app/layout.tsx` ligne 57 et remplacez :

```typescript
verification: {
  google: "google1234567890abcdef", // 🔴 Collez votre code ici
},
```

### 2.3 Soumettre le sitemap

Une fois vérifié dans Google Search Console :
1. Allez dans "Sitemaps" (menu de gauche)
2. Ajoutez : `https://pryzm.agency/sitemap.xml`
3. Cliquez sur "Envoyer"

---

## 📝 Étape 3 : Google My Business (30 min)

### 3.1 Créer votre fiche GMB

1. Allez sur [Google Business Profile](https://business.google.com/)
2. Cliquez sur "Gérer maintenant"
3. Entrez le nom : **Pryzm**
4. Choisissez la catégorie : **Agence de conception de sites Web**
5. Ajoutez votre adresse **EXACTE** (doit correspondre au code)
6. Ajoutez le téléphone : **+33 6 75 97 69 32**

### 3.2 Vérifier votre fiche

Google vous enverra un code par :
- Courrier (5-7 jours) OU
- Téléphone (si éligible) OU
- Email (si éligible)

**⚠️ Important :** Attendez la vérification avant de tout compléter.

### 3.3 Compléter votre profil (après vérification)

#### Description (utilisez celle-ci) :
```
Pryzm est votre agence web à Bordeaux, spécialisée dans la création de sites internet performants et modernes. Nous transformons vos idées en sites web qui convertissent.

Notre équipe passionnée vous accompagne de A à Z :
• Design & Ergonomie : Sites beaux et intuitifs
• Développement Web : Sites ultra-rapides et responsive
• Identité de Marque : Logo et charte graphique
• Stratégie Digitale : Accompagnement complet

Avec plus de 50 projets réalisés et 5 années d'expertise, nous créons des expériences digitales simples, rapides et efficaces pour développer votre activité.

Livraison rapide en 7 jours, révisions illimitées, support 24h. 100% de clients satisfaits.

📍 Basé à Bordeaux | 🌍 Interventions en France
📞 +33 6 75 97 69 32 | 📧 contact@pryzm.agency
```

#### Horaires :
- Lundi - Vendredi : 09:00 - 18:00
- Samedi - Dimanche : Fermé

#### Photos à ajouter :
- Logo (720x720px minimum)
- Photo de couverture
- Photos de l'équipe
- Photos de vos réalisations (3-5 minimum)

---

## 📝 Étape 4 : Obtenir les Premiers Avis (cette semaine)

### 4.1 Récupérer votre lien d'avis

1. Dans Google My Business
2. Allez dans "Obtenir plus d'avis"
3. Copiez le lien court

### 4.2 Contactez 5 clients satisfaits

**Template email :**

```
Bonjour [Prénom],

J'espère que vous êtes satisfait(e) de votre site web !

Votre avis est très important pour nous et aide d'autres entrepreneurs à nous découvrir.

Pourriez-vous prendre 2 minutes pour laisser un avis sur Google ?

👉 [VOTRE_LIEN_AVIS_GMB]

Un grand merci pour votre confiance !

L'équipe Pryzm
📞 +33 6 75 97 69 32
🌐 pryzm.agency
```

**Template WhatsApp :**

```
Salut [Prénom] ! 👋

Content que ton site te plaise ! 

Un petit service : pourrais-tu laisser un avis Google pour nous aider ? 🙏

👉 [VOTRE_LIEN_AVIS_GMB]

Merci d'avance ! 🚀
```

---

## 📝 Étape 5 : S'inscrire sur les Annuaires (première semaine)

### Priorité 1 - Annuaires Essentiels (aujourd'hui)

**Avec EXACTEMENT les mêmes infos partout (NAP) :**
- Nom : Pryzm
- Adresse : [Votre adresse exacte]
- Téléphone : +33 6 75 97 69 32
- Email : contact@pryzm.agency
- Site : https://pryzm.agency

1. **Google My Business** ✅ (fait à l'étape 3)
2. **LinkedIn Entreprise**
   - Créez une page entreprise
   - Complétez toutes les infos
   - Ajoutez employés

3. **Pages Jaunes**
   - [Créer une fiche](https://www.pagesjaunes.fr/)

4. **Yelp**
   - [Créer une fiche](https://biz.yelp.fr/)

### Priorité 2 - Annuaires Pro (cette semaine)

5. **Malt**
   - [Créer un profil](https://www.malt.fr/)
   - Ajoutez votre portfolio

6. **Sortlist**
   - [Créer un profil](https://www.sortlist.fr/)

7. **Clutch**
   - [Créer un profil](https://clutch.co/)

---

## 📝 Étape 6 : Tester que Tout Fonctionne (5 min)

### Test 1 : Données Structurées

1. Allez sur [Rich Results Test](https://search.google.com/test/rich-results)
2. Entrez : `https://pryzm.agency`
3. Vérifiez : ✅ LocalBusiness, Organization, WebSite détectés

### Test 2 : Sitemap

Visitez : `https://pryzm.agency/sitemap.xml`
- Doit afficher la liste des pages

### Test 3 : Robots

Visitez : `https://pryzm.agency/robots.txt`
- Doit afficher les règles robots

### Test 4 : Open Graph

1. Allez sur [Meta Tags Checker](https://metatags.io/)
2. Entrez : `https://pryzm.agency`
3. Vérifiez la prévisualisation

---

## 📝 Étape 7 : Actions Hebdomadaires Récurrentes

### Chaque Lundi (10 min)
- [ ] Publier 1 post sur Google My Business
- [ ] Vérifier et répondre aux avis
- [ ] Vérifier stats GMB

### Chaque Mercredi (15 min)
- [ ] Publier 1 article de blog ou actualité
- [ ] Partager sur réseaux sociaux

### Chaque Vendredi (10 min)
- [ ] Demander des avis aux clients de la semaine
- [ ] Vérifier Google Search Console

---

## 📊 Checklist Complète

### Configuration Technique ⚙️
- [ ] Coordonnées GPS mises à jour
- [ ] Adresse complète ajoutée
- [ ] Liens sociaux ajoutés
- [ ] URL domaine vérifiée
- [ ] Code Google Search Console ajouté

### Google ��
- [ ] Search Console configuré
- [ ] Sitemap soumis
- [ ] Google My Business créé
- [ ] Fiche GMB vérifiée
- [ ] Profil GMB complété

### Visibilité 📍
- [ ] 5 premiers avis obtenus
- [ ] 5 photos ajoutées sur GMB
- [ ] 7 annuaires complétés
- [ ] LinkedIn entreprise créé

### Tests ✅
- [ ] Rich Results Test : OK
- [ ] Sitemap accessible
- [ ] Robots.txt accessible
- [ ] Meta tags vérifiés

---

## 🚀 Résultats Attendus

### Semaine 1
- ✅ Fiche GMB créée et en cours de vérification
- ✅ 5 premiers avis Google
- ✅ 5 annuaires complétés

### Semaine 2-4
- ✅ Fiche GMB vérifiée et complète
- ✅ 10 avis Google
- ✅ Apparition dans résultats locaux Google

### Mois 2
- ✅ Top 3 sur "agence web Bordeaux"
- ✅ 15+ avis Google (note 4.8+)
- ✅ 100+ vues GMB par jour

---

## 📞 Besoin d'Aide ?

### Documentation
- `SEO_GMB_GUIDE.md` - Guide complet détaillé
- `SEO_MODIFICATIONS_SUMMARY.md` - Liste des modifs techniques

### Tests en Ligne
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Meta Tags Checker](https://metatags.io/)

### Support Google
- [Aide Google My Business](https://support.google.com/business/)
- [Aide Search Console](https://support.google.com/webmasters/)

---

## ⏰ Planning Recommandé

### Aujourd'hui (1h30)
1. ✅ Personnaliser infos code (15 min)
2. ✅ Configurer Search Console (10 min)
3. ✅ Créer fiche GMB (30 min)
4. ✅ S'inscrire sur 3 annuaires (30 min)
5. ✅ Tester que tout fonctionne (5 min)

### Cette Semaine
- Lun : Demander 5 avis clients
- Mar : S'inscrire sur 4 autres annuaires
- Mer : Publier 1er post GMB
- Jeu : Ajouter photos GMB
- Ven : Publier 2e post GMB

### Ce Mois-ci
- Obtenir 15 avis Google
- S'inscrire sur 20 annuaires
- Publier 8-12 posts GMB
- Créer 2-4 articles de blog

---

**🎯 Objectif : Top 3 sur "agence web Bordeaux" en 2 mois !**

Bonne chance ! 🚀

