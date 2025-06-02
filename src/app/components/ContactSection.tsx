"use client"

import { Mail, ArrowRight, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'
import ScrollAnimation from './animations/ScrollAnimation'
import { Button } from '@/components/Button'
import { motion } from 'framer-motion'

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
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
        >
            <Link href={method.link} className="group block h-full">
                <motion.div
                    className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                    />
                    <div className="relative">
                        <motion.div
                            className={`${method.color} mb-6 p-3 rounded-xl bg-[var(--secondary)]/10 inline-block`}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                        >
                            <method.icon className="w-6 h-6" />
                        </motion.div>
                        <motion.h3
                            className="text-xl font-semibold mb-3 text-[var(--foreground)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                        >
                            {method.title}
                        </motion.h3>
                        <motion.p
                            className="text-gray-500 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            {method.description}
                        </motion.p>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="flipIn" className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Parlons de votre projet</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Transformons vos idées en réalité. Contactez-nous pour démarrer votre projet
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
                    {contactMethods.map((method, index) => (
                        <ContactMethod key={method.title} method={method} index={index} />
                    ))}
                    <div className="hidden md:block" />
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
                    className="text-center"
                >
                    <motion.div
                        className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm border border-gray-100"
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.h3
                            className="text-2xl font-semibold mb-4 text-[var(--foreground)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Prêt à démarrer ?
                        </motion.h3>
                        <motion.p
                            className="text-gray-500 mb-6 max-w-2xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Réservez un appel de 30 minutes pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
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
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection 