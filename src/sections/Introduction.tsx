import { Container, Section } from "@/components";

const Introduction = () => {
	return (
		<Section id="about" spacing="xl">
			<Container size="lg">
				<div className="space-y-8">
					{/* Main content */}
					<div className="border-l-4 border-theme-accent pl-8 py-6 rounded-r-xl">
						<p className="text-xl md:text-2xl font-bold leading-relaxed text-brutal-gray-900 dark:text-brutal-gray-100">
							Experienced cloud and full-stack engineer with{" "}
							<span className="bg-theme-accent text-white px-3 py-1 font-black rounded-md border-2 border-brutal-black dark:border-brutal-white shadow-brutal-sm">3+ YEARS</span>{" "}
							of expertise in designing scalable cloud solutions, automating data pipelines, and optimizing infrastructure costs.
						</p>
						<p className="text-xl md:text-2xl font-bold leading-relaxed text-brutal-gray-900 dark:text-brutal-gray-100 mt-6">
							Proficient in{" "}
							<span className="font-black text-theme-accent">AWS</span>,{" "}
							<span className="font-black text-theme-accent">Azure</span>,{" "}
							<span className="font-black text-theme-accent">Docker</span>,{" "}
							<span className="font-black text-theme-accent">Kubernetes</span>,{" "}
							<span className="font-black text-theme-accent">Terraform</span>, and{" "}
							<span className="font-black text-theme-accent">Python</span>.
						</p>
						<p className="text-xl md:text-2xl font-bold leading-relaxed text-brutal-gray-900 dark:text-brutal-gray-100 mt-6">
							Demonstrated success in reducing latency, improving system reliability, and driving cost-effective cloud architecture strategies.
						</p>
					</div>

					{/* Call to action */}
					<a 
						href="#contact"
						className="block border-3 border-brutal-black dark:border-brutal-white pl-8 py-6 rounded-xl bg-gradient-to-r from-brutal-secondary to-theme-accent shadow-brutal hover:shadow-neo-brutal-secondary hover:-translate-y-1 transition-brutal dither-hover cursor-pointer">
						<p className="text-xl md:text-2xl font-bold leading-relaxed text-white">
							Reach out to me if you want to grab a cup of{" "}
							<span className="bg-brutal-white text-brutal-black px-3 py-1 font-black rounded-md border-2 border-brutal-black shadow-brutal-sm">COFFEE!</span>
						</p>
					</a>
				</div>
			</Container>
		</Section>
	);
};

export { Introduction };

