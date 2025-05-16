"use client"

import Link from 'next/link'
import { Button } from '@/components/Button'
import { BackgroundPattern } from './BackgroundPattern'
import ScrollAnimation from './animations/ScrollAnimation'
import { ArrowUpRight } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
            <section className="relative w-full flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-12 px-4">
                <BackgroundPattern />
                <div className="flex flex-col items-center w-full max-w-3xl mx-auto relative z-10">
                    <ScrollAnimation type="bounceIn" duration={0.8}>
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] font-semibold text-sm tracking-wide">AGENCE DIGITALE</span>
                    </ScrollAnimation>
                    <ScrollAnimation type="flipIn" delay={0.2} duration={0.8}>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[var(--foreground)] leading-tight mb-6">
                            Des solutions digitales pour des projets uniques.
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation type="slideUp" delay={0.3} duration={0.8}>
                        <p className="text-lg text-center text-gray-500 mb-8 max-w-2xl">
                            Nous créons des expériences web sur-mesure, performantes et élégantes, pour propulser votre marque et vos idées.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation type="scaleUp" delay={0.4} duration={0.8}>
                        <Button variant="default" size="lg" className="gap-2 group" asChild>
                            <Link href="#">
                                Démarrer votre projet
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </Button>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    )
} 