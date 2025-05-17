"use client"

import { CheckCircle2, Star, Rocket } from 'lucide-react'
import { Button } from '@/components/Button'
import ScrollAnimation from './animations/ScrollAnimation'

const offers = [
    {
        title: 'Landing Page Impactante',
        subtitle: 'Votre première présence web professionnelle, parfaite pour démarrer ou tester votre marché.',
        highlights: [
            'Analyse de marché et positionnement',
            'Design moderne et responsive',
            'Contenu optimisé pour convertir',
            'Optimisation SEO de base',
            'Performance et rapidité optimale',
            'Animations élégantes',
            'Support par email et chat',
            '2 révisions incluses',
            'Livraison en 7 jours',
        ],
        cta: 'Démarrer mon projet',
        popular: false,
        icon: Rocket,
    },
    {
        title: 'Site Web Sur-Mesure',
        subtitle: 'Une solution web complète et évolutive pour développer votre activité.',
        highlights: [
            'Toutes les fonctionnalités de la Landing Page',
            'Stratégie digitale personnalisée',
            'Identité visuelle professionnelle',
            'Logo et charte graphique',
            'Fonctionnalités avancées (blog, e-commerce, etc.)',
            'Optimisation SEO complète',
            'Support prioritaire 7j/7 par téléphone',
            'Révisions illimitées',
            'Livraison en 14 jours',
        ],
        cta: 'Développer mon site',
        popular: true,
        icon: Star,
    },
]

const OfferCard = ({ offer, index }: { offer: typeof offers[0], index: number }) => {
    return (
        <ScrollAnimation type="flipIn" delay={index * 0.1} className="h-full">
            <div className={`relative flex flex-col h-full bg-white rounded-2xl transition-all duration-300 border p-8 group
                ${offer.popular
                    ? 'shadow-xl border-[var(--secondary)]/20 hover:shadow-2xl hover:border-[var(--secondary)]/40 scale-[1.02]'
                    : 'shadow-sm hover:shadow-xl border-gray-100'}`}>
                {offer.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--secondary)] text-white text-xs font-semibold px-6 py-2 w-max rounded-full shadow-lg z-10">Le choix des entrepreneurs</span>
                )}
                <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${offer.popular ? 'bg-[var(--secondary)] text-white' : 'text-[var(--secondary)] bg-[var(--secondary)]/10'}`}>
                        <offer.icon className="w-7 h-7" />
                    </div>
                    <h3 className={`text-2xl font-bold drop-shadow-sm ${offer.popular ? 'text-[var(--secondary)]' : 'text-[var(--foreground)]'}`}>{offer.title}</h3>
                </div>
                <p className="text-gray-500 mb-6 text-sm">{offer.subtitle}</p>
                <ul className="flex-1 space-y-3 mb-8">
                    {offer.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[var(--foreground)] text-base">
                            <CheckCircle2 className={`w-5 h-5 ${offer.popular ? 'text-[var(--secondary)]' : 'text-[var(--secondary)]'}`} />
                            {item.includes('Livraison') ? (
                                <span className="font-semibold">{item}</span>
                            ) : item}
                        </li>
                    ))}
                </ul>
                <Button className={`w-full mt-auto ${offer.popular ? 'bg-[var(--secondary)] hover:bg-[var(--secondary)]/90' : ''}`} size="lg">
                    {offer.cta}
                </Button>
            </div>
        </ScrollAnimation>
    )
}

const OffersSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="flipIn" className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">Des offres digitales sur-mesure pour révéler votre potentiel</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Pryzm accompagne les entrepreneurs et entreprises à Bordeaux et partout en France dans la création de sites web performants, élégants et adaptés à vos ambitions.
                    </p>
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {offers.map((offer, i) => (
                        <OfferCard offer={offer} index={i} key={offer.title} />
                    ))}
                </div>
                <p className="text-center text-gray-500 mt-10 text-sm">
                    Paiement unique possible en 2, 3 ou 4 fois sans frais.<br />
                    Vous avez un besoin spécifique ? <a href="#contact" className="text-[var(--secondary)] underline">Contactez Pryzm</a>
                </p>
            </div>
        </section>
    )
}

export default OffersSection 