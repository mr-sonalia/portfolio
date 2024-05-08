import { Header, Introduction, Title, WorkExperience } from "@/sections";

export default function Home() {
	return (
		<main className="bg-white min-h-screen pt-0 md:pt-0 lg:pt-0 p-12 md:p-16 lg:p-20 max-w-screen-lg m-auto">
			<Header />

			<div className="section-content h-[100vh] flex justify-center items-center flex-col">
				<Title />
				<Introduction />
			</div>
			<div>
				<WorkExperience />
			</div>
		</main>
	);
}
