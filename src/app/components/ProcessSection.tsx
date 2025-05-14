"use client"

import { Lightbulb, PenTool, Code2, Rocket, CheckCircle2 } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'

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

const ProcessSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="fadeUp" className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Notre Processus</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Une approche méthodique et transparente pour transformer vos idées en réalité
                    </p>
                </ScrollAnimation>

                <div className="relative">
                    {/* Ligne de connexion */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--secondary)] -translate-x-1/2 hidden lg:block" />

                    <div className="space-y-12 lg:space-y-0">
                        {processSteps.map((step, index) => (
                            <ScrollAnimation key={step.title} type="fadeUp" delay={index * 0.2}>
                                <div className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Contenu */}
                                    <div className="flex-1">
                                        <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="relative">
                                                <div className={`${step.color} mb-6 p-3 rounded-xl bg-opacity-10 inline-block transform transition-transform duration-300 group-hover:scale-110`}>
                                                    <step.icon className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">{step.title}</h3>
                                                <p className="text-gray-500 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Point de connexion */}
                                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-sm">
                                        <CheckCircle2 className={`w-6 h-6 ${step.color}`} />
                                    </div>

                                    {/* Espace vide pour l'alternance */}
                                    <div className="flex-1" />
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>

                <ScrollAnimation type="fadeUp" delay={0.8} className="mt-16 text-center">
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm border border-gray-100">
                        <p className="text-lg text-gray-500 max-w-2xl">
                            Notre processus collaboratif garantit une communication transparente et des résultats exceptionnels à chaque étape de votre projet.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default ProcessSection 