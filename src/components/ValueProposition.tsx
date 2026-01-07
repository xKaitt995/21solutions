"use client";

import { motion } from "framer-motion";

export default function ValueProposition() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="que-hacemos">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Visual Column */}
                <div className="relative h-[500px] flex items-center justify-center">
                    {/* Interactive Core */}
                    <div className="absolute z-20 w-32 h-32 bg-accent-cyber/10 rounded-full blur-2xl opacity-40 animate-pulse mix-blend-multiply pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Circle 1: Cyber */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-accent-cyber/50 rounded-full flex items-center justify-center bg-accent-cyber/5 backdrop-blur-sm"
                        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="text-accent-cyber font-mono text-sm tracking-widest uppercase font-bold">Ciberseguridad</span>
                    </motion.div>

                    {/* Circle 2: AI */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-accent-ai/50 rounded-full flex items-center justify-center bg-accent-ai/5 backdrop-blur-sm"
                        animate={{ x: [0, -10, 0], y: [0, -10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <span className="text-accent-ai font-mono text-sm tracking-widest uppercase font-bold">Inteligencia Artificial</span>
                    </motion.div>

                    {/* Circle 3: Infra */}
                    <motion.div
                        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 border-2 border-accent-infra/50 rounded-full flex items-center justify-center bg-accent-infra/5 backdrop-blur-sm"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                        <span className="text-accent-infra font-mono text-sm tracking-widest uppercase font-bold">Infraestructura</span>
                    </motion.div>

                    {/* Convergence Center - The "21" Factor */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group cursor-default">
                        <div className="relative flex items-center justify-center w-24 h-24 bg-surface rounded-full border border-surface-highlight shadow-xl hover:border-brand-core transition-all duration-500 hover:scale-110">
                            <span className="text-3xl font-bold text-text-primary font-display">21</span>
                        </div>
                    </div>
                </div>

                {/* Text Column */}
                <div className="space-y-8">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-text-primary leading-tight font-display"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Qué Hacemos
                    </motion.h2>

                    <motion.div
                        className="space-y-6 text-lg text-text-secondary font-sans"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            Tu evolución digital, <strong className="text-text-primary">sin fricción</strong>.
                        </p>
                        <p>
                            Las grandes consultoras ignoran a la mediana empresa, y los proveedores locales carecen de la profundidad técnica necesaria. Tu negocio merece ingeniería de nivel &quot;Big 4&quot; adaptada a tu escala.
                        </p>
                        <p className="text-text-primary border-l-4 border-brand-core pl-4 bg-surface/50 py-2">
                            Democratizamos el acceso a Ciberseguridad avanzada, IA operativa e Infraestructura resiliente.
                        </p>
                        <p>
                            En 21 solutions, nos convertimos en tu socio tecnológico estratégico. Te ayudamos a navegar la transición tecnológica con soluciones que se pagan solas a través de eficiencia y crecimiento.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
