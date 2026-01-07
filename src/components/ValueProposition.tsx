"use client";

import { motion } from "framer-motion";

export default function ValueProposition() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="la-sinergia">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Visual Column */}
                <div className="relative h-[500px] flex items-center justify-center">
                    {/* Interactive Core */}
                    <div className="absolute z-20 w-32 h-32 bg-white rounded-full blur-2xl opacity-20 animate-pulse mix-blend-screen pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Circle 1: Cyber */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-accent-cyber/50 rounded-full flex items-center justify-center bg-accent-cyber/5 backdrop-blur-sm"
                        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="text-accent-cyber font-mono text-sm tracking-widest uppercase">Ciberseguridad</span>
                    </motion.div>

                    {/* Circle 2: AI */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-accent-ai/50 rounded-full flex items-center justify-center bg-accent-ai/5 backdrop-blur-sm"
                        animate={{ x: [0, -10, 0], y: [0, -10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <span className="text-accent-ai font-mono text-sm tracking-widest uppercase">Inteligencia Artificial</span>
                    </motion.div>

                    {/* Circle 3: Infra */}
                    <motion.div
                        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 border-2 border-accent-infra/50 rounded-full flex items-center justify-center bg-accent-infra/5 backdrop-blur-sm"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                        <span className="text-accent-infra font-mono text-sm tracking-widest uppercase">Infraestructura</span>
                    </motion.div>

                    {/* Convergence Center - The "21" Factor */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group cursor-default">
                        <div className="relative flex items-center justify-center w-24 h-24 bg-white/10 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/20 transition-all duration-500 hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            <span className="text-3xl font-bold text-white">21</span>
                        </div>
                    </div>
                </div>

                {/* Text Column */}
                <div className="space-y-8">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-text-primary leading-tight"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        ¿Por qué 21 solutions? <br />
                        <span className="text-text-secondary">¿Por qué ahora?</span>
                    </motion.h2>

                    <motion.div
                        className="space-y-6 text-lg text-text-secondary"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            El mercado está saturado de especialistas que operan en silos. Los expertos en seguridad bloquean la innovación, los arquitectos de datos ignoran la infraestructura física, y los ingenieros de sistemas temen a la automatización.
                        </p>
                        <p className="text-text-primary border-l-4 border-brand-core pl-4">
                            La integración nativa de seguridad, IA y &quot;hierro&quot; es la única vía para abordar los retos de complejidad exponencial del siglo XXI.
                        </p>
                        <p>
                            En 21 solutions, no &quot;colaboramos&quot; entre departamentos. <strong className="text-white">Somos una sola mente trinitaria</strong> diseñada para resolver problemas que ninguna consultora tradicional puede siquiera diagnosticar.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
