"use client"

import { Users, Target, Award, Code, Zap, LucideIcon } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'

const StatCard = ({ icon: Icon, value, label, color, index }: {
    icon: LucideIcon,
    value: string,
    label: string,
    color: string,
    index: number
}) => {
    return (
        <ScrollAnimation delay={index * 0.05} className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative text-center">
                <div className={`text-${color}-500 mb-4 p-3 rounded-xl bg-${color}-500/10 inline-block`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-[var(--foreground)] mb-2">
                    {value}
                </div>
                <div className="text-gray-500">{label}</div>
            </div>
        </ScrollAnimation>
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
        <ScrollAnimation delay={delay} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative">
                <div className={`text-${color}-500 mb-6 p-3 rounded-xl bg-${color}-500/10 inline-block`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                    {title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>
        </ScrollAnimation>
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
            title: "Notre Mission",
            description: "Nous transformons vos idées en site internet professionnel. Nous créons des sites simples à utiliser, rapides et efficaces, pour vous aider à développer votre activité et attirer de nouveaux clients.",
            color: "blue",
            delay: 0.2
        },
        {
            icon: Users,
            title: "Notre Approche",
            description: "Nous vous écoutons et créons votre site sur mesure, adapté à vos besoins. Nous vous tenons informé à chaque étape et vous pouvez nous contacter facilement si vous avez des questions.",
            color: "purple",
            delay: 0.3
        }
    ]

    return (
        <section id="agence" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Notre Agence</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Une équipe expérimentée à votre service pour créer votre site internet professionnel
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