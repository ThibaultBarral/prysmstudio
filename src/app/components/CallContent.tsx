"use client"

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import TestimonialsSlider from './TestimonialsSlider';
import { CheckCircle2, Star, Rocket } from 'lucide-react';
import CalInlineEmbed from './CalInlineEmbed';

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

export default function CallContent() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "creation-site-web" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <main className="min-h-screen pt-24 pb-12 px-4">

            {/* Section calendrier + offres */}
            <section className="container mx-auto px-4 pb-8 flex flex-col lg:flex-row gap-8">
                {/* Calendrier */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-1 min-w-[340px]"
                >
                    <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)]">Réservez votre appel</h2>
                    <CalInlineEmbed />
                </motion.div>

                {/* Offres */}
                <div className="flex-1 flex flex-col gap-6">
                    {offers.map((offer, i) => (
                        <motion.div
                            key={offer.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`relative bg-white rounded-2xl transition-all duration-300 border p-6 group
                                ${offer.popular
                                    ? 'shadow-xl border-[var(--secondary)]/20 hover:shadow-2xl hover:border-[var(--secondary)]/40'
                                    : 'shadow-sm hover:shadow-xl border-gray-100'}`}
                        >
                            {offer.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--secondary)] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg w-max z-10">Le choix des entrepreneurs</span>
                            )}
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`p-2 rounded-lg ${offer.popular ? 'bg-[var(--secondary)] text-white' : 'text-[var(--secondary)] bg-[var(--secondary)]/10'}`}>
                                    <offer.icon className="w-5 h-5" />
                                </div>
                                <h3 className={`text-lg font-bold ${offer.popular ? 'text-[var(--secondary)]' : 'text-[var(--foreground)]'}`}>{offer.title}</h3>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{offer.subtitle}</p>
                            <ul className="space-y-2 mb-4">
                                {offer.highlights.slice(0, 4).map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                                        <CheckCircle2 className={`w-4 h-4 ${offer.popular ? 'text-[var(--secondary)]' : 'text-[var(--secondary)]'}`} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {offer.highlights.length > 4 && (
                                <p className="text-sm text-gray-500 mb-4">+ {offer.highlights.length - 4} autres fonctionnalités</p>
                            )}
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-[var(--foreground)]">{offer.highlights.find(h => h.includes('Livraison'))}</span>
                                <span className="text-sm font-semibold text-[var(--secondary)]">{offer.cta}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section témoignages */}
            <section className="container mx-auto px-4 pb-16">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-3xl mx-auto">
                    <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">Ce qu&apos;en disent nos clients</h3>
                    <TestimonialsSlider />
                </div>
            </section>
        </main>
    );
} 