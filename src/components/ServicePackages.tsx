"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/utils/cn";

const packages = [
    {
        name: "Despegue Digital",
        price: "Consultoría Inicial",
        description: "Evaluación de madurez y hoja de ruta para PYMES que inician su digitalización.",
        features: [
            "Auditoría de Ciberseguridad Básica",
            "Optimización de Infraestructura Cloud",
            "Roadmap de Automatización (IA)",
            "Soporte técnico nivel 2"
        ],
        highlight: false,
        color: "border-gray-700",
    },
    {
        name: "Aceleración 21",
        price: "Transformación Integral",
        description: "Para empresas medianas en fase de expansión que necesitan escalar.",
        features: [
            "Todo lo de Despegue",
            "Implementación de IA Generativa",
            "Hacking Ético y Test de Penetración",
            "CTO Fraccional (Asesoría mensual)"
        ],
        highlight: true,
        color: "border-brand-core", // Kept highlight here as it's likely the core offering
    },
    {
        name: "Enterprise Partner",
        price: "Solución Corporativa",
        description: "Integración total de sistemas para organizaciones complejas.",
        features: [
            "Arquitectura Zero Trust completa",
            "Modelos de IA a medida",
            "Infraestructura Híbrida / Edge",
            "Equipo dedicado 24/7"
        ],
        highlight: false,
        color: "border-accent-infra",
    },
];

export default function ServicePackages() {
    return (
        <section className="py-24 bg-background relative" id="planes">
            <div className="absolute inset-0 bg-surface/20" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-display">Planes de Transformación</h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-sans">
                        Soluciones adaptables diseñadas para crecer contigo. Desde la optimización básica hasta la innovación disruptiva.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "relative p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full",
                                pkg.highlight
                                    ? "bg-surface border-brand-core shadow-[0_0_50px_rgba(255,255,255,0.1)] scale-105 z-10"
                                    : "bg-background border-surface-highlight hover:border-gray-600"
                            )}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-core text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-sans">
                                    Opción Recomendada
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-text-primary mb-2 font-display">{pkg.name}</h3>
                            <p className="text-lg font-medium text-accent-cyber mb-4 font-sans">{pkg.price}</p>
                            <p className="text-text-secondary text-sm mb-8 font-sans">{pkg.description}</p>

                            <div className="space-y-4 mb-8 flex-grow">
                                {pkg.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent-cyber flex-shrink-0 mt-0.5" />
                                        <span className="text-text-secondary text-sm font-sans">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={cn(
                                "w-full py-3 px-6 rounded-lg font-bold transition-colors font-sans",
                                pkg.highlight
                                    ? "bg-white text-black hover:bg-gray-200"
                                    : "bg-surface border border-gray-700 text-white hover:bg-gray-800"
                            )}>
                                Solicitar Consultoría
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
