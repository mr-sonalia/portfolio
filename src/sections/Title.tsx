const Title = () => {
	const titlePart1 = "Namaste,";
	const titlePart2 = "I'm Yash Sonalia";
	return (
		<section className="container w-full">
			<h1 className="text-4xl font-bold text-gray-200 uppercase md:text-6xl lg:text-8xl text-left mb-4 md:mb-6 lg:md-8">
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

export { Title };
