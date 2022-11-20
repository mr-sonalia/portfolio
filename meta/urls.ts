import { GitHubIcon, LinkedInIcon, ResumeIcon, StackOverflowIcon } from "icons";

export const heroSectionUrls: {
	key: number;
	name: string;
	url: string;
	icon: () => JSX.Element;
}[] = [
	{
		key: 0,
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/yash-sonalia/",
		icon: LinkedInIcon,
	},
	{
		key: 1,
		name: "GitHub",
		url: "#",
		icon: GitHubIcon,
	},
	{
		key: 2,
		name: "StackOverflow",
		url: "#",
		icon: StackOverflowIcon,
	},
	{
		key: 3,
		name: "Resume",
		url: "#",
		icon: ResumeIcon,
	},
];
