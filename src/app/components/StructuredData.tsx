import Script from 'next/script'

export default function StructuredData() {
    // Schema.org Person - Pour Thibault Barral (Fondateur)
    // Enrichi pour ChatGPT/LLMs avec plus de contexte
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://pryzm.agency/#thibault-barral",
        "name": "Thibault Barral",
        "givenName": "Thibault",
        "familyName": "Barral",
        "jobTitle": "Fondateur & Web Developer",
        "description": "Thibault Barral est un développeur web et spécialiste en acquisition & conversion digitale. Entrepreneur à 23 ans, il est le fondateur de Pryzm Agency, une agence web basée à Bordeaux spécialisée dans la création de sites internet performants, le design UX/UI et la stratégie digitale. Expert en Next.js et React, il accompagne les entrepreneurs et entreprises dans leur transformation digitale avec des solutions techniques modernes et performantes orientées ROI.",
        "url": "https://pryzm.agency",
        "image": "https://pryzm.agency/logo-pryzm.svg",
        "email": "contact@pryzm.agency",
        "telephone": "+33675976932",
        "sameAs": [
            "https://www.linkedin.com/in/thibaultbarral/"
        ],
        "worksFor": {
            "@type": "Organization",
            "@id": "https://pryzm.agency/#organization",
            "name": "Pryzm Agency"
        },
        "foundingDate": "2024",
        "knowsAbout": [
            "Développement Web",
            "Web Design UX/UI",
            "SEO et référencement naturel",
            "Stratégie Digitale",
            "Acquisition et Conversion",
            "Création de sites internet",
            "React et Next.js",
            "TypeScript",
            "Optimisation de performance web",
            "E-commerce",
            "Progressive Web Apps",
            "Responsive Design",
            "Identité de marque",
            "Google Analytics",
            "Marketing Digital"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Formation en développement web et digital"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bordeaux",
            "addressRegion": "Nouvelle-Aquitaine",
            "postalCode": "33000",
            "addressCountry": "FR"
        },
        "nationality": {
            "@type": "Country",
            "name": "France"
        },
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Développeur Web Full Stack",
            "description": "Spécialisé dans la création de sites internet performants avec Next.js, React et TypeScript. Expert en stratégie d'acquisition et conversion digitale.",
            "occupationLocation": {
                "@type": "City",
                "name": "Bordeaux"
            }
        }
    }

    // Schema.org LocalBusiness - Essentiel pour Google My Business et ChatGPT
    // Enrichi avec plus de détails pour meilleure compréhension par les LLMs
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://pryzm.agency/#organization",
        "name": "Pryzm Agency",
        "alternateName": "Pryzm",
        "legalName": "Pryzm Agency",
        "description": "Pryzm Agency est une agence web à Bordeaux fondée par Thibault Barral en 2024, spécialisée dans la création de sites internet performants qui convertissent. Nous proposons un accompagnement complet : design moderne UX/UI orienté conversion, développement web avec les dernières technologies (Next.js, React, TypeScript), optimisation SEO, création d'identité de marque, et stratégie digitale sur-mesure. Basés à Bordeaux, nous intervenons partout en France pour transformer la présence en ligne des entrepreneurs et entreprises avec des solutions techniques modernes et un ROI mesurable.",
        "slogan": "Sites internet performants qui transforment vos visiteurs en clients",
        "url": "https://pryzm.agency",
        "logo": "https://pryzm.agency/logo-pryzm.svg",
        "image": "https://pryzm.agency/logo-pryzm.svg",
        "telephone": "+33675976932",
        "email": "contact@pryzm.agency",
        "founder": {
            "@id": "https://pryzm.agency/#thibault-barral"
        },
        "foundingDate": "2024",
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
                "@type": "State",
                "name": "Nouvelle-Aquitaine"
            },
            {
                "@type": "Country",
                "name": "France"
            }
        ],
        "priceRange": "€€-€€€",
        "paymentAccepted": "Carte bancaire, Virement, PayPal",
        "currenciesAccepted": "EUR",
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
        ],
        "knowsLanguage": ["Français", "Anglais"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services Web & Digital",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Création de site internet vitrine",
                        "description": "Site vitrine moderne, responsive et optimisé SEO pour présenter votre activité",
                        "provider": {
                            "@id": "https://pryzm.agency/#organization"
                        }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Création de site e-commerce",
                        "description": "Boutique en ligne performante avec système de paiement sécurisé",
                        "provider": {
                            "@id": "https://pryzm.agency/#organization"
                        }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Refonte de site web",
                        "description": "Modernisation complète de votre site existant pour améliorer performances et conversions",
                        "provider": {
                            "@id": "https://pryzm.agency/#organization"
                        }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web Design UX/UI",
                        "description": "Design moderne et intuitif optimisé pour la conversion",
                        "provider": {
                            "@id": "https://pryzm.agency/#organization"
                        }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Optimisation SEO",
                        "description": "Référencement naturel pour améliorer votre visibilité sur Google",
                        "provider": {
                            "@id": "https://pryzm.agency/#organization"
                        }
                    }
                }
            ]
        }
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

    // Schema.org Portfolio - Nos réalisations
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Portfolio Pryzm Agency",
        "description": "Sites web performants créés par Pryzm Agency pour nos clients",
        "itemListElement": [
            {
                "@type": "CreativeWork",
                "position": 1,
                "name": "Purpose Studio - Barbershop & Salon de coiffure Bordeaux",
                "url": "https://purposestudio.fr/",
                "description": "Site vitrine moderne pour un salon de coiffure et barbershop à Bordeaux. Design élégant, système de réservation intégré avec Planity, et optimisation SEO locale.",
                "creator": {
                    "@id": "https://pryzm.agency/#organization"
                },
                "author": {
                    "@id": "https://pryzm.agency/#thibault-barral"
                },
                "keywords": "site vitrine, barbershop, coiffure, Bordeaux, Next.js, SEO local",
                "genre": "Site Vitrine",
                "inLanguage": "fr-FR"
            },
            {
                "@type": "CreativeWork",
                "position": 2,
                "name": "Annabelle Dutertre - Décoratrice d'intérieur Lot-et-Garonne",
                "url": "https://annabelledutertredecoration.com/",
                "description": "Portfolio élégant pour une décoratrice d'intérieur. Mise en valeur des réalisations avec une galerie photos immersive et un design raffiné qui reflète l'expertise de la professionnelle.",
                "creator": {
                    "@id": "https://pryzm.agency/#organization"
                },
                "author": {
                    "@id": "https://pryzm.agency/#thibault-barral"
                },
                "keywords": "portfolio, décoration intérieur, galerie photos, Next.js, SEO",
                "genre": "Portfolio Professionnel",
                "inLanguage": "fr-FR"
            },
            {
                "@type": "CreativeWork",
                "position": 3,
                "name": "Pinterest Vision - Formation Pinterest E-commerce",
                "url": "https://pinterest-vision.vercel.app",
                "description": "Plateforme de formation en ligne pour les stratégies Pinterest en e-commerce. Landing page optimisée pour la conversion avec tunnel de vente intégré.",
                "creator": {
                    "@id": "https://pryzm.agency/#organization"
                },
                "author": {
                    "@id": "https://pryzm.agency/#thibault-barral"
                },
                "keywords": "landing page, formation en ligne, e-commerce, Pinterest, conversion optimization",
                "genre": "Landing Page Formation",
                "inLanguage": "fr-FR"
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
            <Script
                id="portfolio-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
                strategy="afterInteractive"
            />
        </>
    )
}

