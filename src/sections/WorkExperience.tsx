import { Container, Section, SectionHeader, SectionTitle } from "@/components";

type WorkExperience = {
	title: string;
	company: string;
	date: string;
	description: string;
};

const WorkExperience = () => {
	const workExperience: WorkExperience[] = [
		{
			title: "Software Engineer (SWE)",
			company: "MicroStrategy Inc.",
			date: "Nov 2024 - Present",
			description:
				"Enhanced data fetching capabilities of analytics by reviewing the codebase and identifying issues in the AWS Lambda handler during an internal hackathon.",
		},
		{
			title: "Full-stack SDE",
			company: "Neos Healthtech Pvt. Ltd.",
			date: "Nov 2022 - Nov 2024",
			description:
				"Enhanced inter-service communication efficiency by 90% through REST to async queues migration, reduced development time with pnpm workspaces monorepo, optimized server load with Node microservices.",
		},
		{
			title: "Frontend SDE",
			company: "Neos Healthtech Pvt. Ltd.",
			date: "Aug 2022 - Nov 2022",
			description:
				"Accelerated development with Turborepo + pnpm for optimized micro-frontends. Employed advanced react-dom hydration for optimized PDFs. Built scalable Datagrid, elastic search, paginations.",
		},
		{
			title: "Frontend Developer (Intern)",
			company: "Credence Analytics",
			date: "Oct 2021 - Feb 2022",
			description:
				"Enhanced page-load performance with latest ES standards; refactored class-based React to functional components. Implemented React micro-frontends.",
		},
	];

	return (
		<Section id="work-experience" spacing="xl">
			<Container>
				<SectionHeader>
					<SectionTitle>WORK EXPERIENCE</SectionTitle>
				</SectionHeader>

				{/* Timeline container */}
				<div className="relative">
					{/* Vertical line */}
					<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-brutal-black dark:bg-brutal-white transform md:-translate-x-1/2 rounded-full opacity-30"></div>

					{/* Timeline items */}
					<div className="space-y-12">
						{workExperience.map((work, idx) => (
							<div
								key={idx}
								className={`relative flex flex-col md:flex-row gap-8 ${
									idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
								} animate-fade-in`}
								style={{ animationDelay: `${idx * 0.1}s` }}>
								{/* Timeline dot */}
								<div className="absolute left-0 md:left-1/2 w-6 h-6 bg-theme-accent border-4 border-brutal-white dark:border-brutal-gray-900 rounded-full transform -translate-x-2.5 md:-translate-x-3 z-10 shadow-brutal-sm"></div>

								{/* Content card */}
								<div className={`flex-1 ml-12 md:ml-0 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
									<div className="border-3 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-gray-900 p-6 rounded-xl shadow-brutal hover:shadow-neo-brutal-accent hover:-translate-y-1 transition-brutal dither-hover">
										{/* Date badge */}
										<div className="inline-block px-4 py-2 mb-4 text-xs font-bold bg-theme-accent text-white rounded-lg shadow-brutal-sm border-2 border-brutal-black dark:border-brutal-white">
											{work.date}
										</div>
										
										{/* Title and Company */}
										<h3 className="text-xl font-black uppercase mb-2">{work.title}</h3>
										<h4 className="text-base font-bold text-theme-accent mb-4">{work.company}</h4>
										
										{/* Description */}
										<p className="text-sm font-medium leading-relaxed text-brutal-gray-700 dark:text-brutal-gray-300">
											{work.description}
										</p>
									</div>
								</div>

								{/* Empty space for alternating layout on desktop */}
								<div className="hidden md:block flex-1"></div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
};

export { WorkExperience };


