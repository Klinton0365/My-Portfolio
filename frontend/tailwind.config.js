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
    			auto: 'repeat(auto-fit, minmax(200px, 1fr))'
    		},
    		fontFamily: {
    			Outfit: [
    				'Outfit',
    				'sans-serif'
    			],
    			Ovo: [
    				'Ovo',
    				'serif'
    			]
    		},
    		animation: {
    			spin_slow: 'spin 6s linear infinite',
    			'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    			'slide-left': 'slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    			'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    			'fade-in': 'fadeIn 0.8s ease forwards'
    		},
    		keyframes: {
    			slideUp: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(40px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			slideLeft: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(-60px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			slideRight: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(60px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			fadeIn: {
    				'0%': {
    					opacity: '0'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			}
    		},
    		colors: {
    			lightHover: '#fcf4ff',
    			darkHover: '#2a004a',
    			darkTheme: '#11001F',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		boxShadow: {
    			black: '4px 4px 0 #000',
    			white: '4px 4px 0 #fff'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    darkMode: ['selector', "class"],
    plugins: [require("tailwindcss-animate")],
}
