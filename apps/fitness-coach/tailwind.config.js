/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    charcoal: '#0d0d0f',
                    steel: '#1a1b1e',
                    neon: '#00f2ff',
                    muted: '#8e9196',
                    danger: '#ff4b4b',
                },
            },
            backgroundImage: {
                'cyber-grid': "radial-gradient(circle, rgba(0, 242, 255, 0.1) 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
};
