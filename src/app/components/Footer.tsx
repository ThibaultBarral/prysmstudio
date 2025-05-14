"use client"

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full py-8 border-t-[0.5px] border-t-gray-200 relative before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-gray-200 before:to-transparent">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-x-3 text-xl font-bold text-[var(--foreground)]">
                        <span className="w-10 h-10 rounded-xl bg-[var(--foreground)] flex items-center justify-center text-white font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-shadow duration-300">P</span>
                        Prysm
                    </Link>
                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Prysm. Tous droits réservés.</p>
                        <Link href="/mentions-legales" className="hover:text-[var(--foreground)] transition-colors">
                            Mentions légales
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 