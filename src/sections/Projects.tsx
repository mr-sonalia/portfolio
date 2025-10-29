import { Card, CardContent, CardDescription, CardHeader, CardTitle, Container, Section, SectionHeader, SectionTitle } from "@/components";

type ProjectProps = {
	title: string;
	description: string;
	redirection: string;
	index: number;
};

const Project = ({ redirection, title, description, index }: ProjectProps) => {
	return (
		<a
			href={redirection}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={title}
			className="block h-full group">
			<Card 
				hoverable 
				className="h-full relative overflow-hidden"
				style={{ transform: `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)` }}>
				{/* Decorative corner */}
								{/* Neo-brutal decorative element */}
				<div className="absolute top-0 right-0 w-16 h-16 bg-theme-accent opacity-10 transform translate-x-8 -translate-y-8 rotate-45"></div>
				
				<CardHeader>
					<CardTitle className="text-lg flex items-start justify-between gap-2">
						<span>{title}</span>
						<span className="text-2xl flex-shrink-0 text-theme-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-brutal">↗</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription className="text-sm leading-snug text-brutal-gray-700 dark:text-brutal-gray-300">{description}</CardDescription>
				</CardContent>
			</Card>
		</a>
	);
};

const Projects = () => {
	const projects = [
		{
			title: "AI CT SEGMENTATION & AUTOMATION",
			description:
				"Generate segmentation masks for full-body CT and automate the generation process using Python scripts in a DICOM SCP.",
			redirection: "https://github.com/mr-sonalia/AI-CT-Segmentation",
		},
		{
			title: "RADIO BUDDY",
			description:
				"Generative AI Radiological assistant to streamline and enhance reporting, built using OpenAI's GPT-4 Builder technology.",
			redirection: "https://github.com/mr-sonalia/radio-buddy",
		},
		{
			title: "JOB LISTING SERVER",
			description:
				"Job listing application backend using Controller-Service pattern using MongoDB and express.js.",
			redirection: "https://github.com/mr-sonalia/job-listing",
		},
		{
			title: "GALLERIA",
			description: "A minimalistic gallery website built using Next.js and Firestore.",
			redirection: "https://github.com/mr-sonalia/galleria",
		},
	];

	return (
		<Section id="projects" spacing="xl">
			<Container>
				<SectionHeader>
					<SectionTitle>PROJECTS</SectionTitle>
				</SectionHeader>

				<div className="grid gap-6 md:grid-cols-2">
					{projects.map((project, idx) => (
						<div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
							<Project {...project} index={idx} />
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
};

export { Projects };


