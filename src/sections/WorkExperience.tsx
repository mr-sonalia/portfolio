type WorkCardProps = {
	title: string;
	company: string;
	date: string;
	description: string;
};

const WorkCard = ({ title, company, date, description }: WorkCardProps) => {
	return (
		<div className="flex flex-col items-start justify-start w-full p-6 backdrop-blur-md dark:bg-night-400 rounded-sm border-solid border border-gray-200 dark:border-accent-800 shadow-sm hover:scale-[1.02] duration-150 ease-in-out">
			<h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-400">{title}</h2>
			<h3 className="text-lg font-semibold text-accent-500">{company}</h3>
			<p className="text-sm text-accent-500">{date}</p>
			<p className="text-sm max-w-lg mt-1 mb-3 text-gray-800 dark:text-gray-300 pt-2">
				{description}
			</p>
		</div>
	);
};

const WorkExperience = () => {
	const titlePart1 = "Work";
	const titlePart2 = "Experience";

	const workExperience = [
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
				"Enhanced inter-service communication efficiency by 90% through REST to async queues migration, reduced development time with pnpm workspaces monorepo, optimized server load with Node microservices, and collaborated for AI integration.",
		},
		{
			title: "Frontend SDE",
			company: "Neos Healthtech Pvt. Ltd.",
			date: "Aug 2022 - Nov 2022",
			description:
				"Accelerated development with Turborepo + pnpm for optimized micro-frontends. Employed advanced react-dom hydration for optimized PDFs. Built a scalable Datagrid, elastic search, paginations, modals with Styled Components and Framer animations. Developed API request builders for React Query.",
		},
		{
			title: "Frontend Developer (Intern)",
			company: "Credence Analytics",
			date: "Oct 2021 - Feb 2022",
			description:
				"Enhanced page-load performance and maintainability with latest ES standards; refactored class-based React to functional components for better readability. Implemented React micro-frontends.",
		}
	];

	return (
		<section className="container w-full pt-24" id="work-experience">
			<div className="mb-10">
				<h1 className="text-3xl font-bold text-gray-200 dark:text-gray-500 uppercase md:text-4xl lg:text-6xl text-left">
					{titlePart1.split("").map((char, idx) => (
						<span key={idx} className="hover:text-accent-500 ease-linear duration-50">
							{char}
						</span>
					))}
					<br />
					{titlePart2.split("").map((char, idx) => (
						<span key={idx} className="hover:text-accent-500 ease-linear duration-50">
							{char}
						</span>
					))}
				</h1>
				<p className="text-sm max-w-lg mb-3 text-gray-800 dark:text-gray-300 leading-6">
					I have had the opportunity to work with truly amazing people and companies!
				</p>
			</div>

			<div className="grid my-6  gap-2 md:grid-cols-2 md:gap-4">
				{workExperience.map((work, idx) => (
					<WorkCard key={idx} {...work} />
				))}
			</div>
		</section>
	);
};

export { WorkExperience };

