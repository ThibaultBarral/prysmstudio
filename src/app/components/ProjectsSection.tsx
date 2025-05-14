"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'

const projects = [
    {
        title: 'E-commerce Premium',
        description: 'Plateforme de vente en ligne haut de gamme avec expérience utilisateur optimisée.',
        image: '/images/project1.jpg',
        category: 'E-commerce',
        link: '#'
    },
    {
        title: 'Application Mobile',
        description: 'Application mobile native pour la gestion de services professionnels.',
        image: '/images/project2.jpg',
        category: 'Mobile',
        link: '#'
    },
    {
        title: 'Site Vitrine',
        description: 'Site web moderne pour une marque de luxe avec animations fluides.',
        image: '/images/project3.jpg',
        category: 'Web Design',
        link: '#'
    }
]

const ProjectsSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="fadeUp" className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Nos Réalisations</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Découvrez nos projets qui allient créativité et performance technique
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ScrollAnimation key={project.title} type="fadeUp" delay={index * 0.2}>
                            <Link href={project.link} className="group block">
                                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                    {/* Image du projet */}
                                    <div className="relative h-[300px] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Contenu */}
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-sm font-medium text-[var(--secondary)]">
                                                {project.category}
                                            </span>
                                            <ArrowUpRight className="w-5 h-5 text-[var(--foreground)] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-3 text-[var(--foreground)]">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>
                    ))}
                </div>

                <ScrollAnimation type="fadeUp" delay={0.6} className="mt-12 text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--foreground)]/90 transition-colors duration-300 shadow-sm hover:shadow-md"
                    >
                        Voir tous nos projets
                        <ExternalLink className="w-4 h-4" />
                    </Link>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default ProjectsSection 