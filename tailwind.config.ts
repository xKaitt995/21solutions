import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FFFFFF",
                surface: "#F3F4F6", // gray-100
                "surface-highlight": "#E5E7EB", // gray-200
                text: {
                    primary: "#111827", // gray-900
                    secondary: "#4B5563", // gray-600
                },
                accent: {
                    cyber: "#0891B2", // Cyan-600 (Darker for light mode visibility)
                    ai: "#7C3AED", // Violet-600
                    infra: "#EA580C", // Orange-600
                },
                brand: {
                    core: "#2563EB", // Royal Blue
                },
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "sans-serif"],
                display: ["var(--font-space)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
