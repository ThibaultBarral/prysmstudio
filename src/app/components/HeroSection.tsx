"use client"

import Link from 'next/link'
import { Button } from '@/components/Button'
import ScrollAnimation from './animations/ScrollAnimation'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <>
            <section className="relative w-full flex flex-col items-center justify-center min-h-screen pt-32 pb-24 px-6 overflow-hidden bg-white" itemScope itemType="https://schema.org/WebPage">
                {/* Texte animé en arrière-plan */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                    <motion.div
                        className="text-[20vw] font-black whitespace-nowrap"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        PRYZM • THIBAULT BARRAL • PRYZM • WEB DESIGN •
                    </motion.div>
                </div>

                <div className="flex flex-col items-center w-full max-w-6xl mx-auto relative z-10">
                    <ScrollAnimation>
                        <span className="inline-block mb-8 px-5 py-2 rounded-full bg-black text-white font-medium text-sm tracking-wide uppercase">
                            Agence Web Bordeaux • Par Thibault Barral
                        </span>
                    </ScrollAnimation>
                    
                    <ScrollAnimation delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-center text-[var(--foreground)] leading-[1.1] mb-8 tracking-tight" itemProp="name">
                            Création de sites{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10">internet</span>
                                <motion.span
                                    className="absolute bottom-2 left-0 right-0 h-4 bg-[var(--secondary)] -z-10"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </span>
                            {' '}performants
                        </h1>
                    </ScrollAnimation>
                    
                    <ScrollAnimation delay={0.2}>
                        <p className="text-xl md:text-2xl text-center text-gray-600 mb-12 max-w-3xl font-light leading-relaxed" itemProp="description">
                            <strong>Pryzm Agency</strong>, fondée par <a href="#fondateur" className="text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors font-medium">Thibault Barral</a> à Bordeaux. De la conception au lancement, nous créons des sites web optimisés pour <strong>convertir</strong> et <strong>développer votre activité</strong>. Design UX/UI, développement web et SEO.
                        </p>
                    </ScrollAnimation>
                    
                    <ScrollAnimation delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
                            <Button variant="default" size="lg" className="gap-2 group text-lg px-8 py-6" asChild>
                                <Link href="/call">
                                    Démarrer votre projet
                                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </Button>
                        </div>
                    </ScrollAnimation>

                    {/* Stats en bas */}
                    <ScrollAnimation delay={0.4}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-12 pt-12 border-t border-gray-200 w-full max-w-4xl">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-2">7j</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wide">Livraison rapide</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-2">100%</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wide">Clients satisfaits</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-2">∞</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wide">Révisions incluses</div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    )
} 