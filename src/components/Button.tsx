import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "primary", size = "md", children, ...props }, ref) => {
		const baseStyles =
			"inline-flex items-center justify-center font-bold uppercase tracking-tight border-3 transition-brutal dither-hover rounded-lg shadow-brutal hover:shadow-neo-brutal-accent hover:-translate-y-1";

	const variants = {
		primary: "bg-theme-accent text-white border-brutal-black dark:border-brutal-white hover:bg-theme-accent",
		secondary: "bg-brutal-secondary text-white border-brutal-black dark:border-brutal-white hover:bg-brutal-secondary-hover",
		outline: "bg-transparent border-brutal-black dark:border-brutal-white hover:bg-theme-accent hover:text-white",
	};		const sizes = {
			sm: "text-xs px-4 py-2",
			md: "text-sm px-6 py-3",
			lg: "text-base px-8 py-4",
		};

		return (
			<button
				ref={ref}
				className={cn(baseStyles, variants[variant], sizes[size], className)}
				{...props}>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";

export { Button };
