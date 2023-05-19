const Appbar = () => {
	return (
		<header className="bg-white-gold py-10">
			{/* asd */}
			<div className="container mx-auto px-4">
				<nav className="flex items-center justify-between">
					<div>
						<a href="#" className="text-lg font-semibold text-brown-gold">
							Nav
						</a>
					</div>
					<div className="text-lg font-bold text-brown-gold">LOGO</div>
					<div>
						<button className="font-bold text-brown-gold">Watch</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Appbar;
