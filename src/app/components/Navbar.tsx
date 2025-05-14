"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/Button'
import ScrollAnimation from './animations/ScrollAnimation'
import { ArrowUpRight } from 'lucide-react'
import type LocomotiveScroll from 'locomotive-scroll'
import type { ScrollToTarget } from 'locomotive-scroll'

// Ajout pour TypeScript : déclaration de window.locomotive
declare global {
    interface Window {
        locomotive?: LocomotiveScroll;
    }
}

export default function Navbar() {
    const [openNavbar, setOpenNavbar] = useState(false)
    const toggleNavbar = () => {
        setOpenNavbar(openNavbar => !openNavbar)
    }

    const navItems = [
        { label: 'Services', href: '#services' },
        { label: 'Expertise', href: '#expertise' },
        { label: 'Agence', href: '#agence' },
        { label: 'Contact', href: '#contact' }
    ]

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            // Met à jour l'URL sans recharger la page
            window.history.pushState(null, '', href);
            if (window.locomotive) {
                window.locomotive.scrollTo(target as ScrollToTarget, { offset: -80, duration: 800, disableLerp: true });
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            setOpenNavbar(false);
        }
        // Sinon, laisse le comportement par défaut (ex: lien externe)
    }

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 h-20 flex items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="mx-auto max-w-7xl w-full px-6 h-full flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-x-3 text-xl font-bold text-[var(--foreground)] group">
                        <span className="w-10 h-10 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.25)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-all duration-300 group-hover:scale-105">P</span>
                        <span className="hidden md:inline group-hover:text-[var(--secondary)] transition-colors duration-300">Prysm</span>
                    </Link>
                    <ul className="hidden md:flex gap-x-8 text-[var(--foreground)] uppercase tracking-tight text-sm items-center">
                        {navItems.map((item, i) => (
                            <ScrollAnimation key={item.label} type="fadeIn" delay={0.1 + i * 0.1} duration={0.4} animateOnMount>
                                <li>
                                    <Link
                                        href={item.href}
                                        onClick={e => handleNavClick(e, item.href)}
                                        className="relative py-2 group hover:text-[var(--secondary)] transition-colors duration-300"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary)] transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            </ScrollAnimation>
                        ))}
                    </ul>
                    <div className="hidden md:flex">
                        <Button variant="default" className="gap-2 group" asChild>
                            <Link href="#contact">
                                Réserver un appel
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </Button>
                    </div>
                    {/* Hamburger menu for mobile */}
                    <div className="flex md:hidden items-center">
                        <Button variant="default" size="icon" onClick={toggleNavbar} className="flex flex-col justify-center items-center group">
                            <span className="sr-only">Ouvrir le menu</span>
                            <span className={`w-6 h-0.5 rounded bg-white transition-transform duration-300 ${openNavbar ? 'translate-y-1.5 rotate-45' : ''}`} />
                            <span className={`w-6 h-0.5 rounded bg-white mt-1 transition-all duration-300 ${openNavbar ? 'scale-x-0 opacity-0' : ''}`} />
                            <span className={`w-6 h-0.5 rounded bg-white mt-1 transition-all duration-300 ${openNavbar ? '-translate-y-1.5 -rotate-45' : ''}`} />
                        </Button>
                    </div>
                </div>
            </header>
            {/* Mobile menu overlay */}
            {openNavbar && (
                <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-900/95 backdrop-blur-md">
                    <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100 dark:border-gray-800">
                        <Link href="/" className="flex items-center gap-x-3 text-xl font-bold text-[var(--foreground)] group" onClick={() => setOpenNavbar(false)}>
                            <span className="w-10 h-10 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.25)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-all duration-300 group-hover:scale-105">P</span>
                        </Link>
                        <Button variant="default" size="icon" onClick={toggleNavbar} className="flex flex-col justify-center items-center">
                            <span className="sr-only">Fermer le menu</span>
                            <span className={`w-6 h-0.5 rounded bg-white transition-transform duration-300 translate-y-1.5 rotate-45`} />
                            <span className={`w-6 h-0.5 rounded bg-white mt-1 transition-all duration-300 scale-x-0 opacity-0`} />
                            <span className={`w-6 h-0.5 rounded bg-white mt-1 transition-all duration-300 -translate-y-1.5 -rotate-45`} />
                        </Button>
                    </div>
                    <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-xl font-semibold">
                        {navItems.map((item, index) => (
                            <ScrollAnimation
                                key={item.label}
                                type="fadeUp"
                                delay={0.1 + index * 0.1}
                                duration={0.4}
                                animateOnMount
                            >
                                <Link
                                    href={item.href}
                                    onClick={e => handleNavClick(e, item.href)}
                                    className="relative py-2 group text-2xl hover:text-[var(--secondary)] transition-colors duration-300"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary)] transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </ScrollAnimation>
                        ))}
                        <ScrollAnimation type="fadeUp" delay={0.5} duration={0.4} animateOnMount>
                            <Button variant="default" className="gap-2 group mt-4 w-full max-w-xs" asChild>
                                <Link href="#contact" onClick={() => setOpenNavbar(false)}>
                                    Réserver un appel
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </Button>
                        </ScrollAnimation>
                    </nav>
                </div>
            )}
        </>
    )
} 