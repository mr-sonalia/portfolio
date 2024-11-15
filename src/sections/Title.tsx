const Title = () => {
	const titlePart1 = "Namaste,";
	const titlePart2 = "I'm Yash Sonalia";

	return (
		<section className="container w-full">
			<h1 className="mt-[-15vh] md:mt-[-10vh] text-4xl font-bold text-gray-200 dark:text-gray-500 uppercase md:text-6xl lg:text-8xl text-left mb-4 md:mb-6 lg:md-8">
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
			<div id="socials" className="mb-8 md:mb-14 lg:mb-20">
				<div>
					<a
						target="_blank"
						href="https://docs.google.com/document/d/1k-V510AUZM6Tck6Lth6J4_L1eAChqUqmt7tlpy7si6E/edit?usp=sharing"
						className="text-sm text-gray-600 dark:text-gray-300 hover:text-accent-500 ease-linear duration-50 font-semibold focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-100"
						aria-label="Resume">
						Resume
					</a>
					<span className="text-sm text-accent-500 select-none"> • </span>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/yash-sonalia"
						className="text-sm text-gray-600 dark:text-gray-300 hover:text-accent-500 ease-linear duration-50 font-semibold focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-100"
						aria-label="LinkedIn">
						Linkedin
					</a>
					<span className="text-sm text-accent-500 select-none"> • </span>
					<a
						target="_blank"
						href="https://github.com/mr-sonalia"
						className="text-sm text-gray-600 dark:text-gray-300 hover:text-accent-500 ease-linear duration-50 font-semibold focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-100"
						aria-label="Github">
						Github
					</a>
					<span className="text-sm text-accent-500 select-none"> • </span>
					<a
						target="_blank"
						href="https://www.instagram.com/sonaliayash/"
						className="text-sm text-gray-600 dark:text-gray-300 hover:text-accent-500 ease-linear duration-50 font-semibold focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-100"
						aria-label="Instagram">
						Instagram
					</a>
				</div>
			</div>
		</section>
	);
};

export { Title };

