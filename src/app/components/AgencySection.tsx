"use client"

import { Users, Target, Award, Code, Zap, LucideIcon } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'

const StatCard = ({ icon: Icon, value, label, color, index }: {
    icon: LucideIcon,
    value: string,
    label: string,
    color: string,
    index: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
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
            className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br from-${color}-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                whileHover={{ scale: 1.05 }}
            />
            <div className="relative text-center">
                <motion.div
                    className={`text-${color}-500 mb-4 p-3 rounded-xl bg-${color}-500/10 inline-block`}
                    whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 }
                    }}
                >
                    <Icon className="w-6 h-6" />
                </motion.div>
                <motion.div
                    className="text-3xl font-bold text-[var(--foreground)] mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                >
                    {value}
                </motion.div>
                <div className="text-gray-500">{label}</div>
            </div>
        </motion.div>
    )
}

const InfoCard = ({ icon: Icon, title, description, color, delay }: {
    icon: LucideIcon,
    title: string,
    description: string,
    color: string,
    delay: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.6,
                delay,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{
                scale: 1.02,
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
                    className={`text-${color}-500 mb-6 p-3 rounded-xl bg-${color}-500/10 inline-block`}
                    whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 }
                    }}
                >
                    <Icon className="w-6 h-6" />
                </motion.div>
                <motion.h3
                    className="text-2xl font-semibold mb-4 text-[var(--foreground)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.1 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-gray-500 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: delay + 0.2 }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.div>
    )
}

const AgencySection = () => {
    const stats = [
        { icon: Target, value: "5+", label: "Années d'expertise", color: "blue" },
        { icon: Code, value: "50+", label: "Projets réussis", color: "purple" },
        { icon: Zap, value: "100%", label: "Clients satisfaits", color: "emerald" },
        { icon: Award, value: "24h", label: "Support réactif", color: "orange" }
    ]

    const infoCards = [
        {
            icon: Target,
            title: "Notre Vision",
            description: "Nous transformons vos idées en solutions numériques performantes. Notre approche centrée sur l'expérience utilisateur et les performances garantit des résultats concrets et mesurables pour votre entreprise.",
            color: "blue",
            delay: 0.2
        },
        {
            icon: Users,
            title: "Notre Approche",
            description: "Nous combinons expertise technique et créativité pour développer des solutions sur mesure. Notre méthodologie agile et transparente assure un suivi précis de chaque étape de votre projet.",
            color: "purple",
            delay: 0.3
        }
    ]

    return (
        <section id="agence" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="flipIn" className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Notre Agence</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Une expertise pointue au service de vos ambitions numériques
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <StatCard key={stat.label} {...stat} index={index} />
                        ))}
                    </div>

                    <div className="space-y-8">
                        {infoCards.map((card) => (
                            <InfoCard key={card.title} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AgencySection 