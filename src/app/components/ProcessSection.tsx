"use client"

import { Lightbulb, PenTool, Code2, Rocket, CheckCircle2 } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'

const processSteps = [
    {
        title: 'Échange et Écoute',
        description: 'Nous prenons le temps de comprendre votre activité, vos besoins et vos objectifs pour créer un site qui vous correspond.',
        icon: Lightbulb,
        color: 'text-[var(--secondary)]'
    },
    {
        title: 'Création du Design',
        description: 'Nous créons le design de votre site : couleurs, mise en page, logo. Tout est personnalisé pour refléter votre image.',
        icon: PenTool,
        color: 'text-[var(--secondary)]'
    },
    {
        title: 'Construction du Site',
        description: 'Nous construisons votre site internet avec les meilleurs outils pour qu\'il soit rapide, sécurisé et facile à utiliser.',
        icon: Code2,
        color: 'text-[var(--secondary)]'
    },
    {
        title: 'Mise en Ligne',
        description: 'Nous testons tout pour que tout fonctionne parfaitement, puis nous mettons votre site en ligne. Vous êtes prêt à accueillir vos clients !',
        icon: Rocket,
        color: 'text-[var(--secondary)]'
    }
]

const ProcessStep = ({ step, index }: { step: typeof processSteps[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.1} className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Contenu */}
            <div className="flex-1">
                <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="relative">
                        <div className={`${step.color} mb-6 p-3 rounded-xl bg-opacity-10 inline-block`}>
                            <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                            {step.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Point de connexion */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-100 shadow-sm">
                <CheckCircle2 className={`w-6 h-6 ${step.color}`} />
            </div>

            {/* Espace vide pour l'alternance */}
            <div className="flex-1" />
        </ScrollAnimation>
    )
}

const ProcessSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Notre Processus</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Un processus simple et clair, étape par étape, pour créer votre site internet professionnel
                    </p>
                </ScrollAnimation>

                <div className="relative">
                    {/* Ligne de connexion */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--secondary)] -translate-x-1/2 hidden lg:block" />

                    <div className="space-y-12 lg:space-y-0">
                        {processSteps.map((step, index) => (
                            <ProcessStep key={step.title} step={step} index={index} />
                        ))}
                    </div>
                </div>

                <ScrollAnimation delay={0.4} className="mt-16 text-center">
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm border border-gray-100">
                        <p className="text-lg text-gray-500 max-w-2xl">
                            Nous travaillons avec vous à chaque étape. Vous êtes informé de l'avancement et pouvez nous donner votre avis. Votre satisfaction est notre priorité.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default ProcessSection 