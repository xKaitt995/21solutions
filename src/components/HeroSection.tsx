"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
            {/* Abstract Background Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyber/20 rounded-full blur-3xl mix-blend-screen animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-ai/20 rounded-full blur-3xl mix-blend-screen animate-pulse delay-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-infra/10 rounded-full blur-3xl mix-blend-screen animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Las Soluciones del Siglo XXI <br />
                    <span className="text-text-secondary">no se construyen en silos.</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Ciberseguridad, IA e Infraestructura convergen aquí. <br />
                    <span className="text-text-primary font-medium">21 solutions</span>, la nueva consultora fundada por tres expertos senior para definir el futuro tecnológico.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4"
                >
                    <button className="px-8 py-4 text-lg font-bold text-background bg-gradient-to-r from-accent-cyber via-accent-ai to-accent-infra rounded-full hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                        Conviértete en Socio Fundador
                    </button>
                    <p className="text-sm text-text-secondary/60 uppercase tracking-widest">
                        Oportunidad exclusiva de patrocinio • Lanzamiento Q1 2026
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
