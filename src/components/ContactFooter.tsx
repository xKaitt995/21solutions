"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function ContactFooter() {
    return (
        <footer className="bg-surface relative pt-24 pb-12 overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyber via-brand-core to-accent-infra" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left Column: CTA */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                            Escribe el Futuro <br /> con Nosotros
                        </h2>
                        <p className="text-lg text-text-secondary max-w-md">
                            El dossier de &quot;Socio Fundador&quot; contiene detalles estratégicos que no publicamos en abierto. Solicítalo hoy.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 border border-text-secondary/30 rounded-lg text-text-secondary hover:text-white hover:border-white transition-colors">
                                Agendar Llamada
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.form
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-text-secondary">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-background border border-surface-highlight rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-brand-core transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-text-secondary">Empresa</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full bg-background border border-surface-highlight rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-brand-core transition-colors"
                                    placeholder="Tech Corp"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email Corporativo</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-background border border-surface-highlight rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-brand-core transition-colors"
                                placeholder="john@techcorp.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="interest" className="text-sm font-medium text-text-secondary">Nivel de Interés</label>
                            <select
                                id="interest"
                                className="w-full bg-background border border-surface-highlight rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-brand-core transition-colors"
                            >
                                <option value="" disabled selected>Seleccionar opción</option>
                                <option value="impulso">Socio Impulso</option>
                                <option value="estrategico">Socio Estratégico</option>
                                <option value="vision">Socio Visión 21</option>
                            </select>
                        </div>

                        <button className="w-full py-4 bg-gradient-to-r from-accent-cyber via-accent-ai to-accent-infra text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                            Solicitar Dossier Privado
                        </button>
                    </motion.form>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-surface-highlight flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-2xl font-bold tracking-tighter">
                        <span className="text-white">21</span>
                        <span className="text-text-secondary ml-1">solutions</span>
                    </div>

                    <div className="text-text-secondary text-sm">
                        contacto@21solutions.tech
                    </div>

                    <div className="flex gap-4">
                        {[1, 2, 3].map((i) => (
                            <a key={i} href="#" className="p-2 bg-surface-highlight rounded-full text-text-secondary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    <div className="text-text-secondary/50 text-xs">
                        © 2026 21 solutions. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
