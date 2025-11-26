"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { ArrowUpRight } from 'lucide-react'
import type LocomotiveScroll from 'locomotive-scroll'
import type { ScrollToTarget } from 'locomotive-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image";


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
        { label: 'Agence', href: '#agence' },
        { label: 'Expertise', href: '#expertise' },
        { label: 'Offres', href: '#offers' },
        { label: 'Contact', href: '#contact' }
    ]

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Si nous ne sommes pas sur la page d'accueil, on redirige vers la page d'accueil avec l'ancre
        if (window.location.pathname !== '/') {
            e.preventDefault();
            window.location.href = `/${href}`;
            return;
        }

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
                    <div>
                        <Link href="/" className="flex items-center gap-x-3 text-xl font-bold text-[var(--foreground)] group">
                            <div className="relative w-10 h-10 rounded-xl bg-[var(--secondary)] overflow-hidden flex items-center justify-center">
                                <Image
                                src="/logo.svg"
                                alt="Pryzm logo"
                                fill
                                sizes="40px"
                                className="object-contain p-2"
                                priority
                                />
                            </div>
                            <span className="hidden md:inline group-hover:text-[var(--secondary)] transition-colors duration-300">Pryzm</span>
                        </Link>
                    </div>
                    <ul className="hidden md:flex gap-x-8 text-[var(--foreground)] uppercase tracking-tight text-sm items-center">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    onClick={e => handleNavClick(e, item.href)}
                                    className="relative py-2 group hover:text-[var(--secondary)] transition-colors duration-300"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 h-0.5 bg-[var(--secondary)] w-0 group-hover:w-full transition-all duration-300" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden md:flex">
                        <Button variant="default" className="gap-2 group" asChild>
                            <Link href="/call">
                                Réserver un appel
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                    {/* Hamburger menu for mobile */}
                    <div className="flex md:hidden items-center">
                        <Button variant="default" size="icon" onClick={toggleNavbar} className="flex flex-col justify-center items-center group">
                            <span className="sr-only">Ouvrir le menu</span>
                            <motion.span
                                className="w-6 h-0.5 rounded bg-white"
                                animate={{
                                    rotate: openNavbar ? 45 : 0,
                                    y: openNavbar ? 6 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="w-6 h-0.5 rounded bg-white mt-1"
                                animate={{
                                    scale: openNavbar ? 0 : 1,
                                    opacity: openNavbar ? 0 : 1
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="w-6 h-0.5 rounded bg-white mt-1"
                                animate={{
                                    rotate: openNavbar ? -45 : 0,
                                    y: openNavbar ? -6 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            />
                        </Button>
                    </div>
                </div>
            </header>
            {/* Mobile menu overlay */}
            <AnimatePresence>
                {openNavbar && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex flex-col bg-white backdrop-blur-md"
                    >
                        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
                            <div>
                                <Link href="/" className="flex items-center gap-x-3 text-xl font-bold text-[var(--foreground)] group" onClick={() => setOpenNavbar(false)}>
                                    <span className="w-10 h-10 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.25)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-all duration-300">
                                        P
                                    </span>
                                </Link>
                            </div>
                            <Button variant="default" size="icon" onClick={toggleNavbar} className="flex flex-col justify-center items-center">
                                <span className="sr-only">Fermer le menu</span>
                                <motion.span
                                    className="w-6 h-0.5 rounded bg-white"
                                    animate={{
                                        rotate: 45,
                                        y: 6
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="w-6 h-0.5 rounded bg-white mt-1"
                                    animate={{
                                        scale: 0,
                                        opacity: 0
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="w-6 h-0.5 rounded bg-white mt-1"
                                    animate={{
                                        rotate: -45,
                                        y: -6
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                            </Button>
                        </div>
                        <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-xl font-semibold">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    <Link
                                        href={item.href}
                                        onClick={e => handleNavClick(e, item.href)}
                                        className="relative py-2 group text-2xl hover:text-[var(--secondary)] transition-colors duration-300"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 h-0.5 bg-[var(--secondary)] w-0 group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </div>
                            ))}
                            <div>
                                <Button variant="default" className="gap-2 group mt-4 w-full max-w-xs" asChild>
                                    <Link href="/call" onClick={() => setOpenNavbar(false)}>
                                        Réserver un appel
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
} 