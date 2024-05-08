import { Footer, Header, Introduction, Projects, Title, WorkExperience } from "@/sections";

export default function Home() {
	return (
		<main className="bg-white min-h-screen pt-0 md:pt-0 lg:pt-0 p-8 md:p-16 lg:p-20 max-w-screen-lg m-auto">
			<Header />
			<div className="section-content h-[100vh] flex justify-center items-center flex-col relative">
				<Title />
				<Introduction />
				<div className="hidden absolute top-[80vh] md:block">
					<a href="#work-experience">
						<svg
							width="26"
							height="41"
							viewBox="0 0 69 41"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M68.8395 20.808L34.2535 40.7762L29.0237 37.7568L29.0154 37.7424L0 20.9904L7.5 8L34.4724 23.5725L61.4448 8.00006L68.8395 20.808Z"
								fill="#805ad5"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M68.8395 12.8081L34.2535 32.7763L29.0237 29.7569L29.0154 29.7424L0 12.9904L7.5 0L34.4724 15.5725L61.4447 3.8147e-05L68.8395 12.8081Z"
								fill="#5632A7"
								fill-opacity="0.43"
							/>
						</svg>
					</a>
				</div>
			</div>
			<WorkExperience />
			<Projects />
			<Footer />
		</main>
	);
}
