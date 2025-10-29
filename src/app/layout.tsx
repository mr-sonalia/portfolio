import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://sonaliayash.in"),
	title: {
		default: "Yash Sonalia | Full Stack Software Engineer",
		template: "%s | Yash Sonalia",
	},
	description:
		"Full-stack software engineer with 2+ years of experience building scalable web applications using Next.js, TypeScript, Node.js, React, and AWS. Specialized in microservices and modern web development.",
	keywords: [
		"Yash Sonalia",
		"Full Stack Developer",
		"Software Engineer",
		"React Developer",
		"Next.js",
		"TypeScript",
		"Node.js",
		"AWS",
		"Microservices",
		"Frontend Developer",
		"Backend Developer",
		"Web Development",
		"MicroStrategy",
		"Portfolio",
	],
	authors: [{ name: "Yash Sonalia", url: "https://sonaliayash.in" }],
	creator: "Yash Sonalia",
	publisher: "Yash Sonalia",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://sonaliayash.in",
		title: "Yash Sonalia | Full Stack Software Engineer",
		description:
			"Full-stack software engineer with 2+ years of experience building scalable web applications using Next.js, TypeScript, Node.js, and AWS.",
		siteName: "Yash Sonalia Portfolio",
		images: [
			{
				url: "https://avatars.githubusercontent.com/u/53109900?v=4",
				width: 1200,
				height: 630,
				alt: "Yash Sonalia - Full Stack Software Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Yash Sonalia | Full Stack Software Engineer",
		description:
			"Full-stack software engineer with 2+ years of experience building scalable web applications.",
		images: ["https://avatars.githubusercontent.com/u/53109900?v=4"],
	},
	alternates: {
		canonical: "https://sonaliayash.in",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<body className={cn(spaceGrotesk.className, "antialiased")}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

