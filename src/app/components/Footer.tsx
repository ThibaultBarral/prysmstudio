"use client"

import Link from 'next/link'
import Image from "next/image"
import { MessageCircle } from 'lucide-react'

export default function Footer() {
    const scrollToSection = (sectionId: string) => {
        const section = document.querySelector(sectionId)
        if (section && window.locomotive) {
            window.locomotive.scrollTo(section as HTMLElement, { offset: -80, duration: 800, disableLerp: true })
        }
    }

    return (
        <footer className="w-full bg-black text-white py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-x-3 text-2xl font-black group mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[var(--secondary)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/logo-pryzm.svg"
                                alt="Pryzm logo"
                                    width={28}
                                    height={28}
                            />
                            </div>
                        <span className="group-hover:text-[var(--secondary)] transition-colors duration-300">Pryzm</span>
                    </Link>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Votre agence digitale pour créer des sites web qui convertissent.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Navigation</h3>
                        <ul className="space-y-3">
                            <li>
                                <button onClick={() => scrollToSection('#services')} className="text-gray-400 hover:text-[var(--secondary)] transition-colors">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('#agence')} className="text-gray-400 hover:text-[var(--secondary)] transition-colors">
                                    Agence
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('#offers')} className="text-gray-400 hover:text-[var(--secondary)] transition-colors">
                                    Offres
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('#contact')} className="text-gray-400 hover:text-[var(--secondary)] transition-colors">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <address className="not-italic">
                        <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Contact</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/call" className="text-gray-400 hover:text-[var(--secondary)] transition-colors">
                                    Réserver un appel
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/33675976932?text=Hello%2C%20j%27aimerais%20%C3%A9changer%20avec%20vous"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-[#25D366] transition-colors"
                                    itemProp="telephone"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>+33 6 75 97 69 32</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@pryzm.agency"
                                    className="text-gray-400 hover:text-[var(--secondary)] transition-colors"
                                    itemProp="email"
                                >
                                    contact@pryzm.agency
                                </a>
                            </li>
                            <li className="text-gray-400" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                <span itemProp="addressLocality">Bordeaux</span>, <span itemProp="addressCountry">France</span>
                            </li>
                        </ul>
                    </address>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                        <p>© {new Date().getFullYear()} Pryzm. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="hover:text-[var(--secondary)] transition-colors">
                            Mentions légales
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 