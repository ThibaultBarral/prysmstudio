import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Blog Web & Digital - Conseils, Guides & Actualités",
  description: "Découvrez nos articles sur la création de sites internet, le web design, le SEO et la stratégie digitale. Conseils d'experts par Thibault Barral, fondateur de Pryzm Agency à Bordeaux.",
  keywords: [
    "blog web",
    "conseils création site internet",
    "guide web design",
    "actualités SEO",
    "stratégie digitale",
    "agence web Bordeaux",
    "Thibault Barral blog"
  ],
  openGraph: {
    title: "Blog Pryzm - Actualités Web & Digital",
    description: "Conseils, guides et actualités sur la création de sites internet et la stratégie digitale par Pryzm Agency.",
    url: "https://pryzm.agency/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://pryzm.agency/blog",
  },
}

// Articles de blog (à terme, cela viendra d'un CMS ou de fichiers MDX)
const blogPosts = [
  {
    slug: "comment-choisir-agence-web-bordeaux-2026",
    title: "Comment choisir son agence web à Bordeaux en 2026 ?",
    excerpt: "Guide complet pour sélectionner la meilleure agence web à Bordeaux. Critères essentiels, questions à poser, et pièges à éviter pour réussir votre projet digital.",
    date: "2026-01-22",
    category: "Guide",
    readTime: "8 min",
    comingSoon: true
  },
  {
    slug: "prix-site-internet-2026-guide-complet",
    title: "Prix d'un site internet en 2026 : Guide complet des tarifs",
    excerpt: "Combien coûte réellement un site web professionnel ? Décryptage des prix selon les types de sites, les fonctionnalités, et les prestataires.",
    date: "2026-01-25",
    category: "Tarifs",
    readTime: "10 min",
    comingSoon: true
  },
  {
    slug: "refonte-site-web-quand-comment-pourquoi",
    title: "Refonte de site web : Quand, comment et pourquoi ?",
    excerpt: "Votre site est-il obsolète ? Découvrez les signes qui indiquent qu'il est temps de refondre votre site internet et comment réussir votre refonte.",
    date: "2026-01-28",
    category: "Stratégie",
    readTime: "7 min",
    comingSoon: true
  },
  {
    slug: "seo-local-bordeaux-guide-2026",
    title: "SEO Local à Bordeaux : Guide complet pour être visible",
    excerpt: "Comment apparaître en premier sur Google à Bordeaux ? Stratégies SEO local, Google My Business, et optimisations pour dominer votre marché local.",
    date: "2026-02-01",
    category: "SEO",
    readTime: "12 min",
    comingSoon: true
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />
        
        <div className="mt-12 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blog Web & Digital
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl">
            Conseils, guides et actualités sur la création de sites internet, le web design, 
            le SEO et la stratégie digitale par <span className="text-white font-semibold">Thibault Barral</span>, 
            fondateur de Pryzm Agency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  {post.comingSoon && (
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full">
                      Bientôt
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-zinc-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>{post.readTime} de lecture</span>
                </div>

                {!post.comingSoon && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center mt-6 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                  >
                    Lire l&apos;article
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Nouveau contenu chaque semaine
          </h2>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            Abonnez-vous pour recevoir nos derniers articles sur la création web, 
            le design et la stratégie digitale directement dans votre boîte mail.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
          >
            Rester informé
          </a>
        </div>
      </div>
    </main>
  )
}
