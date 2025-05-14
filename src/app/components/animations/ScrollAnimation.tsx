"use client"

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

type AnimationType = 'fadeUp' | 'fadeIn' | 'slideIn' | 'scaleUp' | 'stagger'

interface ScrollAnimationProps {
    children: ReactNode
    type?: AnimationType
    delay?: number
    className?: string
    duration?: number
    once?: boolean
    animateOnMount?: boolean
}

const variants: Record<AnimationType, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    slideIn: {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    },
    stagger: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
}

const ScrollAnimation = ({
    children,
    type = 'fadeUp',
    delay = 0,
    className = '',
    duration = 0.6,
    once = true,
    animateOnMount = false
}: ScrollAnimationProps) => {
    return (
        <motion.div
            initial="hidden"
            animate={animateOnMount ? "visible" : undefined}
            whileInView={!animateOnMount ? "visible" : undefined}
            viewport={{ once, margin: "-100px" }}
            transition={{ duration, delay }}
            variants={variants[type]}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default ScrollAnimation 