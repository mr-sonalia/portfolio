import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
	title: "Yash Sonalia, Full Stack SDE",
	description:
		"Namaste, I'm a full-stack software engineer with ~2 years of experience.",
	authors: { name: "Yash Sonalia", url: "https://sonaliayash.in" },
	applicationName: "Yash Sonalia's Portfolio",
	category: "Portfolio",
	keywords: [
		"Yash Sonalia",
		"Portfolio",
		"Software Engineer",
		"Full Stack Developer",
		"Web Developer",
		"Frontend Developer",
		"Backend Developer",
		"Tech Lead",
		"SDE",
		"React",
		"Next.js",
		"Tailwind CSS",
		"TypeScript",
		"Node.js",
		"Express.js",
		"MongoDB",
		"AWS",
		"Docker",
		"Kubernetes",
		"Git",
		"GitHub",
	],
	robots: "index, follow",
	themeColor: "#805ad5",
	openGraph: {
		title: "Yash Sonalia",
		description:
			"Namaste, I'm a full-stack software engineer with ~2 years of experience.",
		images: [
			{
				url: "https://avatars.githubusercontent.com/u/53109900?v=4",
				width: 1200,
				height: 630,
				alt: "Yash Sonalia",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en-IN">
			<body className={cn(spaceGrotesk.className, "bg-white")}>{children}</body>
		</html>
	);
}
