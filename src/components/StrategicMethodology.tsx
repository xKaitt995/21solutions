"use client";

import { motion } from "framer-motion";
import { Search, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { cn } from "@/utils/cn";

const steps = [
    {
        title: "Diagnóstico Táctico",
        description: "Analizamos tu realidad operativa y tecnológica. Identificamos cuellos de botella, brechas de seguridad y oportunidades ocultas de automatización.",
        icon: Search,
        color: "text-accent-cyber",
        border: "border-accent-cyber",
    },
    {
        title: "Blindaje de Infraestructura",
        description: "Antes de innovar, protegemos. Implementamos arquitecturas Zero Trust y endurecemos tus sistemas críticos para crear una base inquebrantable.",
        icon: ShieldCheck,
        color: "text-accent-infra",
        border: "border-accent-infra",
    },
    {
        title: "Aceleración con IA",
        description: "Desplegamos soluciones de Inteligencia Artificial pragmática. Automatizamos procesos repetitivos para liberar el talento humano de tu equipo.",
        icon: Zap,
        color: "text-accent-ai",
        border: "border-accent-ai",
    },
    {
        title: "Evolución Continua",
        description: "No entregamos un proyecto, establecemos un estándar. Monitorización proactiva y refinamiento constante para mantenerte a la vanguardia.",
        icon: TrendingUp,
        color: "text-brand-core",
        border: "border-brand-core",
    },
];

export default function StrategicMethodology() {
    return (
        <section className="py-24 bg-surface relative" id="como-pensamos">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="mb-20 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-display">Cómo Pensamos</h2>
                    <p className="text-xl text-text-secondary font-sans">
                        El Método 21: Transformamos complejidad en ventaja competitiva.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-accent-cyber via-accent-ai to-accent-infra opacity-20 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="group relative bg-background border border-surface-highlight p-6 rounded-2xl hover:border-gray-400 transition-colors shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-surface border",
                                step.border,
                                step.color
                            )}>
                                <step.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-text-primary mb-3 font-display">{step.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed font-sans">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
