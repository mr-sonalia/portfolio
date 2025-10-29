import { Container, Section } from "@/components";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Section id="contact" spacing="lg">
			<Container>
				<div className="flex flex-col gap-12">
					{/* Contact Section */}
					<div className="space-y-6">
						<h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
							LET&apos;S
							<br />
							CONNECT
						</h2>
						<div className="flex flex-col gap-3 max-w-xl">
							<a
								href="tel:+917044020012"
								className="p-4 border-3 border-brutal-black dark:border-brutal-white hover:bg-theme-accent hover:text-white transition-brutal font-black text-sm rounded-lg shadow-brutal hover:shadow-neo-brutal-accent hover:-translate-y-1 dither-hover"
								style={{ transform: "rotate(-0.5deg)" }}>
								PHONE: +91 704-402-0012
							</a>
							<a
								href="mailto:sonaliayash@gmail.com"
								className="p-4 border-3 border-brutal-black dark:border-brutal-white hover:bg-theme-accent hover:text-white transition-brutal font-black text-sm rounded-lg shadow-brutal hover:shadow-neo-brutal-accent hover:-translate-y-1 dither-hover"
								style={{ transform: "rotate(0.5deg)" }}>
								EMAIL: SONALIAYASH@GMAIL.COM
							</a>
						</div>
					</div>

					{/* Brutal divider */}
					<div className="h-2 bg-theme-accent"></div>

					{/* Copyright */}
					<div className="space-y-2">
						<p className="text-xs font-black uppercase">
							© 2022-{currentYear} YASH SONALIA
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export { Footer };

