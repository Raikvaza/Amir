import Carousel from './Carousel';

const Display = () => {
	return (
		// DISPLAY CONTAINER
		<div
			className="
        flex
        w-full 
        flex-col 
        items-center 
        justify-center 
        bg-brown-gold"
		>
			{/* DISPLAY TEXT */}
			<div
				className="
          py-[10px] 
          text-2xl 
          text-white"
			>
				<span className="font-bold">AMIR</span> WATCHES
			</div>
			{/* CAROUSEL */}
			<Carousel />
		</div>
	);
};

export default Display;
