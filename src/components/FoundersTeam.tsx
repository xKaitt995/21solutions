"use client";

import { motion } from "framer-motion";
import { Server, Shield, Cloud, Linkedin } from "lucide-react";
import { cn } from "@/utils/cn";

const founders = [
    {
        name: "Leandro Narros Mejias",
        role: "Socio Fundador | Arquitectura de Sistemas, IA & Ingeniería de Software",
        icon: Server,
        color: "text-accent-infra", // #F97316
        borderColor: "border-accent-infra",
        hoverBg: "hover:bg-accent-infra/5",
        bio: "Diseñando la columna vertebral digital para la era de la IA. Leandro aporta un rigor operativo forjado en el sector defensa y estándares CCN STIC. Aplica principios de Ingeniería de Software y CI/CD para modernizar infraestructuras legacy hacia entornos ágiles. Actualmente, lidera la integración de capacidades de IA Generativa en la arquitectura corporativa.",
        expertise: ["IA Generativa", "Arquitectura Corporativa", "DevOps & CI/CD", "CCN STIC / Defensa"],
    },
    {
        name: "Antonio Arenal Armesto",
        role: "Socio Fundador | Ciberseguridad Ofensiva & Red Teaming",
        icon: Shield,
        color: "text-accent-cyber", // #00E5FF
        borderColor: "border-accent-cyber",
        hoverBg: "hover:bg-accent-cyber/5",
        bio: "Asegurando el mañana, desafiando el presente. Antonio aporta la mentalidad adversarial indispensable para la defensa moderna. Ingeniero informático con cert OSCP, lidera las operaciones de Red Teaming. Su enfoque va más allá de hallar fallos: simula cadenas de ataque completas bajo metodologías OWASP y PTES para validar la resiliencia real.",
        expertise: ["Red Teaming", "Hacking Ético (OSCP)", "Pentesting Avanzado", "Resiliencia & ISO 27001"],
    },
    {
        name: "Edward Herrera Galamba",
        role: "Socio Fundador | Transición Cloud Segura & Automatización",
        icon: Cloud,
        color: "text-accent-ai", // #8B5CF6
        borderColor: "border-accent-ai",
        hoverBg: "hover:bg-accent-ai/5",
        bio: "La inteligencia ofensiva convertida en defensa cloud blindada. Con disciplina operativa militar, Edward es el puente hacia la nube. Combina capacidades de Red Teaming (eJPTv2) con administración de sistemas para liderar una Transición a Cloud segura por diseño, utilizando la automatización para endurecer infraestructuras críticas.",
        expertise: ["Cloud Security", "Purple Teaming", "Automatización", "Entornos Acreditables"],
    },
    {
        name: "Tu Nombre Aquí", // Placeholder for user context if needed, but keeping 3 for now as requested.
        role: "Socio Estratégico | Visionario",
        icon: Cloud,
        color: "text-brand-core",
        borderColor: "border-brand-core",
        hoverBg: "hover:bg-brand-core/5",
        bio: "...",
        expertise: [],
        hidden: true
    }
].filter(f => !f.hidden);

export default function FoundersTeam() {
    return (
        <section className="py-24 bg-surface relative overflow-hidden" id="quien-somos">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-display">Quién Somos</h2>
                    <p className="mt-4 text-xl text-text-secondary font-sans">
                        Experiencia Senior. Enfoque boutique. Contacto directo.
                    </p>
                </motion.div>

                {/* Grid ajustado a 3 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            className={cn(
                                "group relative p-8 bg-background border border-surface-highlight rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl",
                                founder.borderColor,
                                founder.hoverBg,
                                "hover:border-opacity-100 border-opacity-60"
                            )}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Top Accent Line */}
                            <div className={cn("absolute top-0 left-0 w-full h-1 opacity-80", founder.color.replace("text-", "bg-"))} />

                            {/* Header: Icon & Name */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className={cn("p-3 rounded-lg bg-surface border border-opacity-20", founder.borderColor)}>
                                    <founder.icon className={cn("w-8 h-8", founder.color)} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-primary leading-tight font-display">{founder.name}</h3>
                                    <p className={cn("text-xs font-bold uppercase tracking-widest mt-1", founder.color)}>
                                        {founder.role.split("|")[0].trim()}
                                    </p>
                                </div>
                            </div>

                            {/* Full Role Description */}
                            <div className="mb-6">
                                <p className="text-sm text-text-secondary font-medium font-sans">
                                    {founder.role.split("|")[1]?.trim()}
                                </p>
                            </div>

                            {/* Bio */}
                            <div className="mb-8 flex-grow">
                                <p className="text-text-secondary leading-relaxed text-sm font-sans">
                                    {founder.bio}
                                </p>
                            </div>

                            {/* Core Expertise Badges */}
                            <div className="space-y-3">
                                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider opacity-60">Core Expertise</span>
                                <div className="flex flex-wrap gap-2">
                                    {founder.expertise.map((skill) => (
                                        <span
                                            key={skill}
                                            className={cn(
                                                "px-3 py-1 text-xs font-medium rounded-full border border-opacity-20 bg-surface",
                                                founder.borderColor,
                                                founder.color
                                            )}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Contact / LinkedIn CTA */}
                            <div className="mt-8 pt-6 border-t border-surface-highlight flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs text-text-secondary font-sans font-bold">Contactar en LinkedIn</span>
                                <Linkedin className="w-5 h-5 text-brand-core cursor-pointer hover:scale-110 transition-transform" />
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
