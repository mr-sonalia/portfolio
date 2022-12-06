export const experiences: {
	id: number;
	roleAndCompany: string;
	duration: string;
	description: string[];
	companyLogo: string;
}[] = [
	{
		id: 0,
		roleAndCompany: "Front-end SWD at Neos HealthTech",
		duration: "Aug 2022 - Present",
		description: [
			"Assisting in frontend architecture planning and design patterns which has reduced code complexity.",
			"Handled API documentation and reviews which has reduced inter-team dependency deadlocks",
		],
		companyLogo: "/neos-logo.png",
	},
	{
		id: 1,
		roleAndCompany: "Product Design Intern at Credence Analytics",
		duration: "Oct 21 - Feb 22",
		description: [
			"Improved page-load performance and maintainability by using the latest ES standards; refactored class-based React syntax to React to functional components to improve code readability further.",
			"Researched on micro-frontend and developed projects on React micro-frontend through Module Federation Plugin.",
		],
		companyLogo: "/credence-logo.png",
	},
	{
		id: 2,
		roleAndCompany: "Front-end Developer Intern at Excellis IT",
		duration: "Mar 2021 - May 2021",
		description: [
			"Developed static, responsive, and scalable front-end for websites.",
			"Assisted in optimizing HTML rendering time by reducing jQuery dependency and improve development speed by favouring SCSS over CSS.",
			"Tested UIs for maintainability, compatibility, and performance on old/slow computers using Chrome and Firefox browser dev tools.",
		],
		companyLogo: "/excellis-logo.png",
	},
];
