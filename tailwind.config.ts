import type { Config } from "tailwindcss";

const config: Config = {
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
			},
		},
	},
	plugins: [],
};
export default config;
