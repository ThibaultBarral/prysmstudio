"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { BackgroundPattern } from './BackgroundPattern'
import ScrollAnimation from './animations/ScrollAnimation'
import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    const toggleNavbar = () => {
        setOpenNavbar(openNavbar => !openNavbar)
    }

    const navItems = [
        { label: 'Réalisations', href: '#realisations' },
        { label: 'Services', href: '#services' },
        { label: 'Expertise', href: '#expertise' },
        { label: 'À propos', href: '#agence' }
    ]

    return (
        <header className="fixed top-0 inset-x-0 z-50 h-20 flex items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="mx-auto max-w-7xl w-full px-6 h-full flex items-center">
                <nav className="flex justify-between items-center w-full h-full">
                    <ScrollAnimation type="fadeIn" duration={0.4} animateOnMount className="flex min-w-max items-center">
                        <Link href="/" className="flex items-center gap-x-3 text-xl font-bold text-[var(--foreground)] group">
                            <span className="w-10 h-10 rounded-xl bg-[var(--foreground)] flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.25)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-all duration-300 group-hover:scale-105">P</span>
                            Prysm
                        </Link>
                    </ScrollAnimation>
                    <ul className="hidden md:flex gap-x-8 text-[var(--foreground)] uppercase tracking-tight text-sm items-center">
                        {navItems.map((item, i) => (
                            <ScrollAnimation key={item.label} type="fadeIn" delay={0.1 + i * 0.1} duration={0.4} animateOnMount>
                                <li>
                                    <Link
                                        href={item.href}
                                        className="relative py-2 group"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--foreground)] transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            </ScrollAnimation>
                        ))}
                    </ul>
                    <ScrollAnimation type="fadeIn" delay={0.5} duration={0.4} animateOnMount className="hidden md:flex">
                        <Button variant="default" className="gap-2 group" asChild>
                            <Link href="#contact">
                                Réserver un appel
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </Button>
                    </ScrollAnimation>
                    <div className="flex md:hidden items-center justify-end relative z-60">
                        <Button variant="default" size="icon" onClick={toggleNavbar} className="flex flex-col justify-center items-center">
                            <span className="sr-only">toggle navbar</span>
                            <span className={`w-6 h-0.5 rounded bg-[var(--foreground)] transition-transform duration-300 ${openNavbar ? 'translate-y-1.5 rotate-45' : ''}`} />
                            <span className={`w-6 h-0.5 rounded bg-[var(--foreground)] mt-1 transition-all duration-300 ${openNavbar ? 'scale-x-0 opacity-0' : ''}`} />
                            <span className={`w-6 h-0.5 rounded bg-[var(--foreground)] mt-1 transition-all duration-300 ${openNavbar ? '-translate-y-1.5 -rotate-45' : ''}`} />
                        </Button>
                    </div>
                </nav>
                {/* Mobile menu */}
                {openNavbar && (
                    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center gap-8 text-xl font-semibold">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpenNavbar(false)}
                                className="relative py-2 group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--foreground)] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Button variant="default" className="gap-2 group mt-4" asChild>
                            <Link href="#contact" onClick={() => setOpenNavbar(false)}>
                                Réserver un appel
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </header>
    )
}

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