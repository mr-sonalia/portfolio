import { cn } from "@/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
	spacing?: "sm" | "md" | "lg" | "xl";
}

const Section = forwardRef<HTMLElement, SectionProps>(
	({ className, spacing = "lg", children, ...props }, ref) => {
		const spacings = {
			sm: "py-12 md:py-16",
			md: "py-16 md:py-20",
			lg: "py-20 md:py-28",
			xl: "py-28 md:py-36",
		};

		return (
			<section ref={ref} className={cn(spacings[spacing], className)} {...props}>
				{children}
			</section>
		);
	},
);

Section.displayName = "Section";

const SectionHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, children, ...props }, ref) => (
		<div ref={ref} className={cn("mb-12 md:mb-16", className)} {...props}>
			{children}
		</div>
	),
);
SectionHeader.displayName = "SectionHeader";

const SectionTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	({ className, children, ...props }, ref) => (
		<h2
			ref={ref}
			className={cn("text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8", className)}
			{...props}>
			{children}
		</h2>
	),
);
SectionTitle.displayName = "SectionTitle";

const SectionDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, children, ...props }, ref) => (
		<p ref={ref} className={cn("text-base md:text-lg font-bold max-w-3xl", className)} {...props}>
			{children}
		</p>
	),
);
SectionDescription.displayName = "SectionDescription";

export { Section, SectionDescription, SectionHeader, SectionTitle };
