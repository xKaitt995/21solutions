"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-surface-highlight"
                    : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyber via-brand-core to-accent-infra font-display">
                        21
                    </span>
                    <span className="text-text-primary ml-1 font-display">solutions</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                {/* Updated Links to match new sections */}
                {["La Sinergia", "Metodologia", "El Equipo"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors font-sans"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <div className="flex items-center">
                <button className="hidden md:block px-5 py-2 text-sm font-semibold text-background bg-text-primary rounded-full hover:bg-gray-200 transition-colors font-sans">
                    Ser Socio Fundador
                </button>
            </div>
        </motion.nav>
    );
}
