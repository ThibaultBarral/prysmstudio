"use client"

import { motion } from 'framer-motion'

export default function MentionsLegalesContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <main className="min-h-screen pt-32 pb-12 px-4">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
                        <p className="text-gray-600 mb-4">
                            Pryzm<br />
                            20 rue Ramonet<br />
                            33000 Bordeaux<br />
                            Email : contact@pryzm.agency
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
                        <p className="text-gray-600">
                            Ce site est hébergé par :<br />
                            Vercel Inc.<br />
                            340 S Lemon Ave #4133<br />
                            Walnut, CA 91789<br />
                            États-Unis
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
                        <p className="text-gray-600">
                            L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Protection des données personnelles</h2>
                        <p className="text-gray-600">
                            Conformément à la loi &quot;Informatique et Libertés&quot; du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant.
                        </p>
                    </section>
                </div>
            </main>
        </motion.div>
    )
} 