"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        year: "Q1 2026",
        title: "Lanzamiento Oficial",
        description: "Presentación de la marca y primeros socios fundadores.",
        active: true,
    },
    {
        year: "Q2 2026",
        title: "Primeros Casos de Éxito",
        description: "Publicación de whitepapers conjuntos con clientes piloto.",
        active: false,
    },
    {
        year: "2027",
        title: "Referencia Boutique",
        description: "Expansión a mercados internacionales y certificación 'Big 4' quality.",
        active: false,
    },
];

export default function RoadmapWidget() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="vision">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Hacia dónde vamos</h2>
                </div>

                <div className="relative">
                    {/* Horizontal Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-highlight -translate-y-1/2 hidden md:block" />

                    {/* Vertical Line Mobile */}
                    <div className="absolute top-0 left-4 h-full w-0.5 bg-surface-highlight md:hidden" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={item.year}
                                className="relative pl-12 md:pl-0 md:pt-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                {/* Dot */}
                                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent-cyber z-10 shadow-[0_0_10px_rgba(0,229,255,0.5)]" />

                                <div className="md:text-center">
                                    <span className="text-accent-cyber font-mono font-bold">{item.year}</span>
                                    <h3 className="text-xl font-bold text-text-primary mt-2 mb-2">{item.title}</h3>
                                    <p className="text-text-secondary text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
