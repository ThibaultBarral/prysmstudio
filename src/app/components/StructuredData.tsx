import Script from 'next/script'

export default function StructuredData() {
    // Schema.org Person - Pour Thibault Barral (Fondateur)
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://pryzm.agency/#thibault-barral",
        "name": "Thibault Barral",
        "givenName": "Thibault",
        "familyName": "Barral",
        "jobTitle": "Fondateur & Web Developer",
        "description": "Thibault Barral est un développeur web et spécialiste en acquisition & conversion digitale. Entrepreneur à 23 ans, il est le fondateur de Pryzm Agency, une agence web basée à Bordeaux spécialisée dans la création de sites internet performants, le design UX/UI et la stratégie digitale.",
        "url": "https://pryzm.agency",
        "image": "https://pryzm.agency/logo-pryzm.svg",
        "sameAs": [
            "https://www.linkedin.com/in/thibaultbarral/"
        ],
        "worksFor": {
            "@type": "Organization",
            "@id": "https://pryzm.agency/#organization",
            "name": "Pryzm Agency"
        },
        "knowsAbout": [
            "Développement Web",
            "Web Design UX/UI",
            "SEO",
            "Stratégie Digitale",
            "Acquisition & Conversion",
            "Création de sites internet",
            "React",
            "Next.js",
            "TypeScript"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Formation en développement web et digital"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bordeaux",
            "addressRegion": "Nouvelle-Aquitaine",
            "addressCountry": "FR"
        },
        "nationality": {
            "@type": "Country",
            "name": "France"
        }
    }

    // Schema.org LocalBusiness - Essentiel pour Google My Business
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://pryzm.agency/#organization",
        "name": "Pryzm Agency",
        "alternateName": "Pryzm",
        "description": "Agence web à Bordeaux fondée par Thibault Barral, spécialisée dans la création de sites internet performants. Design moderne UX/UI, développement web rapide, SEO et stratégie digitale pour développer votre activité en ligne.",
        "url": "https://pryzm.agency",
        "logo": "https://pryzm.agency/logo-pryzm.svg",
        "image": "https://pryzm.agency/logo-pryzm.svg",
        "telephone": "+33675976932",
        "email": "contact@pryzm.agency",
        "founder": {
            "@id": "https://pryzm.agency/#thibault-barral"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bordeaux",
            "addressRegion": "Nouvelle-Aquitaine",
            "postalCode": "33000",
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.8378",
            "longitude": "-0.5792"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Bordeaux"
            },
            {
                "@type": "Country",
                "name": "France"
            }
        ],
        "priceRange": "€€",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "sameAs": [
            "https://www.linkedin.com/company/madebypryzm",
            "https://www.linkedin.com/in/thibaultbarral/"
        ]
    }

    // Schema.org Organization
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://pryzm.agency/#organization",
        "name": "Pryzm Agency",
        "alternateName": "Pryzm",
        "url": "https://pryzm.agency",
        "logo": {
            "@type": "ImageObject",
            "url": "https://pryzm.agency/logo-pryzm.svg",
            "width": "600",
            "height": "600"
        },
        "description": "Agence web à Bordeaux fondée par Thibault Barral, spécialisée dans la création de sites internet performants, le web design UX/UI et le SEO.",
        "founder": {
            "@id": "https://pryzm.agency/#thibault-barral"
        },
        "employee": {
            "@id": "https://pryzm.agency/#thibault-barral"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bordeaux",
            "addressRegion": "Nouvelle-Aquitaine",
            "postalCode": "33000",
            "addressCountry": "FR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33675976932",
            "contactType": "Customer Service",
            "email": "contact@pryzm.agency",
            "availableLanguage": ["French", "English"],
            "areaServed": "FR"
        },
        "foundingDate": "2024",
        "sameAs": [
            "https://www.linkedin.com/company/madebypryzm",
            "https://www.linkedin.com/in/thibaultbarral/"
        ]
    }

    // Schema.org ProfessionalService
    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Pryzm - Agence Web Bordeaux",
        "image": "https://pryzm.agency/logo-pryzm.svg",
        "url": "https://pryzm.agency",
        "telephone": "+33675976932",
        "email": "contact@pryzm.agency",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bordeaux",
            "addressRegion": "Nouvelle-Aquitaine",
            "postalCode": "33000",
            "addressCountry": "FR"
        },
        "priceRange": "€€",
        "serviceType": [
            "Création de sites internet",
            "Développement web",
            "Webdesign",
            "Identité de marque",
            "Stratégie digitale",
            "SEO",
            "Refonte de site web"
        ],
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "44.8378",
                "longitude": "-0.5792"
            },
            "geoRadius": "50000"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "50",
            "bestRating": "5"
        }
    }

    // Schema.org WebSite
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Pryzm Agency - Thibault Barral",
        "url": "https://pryzm.agency",
        "description": "Agence web à Bordeaux fondée par Thibault Barral - Création de sites internet performants, web design UX/UI et SEO",
        "publisher": {
            "@id": "https://pryzm.agency/#organization"
        },
        "author": {
            "@id": "https://pryzm.agency/#thibault-barral"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://pryzm.agency/?s={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }

    // Schema.org Service pour chaque service
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "Service",
                "name": "Design & Ergonomie",
                "description": "Sites beaux et intuitifs, pensés pour convertir vos visiteurs en clients.",
                "provider": {
                    "@id": "https://pryzm.agency/#organization"
                },
                "serviceType": "Web Design",
                "areaServed": "FR"
            },
            {
                "@type": "Service",
                "name": "Développement Web",
                "description": "Sites ultra-rapides, responsive et optimisés pour tous les écrans.",
                "provider": {
                    "@id": "https://pryzm.agency/#organization"
                },
                "serviceType": "Web Development",
                "areaServed": "FR"
            },
            {
                "@type": "Service",
                "name": "Identité de Marque",
                "description": "Logo, charte graphique et identité visuelle qui vous démarquent.",
                "provider": {
                    "@id": "https://pryzm.agency/#organization"
                },
                "serviceType": "Brand Identity",
                "areaServed": "FR"
            },
            {
                "@type": "Service",
                "name": "Stratégie Digitale",
                "description": "Accompagnement complet pour développer votre présence en ligne.",
                "provider": {
                    "@id": "https://pryzm.agency/#organization"
                },
                "serviceType": "Digital Strategy",
                "areaServed": "FR"
            }
        ]
    }

    return (
        <>
            <Script
                id="person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                strategy="afterInteractive"
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                strategy="afterInteractive"
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                strategy="afterInteractive"
            />
            <Script
                id="professional-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
                strategy="afterInteractive"
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                strategy="afterInteractive"
            />
            <Script
                id="services-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
                strategy="afterInteractive"
            />
        </>
    )
}

