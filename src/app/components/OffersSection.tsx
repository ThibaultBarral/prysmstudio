"use client"

import { CheckCircle2, Star, Rocket } from 'lucide-react'
import { Button } from '@/components/Button'
import ScrollAnimation from './animations/ScrollAnimation'
import Link from 'next/link'

const offers = [
    {
        title: 'Site Vitrine Professionnel',
        subtitle: 'Votre première présence sur internet, idéale pour vous faire connaître et attirer de nouveaux clients.',
        highlights: [
            'Analyse de votre activité et de vos besoins',
            'Design moderne adapté mobile et ordinateur',
            'Textes rédigés pour attirer vos clients',
            'Référencement sur Google pour être trouvé facilement',
            'Site rapide et facile à utiliser',
            'Mise en page soignée et professionnelle',
            'Support par email et chat',
            '2 modifications incluses',
            'Livraison en 7 jours',
        ],
        cta: 'Démarrer mon projet',
        popular: false,
        icon: Rocket,
    },
    {
        title: 'Site Web Complet',
        subtitle: 'Une solution complète pour développer votre activité en ligne avec toutes les fonctionnalités dont vous avez besoin.',
        highlights: [
            'Tout ce qui est inclus dans le Site Vitrine',
            'Conseils personnalisés pour votre présence en ligne',
            'Image de marque professionnelle',
            'Logo et identité visuelle sur mesure',
            'Fonctionnalités supplémentaires (blog, boutique en ligne, etc.)',
            'Référencement Google complet',
            'Support prioritaire 7j/7 par téléphone',
            'Modifications illimitées',
            'Livraison en 14 jours',
        ],
        cta: 'Développer mon site',
        popular: true,
        icon: Star,
    },
]

const OfferCard = ({ offer, index }: { offer: typeof offers[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.05} className="h-full">
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
                <Button className={`w-full mt-auto ${offer.popular ? 'bg-[var(--secondary)] hover:bg-[var(--secondary)]/90' : ''}`} size="lg" asChild>
                    <Link href="/call">
                        {offer.cta}
                    </Link>
                </Button>
            </div>
        </ScrollAnimation>
    )
}

const OffersSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">Des sites web sur-mesure pour développer votre activité</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Que vous soyez artisan, commerçant, professionnel libéral ou entrepreneur, nous créons votre site internet professionnel à Bordeaux et partout en France. Simple, efficace et adapté à vos besoins.
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