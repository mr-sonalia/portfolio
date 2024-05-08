type ProjectProps = {
	title: string;
	description: string;
	uri: string;
};

const Project = ({ uri, title, description }: ProjectProps) => {
	const redirectionURL = `https://github.com/${uri}`;
	const ogImageURL = `https://opengraph.githubassets.com/0101/${uri}`;
	return (
		<a href={redirectionURL}>
			<div className="flex items-start flex-col md:flex-row justify-start w-full p-4 bg-gray-50 rounded-lg border-solid border border-gray-200">
				<div
					className="w-[200px] h-[96px] bg-cover bg-center bg-no-repeat mb-2 md:mb-0"
					style={{
						backgroundImage: `url(${ogImageURL})`,
						backgroundSize: "contain",
						backgroundPosition: "top center",
					}}></div>
				<div className="flex flex-col mt-2 md:mt-0 md:ml-4">
					<h2 className="text-lg md:text-xl font-semibold text-gray-700">{title}</h2>
					<p className="text-sm max-w-lg mt-1 mb-3 text-gray-800">{description}</p>
				</div>
			</div>
		</a>
	);
};

const Projects = () => {
	const title = "Projects";

	const projects = [
		{
			title: "AI CT Segmentation & Automation",
			description:
				"Generate segmentation masks for full-body CT and automate the generation process using Python scripts in a DICOM SCP.",
			uri: "mr-sonalia/AI-CT-Segmentation",
		},
		{
			title: "Radio Buddy",
			description:
				"Generative AI Radiological assistant to streamline and enhance reporting, built using OpenAI's GPT-4 Builder technology.",
			uri: "mr-sonalia/radio-buddy",
		},
		{
			title: "Job Listing Server",
			description:
				"Job listing application backend using Controller-Service pattern using MongoDB and express.js.",
			uri: "mr-sonalia/job-listing",
		},
		{
			title: "Galleria",
			description: "A minimalistic gallery website built using Next.js and Firestore.",
			uri: "mr-sonalia/galleria",
		},
	];

	return (
		<section className="mt-20 md:mt-40 container w-full" id="projects">
			<div className="mb-10">
				<h1 className="text-3xl font-bold text-gray-200 uppercase md:text-4xl lg:text-6xl text-left">
					{title.split("").map((char, idx) => (
						<span key={idx} className="hover:text-accent-500 ease-linear duration-50">
							{char}
						</span>
					))}
				</h1>
				<p className="text-sm max-w-lg mb-3 text-gray-800 leading-6">
					Some that I am proud of! 🔥
				</p>
			</div>

			<div className="grid my-6 gap-2 md:gap-4">
				{projects.map((project, idx) => (
					<Project key={idx} {...project} />
				))}
			</div>
		</section>
	);
};

export { Projects };

