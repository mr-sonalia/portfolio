import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "selector",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// Brutalist spacing
			spacing: {
				18: "4.5rem",
				88: "22rem",
				128: "32rem",
			},
			// Bold brutalist typography
			fontSize: {
				"2xs": ["0.625rem", { lineHeight: "1", fontWeight: "700" }],
				"3xl": ["1.875rem", { lineHeight: "1", fontWeight: "900" }],
				"4xl": ["2.25rem", { lineHeight: "1", fontWeight: "900" }],
				"5xl": ["3rem", { lineHeight: "0.95", fontWeight: "900" }],
				"6xl": ["3.75rem", { lineHeight: "0.9", fontWeight: "900" }],
				"7xl": ["4.5rem", { lineHeight: "0.9", fontWeight: "900" }],
				"8xl": ["6rem", { lineHeight: "0.85", fontWeight: "900" }],
			},
			// Harsh brutalist animations - minimal, intentional
			keyframes: {
				"brutal-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"slide-brutal": {
					"0%": { transform: "translateX(-8px)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				"brutal-in": "brutal-in 0.2s ease-out",
				"slide-brutal": "slide-brutal 0.15s ease-out",
			},
			// Professional brutalist colors with neo-brutalism vibrancy
			colors: {
				brutal: {
					white: "#FFFFFF",
					black: "#0F0F0F",
					accent: {
						DEFAULT: "#FF6B35", // Neo-brutalism orange
						hover: "#FF5722",
						light: "#FF8A65",
					},
					secondary: {
						DEFAULT: "#004E89", // Neo-brutalism deep blue
						hover: "#003D6B",
					},
					tertiary: {
						DEFAULT: "#FFD23F", // Neo-brutalism yellow
						hover: "#FFC107",
					},
					success: {
						DEFAULT: "#06FFA5", // Neo-brutalism mint
						hover: "#00E676",
					},
					warning: {
						DEFAULT: "#FF006E", // Neo-brutalism magenta
						hover: "#D81B60",
					},
					gray: {
						50: "#FAFAFA",
						100: "#F5F5F5",
						200: "#EEEEEE",
						300: "#E0E0E0",
						400: "#BDBDBD",
						500: "#9E9E9E",
						600: "#757575",
						700: "#616161",
						800: "#424242",
						900: "#212121",
					},
				},
			},
			// Neo-brutalist shadows with color
			boxShadow: {
				brutal: "6px 6px 0 0 rgba(0, 0, 0, 0.8)",
				"brutal-sm": "3px 3px 0 0 rgba(0, 0, 0, 0.8)",
				"brutal-lg": "10px 10px 0 0 rgba(0, 0, 0, 0.8)",
				"brutal-hover": "8px 8px 0 0 var(--color-accent)",
				"neo-brutal": "8px 8px 0 0 rgba(0, 0, 0, 0.8)",
				"neo-brutal-accent": "8px 8px 0 0 var(--color-accent)",
				"neo-brutal-secondary": "8px 8px 0 0 var(--color-secondary)",
				"neo-brutal-yellow": "8px 8px 0 0 #FFD23F",
				"brutal-dark": "6px 6px 0 0 rgba(255, 255, 255, 0.1)",
				"brutal-dark-sm": "3px 3px 0 0 rgba(255, 255, 255, 0.1)",
				"brutal-dark-lg": "10px 10px 0 0 rgba(255, 255, 255, 0.1)",
				none: "none",
			},
			// Neo-brutalism rounded corners
			borderRadius: {
				none: "0",
				sm: "0.25rem",
				DEFAULT: "0.5rem",
				md: "0.75rem",
				lg: "1rem",
				xl: "1.5rem",
				"2xl": "2rem",
			},
			// Smooth transitions for neo-brutalism
			transitionDuration: {
				DEFAULT: "200ms",
				fast: "100ms",
			},
			// Professional border widths
			borderWidth: {
				DEFAULT: "1px",
				2: "2px",
				3: "3px",
				4: "4px",
			},
		},
	},
	plugins: [],
};
export default config;
