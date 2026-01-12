"use client"

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

function Counter({ from, to }: { from: number; to: number }) {
    const count = useMotionValue(from)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, {
                duration: 2,
                ease: "easeOut"
            })
            return controls.stop
        }
    }, [isInView, count, to])

    return (
        <motion.span ref={ref} className="tabular-nums">
            {rounded}
        </motion.span>
    )
}

export default function StatsCounter() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Pattern d'arrière-plan */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-block mb-4">
                        <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                            + de{' '}
                            <span className="relative">
                                <Counter from={0} to={50} />
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-3 bg-[var(--secondary)]"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </span>
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        entreprises
                        <br />
                        nous font confiance.
                    </h2>
                </motion.div>
            </div>
        </section>
    )
}

