"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export default function ContactFooter() {
    return (
        <footer className="bg-text-primary text-white relative pt-24 pb-12 overflow-hidden" id="contactenos">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyber via-brand-core to-accent-infra" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left Column: CTA */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-display">
                            Contáctenos
                        </h2>
                        <p className="text-lg text-gray-300 max-w-md font-sans">
                            Solicita un diagnóstico tecnológico gratuito. Descubre dónde estás y hasta dónde puedes llegar con 21 solutions.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 border border-white/30 rounded-lg text-white hover:bg-white hover:text-black transition-colors font-sans">
                                Agendar Videollamada
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
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 font-sans">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-core transition-colors font-sans"
                                    placeholder="Tu Nombre"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-400 font-sans">Empresa</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-core transition-colors font-sans"
                                    placeholder="Tu Empresa"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-400 font-sans">Email Corporativo</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-core transition-colors font-sans"
                                placeholder="nombre@empresa.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 font-sans">Mensaje</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-core transition-colors font-sans"
                                placeholder="¿En qué podemos ayudarte?"
                            />
                        </div>

                        <button className="w-full py-4 bg-gradient-to-r from-accent-cyber via-accent-ai to-accent-infra text-white font-bold rounded-lg hover:opacity-90 transition-opacity font-sans">
                            Enviar Mensaje
                        </button>
                    </motion.form>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-2xl font-bold tracking-tighter">
                        <span className="text-white font-display">21</span>
                        <span className="text-gray-400 ml-1 font-display">solutions</span>
                    </div>

                    <div className="text-gray-400 text-sm font-sans flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        contacto@21solutions.tech
                    </div>

                    <div className="flex gap-4">
                        {[1, 2, 3].map((i) => (
                            <a key={i} href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    <div className="text-gray-500 text-xs font-sans">
                        © 2026 21 solutions. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
