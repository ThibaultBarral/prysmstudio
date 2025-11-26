"use client"

import { Mail, ArrowRight, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'
import ScrollAnimation from './animations/ScrollAnimation'
import { Button } from '@/components/Button'

const contactMethods = [
    {
        title: 'Email',
        description: 'Contactez-nous par email pour discuter de votre projet',
        icon: Mail,
        link: 'mailto:contact@pryzm.agency',
        color: 'text-[var(--secondary)]'
    },
    {
        title: 'Localisation',
        description: 'Basés à Bordeaux, nous travaillons avec des clients du monde entier',
        icon: MapPin,
        link: '#',
        color: 'text-[var(--secondary)]'
    },
    {
        title: 'Disponibilité',
        description: 'Nous sommes disponibles 7j/7 et 24h/24.',
        icon: Calendar,
        link: '/call',
        color: 'text-[var(--secondary)]'
    }
]

const ContactMethod = ({ method, index }: { method: typeof contactMethods[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.05}>
            <Link href={method.link} className="group block h-full">
                <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className="relative">
                        <div className={`${method.color} mb-6 p-3 rounded-xl bg-[var(--secondary)]/10 inline-block`}>
                            <method.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">
                            {method.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            {method.description}
                        </p>
                    </div>
                </div>
            </Link>
        </ScrollAnimation>
    )
}

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Parlons de votre projet</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Discutons de votre projet ensemble. Contactez-nous, nous répondons à toutes vos questions.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
                    {contactMethods.map((method, index) => (
                        <ContactMethod key={method.title} method={method} index={index} />
                    ))}
                    <div className="hidden md:block" />
                </div>

                <ScrollAnimation delay={0.3} className="text-center">
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                            Prêt à démarrer ?
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-2xl">
                            Réservez un appel gratuit de 30 minutes. Nous discuterons de votre projet et vous expliquerons comment nous pouvons créer votre site internet professionnel.
                        </p>
                        <div>
                            <Button
                                asChild
                                size="lg"
                                className="gap-2 group"
                            >
                                <Link href="/call">
                                    Réserver un appel
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default ContactSection 