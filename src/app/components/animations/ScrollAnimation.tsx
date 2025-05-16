"use client"

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

type AnimationType = 'fadeUp' | 'fadeIn' | 'slideIn' | 'scaleUp' | 'stagger' | 'rotateIn' | 'bounceIn' | 'flipIn' | 'slideUp' | 'slideDown'

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    },
    slideIn: {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    },
    stagger: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    },
    rotateIn: {
        hidden: { opacity: 0, rotate: -15, scale: 0.9 },
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    },
    bounceIn: {
        hidden: { opacity: 0, scale: 0.3, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        }
    },
    flipIn: {
        hidden: { opacity: 0, rotateX: 90, scale: 0.8 },
        visible: {
            opacity: 1,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    },
    slideUp: {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    },
    slideDown: {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
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
            whileHover={type === 'scaleUp' ? { scale: 1.05 } : undefined}
            whileTap={type === 'scaleUp' ? { scale: 0.95 } : undefined}
        >
            {children}
        </motion.div>
    )
}

export default ScrollAnimation 