"use client";

import { useEffect, useState } from "react";

type ThemeColors = {
	accent: string;
	accentHover: string;
	secondary: string;
	secondaryHover: string;
};

const colorThemes: ThemeColors[] = [
	// Original Neo-brutalism
	{
		accent: "#FF6B35",
		accentHover: "#FF5722",
		secondary: "#004E89",
		secondaryHover: "#003D6B",
	},
	// Cyber Purple
	{
		accent: "#A855F7",
		accentHover: "#9333EA",
		secondary: "#EC4899",
		secondaryHover: "#DB2777",
	},
	// Ocean Blue
	{
		accent: "#06B6D4",
		accentHover: "#0891B2",
		secondary: "#3B82F6",
		secondaryHover: "#2563EB",
	},
	// Sunset
	{
		accent: "#F59E0B",
		accentHover: "#D97706",
		secondary: "#EF4444",
		secondaryHover: "#DC2626",
	},
	// Forest Green
	{
		accent: "#10B981",
		accentHover: "#059669",
		secondary: "#14B8A6",
		secondaryHover: "#0D9488",
	},
	// Neon Pink
	{
		accent: "#EC4899",
		accentHover: "#DB2777",
		secondary: "#8B5CF6",
		secondaryHover: "#7C3AED",
	},
	// Fire Red
	{
		accent: "#EF4444",
		accentHover: "#DC2626",
		secondary: "#F97316",
		secondaryHover: "#EA580C",
	},
];

export const useThemeColors = () => {
	const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

	const randomizeTheme = () => {
		const newIndex = Math.floor(Math.random() * colorThemes.length);
		setCurrentThemeIndex(newIndex);
		applyTheme(colorThemes[newIndex]);
	};

	const applyTheme = (theme: ThemeColors) => {
		document.documentElement.style.setProperty("--color-accent", theme.accent);
		document.documentElement.style.setProperty("--color-accent-hover", theme.accentHover);
		document.documentElement.style.setProperty("--color-secondary", theme.secondary);
		document.documentElement.style.setProperty("--color-secondary-hover", theme.secondaryHover);
	};

	useEffect(() => {
		// Apply initial theme
		applyTheme(colorThemes[0]);
	}, []);

	return { randomizeTheme };
};
