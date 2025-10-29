"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button
			aria-label="Toggle Dark Mode"
			title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			className="!fixed !bottom-6 !right-6 md:!bottom-8 md:!right-8 p-4 border-3 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black hover:bg-theme-accent hover:text-white transition-brutal font-black text-xl rounded-lg shadow-brutal dither-hover z-[200]"
			style={{ transform: "rotate(-1.5deg)" }}
			onClick={toggleTheme}>
			{theme === "dark" ? "☀" : "☾"}
		</button>
	);
};

