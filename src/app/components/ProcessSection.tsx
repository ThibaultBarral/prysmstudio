"use client"

import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'
import { motion } from 'framer-motion'

const processSteps = [
    {
        number: '01',
        title: 'Découverte',
        description: 'Nous prenons le temps de comprendre votre activité, vos objectifs et votre vision.',
        icon: Lightbulb,
    },
    {
        number: '02',
        title: 'Design',
        description: 'Création du design sur-mesure : interface, identité visuelle et expérience utilisateur.',
        icon: PenTool,
    },
    {
        number: '03',
        title: 'Développement',
        description: 'Construction de votre site avec les technologies les plus performantes du marché.',
        icon: Code2,
    },
    {
        number: '04',
        title: 'Lancement',
        description: 'Tests, optimisations finales et mise en ligne. Votre site est prêt à performer !',
        icon: Rocket,
    }
]

const ProcessStep = ({ step, index }: { step: typeof processSteps[0], index: number }) => {
    return (
        <ScrollAnimation delay={index * 0.1}>
            <motion.div
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
            >
                <div className="flex items-start gap-6">
                    {/* Number */}
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center">
                            <span className="text-3xl font-black text-white">{step.number}</span>
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                        <h3 className="text-3xl md:text-4xl font-black mb-3 text-[var(--foreground)]">
                            {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {step.description}
                        </p>
                    </div>

                    {/* Icon */}
                    <div className="hidden md:block flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--secondary)]/10 flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-[var(--secondary)]" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </ScrollAnimation>
    )
}

const ProcessSection = () => {
    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-[var(--foreground)] tracking-tight">
                        Notre méthode
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Un processus ultra-rapide en 4 étapes. Votre site en 7 jours.
                    </p>
                </ScrollAnimation>

                <div className="max-w-5xl mx-auto space-y-16">
                    {processSteps.map((step, index) => (
                        <ProcessStep key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProcessSection 