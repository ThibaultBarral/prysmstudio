"use client"

import { Code2, Palette, Zap, Shield, Cpu, Rocket, LucideIcon } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'

const expertiseItems = [
    {
        title: 'Technologies Modernes',
        description: 'Utilisation des dernières technologies web pour des applications performantes et évolutives.',
        icon: Code2,
        color: 'text-blue-500',
        bgColor: 'bg-blue-100'
    },
    {
        title: 'Design Innovant',
        description: 'Création d\'interfaces uniques et mémorables qui captent l\'attention de vos utilisateurs.',
        icon: Palette,
        color: 'text-purple-500',
        bgColor: 'bg-purple-100'
    },
    {
        title: 'Performance Optimale',
        description: 'Optimisation des performances pour une expérience utilisateur fluide et rapide.',
        icon: Zap,
        color: 'text-[var(--secondary)]',
        bgColor: 'bg-[var(--secondary)]/10'
    },
    {
        title: 'Sécurité Renforcée',
        description: 'Implémentation des meilleures pratiques de sécurité pour protéger vos données.',
        icon: Shield,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-100'
    },
    {
        title: 'Architecture Scalable',
        description: 'Conception d\'architectures évolutives qui grandissent avec votre entreprise.',
        icon: Cpu,
        color: 'text-rose-500',
        bgColor: 'bg-rose-100'
    },
    {
        title: 'Déploiement Continu',
        description: 'Processus de déploiement automatisé pour des mises à jour rapides et fiables.',
        icon: Rocket,
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-100'
    }
]

const ExpertiseCard = ({ item, index }: { item: typeof expertiseItems[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
            className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
            />
            <div className="relative">
                <motion.div
                    className={`${item.color} ${item.bgColor} mb-6 p-3 rounded-xl inline-block`}
                    whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 }
                    }}
                >
                    <item.icon className="w-6 h-6" />
                </motion.div>
                <motion.h3
                    className="text-xl font-semibold mb-3 text-[var(--foreground)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                >
                    {item.title}
                </motion.h3>
                <motion.p
                    className="text-gray-500 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                >
                    {item.description}
                </motion.p>
            </div>
        </motion.div>
    )
}

const ExpertiseSection = () => {
    return (
        <section id="expertise" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="flipIn" className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Notre Expertise</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Une combinaison unique de compétences techniques et créatives pour transformer vos idées en réalité
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseItems.map((item, index) => (
                        <ExpertiseCard key={item.title} item={item} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="mt-16 text-center"
                >
                    <motion.div
                        className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm border border-gray-100"
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <p className="text-lg text-gray-500 max-w-2xl">
                            Notre expertise technique est au service de votre vision. Nous combinons innovation et pragmatisme pour créer des solutions digitales qui font la différence.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default ExpertiseSection 