"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
    {
        name: "Remi",
        image: "/testimonials/remi.jpg",
        content: "J'ai obtenu d'excellents retours de la part de mes prospects et clients.",
    },
    {
        name: "Sophie",
        image: "/testimonials/sophie.jpg",
        content: "Une équipe exceptionnelle qui a su transformer notre vision en réalité.",
    },
    {
        name: "Thomas",
        image: "/testimonials/thomas.jpg",
        content: "Un travail remarquable qui a considérablement augmenté notre présence en ligne.",
    },
    {
        name: "Emma",
        image: "/testimonials/emma.jpg",
        content: "Une collaboration fluide et professionnelle.",
    }
]

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
    })
}

export default function TestimonialsSlider() {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(0)

    const slideChange = (newIndex: number) => {
        setDirection(newIndex > current ? 1 : -1)
        setCurrent(newIndex)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            slideChange((current + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [current])

    return (
        <div className="w-full min-w-fit max-w-lg mx-auto mt-2 relative">
            <div className="relative h-[200px] w-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.2 }
                        }}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                    >
                        <p className="text-center text-[15px] font-normal text-gray-500 leading-snug max-w-[340px] mb-1">
                            &ldquo;{testimonials[current].content}&rdquo;
                        </p>

                        <div className="flex items-center w-fit justify-between gap-8">
                            <div className="flex items-center gap-2">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm mb-1">
                                    <Image
                                        src={testimonials[current].image}
                                        alt={testimonials[current].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="font-semibold text-[15px] text-[var(--foreground)]">{testimonials[current].name}</span>
                            </div>
                            <div className="flex gap-0.5 justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[var(--secondary)] text-[var(--secondary)]/80" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
} 