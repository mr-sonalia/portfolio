import {
	Footer,
	Header,
	Projects,
	ThemeSwitch,
	Title,
	WorkExperience,
} from "@/sections";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<ThemeSwitch />
			<main>
				<Title />
				<WorkExperience />
				<Projects />
				<Footer />
			</main>
		</div>
	);
}

