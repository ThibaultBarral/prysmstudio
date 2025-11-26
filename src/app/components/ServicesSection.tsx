"use client"

import { Palette, Code2, Sparkles, LineChart } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'

const services = [
    {
        title: 'Design et Ergonomie',
        description: 'Nous créons des sites beaux et faciles à utiliser, pour que vos visiteurs trouvent rapidement ce qu\'ils cherchent.',
        icon: Palette,
        color: 'text-purple-500',
        bgColor: 'bg-purple-100'
    },
    {
        title: 'Création de Sites Web',
        description: 'Nous construisons votre site internet professionnel, rapide et adapté à tous les écrans (ordinateur, tablette, téléphone).',
        icon: Code2,
        color: 'text-blue-500',
        bgColor: 'bg-blue-100'
    },
    {
        title: 'Image de Marque',
        description: 'Nous vous aidons à créer une identité visuelle forte (logo, couleurs, style) qui vous démarque de vos concurrents.',
        icon: Sparkles,
        color: 'text-[var(--secondary)]',
        bgColor: 'bg-[var(--secondary)]/10'
    },
    {
        title: 'Conseil en Ligne',
        description: 'Nous vous accompagnons dans votre présence sur internet pour atteindre vos objectifs et développer votre activité.',
        icon: LineChart,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-100'
    }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.05} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative">
                <div className={`${service.color} ${service.bgColor} mb-6 p-3 rounded-xl inline-block`}>
                    <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
        </ScrollAnimation>
    )
}

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">
                        Nos Services
                    </h2>
                    <p className="text-lg text-center text-gray-500 mb-8 max-w-2xl mx-auto">
                        Nous vous accompagnons dans votre présence sur internet avec une approche simple et personnalisée, adaptée à votre activité.
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