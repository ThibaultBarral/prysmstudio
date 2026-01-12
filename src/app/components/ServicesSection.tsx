"use client"

import { Palette, Code2, Sparkles, LineChart } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'

const services = [
    {
        title: 'Design & Ergonomie',
        description: 'Sites beaux et intuitifs, pensés pour convertir vos visiteurs en clients.',
        icon: Palette,
    },
    {
        title: 'Développement Web',
        description: 'Sites ultra-rapides, responsive et optimisés pour tous les écrans.',
        icon: Code2,
    },
    {
        title: 'Identité de Marque',
        description: 'Logo, charte graphique et identité visuelle qui vous démarquent.',
        icon: Sparkles,
    },
    {
        title: 'Stratégie Digitale',
        description: 'Accompagnement complet pour développer votre présence en ligne.',
        icon: LineChart,
    }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.05}>
            <motion.div
                className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-[var(--secondary)]/30 transition-all duration-300 h-full"
                whileHover={{ y: -8 }}
            >
                <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white group-hover:bg-[var(--secondary)] transition-all duration-300">
                        <service.icon className="w-8 h-8" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                
                {/* Accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-[var(--secondary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </motion.div>
        </ScrollAnimation>
    )
}

const ServicesSection = () => {
    return (
        <section id="services" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-[var(--foreground)] tracking-tight">
                        Nos services
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Tout ce dont vous avez besoin pour réussir en ligne.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection 