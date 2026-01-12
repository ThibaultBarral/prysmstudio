"use client"

import { Users, Target } from 'lucide-react'
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
                        Une équipe passionnée, dédiée à votre réussite digitale.
                    </p>
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
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Années d'expertise</div>
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