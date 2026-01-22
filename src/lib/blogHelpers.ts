// Helper pour générer les Schema.org pour les articles de blog
export function generateArticleSchema(article: {
  title: string
  description: string
  slug: string
  date: string
  category: string
  readTime: string
  author?: string
  keywords?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "url": `https://pryzm.agency/blog/${article.slug}`,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "@id": "https://pryzm.agency/#thibault-barral",
      "name": article.author || "Thibault Barral"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://pryzm.agency/#organization",
      "name": "Pryzm Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pryzm.agency/logo-pryzm.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pryzm.agency/blog/${article.slug}`
    },
    "keywords": article.keywords?.join(", ") || article.category,
    "articleSection": article.category,
    "inLanguage": "fr-FR",
    "timeRequired": article.readTime,
    "isAccessibleForFree": true
  }
}

// Helper pour générer BreadcrumbList pour les articles
export function generateArticleBreadcrumb(articleTitle: string, articleSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://pryzm.agency"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://pryzm.agency/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": articleTitle,
        "item": `https://pryzm.agency/blog/${articleSlug}`
      }
    ]
  }
}

// Types d'articles pour ChatGPT/LLMs
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content?: string
  date: string
  category: string
  readTime: string
  author: string
  keywords: string[]
  image?: string
  comingSoon?: boolean
}

// Catégories de blog optimisées pour SEO
export const BLOG_CATEGORIES = {
  GUIDE: "Guide",
  TARIFS: "Tarifs",
  STRATEGIE: "Stratégie",
  SEO: "SEO",
  DESIGN: "Design",
  DEVELOPPEMENT: "Développement",
  ACTUALITES: "Actualités"
} as const
