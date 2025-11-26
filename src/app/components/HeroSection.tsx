"use client"

import Link from 'next/link'
import { Button } from '@/components/Button'
import { BackgroundPattern } from './BackgroundPattern'
import ScrollAnimation from './animations/ScrollAnimation'
import { ArrowUpRight } from 'lucide-react'
import TestimonialsSlider from './TestimonialsSlider'

export default function HeroSection() {
    return (
        <>
            <section className="relative w-full flex flex-col items-center justify-center min-h-[80vh] pt-44 pb-12 px-4">
                <BackgroundPattern />
                <div className="flex flex-col items-center w-full max-w-3xl mx-auto relative z-10">
                    <ScrollAnimation>
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] font-semibold text-sm tracking-wide">AGENCE DIGITALE</span>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.1}>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[var(--foreground)] leading-tight mb-6">
                            Votre site internet professionnel, créé sur-mesure
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <p className="text-lg text-center text-gray-500 mb-8 max-w-2xl">
                            Nous créons votre site internet professionnel, simple et efficace, pour vous aider à développer votre activité et attirer de nouveaux clients.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.3}>
                        <div className="relative flex flex-col items-center w-full">
                            <Button variant="default" size="lg" className="gap-2 group" asChild>
                                <Link href="/call">
                                    Démarrer votre projet
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </Button>

                        </div>
                    </ScrollAnimation>
                    <div className="w-full max-w-xs mt-2">
                        <TestimonialsSlider />
                    </div>
                </div>
            </section>
        </>
    )
} 