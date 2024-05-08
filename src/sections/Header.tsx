const Header = () => {
	return (
		<div className="container sticky top-0 bg-white/50 backdrop-blur-md z-10">
			<nav className="md:px-4 py-6 flex gap-8 md:gap-16 items-center justify-between">
				<a href="#">
					<svg
						width="40"
						height="40"
						viewBox="0 0 69 67"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M39.5 27L68.9449 44L61.4449 56.9904L32 39.9904L39.5 27Z"
							fill="#805ad5"
							fillOpacity="0.43"
						/>
						<path
							d="M36.9448 39.9904L7.49996 56.9904L-3.98755e-05 44L29.4448 27L36.9448 39.9904Z"
							fill="#805ad5"
							fillOpacity="0.43"
						/>
						<path
							d="M27 34L27 0L42 1.78873e-07L42 34L27 34Z"
							fill="#805ad5"
							fillOpacity="0.43"
						/>
						<path
							d="M29.4448 39.9904L-3.89814e-05 22.9904L7.49996 9.99997L36.9448 27L29.4448 39.9904Z"
							fill="#805ad5"
						/>
						<path
							d="M32 27L61.4449 10L68.9449 22.9904L39.5 39.9904L32 27Z"
							fill="#805ad5"
						/>
						<path d="M42 33L42 67L27 67L27 33L42 33Z" fill="#805ad5" />
						<path d="M33 31H36V33H33V31Z" fill="#805ad5" />
					</svg>
				</a>
				<div className="flex gap-4 md:gap-16 items-center">
					<a
						className=" text-gray-600 hover:text-accent-500 ease-linear duration-50 font-semibold"
						href="#work-experience">
						Work
					</a>
					<a
						className=" text-gray-600 hover:text-accent-500 ease-linear duration-50 font-semibold"
						href="#projects">
						Projects
					</a>
					<a
						className=" text-gray-600 hover:text-accent-500 ease-linear duration-50 font-semibold"
						href="#contact">
						Contact
					</a>
				</div>
			</nav>
		</div>
	);
};

export { Header };

