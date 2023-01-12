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
		url: "https://github.com/mr-sonalia",
		icon: GitHubIcon,
	},
	{
		key: 2,
		name: "StackOverflow",
		url: "https://stackoverflow.com/users/14563463/yash-sonalia",
		icon: StackOverflowIcon,
	},
	{
		key: 3,
		name: "My Resume",
		url: "https://docs.google.com/document/d/1tlF579BJ-1orBawwig7kHkgoyvqzgvFix_B0W1duP8Q/edit?usp=sharing",
		icon: ResumeIcon,
	},
];
