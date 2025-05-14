"use client"

import Image from 'next/image'
import { Users, Target, Award, Briefcase } from 'lucide-react'
import ScrollAnimation from './animations/ScrollAnimation'

const AgencySection = () => {
    return (
        <section id="agence" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <ScrollAnimation type="fadeUp" className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Notre Agence</h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Une équipe passionnée dédiée à la création d&apos;expériences numériques exceptionnelles
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollAnimation type="slideIn" className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/agency.jpg"
                            alt="Notre équipe au travail"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            priority
                        />
                    </ScrollAnimation>

                    <div className="space-y-8">
                        <ScrollAnimation type="scaleUp" delay={0.2}>
                            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="text-blue-500 mb-6 p-3 rounded-xl bg-blue-500/10 inline-block transform transition-transform duration-300 group-hover:scale-110">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Notre Vision</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Nous croyons en la puissance de la technologie pour transformer les idées en réalité.
                                        Notre mission est de créer des solutions numériques innovantes qui répondent aux besoins
                                        de nos clients tout en dépassant leurs attentes.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation type="scaleUp" delay={0.3}>
                            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="text-purple-500 mb-6 p-3 rounded-xl bg-purple-500/10 inline-block transform transition-transform duration-300 group-hover:scale-110">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Notre Approche</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Nous combinons expertise technique et créativité pour développer des solutions
                                        sur mesure. Notre processus collaboratif garantit que chaque projet est
                                        parfaitement aligné avec vos objectifs.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation type="stagger" className="grid grid-cols-2 gap-6">
                            <div className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative text-center">
                                    <div className="text-[var(--secondary)] mb-4 p-3 rounded-xl bg-[var(--secondary)]/10 inline-block transform transition-transform duration-300 group-hover:scale-110">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div className="text-3xl font-bold text-[var(--foreground)] mb-2">10+</div>
                                    <div className="text-gray-500">Années d&apos;expérience</div>
                                </div>
                            </div>

                            <div className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative text-center">
                                    <div className="text-emerald-500 mb-4 p-3 rounded-xl bg-emerald-500/10 inline-block transform transition-transform duration-300 group-hover:scale-110">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div className="text-3xl font-bold text-[var(--foreground)] mb-2">100+</div>
                                    <div className="text-gray-500">Projets réalisés</div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AgencySection 