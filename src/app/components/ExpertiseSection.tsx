"use client"

import { Code2, Palette, Zap, Shield, Cpu, Rocket } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'

const expertiseItems = [
    {
        title: 'Tech Moderne',
        description: 'Stack technique de pointe pour des sites ultra-rapides et fiables.',
        icon: Code2,
    },
    {
        title: 'Design Unique',
        description: 'Interfaces mémorables qui captivent et convertissent vos visiteurs.',
        icon: Palette,
    },
    {
        title: 'Performance',
        description: 'Temps de chargement optimisés pour une expérience fluide.',
        icon: Zap,
    },
    {
        title: 'Sécurité',
        description: 'Protection maximale de vos données et celles de vos clients.',
        icon: Shield,
    },
    {
        title: 'Évolutivité',
        description: 'Architecture scalable qui grandit avec votre business.',
        icon: Cpu,
    },
    {
        title: 'Maintenance',
        description: 'Mises à jour continues sans interruption de service.',
        icon: Rocket,
    }
]

const ExpertiseCard = ({ item, index }: { item: typeof expertiseItems[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.05}>
            <motion.div
                className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-black transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
            >
                <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-black group-hover:bg-[var(--secondary)] flex items-center justify-center text-white transition-colors duration-300">
                        <item.icon className="w-7 h-7" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
                    {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                </p>
            </motion.div>
        </ScrollAnimation>
    )
}

const ExpertiseSection = () => {
    return (
        <section id="expertise" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-[var(--foreground)] tracking-tight">
                        Notre expertise
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Savoir-faire technique et créativité au service de votre projet.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {expertiseItems.map((item, index) => (
                        <ExpertiseCard key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExpertiseSection 