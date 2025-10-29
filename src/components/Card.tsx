import { cn } from "@/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "elevated";
	hoverable?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, variant = "default", hoverable = false, children, ...props }, ref) => {
		const baseStyles = "rounded-xl border-3 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-gray-900 transition-brutal dither-hover";

		const variants = {
			default: "shadow-brutal",
			elevated: "shadow-brutal-lg",
		};

		const hoverStyles = hoverable ? "hover:shadow-neo-brutal-accent hover:-translate-y-1 cursor-pointer" : "";

		return (
			<div
				ref={ref}
				className={cn(baseStyles, variants[variant], hoverStyles, className)}
				{...props}>
				{children}
			</div>
		);
	},
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("p-6 border-b-2 border-brutal-gray-200 dark:border-brutal-gray-800", className)} {...props} />
	),
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3
			ref={ref}
			className={cn("text-2xl font-black uppercase tracking-tight leading-none", className)}
			{...props}
		/>
	),
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<p
			ref={ref}
			className={cn("text-sm font-bold mt-2", className)}
			{...props}
		/>
	),
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn("p-6", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("flex items-center p-6 border-t-2 border-brutal-gray-200 dark:border-brutal-gray-800", className)} {...props} />
	),
);
CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
