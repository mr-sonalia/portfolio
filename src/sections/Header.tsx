"use client";
import { Container } from "@/components";
import { useState } from "react";

const colorThemes = [
	{ accent: "#FF6B35", accentHover: "#FF5722", secondary: "#004E89", secondaryHover: "#003D6B" },
	{ accent: "#A855F7", accentHover: "#9333EA", secondary: "#EC4899", secondaryHover: "#DB2777" },
	{ accent: "#06B6D4", accentHover: "#0891B2", secondary: "#3B82F6", secondaryHover: "#2563EB" },
	{ accent: "#F59E0B", accentHover: "#D97706", secondary: "#EF4444", secondaryHover: "#DC2626" },
	{ accent: "#10B981", accentHover: "#059669", secondary: "#14B8A6", secondaryHover: "#0D9488" },
	{ accent: "#EC4899", accentHover: "#DB2777", secondary: "#8B5CF6", secondaryHover: "#7C3AED" },
	{ accent: "#EF4444", accentHover: "#DC2626", secondary: "#F97316", secondaryHover: "#EA580C" },
];

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const randomizeTheme = () => {
		const theme = colorThemes[Math.floor(Math.random() * colorThemes.length)];
		document.documentElement.style.setProperty("--color-accent", theme.accent);
		document.documentElement.style.setProperty("--color-accent-hover", theme.accentHover);
		document.documentElement.style.setProperty("--color-secondary", theme.secondary);
		document.documentElement.style.setProperty("--color-secondary-hover", theme.secondaryHover);
	};

	const navItems = [
		{ href: "#work-experience", label: "WORK" },
		{ href: "#projects", label: "PROJECTS" },
		{ href: "#contact", label: "CONTACT" },
	];

	return (
		<header className="sticky top-0 z-[100] w-full bg-brutal-white dark:bg-brutal-gray-900 border-b-3 border-brutal-black dark:border-brutal-white backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
			<Container>
				<nav className="flex items-center justify-between h-20">
					{/* Brutal Logo */}
					<button
						onClick={randomizeTheme}
						className="font-black text-2xl tracking-tighter hover:text-theme-accent transition-brutal cursor-pointer"
						aria-label="Home">
						YS
					</button>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-3">
						{navItems.map((item, idx) => (
							<a
								key={item.href}
								href={item.href}
								className="px-6 py-3 font-bold text-sm border-3 border-brutal-black dark:border-brutal-white hover:bg-theme-accent hover:text-white transition-brutal rounded-lg shadow-brutal hover:shadow-neo-brutal-accent hover:-translate-y-1 dither-hover"
								style={{ transform: `rotate(${idx % 2 === 0 ? -0.5 : 0.5}deg)` }}>
								{item.label}
							</a>
						))}
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden p-3 border-3 border-brutal-black dark:border-brutal-white font-black hover:bg-theme-accent hover:text-white transition-brutal rounded-lg shadow-brutal hover:shadow-neo-brutal-accent"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu"
						aria-expanded={mobileMenuOpen}>
						{mobileMenuOpen ? "✕" : "☰"}
					</button>
				</nav>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden py-4 border-t-3 border-brutal-black dark:border-brutal-white animate-slide-in">
						<div className="flex flex-col gap-3">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="p-4 font-bold text-base border-3 border-brutal-black dark:border-brutal-white hover:bg-theme-accent hover:text-white transition-brutal rounded-lg shadow-brutal hover:shadow-neo-brutal-accent dither-hover"
									onClick={() => setMobileMenuOpen(false)}>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</Container>
		</header>
	);
};

export { Header };


