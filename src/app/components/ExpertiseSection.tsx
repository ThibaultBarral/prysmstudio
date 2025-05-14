"use client"

import { Code2, Palette, Zap, Shield, Cpu, Rocket } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'

const expertiseItems = [
    {
        title: 'Technologies Modernes',
        description: 'Utilisation des dernières technologies web pour des applications performantes et évolutives.',
        icon: Code2,
        color: 'text-blue-500'
    },
    {
        title: 'Design Innovant',
        description: 'Création d\'interfaces uniques et mémorables qui captent l\'attention de vos utilisateurs.',
        icon: Palette,
        color: 'text-purple-500'
    },
    {
        title: 'Performance Optimale',
        description: 'Optimisation des performances pour une expérience utilisateur fluide et rapide.',
        icon: Zap,
        color: 'text-amber-500'
    },
    {
        title: 'Sécurité Renforcée',
        description: 'Implémentation des meilleures pratiques de sécurité pour protéger vos données.',
        icon: Shield,
        color: 'text-emerald-500'
    },
    {
        title: 'Architecture Scalable',
        description: 'Conception d\'architectures évolutives qui grandissent avec votre entreprise.',
        icon: Cpu,
        color: 'text-rose-500'
    },
    {
        title: 'Déploiement Continu',
        description: 'Processus de déploiement automatisé pour des mises à jour rapides et fiables.',
        icon: Rocket,
        color: 'text-indigo-500'
    }
]

const ExpertiseSection = () => {
    return (
        <section id="expertise" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="fadeUp" className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Notre Expertise</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Une combinaison unique de compétences techniques et créatives pour transformer vos idées en réalité
                    </p>
                </ScrollAnimation>

                <ScrollAnimation type="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseItems.map((item) => (
                        <div
                            key={item.title}
                            className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <div className={`${item.color} mb-6 p-3 rounded-xl bg-opacity-10 inline-block transform transition-transform duration-300 group-hover:scale-110`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </ScrollAnimation>

                <ScrollAnimation type="fadeUp" delay={0.4} className="mt-16 text-center">
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-sm border border-gray-100 dark:border-gray-700">
                        <p className="text-lg text-gray-500 max-w-2xl">
                            Notre expertise technique est au service de votre vision. Nous combinons innovation et pragmatisme pour créer des solutions digitales qui font la différence.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default ExpertiseSection 