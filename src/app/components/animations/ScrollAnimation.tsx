"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
    children: ReactNode
    type?: string
    delay?: number
    className?: string
    duration?: number
    once?: boolean
    animateOnMount?: boolean
}

const ScrollAnimation = ({
    children,
    type,
    delay = 0,
    className = '',
    duration = 0.4,
    once = true,
    animateOnMount = false
}: ScrollAnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={animateOnMount ? { opacity: 1 } : undefined}
            whileInView={!animateOnMount ? { opacity: 1 } : undefined}
            viewport={{ once, margin: "-50px" }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default ScrollAnimation 