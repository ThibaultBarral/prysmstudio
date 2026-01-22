"use client"

import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'
import Image from 'next/image'

const PortfolioSection = () => {
    const clients = [
        {
            name: "Purpose Studio",
            tagline: "Barbershop & Salon de coiffure à Bordeaux",
            description: "Site vitrine moderne avec système de réservation et optimisation SEO locale.",
            category: "Site Vitrine",
            url: "https://purposestudio.fr/",
            logo: "/logos/purpose-studio.png",
            logoType: "image" as const,
            bgColor: "#1a1a1a",
            delay: 0.1
        },
        {
            name: "Annabelle Dutertre",
            tagline: "Décoratrice d'intérieur",
            description: "Portfolio élégant avec galerie photos immersive et design raffiné.",
            category: "Portfolio",
            url: "https://annabelledutertredecoration.com/",
            logo: "custom",
            logoType: "custom" as const,
            bgColor: "#c9a77c",
            delay: 0.2
        },
        {
            name: "Pinterest Vision",
            tagline: "Formation E-commerce",
            description: "Landing page haute conversion pour la formation Pinterest & dropshipping.",
            category: "Landing Page",
            url: "https://pinterest-vision.vercel.app",
            logo: "custom",
            logoType: "custom" as const,
            bgColor: "#ffffff",
            delay: 0.3
        }
    ]

    return (
        <section id="portfolio" className="py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] font-semibold text-sm mb-6 tracking-wide uppercase">
                        Clients conquis
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-[var(--foreground)] tracking-tight">
                        Ils nous font confiance
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Des entrepreneurs qui ont choisi <strong>Pryzm</strong> pour transformer leur présence digitale.
                    </p>
                </ScrollAnimation>

                {/* Grille de clients */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    {clients.map((client) => (
                        <ScrollAnimation key={client.name} delay={client.delay}>
                            <motion.a
                                href={client.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 block"
                                whileHover={{ y: -4 }}
                            >
                                {/* Logo */}
                                <div className="flex items-center justify-center mb-6">
                                    {client.logoType === "image" ? (
                                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white shadow-lg overflow-hidden p-3">
                                            <Image 
                                                src={client.logo}
                                                alt={`${client.name} logo`}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ) : client.logoType === "custom" && client.name === "Pinterest Vision" ? (
                                        <div className="flex items-center gap-1 text-2xl font-black tracking-tight">
                                            <div className="relative">
                                                <span className="absolute inset-0 bg-[#E60023] blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></span>
                                                <span className="relative text-[#E60023] group-hover:scale-110 transition-transform duration-300 inline-block">
                                                    Pinterest
                                                </span>
                                            </div>
                                            <span className="text-gray-900">Vision</span>
                                        </div>
                                    ) : client.logoType === "custom" && client.name === "Annabelle Dutertre" ? (
                                        <div className="flex flex-col group-hover:opacity-80 transition-opacity">
                                            <span className="text-2xl font-bold text-[hsl(0,0%,12%)] tracking-tight leading-8">
                                                Annabelle Dutertre
                                            </span>
                                            <span className="text-xs text-[hsl(0,0%,44%)] tracking-wider uppercase font-medium leading-4">
                                                Décoration d&apos;intérieur
                                            </span>
                                        </div>
                                    ) : (
                                        <div 
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg"
                                            style={{ backgroundColor: client.bgColor }}
                                        >
                                            {client.logo}
                                        </div>
                                    )}
                                </div>

                                {/* Nom & Catégorie */}
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-black mb-1 text-[var(--foreground)] group-hover:text-[var(--secondary)] transition-colors">
                                        {client.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium mb-3">
                                        {client.tagline}
                                    </p>
                                    <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                                        {client.category}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                                    {client.description}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center justify-center gap-2 text-[var(--secondary)] font-semibold text-sm group-hover:gap-3 transition-all">
                                    Voir le site
                                    <ExternalLink className="w-4 h-4" />
                                </div>
                            </motion.a>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Stats */}
                <ScrollAnimation delay={0.4}>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-3">
                                        <CheckCircle2 className="w-8 h-8 text-[var(--secondary)]" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-2">50+</div>
                                    <div className="text-gray-600 text-sm font-medium">Projets livrés</div>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-3">
                                        <Sparkles className="w-8 h-8 text-[var(--secondary)]" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-2">100%</div>
                                    <div className="text-gray-600 text-sm font-medium">Clients satisfaits</div>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-3">
                                        <ExternalLink className="w-8 h-8 text-[var(--secondary)]" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-2">5+</div>
                                    <div className="text-gray-600 text-sm font-medium">Années d&apos;expertise</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* CTA finale */}
                <ScrollAnimation delay={0.5}>
                    <div className="mt-16 text-center">
                        <div className="max-w-3xl mx-auto bg-gradient-to-br from-black to-gray-900 p-10 rounded-3xl text-white">
                            <div className="flex items-center justify-center mb-4">
                                <Sparkles className="w-8 h-8 text-[var(--secondary)]" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black mb-4">
                                Rejoignez nos clients conquis
                            </h3>
                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                Un site qui performe, qui convertit, et qui vous ressemble.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--secondary)] text-white rounded-xl font-semibold hover:bg-[var(--secondary)]/90 transition-all hover:scale-105"
                            >
                                Démarrer mon projet
                                <Sparkles className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default PortfolioSection
