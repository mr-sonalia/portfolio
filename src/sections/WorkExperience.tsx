type WorkCardProps = {
	title: string;
	company: string;
	date: string;
	description: string;
};

const WorkCard = ({ title, company, date, description }: WorkCardProps) => {
	return (
		<div className="flex flex-col items-start justify-start w-full p-4 bg-gray-50 rounded-lg border-solid border border-gray-200">
			<h2 className="text-xl font-semibold text-gray-700">{title}</h2>
			<h3 className="text-lg font-semibold text-accent-500">{company}</h3>
			<p className="text-sm max-w-lg mt-1 mb-3 text-gray-800">{description}</p>
			<p className="text-sm text-accent-500">{date}</p>
		</div>
	);
};

const WorkExperience = () => {
	const titlePart1 = "Work";
	const titlePart2 = "Experience";

	const workExperience = [
		{
			title: "Full-stack SDE",
			company: "Neos Healthtech Pvt. Ltd.",

			date: "Nov 2022 - Present",
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
			date: "2021 - Present",
			description:
				"Enhanced page-load performance and maintainability with latest ES standards; refactored class-based React to functional components for better readability. Implemented React micro-frontends.",
		},
		{
			title: "Frontend Developer (Intern)",
			company: "Excellis IT",
			date: "2021 - Present",
			description:
				"Crafted static, responsive, and scalable front-end for websites. Aided in HTML rendering optimization by minimizing jQuery reliance and accelerating development with SCSS.",
		},
	];

	return (
		<section className="container w-full" id="work-experience">
			<div className="mb-10">
				<h1 className="text-3xl font-bold text-gray-200 uppercase md:text-4xl lg:text-6xl text-left">
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
				<p className="text-sm max-w-lg mb-3 text-gray-800 leading-6">
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

