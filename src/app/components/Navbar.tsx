"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { ArrowUpRight } from 'lucide-react'
import type LocomotiveScroll from 'locomotive-scroll'
import type { ScrollToTarget } from 'locomotive-scroll'
import { motion, AnimatePresence } from 'framer-motion'

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
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed top-0 inset-x-0 z-50 h-20 flex items-center bg-white/80 backdrop-blur-md border-b border-gray-100"
            >
                <div className="mx-auto max-w-7xl w-full px-6 h-full flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Link href="/" className="flex items-center gap-x-3 text-xl font-bold text-[var(--foreground)] group">
                            <motion.span
                                className="w-10 h-10 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.25)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-all duration-300"
                                whileHover={{
                                    rotate: 5,
                                    scale: 1.1,
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                            >
                                P
                            </motion.span>
                            <span className="hidden md:inline group-hover:text-[var(--secondary)] transition-colors duration-300">Pryzm</span>
                        </Link>
                    </motion.div>
                    <ul className="hidden md:flex gap-x-8 text-[var(--foreground)] uppercase tracking-tight text-sm items-center">
                        {navItems.map((item, i) => (
                            <motion.li
                                key={item.label}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={e => handleNavClick(e, item.href)}
                                    className="relative py-2 group hover:text-[var(--secondary)] transition-colors duration-300"
                                >
                                    {item.label}
                                    <motion.span
                                        className="absolute bottom-0 left-0 h-0.5 bg-[var(--secondary)]"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                    <div className="hidden md:flex">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button variant="default" className="gap-2 group" asChild>
                                <Link href="#contact">
                                    Réserver un appel
                                    <motion.span
                                        animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                    </motion.span>
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                    {/* Hamburger menu for mobile */}
                    <div className="flex md:hidden items-center">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button variant="default" size="icon" onClick={toggleNavbar} className="flex flex-col justify-center items-center group">
                                <span className="sr-only">Ouvrir le menu</span>
                                <motion.span
                                    className="w-6 h-0.5 rounded bg-white"
                                    animate={{
                                        rotate: openNavbar ? 45 : 0,
                                        y: openNavbar ? 6 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="w-6 h-0.5 rounded bg-white mt-1"
                                    animate={{
                                        scale: openNavbar ? 0 : 1,
                                        opacity: openNavbar ? 0 : 1
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="w-6 h-0.5 rounded bg-white mt-1"
                                    animate={{
                                        rotate: openNavbar ? -45 : 0,
                                        y: openNavbar ? -6 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.header>
            {/* Mobile menu overlay */}
            <AnimatePresence>
                {openNavbar && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-900/95 backdrop-blur-md"
                    >
                        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100 dark:border-gray-800">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <Link href="/" className="flex items-center gap-x-3 text-xl font-bold text-[var(--foreground)] group" onClick={() => setOpenNavbar(false)}>
                                    <motion.span
                                        className="w-10 h-10 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.25)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-all duration-300"
                                        whileHover={{
                                            rotate: 5,
                                            scale: 1.1,
                                            transition: { type: "spring", stiffness: 400 }
                                        }}
                                    >
                                        P
                                    </motion.span>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button variant="default" size="icon" onClick={toggleNavbar} className="flex flex-col justify-center items-center">
                                    <span className="sr-only">Fermer le menu</span>
                                    <motion.span
                                        className="w-6 h-0.5 rounded bg-white"
                                        animate={{
                                            rotate: 45,
                                            y: 6
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.span
                                        className="w-6 h-0.5 rounded bg-white mt-1"
                                        animate={{
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.span
                                        className="w-6 h-0.5 rounded bg-white mt-1"
                                        animate={{
                                            rotate: -45,
                                            y: -6
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Button>
                            </motion.div>
                        </div>
                        <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-xl font-semibold">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={e => handleNavClick(e, item.href)}
                                        className="relative py-2 group text-2xl hover:text-[var(--secondary)] transition-colors duration-300"
                                    >
                                        {item.label}
                                        <motion.span
                                            className="absolute bottom-0 left-0 h-0.5 bg-[var(--secondary)]"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button variant="default" className="gap-2 group mt-4 w-full max-w-xs" asChild>
                                    <Link href="#contact" onClick={() => setOpenNavbar(false)}>
                                        Réserver un appel
                                        <motion.span
                                            animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                        >
                                            <ArrowUpRight className="w-4 h-4" />
                                        </motion.span>
                                    </Link>
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
} 