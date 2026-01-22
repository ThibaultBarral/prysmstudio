'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import Script from 'next/script'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Schema.org BreadcrumbList pour SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://pryzm.agency"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://pryzm.agency${item.href}`
      }))
    ]
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      
      <nav aria-label="Fil d'Ariane" className="py-4 px-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-zinc-400 hover:text-white transition-colors"
              aria-label="Retour à l'accueil"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-zinc-600" />
              {index === items.length - 1 ? (
                <span className="text-white font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
