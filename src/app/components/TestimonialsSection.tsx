"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'

const testimonials = [
    {
        name: "Rémi",
        role: "CEO, Tech Startup",
        image: "/testimonials/remi.jpg",
        content: "J'ai obtenu d'excellents retours de la part de mes prospects et clients. Le site est exactement ce dont j'avais besoin pour développer mon activité.",
    },
    {
        name: "Sophie",
        role: "Directrice Marketing",
        image: "/testimonials/sophie.jpg",
        content: "Une équipe exceptionnelle qui a su transformer notre vision en réalité. Le résultat dépasse nos attentes !",
    },
    {
        name: "Thomas",
        role: "Entrepreneur",
        image: "/testimonials/thomas.jpg",
        content: "Un travail remarquable qui a considérablement augmenté notre présence en ligne. Je recommande à 100%.",
    },
    {
        name: "Emma",
        role: "Fondatrice",
        image: "/testimonials/emma.jpg",
        content: "Une collaboration fluide et professionnelle. L'équipe est à l'écoute et très réactive.",
    }
]

export default function TestimonialsSection() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-[var(--foreground)] tracking-tight">
                        Ils parlent de
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-black text-[var(--foreground)] tracking-tight">
                        leur expérience
                    </h3>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <ScrollAnimation key={testimonial.name} delay={index * 0.1}>
                            <motion.div
                                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                                whileHover={{ y: -4 }}
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-[var(--secondary)] text-[var(--secondary)]" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-xl text-[var(--foreground)] leading-relaxed mb-8 flex-1 font-normal">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg text-[var(--foreground)]">{testimonial.name}</div>
                                        <div className="text-gray-500 text-sm">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}

