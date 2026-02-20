/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-left': 'slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in': 'fadeIn 0.8s ease forwards',
            },
            keyframes: {
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-60px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideRight: {
                    '0%': { opacity: '0', transform: 'translateX(60px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F'
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}
