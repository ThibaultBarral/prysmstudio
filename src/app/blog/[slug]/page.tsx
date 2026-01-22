import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/app/components/Breadcrumb'
import Script from 'next/script'
import { generateArticleSchema, generateArticleBreadcrumb } from '@/lib/blogHelpers'

// À terme, cela viendra d'un CMS ou de fichiers MDX
const blogPosts = {
  "comment-choisir-agence-web-bordeaux-2026": {
    title: "Comment choisir son agence web à Bordeaux en 2026 ?",
    description: "Guide complet pour sélectionner la meilleure agence web à Bordeaux. Critères essentiels, questions à poser, et pièges à éviter pour réussir votre projet digital.",
    date: "2026-01-22",
    category: "Guide",
    readTime: "8 min",
    keywords: ["agence web Bordeaux", "choisir agence web", "création site internet Bordeaux", "guide agence web"],
    author: "Thibault Barral",
    comingSoon: true
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: "Article non trouvé",
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://pryzm.agency/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://pryzm.agency/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post || post.comingSoon) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    slug,
    date: post.date,
    category: post.category,
    readTime: post.readTime,
    author: post.author,
    keywords: post.keywords
  })

  const breadcrumbSchema = generateArticleBreadcrumb(post.title, slug)

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Breadcrumb 
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${slug}` }
            ]} 
          />

          <article className="mt-12">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <time className="text-zinc-400 text-sm" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-zinc-400 text-sm">{post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed">
                {post.description}
              </p>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-zinc-800">
                <div className="flex-1">
                  <p className="text-sm text-zinc-500">Écrit par</p>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-zinc-400">Fondateur de Pryzm Agency</p>
                </div>
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              {/* Le contenu de l'article sera ici (MDX ou CMS) */}
              <p className="text-zinc-400">
                Contenu de l&apos;article à venir...
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
