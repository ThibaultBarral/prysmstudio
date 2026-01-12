"use client"

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/33675976932?text=Hello%2C%20j%27aimerais%20%C3%A9changer%20avec%20vous"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all duration-300 shadow-2xl hover:shadow-[#25D366]/50 group"
            aria-label="Contacter via WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </motion.a>
    )
}

