const WorkExperience = () => {
	const titlePart1 = "Work";
	const titlePart2 = "Experience";
	return (
		<section className="container w-full">
			<h1 className="text-3xl font-bold text-gray-200 uppercase md:text-4xl lg:text-6xl text-left mb-4 md:mb-6 lg:md-8">
				{titlePart1.split("").map((char, idx) => (
					<span key={idx} className="hover:text-accent-500 ease-linear duration-50">
						{char}
					</span>
				))}
				<br />
				{titlePart2.split("").map((char, idx) => (
					<span key={idx} className="hover:text-accent-500 ease-linear duration-50">
						{char}
					</span>
				))}
			</h1>
		</section>
	);
};

export { WorkExperience };

