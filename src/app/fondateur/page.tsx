import type { Metadata } from 'next'
import Link from 'next/link'
import { Linkedin, Award, Rocket, Target, Code, Lightbulb, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Thibault Barral - Fondateur de Pryzm Agency | Développeur Web & Stratégie Digitale à Bordeaux',
  description: 'Découvrez le parcours de Thibault Barral, fondateur de Pryzm Agency. Entrepreneur à 23 ans, spécialisé en développement web, SEO et stratégie d\'acquisition digitale à Bordeaux.',
  openGraph: {
    title: 'Thibault Barral - Fondateur de Pryzm Agency',
    description: 'Entrepreneur à 23 ans, spécialisé en développement web, SEO et stratégie d\'acquisition digitale à Bordeaux.',
    type: 'profile',
  },
}

export default function FondateurPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>

          <div className="flex flex-col md:flex-row gap-12 items-start" itemScope itemType="https://schema.org/Person">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-black flex items-center justify-center text-white text-6xl md:text-7xl font-black shadow-2xl">
                TB
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] font-medium text-sm">
                  Fondateur de Pryzm Agency
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-4 text-[var(--foreground)]" itemProp="name">
                Thibault Barral
              </h1>
              <p className="text-2xl text-gray-500 mb-6" itemProp="jobTitle">
                Développeur Web & Spécialiste Acquisition Digitale
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Basé à <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Bordeaux</span></span> • 23 ans • Entrepreneur passionné par la transformation digitale
              </p>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="gap-2" asChild>
                  <a
                    href="https://wa.me/33675976932?text=Hello%2C%20j%27aimerais%20%C3%A9changer%20avec%20vous"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Travailler ensemble
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a
                    href="https://www.linkedin.com/in/thibaultbarral/"
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="sameAs"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon Histoire */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-[var(--foreground)]">
            Mon Histoire
          </h2>
          
          <div className="prose prose-lg max-w-none" itemProp="description">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              À <strong>23 ans</strong>, j&apos;ai fondé <strong>Pryzm Agency</strong> avec une vision claire : 
              aider les entreprises à maximiser leur impact digital grâce à des sites web qui 
              <strong> convertissent</strong> et <strong>génèrent des résultats mesurables</strong>.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Mon parcours dans le <strong>développement web</strong> et la <strong>stratégie digitale</strong> m&apos;a 
              permis de comprendre une chose essentielle : un site internet ne doit pas être qu&apos;une simple vitrine. 
              Il doit être un <strong>véritable outil de croissance</strong> pour votre business.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Aujourd&apos;hui, je combine mes compétences en <strong>web design UX/UI</strong>, <strong>développement web moderne</strong> 
              (Next.js, React), <strong>SEO</strong> et <strong>stratégie d&apos;acquisition</strong> pour créer des sites qui 
              sont non seulement beaux et rapides, mais surtout <strong>rentables</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Compétences & Expertise */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-[var(--foreground)] text-center">
            Expertises
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: "Développement Web",
                description: "Next.js, React, TypeScript - Technologies modernes pour des sites ultra-performants et évolutifs.",
                skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
              },
              {
                icon: Lightbulb,
                title: "Web Design UX/UI",
                description: "Création d'interfaces intuitives et conversionnelles, optimisées pour l'expérience utilisateur.",
                skills: ["Design System", "Figma", "UI/UX", "Mobile First"]
              },
              {
                icon: Target,
                title: "SEO & Référencement",
                description: "Optimisation pour les moteurs de recherche, stratégie de contenu et SEO technique.",
                skills: ["SEO On-Page", "SEO Technique", "Analytics", "Core Web Vitals"]
              },
              {
                icon: Rocket,
                title: "Stratégie d'Acquisition",
                description: "Mise en place de stratégies digitales pour générer du trafic qualifié et convertir.",
                skills: ["Lead Generation", "Conversion Rate", "A/B Testing", "Growth Hacking"]
              }
            ].map((expertise) => (
              <div 
                key={expertise.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center text-white mb-6">
                  <expertise.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
                  {expertise.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {expertise.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {expertise.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres Clés */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-[var(--foreground)] text-center">
            En Chiffres
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-7 h-7 text-[var(--secondary)]" />
              </div>
              <div className="text-5xl md:text-6xl font-black text-[var(--foreground)] mb-3">50+</div>
              <div className="text-gray-600 font-medium">Sites web livrés</div>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-[var(--secondary)]" />
              </div>
              <div className="text-5xl md:text-6xl font-black text-[var(--foreground)] mb-3">100%</div>
              <div className="text-gray-600 font-medium">Clients satisfaits</div>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-[var(--secondary)]" />
              </div>
              <div className="text-5xl md:text-6xl font-black text-[var(--foreground)] mb-3">5+</div>
              <div className="text-gray-600 font-medium">Années d&apos;expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ma Philosophie */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ma Philosophie
          </h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-90">
            &ldquo;Chaque site doit être <span className="font-bold text-[var(--secondary)]">beau</span>, 
            <span className="font-bold text-[var(--secondary)]"> rapide</span>, et surtout 
            <span className="font-bold text-[var(--secondary)]"> rentable</span> pour votre business.&rdquo;
          </p>
          <p className="text-xl text-gray-400 mt-6">
            — Thibault Barral, Fondateur de Pryzm Agency
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[var(--foreground)]">
            Travaillons Ensemble
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Vous avez un projet web ? Discutons de comment je peux vous aider à 
            atteindre vos objectifs digitaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="gap-2" asChild>
              <a
                href="https://wa.me/33675976932?text=Hello%2C%20j%27aimerais%20%C3%A9changer%20avec%20vous"
                target="_blank"
                rel="noopener noreferrer"
              >
                Me contacter sur WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://www.linkedin.com/in/thibaultbarral/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                Me suivre sur LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
