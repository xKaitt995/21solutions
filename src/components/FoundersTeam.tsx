"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Server } from "lucide-react";

const founders = [
    {
        name: "Ciberseguridad",
        role: "Socio Fundador",
        icon: Shield,
        color: "text-accent-cyber",
        borderColor: "border-accent-cyber",
        bgHover: "hover:bg-accent-cyber/5",
        description: "Defensa proactiva en un mundo de amenazas asimétricas. Arquitecturas Zero Trust que habilitan, no bloquean.",
    },
    {
        name: "Inteligencia Artificial",
        role: "Socio Fundador",
        icon: Brain,
        color: "text-accent-ai",
        borderColor: "border-accent-ai",
        bgHover: "hover:bg-accent-ai/5",
        description: "Modelos cognitivos integrados en el núcleo del negocio. IA soberana, explicable y orientada a ROI masivo.",
    },
    {
        name: "Infraestructura",
        role: "Socio Fundador",
        icon: Server,
        color: "text-accent-infra",
        borderColor: "border-accent-infra",
        bgHover: "hover:bg-accent-infra/5",
        description: "El 'hierro' del futuro. Computación de alto rendimiento, edge computing y resiliencia física absoluta.",
    },
];

export default function FoundersTeam() {
    return (
        <section className="py-24 bg-surface/30" id="el-equipo">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Los Arquitectos del Futuro</h2>
                    <p className="mt-4 text-xl text-text-secondary">Tres pilares. Una visión.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            className={`group relative p-8 bg-surface border border-surface-highlight rounded-2xl overflow-hidden transition-all duration-300 ${founder.bgHover} hover:border-opacity-50`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Top accent line */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${founder.borderColor.replace('border', 'bg')}`} />

                            <div className="mb-6">
                                <founder.icon className={`w-12 h-12 ${founder.color}`} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-bold text-text-primary">{founder.name}</h3>
                            <p className={`text-sm font-medium uppercase tracking-wider mb-4 ${founder.color}`}>{founder.role}</p>

                            <div className={`w-12 h-px ${founder.borderColor.replace('border', 'bg')} mb-6 opacity-30`} />

                            <p className="text-text-secondary leading-relaxed">
                                {founder.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
