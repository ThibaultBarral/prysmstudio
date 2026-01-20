"use client"

import { Mail, ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import ScrollAnimation from './animations/ScrollAnimation'
import { Button } from '@/components/Button'
import { motion } from 'framer-motion'

const ContactSection = () => {
    return (
        <section id="contact" className="py-32 bg-gray-50" itemScope itemType="https://schema.org/ContactPage">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-[var(--foreground)] tracking-tight">
                        Prêt à démarrer ?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Réservez un appel gratuit de 30 minutes avec{' '}
                        <a 
                            href="#fondateur" 
                            className="text-[var(--foreground)] font-medium hover:text-[var(--secondary)] transition-colors underline-offset-4 hover:underline"
                        >
                            Thibault Barral
                        </a>{' '}
                        pour discuter de votre projet de <strong>création de site internet</strong>.
                    </p>
                </ScrollAnimation>

                {/* CTA principal */}
                <ScrollAnimation delay={0.1}>
                    <div className="max-w-4xl mx-auto bg-black text-white rounded-3xl p-12 md:p-16 mb-16 relative overflow-hidden">
                        {/* Pattern d'arrière-plan */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                                backgroundSize: '40px 40px'
                            }} />
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-4xl md:text-5xl font-black mb-6">
                                Parlons de votre projet
                            </h3>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Vous avez un projet web en tête ? Réservez un créneau et discutons-en ensemble.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="gap-2 group bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-lg px-8 py-6"
                                >
                                    <Link href="/call">
                                        Réserver un appel
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    className="gap-2 group bg-white hover:bg-gray-100 text-black text-lg px-8 py-6"
                                >
                                    <a
                                        href="https://wa.me/33675976932?text=Hello%2C%20j%27aimerais%20%C3%A9changer%20avec%20vous"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Infos de contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <ScrollAnimation delay={0.2}>
                        <motion.a
                            href="mailto:contact@pryzm.agency"
                            className="group block bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                            whileHover={{ y: -4 }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white mb-6 group-hover:bg-[var(--secondary)] transition-colors">
                                <Mail className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">Email</h3>
                            <p className="text-gray-600 text-lg">contact@pryzm.agency</p>
                        </motion.a>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.3}>
                        <motion.div
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                            whileHover={{ y: -4 }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white mb-6">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">Localisation</h3>
                            <p className="text-gray-600 text-lg">Bordeaux, France</p>
                        </motion.div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}

export default ContactSection 