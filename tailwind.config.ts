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
