"use client"

import Link from 'next/link'
import { Button } from '@/components/Button'
import { BackgroundPattern } from './BackgroundPattern'
import ScrollAnimation from './animations/ScrollAnimation'
import { ArrowUpRight } from 'lucide-react'
import Navbar from './Navbar'

export default function HeroSection() {
    return (
        <>
            <Navbar />
            <section className="relative w-full flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-12 px-4">
                <BackgroundPattern />
                <div className="flex flex-col items-center w-full max-w-3xl mx-auto relative z-10">
                    <ScrollAnimation type="fadeUp" duration={0.5}>
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] font-semibold text-sm tracking-wide">AGENCE DIGITALE</span>
                    </ScrollAnimation>
                    <ScrollAnimation type="fadeUp" delay={0.2} duration={0.6}>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[var(--foreground)] leading-tight mb-6">
                            Des solutions digitales pour des projets uniques.
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation type="fadeUp" delay={0.3} duration={0.6}>
                        <p className="text-lg text-center text-gray-500 mb-8 max-w-2xl">
                            Nous créons des expériences web sur-mesure, performantes et élégantes, pour propulser votre marque et vos idées.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation type="scaleUp" delay={0.4} duration={0.6}>
                        <Button variant="default" size="lg" className="gap-2" asChild>
                            <Link href="#">
                                Démarrer votre projet
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    )
} 