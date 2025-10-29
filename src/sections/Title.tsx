import { Container } from "@/components";
import Image from "next/image";

const Title = () => {
	return (
		<section className="min-h-screen flex items-center py-8 md:py-12 relative overflow-hidden">
			<Container>
				<div className="max-w-6xl animate-fade-in space-y-4 md:space-y-6">
					<div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
						{/* Left Column: Name, Role, Photo */}
						<div className="space-y-4 md:space-y-6 flex-1">
							{/* Name */}
							<div className="relative">
								<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
									YASH
									<br />
									<span className="ml-4 md:ml-12">SONALIA</span>
								</h1>
								{/* <div className="absolute -right-4 top-1/2 w-12 md:w-24 h-2 bg-theme-accent"></div> */}
							</div>

							{/* Role */}
							<div className="inline-block border-3 border-brutal-black dark:border-brutal-white p-3 md:p-5 bg-theme-accent text-white rounded-xl shadow-brutal transition-brutal rotate-[-1deg]">
								<p className="text-lg md:text-2xl lg:text-3xl font-black uppercase tracking-tight">
									SOFTWARE ENGINEER
								</p>
							</div>

							{/* Photo - Desktop Hidden, Mobile/Tablet Visible */}
							<div className="lg:hidden">
								<div className="relative w-48 h-48 sm:w-56 sm:h-56 rotate-[2deg] group cursor-pointer">
									<div className="absolute inset-0 border-3 border-brutal-black dark:border-brutal-white rounded-xl bg-theme-accent translate-x-2 translate-y-2 transition-brutal group-hover:translate-x-3 group-hover:translate-y-3"></div>
									<div className="relative border-3 border-brutal-black dark:border-brutal-white rounded-xl shadow-brutal hover:shadow-neo-brutal-accent overflow-hidden transition-brutal dither-hover w-full h-full">
										<Image
											src="/personal-image.png"
											alt="Yash Sonalia"
											width={224}
											height={224}
											className="object-cover object-left w-full h-full scale-110"
											priority
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column: Photo - Desktop Only */}
						<div className="hidden lg:block flex-shrink-0">
							<div className="relative w-64 h-64 xl:w-80 xl:h-80 rotate-[2deg] group cursor-pointer">
								<div className="absolute inset-0 border-3 border-brutal-black dark:border-brutal-white rounded-xl bg-theme-accent translate-x-3 translate-y-3 transition-brutal group-hover:translate-x-4 group-hover:translate-y-4"></div>
								<div className="relative border-3 border-brutal-black dark:border-brutal-white rounded-xl shadow-brutal hover:shadow-neo-brutal-accent overflow-hidden transition-brutal dither-hover w-full h-full">
									<Image
										src="/personal-image.png"
										alt="Yash Sonalia"
										width={320}
										height={320}
										className="object-cover object-left w-full h-full scale-110"
										priority
									/>
								</div>
							</div>
						</div>
					</div>
					
					{/* Full Introduction */}
					<div className="max-w-4xl space-y-3 pl-3 md:pl-6 py-3 md:py-5 border-l-4 border-theme-accent rounded-r-lg bg-brutal-gray-50 dark:bg-brutal-gray-900/50">
						<p className="text-sm md:text-base lg:text-lg font-bold leading-relaxed text-brutal-gray-900 dark:text-brutal-gray-100">
							Software Engineer with <span className="font-black text-theme-accent">3+ years</span> of experience designing and scaling cloud-native systems. Proven impact in automation, reliability, and AI-driven workflows — <span className="font-black text-theme-accent">reducing deployment time, optimizing infrastructure cost, and improving data throughput by orders of magnitude</span>.
						</p>
						<p className="text-xs md:text-sm lg:text-base font-semibold leading-relaxed text-brutal-gray-700 dark:text-brutal-gray-300">
							<span className="font-black text-theme-accent">Top Skills:</span> AWS • Python • Docker • TypeScript • PostgreSQL • Kubernetes • Terraform
						</p>
						<p className="text-xs md:text-sm lg:text-base font-semibold leading-relaxed text-brutal-gray-700 dark:text-brutal-gray-300">
							Product POC and SME, adept at leading cross-functional initiatives and owning complex distributed systems in cloud, platform scalability, and automation practices.
						</p>
					</div>					{/* Social Links */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 max-w-3xl">
						{[
							{
								href: "https://docs.google.com/document/d/1MIelFdnQQho_2_WcLei22meWXWBv09wVleCV5dJmUz0/edit?usp=sharing",
								label: "RESUME",
								isExternal: true,
							},
							{
								href: "https://www.linkedin.com/in/yash-sonalia",
								label: "LINKEDIN",
								isExternal: true,
							},
							{ 
								href: "#contact", 
								label: "GET IN TOUCH →",
								isExternal: false,
								isAccent: true,
							},
						].map((social, idx) => (
							<a
								key={idx}
								target={social.isExternal ? "_blank" : undefined}
								rel={social.isExternal ? "noopener noreferrer" : undefined}
								href={social.href}
								className={`p-3 md:p-4 font-bold text-xs md:text-sm border-3 border-brutal-black dark:border-brutal-white ${
									social.isAccent 
										? "bg-theme-accent text-white hover:bg-brutal-black dark:hover:bg-brutal-white hover:text-white dark:hover:text-brutal-black" 
										: "hover:bg-theme-accent hover:text-white"
								} transition-brutal text-center rounded-lg shadow-brutal hover:shadow-neo-brutal-accent hover:-translate-y-1 dither-hover`}
								style={{ transform: `rotate(${(idx % 2 === 0 ? -1 : 1)}deg)` }}
								aria-label={social.label}>
								{social.label}
							</a>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export { Title };


