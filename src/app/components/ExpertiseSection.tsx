"use client"

import { Code2, Palette, Zap, Shield, Cpu, Rocket } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'

const expertiseItems = [
    {
        title: 'Technologies Récentes',
        description: 'Nous utilisons les meilleurs outils et technologies pour créer des sites modernes, rapides et fiables.',
        icon: Code2,
        color: 'text-blue-500',
        bgColor: 'bg-blue-100'
    },
    {
        title: 'Design Attractif',
        description: 'Nous créons des sites uniques et mémorables qui donnent envie à vos visiteurs de vous contacter.',
        icon: Palette,
        color: 'text-purple-500',
        bgColor: 'bg-purple-100'
    },
    {
        title: 'Site Rapide',
        description: 'Votre site se charge rapidement pour offrir une expérience agréable à vos visiteurs.',
        icon: Zap,
        color: 'text-[var(--secondary)]',
        bgColor: 'bg-[var(--secondary)]/10'
    },
    {
        title: 'Sécurité Garantie',
        description: 'Vos données et celles de vos clients sont protégées avec les meilleures pratiques de sécurité.',
        icon: Shield,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-100'
    },
    {
        title: 'Site Évolutif',
        description: 'Votre site grandit avec vous : nous pouvons ajouter de nouvelles fonctionnalités quand vous en avez besoin.',
        icon: Cpu,
        color: 'text-rose-500',
        bgColor: 'bg-rose-100'
    },
    {
        title: 'Mises à Jour Faciles',
        description: 'Nous mettons à jour votre site rapidement et simplement, sans perturber votre activité.',
        icon: Rocket,
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-100'
    }
]

const ExpertiseCard = ({ item, index }: { item: typeof expertiseItems[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.05} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative">
                <div className={`${item.color} ${item.bgColor} mb-6 p-3 rounded-xl inline-block`}>
                    <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">
                    {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </ScrollAnimation>
    )
}

const ExpertiseSection = () => {
    return (
        <section id="expertise" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <ScrollAnimation className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Notre Expertise</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Nous combinons savoir-faire technique et créativité pour créer votre site internet professionnel, du début à la fin.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseItems.map((item, index) => (
                        <ExpertiseCard key={item.title} item={item} index={index} />
                    ))}
                </div>

                <ScrollAnimation delay={0.3} className="mt-16 text-center">
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm border border-gray-100">
                        <p className="text-lg text-gray-500 max-w-2xl">
                            Notre savoir-faire est à votre service. Nous créons des sites internet qui vous ressemblent et qui vous aident à développer votre activité.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default ExpertiseSection 