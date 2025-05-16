"use client"

import { Palette, Code2, Sparkles, LineChart } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'

const services = [
    {
        title: 'Design UI/UX',
        description: 'Création d\'interfaces intuitives et esthétiques qui offrent une expérience utilisateur exceptionnelle.',
        icon: Palette,
        color: 'text-purple-500',
        bgColor: 'bg-purple-100'
    },
    {
        title: 'Développement Web',
        description: 'Développement de sites web et d\'applications performants et évolutifs avec les dernières technologies.',
        icon: Code2,
        color: 'text-blue-500',
        bgColor: 'bg-blue-100'
    },
    {
        title: 'Branding',
        description: 'Construction d\'une identité de marque forte et cohérente qui vous démarque de la concurrence.',
        icon: Sparkles,
        color: 'text-[var(--secondary)]',
        bgColor: 'bg-[var(--secondary)]/10'
    },
    {
        title: 'Stratégie Digitale',
        description: 'Élaboration de stratégies digitales sur mesure pour atteindre vos objectifs business.',
        icon: LineChart,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-100'
    }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
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
                    className={`${service.color} ${service.bgColor} mb-6 p-3 rounded-xl inline-block`}
                    whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 }
                    }}
                >
                    <service.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
        </motion.div>
    )
}

const ServicesSection = () => {
    return (
        <section id="services" className="py-36 md:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="flipIn" className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">
                        Nos Services
                    </h2>
                    <p className="text-lg text-center text-gray-500 mb-8 max-w-2xl mx-auto">
                        Nous accompagnons votre transformation digitale avec une approche sur mesure
                        et des solutions innovantes.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection 