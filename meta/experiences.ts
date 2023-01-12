export const experiences: {
	id: number;
	roleAndCompany: string;
	duration: string;
	description: string[];
	companyLogo: string;
}[] = [
	{
		id: 0,
		roleAndCompany: "Full-stack SWD at Neos HealthTech",
		duration: "Nov 2022 - Present",
		description: [
			"Actively developing and maintaining the project monorepo, which has increased code reusability in microservices and reduced refactoring time.",
			"Reduced server strain by 30% by building a microservice with full product ownership using reverse proxy and monitoring design principles.",
		],
		companyLogo: "/neos-logo.png",
	},
	{
		id: 1,
		roleAndCompany: "Front-end SWD at Neos HealthTech",
		duration: "Aug 2022 - Nov 2022",
		description: [
			"Assisted in front-end architecture planning and design patterns for a smooth development process.",
			"Participated in code reviews and ensured adherence to best practices and standards.",
		],
		companyLogo: "/neos-logo.png",
	},
	{
		id: 2,
		roleAndCompany: "Product Design Intern at Credence Analytics",
		duration: "Oct 21 - Feb 22",
		description: [
			"Improved page-load performance and maintainability by using the latest ES standards.",
			"Researched on micro-frontend and developed projects on React micro-frontend through Module Federation Plugin.",
		],
		companyLogo: "/credence-logo.png",
	},
	{
		id: 3,
		roleAndCompany: "Front-end Developer Intern at Excellis IT",
		duration: "Mar 2021 - May 2021",
		description: [
			"Developed static and responsive front-end pages for websites.",
			"Tested UIs for maintainability, compatibility, and performance on old/slow computers using Chrome and Firefox browser dev tools.",
		],
		companyLogo: "/excellis-logo.png",
	},
];
