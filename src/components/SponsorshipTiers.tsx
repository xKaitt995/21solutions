"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/utils/cn";

const tiers = [
    {
        name: "Impulso",
        price: "Inversión Semilla",
        description: "Para empresas que buscan visibilidad en el ecosistema técnico.",
        features: [
            "Logo en sitio web (Sección Alianzas)",
            "Mención en nota de prensa de lanzamiento",
            "Acceso prioritario a eventos Q1"
        ],
        highlight: false,
        color: "border-gray-700",
    },
    {
        name: "Estratégico",
        price: "Colaboración Técnica",
        description: "Para organizaciones que requieren integración de soluciones.",
        features: [
            "Todo lo de Impulso",
            "Workshop exclusivo de Diagnóstico 360°",
            "Logo destacado en materiales impresos",
            "Acceso directo a los Fundadores"
        ],
        highlight: false,
        color: "border-accent-infra",
    },
    {
        name: "Visión 21",
        price: "Socio Fundador",
        description: "Máxima exclusividad. Co-creación de la estrategia tecnológica.",
        features: [
            "Todo lo de Estratégico",
            "Advisory Board Seat (1 año)",
            "Branding exclusivo 'Presented by'",
            "First-look a soluciones Beta Ciber/IA",
            "Cena privada trimestral con socios"
        ],
        highlight: true,
        color: "border-brand-core",
    },
];

export default function SponsorshipTiers() {
    return (
        <section className="py-24 bg-background relative" id="alianzas">
            <div className="absolute inset-0 bg-surfce/20" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Únete al Lanzamiento</h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Buscamos socios visionarios para definir el estándar de la consultoría tecnológica de la próxima década.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "relative p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full",
                                tier.highlight
                                    ? "bg-surface border-brand-core shadow-[0_0_50px_rgba(255,255,255,0.1)] scale-105 z-10"
                                    : "bg-background border-surface-highlight hover:border-gray-600"
                            )}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-core text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                    Más Recomendado
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-text-primary mb-2">{tier.name}</h3>
                            <p className="text-lg font-medium text-accent-cyber mb-4">{tier.price}</p>
                            <p className="text-text-secondary text-sm mb-8">{tier.description}</p>

                            <div className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent-cyber flex-shrink-0 mt-0.5" />
                                        <span className="text-text-secondary text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={cn(
                                "w-full py-3 px-6 rounded-lg font-bold transition-colors",
                                tier.highlight
                                    ? "bg-white text-black hover:bg-gray-200"
                                    : "bg-surface border border-gray-700 text-white hover:bg-gray-800"
                            )}>
                                Contactar para detalles
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
