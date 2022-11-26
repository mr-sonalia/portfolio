export const experiences: {
	id: number;
	roleAndCompany: string;
	duration: string;
	description: string[];
	companyLogo: string;
}[] = [
	{
		id: 0,
		roleAndCompany: "Frontend SWD at Neos HealthTech",
		duration: "Aug 2022 - Present",
		description: [
			"Assisting in the ideation and planning of frontend software architecture and design patterns for multiple projects.",
			"Collaborating with the backend team to efficiently document project APIs, endpoints, and responses to ensure network requests work seamlessly.",
			"Leading a team of co-interns in developing a full-stack Next.js and Node.js/Express microservices project.",
		],
		companyLogo: "/neos-logo.png",
	},
	{
		id: 1,
		roleAndCompany: "Product Design Intern at Credence Analytics",
		duration: "Oct 21 - Feb 22",
		description: [
			"Improved product performance and maintainability; refactored class-based React syntax to React v17 syntax.",
			"Reduced client-side load time, and optimized Babel dependencies while maintaining backward compatibility.",
			"Researched and developed projects on React micro-frontend through Module Federation Plugin.",
			"Migrated existing HTML/TPL components to micro-frontend React components.",
		],
		companyLogo: "/credence-logo.png",
	},
	{
		id: 2,
		roleAndCompany: "Frontend Developer Intern at Excellis IT",
		duration: "Mar 2021 - May 2021",
		description: [
			"Developed alongside core developers’ team, building static, responsive, and scalable frontend for websites.",
			"Optimized HTML syntax, migrated from CSS to SCSS, and reduced JQuery dependency.",
			"Tested UIs for maintainability, compatibility, and overall performance using Chrome and Firefox dev tools.",
			"Product QA for content and quality before and after product release.",
		],
		companyLogo: "/excellis-logo.png",
	},
];
