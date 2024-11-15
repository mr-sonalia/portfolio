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
			keyframes: {
				// Fade in and come down from the top
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-100%)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				bounce: {
					"0%, 100%": {
						transform: "translateY(-25%) translateX(-50%)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
						transform: "translateY(0) translateX(-50%)",
						animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
					},
				},
			},
			animation: {
				"fade-in-down": "fade-in-down 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
				bounce: "bounce 1.6s infinite",
			},
			colors: {
				accent: {
					50: "#f0ebff",
					100: "#d6c1ff",
					200: "#bfa0ff",
					300: "#a97fff",
					400: "#9260ff",
					500: "#805ad5", // primary
					600: "#6c4eaa",
					700: "#573f7f",
					800: "#432f54",
					900: "#2f2030",
				},
				// #0F0F12 for night mode
				night: {
					500: "#0F0F12",
					400: "#1A1A1F",
				},
			},
			backgroundImage: {
				"background-grid": "url('/background-grid.png')",
			},
			scale: {
				"110": "1.1",
			},
			// cursor: {
			// 	default: "url('/cursors/link.cur'), auto",
			// 	pointer: "url('/cursors/link.cur'), pointer",
			// },
		},
	},
	plugins: [],
};
export default config;
