import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
	title: "Yash Sonalia",
	description: "Hi, I'm Yash Sonalia. I'm a software engineer.",
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
