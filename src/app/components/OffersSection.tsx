"use client"

import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/Button'
import ScrollAnimation from './animations/ScrollAnimation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const offers = [
    {
        title: 'Site Vitrine',
        price: '1 490€',
        description: 'Parfait pour vous faire connaître et attirer vos premiers clients.',
        highlights: [
            'Design moderne & responsive',
            'Textes optimisés SEO',
            'Référencement Google',
            'Site rapide et sécurisé',
            'Support email & chat',
            '2 révisions incluses',
            'Livraison en 7 jours',
        ],
        cta: 'Démarrer',
        popular: false,
    },
    {
        title: 'Site Complet',
        price: '2 990€',
        description: 'La solution complète pour développer votre activité en ligne.',
        highlights: [
            'Tout du Site Vitrine',
            'Stratégie digitale',
            'Logo & identité visuelle',
            'Fonctionnalités avancées',
            'SEO complet',
            'Support prioritaire 7j/7',
            'Révisions illimitées',
            'Livraison en 14 jours',
        ],
        cta: 'Développer',
        popular: true,
    },
]

const OfferCard = ({ offer, index }: { offer: typeof offers[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.1} className="h-full">
            <motion.div
                className={`relative flex flex-col h-full bg-white rounded-3xl transition-all duration-300 border p-8 md:p-10 group ${
                    offer.popular
                        ? 'shadow-2xl border-black scale-[1.02]'
                        : 'shadow-lg border-gray-200 hover:shadow-xl'
                }`}
                whileHover={{ y: offer.popular ? 0 : -8 }}
            >
                {offer.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-wide">
                        Populaire
                    </div>
                )}

                <div className="mb-6">
                    <h3 className="text-3xl font-black text-[var(--foreground)] mb-2">{offer.title}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-5xl font-black text-[var(--foreground)]">{offer.price}</span>
                    </div>
                    <p className="text-gray-600 text-lg">{offer.description}</p>
                </div>

                <div className="h-px bg-gray-200 my-6" />

                <ul className="flex-1 space-y-4 mb-8">
                    {offer.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[var(--foreground)]">
                            <div className="mt-1">
                                <CheckCircle2 className="w-5 h-5 text-[var(--secondary)]" />
                            </div>
                            <span className="text-lg">{item}</span>
                        </li>
                    ))}
                </ul>

                <Button
                    className={`w-full text-lg ${
                        offer.popular
                            ? 'bg-black hover:bg-[var(--secondary)] text-white'
                            : 'bg-black hover:bg-[var(--secondary)]'
                    }`}
                    size="lg"
                    asChild
                >
                    <Link href="/call">{offer.cta}</Link>
                </Button>
            </motion.div>
        </ScrollAnimation>
    )
}

const OffersSection = () => {
    return (
        <section id="offers" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-[var(--foreground)] tracking-tight">
                        Découvrez nos offres
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Choisissez l'offre qui correspond à vos besoins.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {offers.map((offer, i) => (
                        <OfferCard offer={offer} index={i} key={offer.title} />
                    ))}
                </div>

                <ScrollAnimation delay={0.3}>
                    <p className="text-center text-gray-600 mt-12 text-lg">
                        Paiement en 2, 3 ou 4 fois sans frais.
                        <br />
                        <a href="#contact" className="text-[var(--secondary)] font-semibold hover:underline">
                            Besoin d'un devis personnalisé ?
                        </a>
                    </p>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default OffersSection 