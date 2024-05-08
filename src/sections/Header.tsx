const Header = () => {
	return (
		<div className="container sticky top-0 bg-white/50 backdrop-blur-md">
			<nav className="nav-items py-6 flex gap-16 items-center">
				<span>
					<svg
						width="40"
						height="40"
						viewBox="0 0 70 68"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M69.36 23.46L46.75 35.87V31.45L69.36 43.69L61.03 57.63L39.95 45.05L42.33 43.52L42.67 67.15H26.69L26.86 43.52L29.24 45.05L8.16 57.63L0 43.69L22.61 31.45V35.87L0 23.46L8.16 9.52L29.24 22.27L26.86 23.63L26.69 0H42.67L42.33 23.63L39.95 22.27L61.03 9.52L69.36 23.46Z"
							fill="#805ad5"
						/>
					</svg>
				</span>
			</nav>
		</div>
	);
};

export { Header };
