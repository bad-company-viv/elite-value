/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#C5A059",
                "primary-dark": "#B08D45",
                "background-light": "#FAF9F6",
                "background-dark": "#1C1C1E",
                "surface-light": "#FFFFFF",
                "surface-dark": "#2C2C2E",
                "text-main-light": "#1A1A1A",
                "text-main-dark": "#E5E5E5",
                "text-sub-light": "#555555",
                "text-sub-dark": "#A1A1AA",
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                body: ["Lato", "sans-serif"],
            },
            boxShadow: {
                soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                gold: '0 4px 14px 0 rgba(197, 160, 89, 0.39)',
                'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
        },
    },
    plugins: [],
}
