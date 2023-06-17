import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';

const Appbar = () => {
	return (
		<header className="bg-white-gold">
			<div className="container mx-auto px-4 pt-4">
				<nav className="flex flex-col-reverse items-center justify-between gap-4">
					<div className="flex flex-row gap-10">
						<a
							href="#"
							className="border-b-[6px] border-brown-gold px-3 pb-4 text-xl font-medium italic text-brown-gold"
						>
							Home
						</a>
						<a href="#" className="text-xl font-medium text-brown-gold">
							COLLECTION
						</a>
						<a href="#" className="text-xl font-medium text-brown-gold">
							COMPANY
						</a>
						<a href="#" className="text-xl font-medium text-brown-gold">
							GUARANTEE
						</a>
						<a href="#" className="text-xl font-medium text-brown-gold">
							<MagnifyingGlassIcon className="text-blue-500 h-8 w-8" />
						</a>
						<a href="#" className="text-xl font-medium text-brown-gold">
							<GlobeAsiaAustraliaIcon className="text-blue-500 h-8 w-8" />
						</a>
						<a href="#" className="text-xl font-medium text-brown-gold">
							<HeartIcon className="text-blue-500 h-8 w-8" />
						</a>
					</div>
					<div className="text-lg font-bold text-brown-gold">
						<img src="../assets/logo.png" alt="logo" className="scale-[75%]"></img>
					</div>
					{/* <div>
						<button className="font-bold text-brown-gold">Watch</button>
					</div> */}
				</nav>
			</div>
		</header>
	);
};

export default Appbar;
