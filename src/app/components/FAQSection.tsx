'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Script from 'next/script'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Combien coûte un site internet avec Pryzm Agency à Bordeaux ?",
    answer: "Mes tarifs sont transparents et compétitifs : un site vitrine démarre à partir de 1 490€, un site complet avec identité de marque à partir de 2 990€. Pour les projets sur-mesure (e-commerce, fonctionnalités avancées), je propose un devis personnalisé gratuit après étude de vos besoins. Mon objectif : vous offrir le meilleur rapport qualité-prix avec un site performant livré en 7 jours qui génère des résultats concrets et un retour sur investissement rapide."
  },
  {
    question: "Quel est le délai pour créer un site web avec Pryzm ?",
    answer: "C'est l'un de nos points forts : je livre votre site en 7 jours pour un site vitrine classique ! Pour les projets plus complexes (e-commerce, fonctionnalités avancées), comptez quelques jours de plus, mais jamais des semaines interminables. Je suis spécialisé en développement rapide avec Next.js, ce qui me permet d'être ultra-efficace sans compromis sur la qualité. Vous avez une deadline urgente ? Parlons-en, je relève le défi !"
  },
  {
    question: "Pourquoi choisir Pryzm plutôt qu'une autre agence web à Bordeaux ?",
    answer: "Pryzm se distingue par sa rapidité d'exécution exceptionnelle : votre site en 7 jours au lieu de plusieurs semaines ! Fondée par Thibault Barral, spécialiste en acquisition et conversion digitale, je combine expertise technique de pointe (Next.js, React) et design moderne orienté conversion. Je garantis des sites ultra-rapides (95+ sur PageSpeed), optimisés pour le SEO dès le départ, et pensés pour transformer vos visiteurs en clients. Basé à Bordeaux, je suis disponible pour des rencontres en personne et un accompagnement personnalisé sans intermédiaire."
  },
  {
    question: "Quels services propose Pryzm Agency ?",
    answer: "Pryzm propose un accompagnement complet : création de sites internet sur-mesure (vitrines, e-commerce, portfolios), web design UX/UI, développement web avec les dernières technologies (Next.js, React), identité de marque (logo, charte graphique), stratégie digitale, optimisation SEO, et refonte de sites existants. Nous gérons votre projet de A à Z pour une présence en ligne performante."
  },
  {
    question: "Comment se déroule un projet web avec Pryzm ?",
    answer: "Mon processus est optimisé pour la rapidité sans sacrifier la qualité : 1) Découverte (J1) - Appel ou rendez-vous pour comprendre vos besoins et objectifs. 2) Stratégie & Design (J1-J2) - Proposition d'une solution sur-mesure avec maquettes et devis. 3) Validation (J2-J3) - Vous validez le design et on démarre. 4) Développement (J3-J6) - Création rapide de votre site avec les meilleures technologies. 5) Lancement (J7) - Mise en ligne, formation express, et c'est parti ! Pour les projets complexes, quelques jours supplémentaires suffisent."
  },
  {
    question: "Pryzm propose-t-il la maintenance et le support après la livraison ?",
    answer: "Absolument ! Nous proposons des forfaits de maintenance mensuelle incluant : mises à jour techniques, sauvegardes régulières, monitoring de sécurité, support prioritaire, et modifications mineures. Même sans forfait, nous restons disponibles pour toute question ou évolution future de votre site. Votre succès à long terme est notre priorité."
  },
  {
    question: "Mon site sera-t-il optimisé pour les mobiles et le SEO ?",
    answer: "Oui, c'est inclus systématiquement ! Tous nos sites sont 100% responsive (optimisés pour mobile, tablette, desktop) et conçus en mobile-first. L'optimisation SEO de base est également incluse : structure technique parfaite, métadonnées, sitemap, données structurées Schema.org, vitesse de chargement optimale. Pour un SEO avancé (contenu, backlinks), nous proposons des prestations complémentaires."
  },
  {
    question: "Puis-je modifier mon site moi-même après la livraison ?",
    answer: "Tout dépend de vos besoins. Nous pouvons intégrer un CMS simple (headless CMS) pour que vous puissiez modifier textes et images facilement. Pour les sites plus techniques, nous proposons une formation complète et des vidéos tutoriels. Sinon, nous restons disponibles pour effectuer les modifications à votre place (inclus dans le forfait maintenance ou à la demande)."
  },
  {
    question: "Où est basée Pryzm Agency et intervenez-vous partout en France ?",
    answer: "Pryzm Agency est basée à Bordeaux, en Nouvelle-Aquitaine. Nous intervenons principalement sur Bordeaux et sa métropole (Pessac, Mérignac, Talence, etc.), mais nous travaillons aussi avec des clients partout en France grâce à nos outils de collaboration à distance (visio, partage d'écrans). La majorité de nos échanges peuvent se faire en ligne, avec possibilité de rendez-vous en personne pour les clients bordelais."
  },
  {
    question: "Qui est Thibault Barral, le fondateur de Pryzm ?",
    answer: "Thibault Barral est le fondateur et développeur web de Pryzm Agency. Entrepreneur à 23 ans, il est spécialisé en acquisition et conversion digitale avec une expertise pointue en développement web moderne (Next.js, React, TypeScript). Passionné par la création de sites performants qui génèrent des résultats concrets, Thibault accompagne les entrepreneurs et entreprises de Bordeaux dans leur transformation digitale avec une approche personnalisée et orientée ROI."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema.org FAQPage pour SEO et ChatGPT/LLMs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      
      <section id="faq" className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-zinc-400">
              Tout ce que vous devez savoir sur Pryzm Agency et nos services
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-zinc-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-400 mb-4">
              Vous avez d&apos;autres questions ?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
