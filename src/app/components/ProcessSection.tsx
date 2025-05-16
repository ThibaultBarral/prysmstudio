"use client"

import { Lightbulb, PenTool, Code2, Rocket, CheckCircle2, LucideIcon } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'

const processSteps = [
    {
        title: 'Découverte',
        description: 'Nous analysons vos besoins et objectifs pour comprendre parfaitement votre projet.',
        icon: Lightbulb,
        color: 'text-[var(--secondary)]'
    },
    {
        title: 'Design',
        description: 'Création d\'une identité visuelle unique et d\'interfaces intuitives.',
        icon: PenTool,
        color: 'text-[var(--secondary)]'
    },
    {
        title: 'Développement',
        description: 'Développement agile avec des technologies modernes et performantes.',
        icon: Code2,
        color: 'text-[var(--secondary)]'
    },
    {
        title: 'Lancement',
        description: 'Tests approfondis et déploiement sécurisé de votre solution.',
        icon: Rocket,
        color: 'text-[var(--secondary)]'
    }
]

const ProcessStep = ({ step, index }: { step: typeof processSteps[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
            }}
            className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
        >
            {/* Contenu */}
            <motion.div
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                    />
                    <div className="relative">
                        <motion.div
                            className={`${step.color} mb-6 p-3 rounded-xl bg-opacity-10 inline-block`}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                        >
                            <step.icon className="w-6 h-6" />
                        </motion.div>
                        <motion.h3
                            className="text-2xl font-semibold mb-4 text-[var(--foreground)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.2 }}
                        >
                            {step.title}
                        </motion.h3>
                        <motion.p
                            className="text-gray-500 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.2 }}
                        >
                            {step.description}
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Point de connexion */}
            <motion.div
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-100 shadow-sm"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.3 + index * 0.2
                }}
                whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                }}
            >
                <CheckCircle2 className={`w-6 h-6 ${step.color}`} />
            </motion.div>

            {/* Espace vide pour l'alternance */}
            <div className="flex-1" />
        </motion.div>
    )
}

const ProcessSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="flipIn" className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Notre Processus</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Une approche méthodique et transparente pour transformer vos idées en réalité
                    </p>
                </ScrollAnimation>

                <div className="relative">
                    {/* Ligne de connexion animée */}
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--secondary)] -translate-x-1/2 hidden lg:block"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                    />

                    <div className="space-y-12 lg:space-y-0">
                        {processSteps.map((step, index) => (
                            <ProcessStep key={step.title} step={step} index={index} />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.8,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="mt-16 text-center"
                >
                    <motion.div
                        className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm border border-gray-100"
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <p className="text-lg text-gray-500 max-w-2xl">
                            Notre processus collaboratif garantit une communication transparente et des résultats exceptionnels à chaque étape de votre projet.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default ProcessSection 