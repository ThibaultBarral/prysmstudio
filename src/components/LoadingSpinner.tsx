'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingSpinner() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 40); // 40ms * 100 = 4000ms (4 secondes)

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-8"
            >
                {/* Logo Pryzm stylisé */}
                <motion.div
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="w-10 h-10 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-shadow duration-300"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        P
                    </motion.span>
                </motion.div>

                {/* Compteur de chargement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-2"
                >
                    <motion.span className="text-white text-4xl font-light tracking-wider">
                        {progress}%
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-white text-sm font-light tracking-wider"
                    >
                        CHARGEMENT
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
} 