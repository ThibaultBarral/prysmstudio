"use client"

import { Users, Target, Linkedin, Award, Rocket } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'

const AgencySection = () => {
    const infoCards = [
        {
            icon: Target,
            title: "Notre Mission",
            description: "Transformer vos idées en sites web performants qui convertissent. Nous créons des expériences digitales simples, rapides et efficaces pour développer votre activité.",
            delay: 0.1
        },
        {
            icon: Users,
            title: "Notre Approche",
            description: "À l'écoute de vos besoins, nous créons du sur-mesure. Chaque projet est unique et mérite une attention particulière. Vous êtes impliqué à chaque étape.",
            delay: 0.2
        }
    ]

    return (
        <section id="agence" className="py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-[var(--foreground)] tracking-tight">
                        Qui sommes-nous ?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Une agence web à Bordeaux fondée par <strong>Thibault Barral</strong>, dédiée à votre réussite digitale.
                    </p>
                </ScrollAnimation>

                {/* Section Fondateur - Thibault Barral */}
                <ScrollAnimation delay={0.05}>
                    <div id="fondateur" className="max-w-5xl mx-auto mb-20" itemScope itemType="https://schema.org/Person">
                        <motion.div
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden"
                            whileHover={{ y: -4 }}
                        >
                            {/* Background pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--secondary)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    {/* Avatar/Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-black flex items-center justify-center text-white text-4xl md:text-5xl font-black">
                                            TB
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="inline-block px-3 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] font-medium text-sm">
                                                Fondateur
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black mb-2 text-[var(--foreground)]" itemProp="name">
                                            Thibault Barral
                                        </h3>
                                        <p className="text-lg text-gray-500 mb-4" itemProp="jobTitle">
                                            Développeur Web & Spécialiste Acquisition Digitale
                                        </p>
                                        <div className="prose prose-lg text-gray-600 mb-6" itemProp="description">
                                            <p className="leading-relaxed">
                                                Entrepreneur à <strong>23 ans</strong>, je suis <strong itemProp="name">Thibault Barral</strong>, fondateur de <strong>Pryzm Agency</strong>. 
                                                Passionné par le <strong>développement web</strong> et la <strong>stratégie digitale</strong>, j&apos;ai créé cette agence 
                                                pour aider les entreprises à transformer leur présence en ligne.
                                            </p>
                                            <p className="leading-relaxed mt-4">
                                                Mon expertise couvre la <strong>création de sites internet performants</strong>, le <strong>web design UX/UI</strong>, 
                                                le <strong>SEO</strong> et les stratégies d&apos;<strong>acquisition & conversion</strong>. Ma philosophie : 
                                                chaque site doit être beau, rapide, et surtout <strong>rentable pour votre business</strong>.
                                            </p>
                                        </div>
                                        
                                        {/* Compétences clés */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {["Web Design UX/UI", "Développement Web", "SEO", "Next.js / React", "Stratégie Digitale", "Acquisition"].map((skill) => (
                                                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* LinkedIn CTA */}
                                        <a
                                            href="https://www.linkedin.com/in/thibaultbarral/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 bg-[#0077B5] text-white rounded-xl font-medium hover:bg-[#006097] transition-colors"
                                            itemProp="sameAs"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                            Voir mon profil LinkedIn
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Points forts */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center">
                                            <Rocket className="w-5 h-5 text-[var(--secondary)]" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-[var(--foreground)]">+50 projets</div>
                                            <div className="text-sm text-gray-500">Sites web livrés</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center">
                                            <Award className="w-5 h-5 text-[var(--secondary)]" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-[var(--foreground)]">100% satisfaits</div>
                                            <div className="text-sm text-gray-500">Clients heureux</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center">
                                            <Target className="w-5 h-5 text-[var(--secondary)]" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-[var(--foreground)]">ROI focused</div>
                                            <div className="text-sm text-gray-500">Résultats mesurables</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
                    {infoCards.map((card) => (
                        <ScrollAnimation key={card.title} delay={card.delay}>
                            <motion.div
                                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                                whileHover={{ y: -8 }}
                            >
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white">
                                        <card.icon className="w-8 h-8" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-[var(--foreground)]">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {card.description}
                                </p>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Stats */}
                <ScrollAnimation delay={0.3}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-black text-[var(--foreground)] mb-3">5+</div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Années d&apos;expertise</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-black text-[var(--foreground)] mb-3">50+</div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Projets réalisés</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-black text-[var(--foreground)] mb-3">100%</div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Clients satisfaits</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-black text-[var(--foreground)] mb-3">24h</div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Support réactif</div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default AgencySection 