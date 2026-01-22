"use client"

import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/Button'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'

const offers = [
    {
        title: 'Site Vitrine',
        price: 'À partir de 1 490€',
        description: 'Transformez votre expertise en clients grâce à une présence web professionnelle.',
        highlights: [
            'Design moderne & responsive',
            'Textes optimisés SEO',
            'Référencement Google My Business',
            'Hébergement rapide et sécurisé',
            'Formulaire de contact intégré',
            'Support email & WhatsApp',
            '2 révisions incluses',
            'Livraison en 7 jours',
        ],
        cta: 'Démarrer',
        popular: false,
    },
    {
        title: 'Site Complet',
        price: 'À partir de 2 990€',
        description: 'Démarquez-vous de la concurrence avec une identité digitale unique et percutante.',
        highlights: [
            'Tout du Site Vitrine',
            'Stratégie digitale personnalisée',
            'Logo & charte graphique complète',
            'Galeries, animations & formulaires avancés',
            'SEO avancé + Google Analytics',
            'Formation à la gestion du site',
            'Support prioritaire 7j/7',
            'Révisions illimitées',
            'Livraison en 10 jours',
        ],
        cta: 'Développer',
        popular: true,
    },
    {
        title: 'Sur-mesure',
        price: 'Sur devis',
        description: 'Une solution 100% personnalisée pour des projets ambitieux et des besoins spécifiques.',
        highlights: [
            'Tout du Site Complet',
            'Développement sur-mesure',
            'E-commerce & paiement en ligne',
            'Espace membre & connexion',
            'API & intégrations tierces',
            'Applications web complexes',
            'Maintenance & évolutions',
            'Accompagnement dédié',
        ],
        cta: 'Discutons-en',
        popular: false,
    },
]

const OfferCard = ({ offer, index }: { offer: typeof offers[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.1} className="h-full">
            <motion.div
                className={`relative flex flex-col h-full bg-white rounded-3xl transition-all duration-300 border p-8 md:p-10 group ${offer.popular
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
                    className={`w-full text-lg ${offer.popular
                            ? 'bg-black hover:bg-[var(--secondary)] text-white'
                            : 'bg-black hover:bg-[var(--secondary)]'
                        }`}
                    size="lg"
                    asChild
                >
                    <a
                        href="https://wa.me/33675976932?text=Hello%2C%20j%27aimerais%20%C3%A9changer%20avec%20vous"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {offer.cta}
                    </a>
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
                        Choisissez l&apos;offre qui correspond à vos besoins.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {offers.map((offer, i) => (
                        <OfferCard offer={offer} index={i} key={offer.title} />
                    ))}
                </div>

                <ScrollAnimation delay={0.3}>
                    <p className="text-center text-gray-600 mt-12 text-lg">
                        Paiement en 2, 3 ou 4 fois sans frais.
                        <br />
                        <a href="#contact" className="text-[var(--secondary)] font-semibold hover:underline">
                            Besoin d&apos;un devis personnalisé ?
                        </a>
                    </p>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default OffersSection 