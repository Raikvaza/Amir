const Presentation = () => {
	return (
		<div
			className="
                relative 
                w-full 
                bg-brown-gold"
		>
			<video
				src="../assets/presentation.mp4"
				className="h-[80vh] w-[100%]"
				autoPlay
				loop
				muted
			></video>{' '}
			<div
				className="
                        absolute 
                        bottom-0
                        left-[15%]
                         
                        flex 
                        h-[300px] 
                        w-[300px]
                        flex-col 
                        items-center 
                        justify-center
                        gap-10
                        "
			>
				<div
					className="
                        w-full
                        text-center
                        
                        text-xl
                      text-white-gold"
				>
					<div className="mb-2 text-[2rem] font-bold leading-10">Nomadic Empire Collection</div>
					<span>Titanium-42mm</span>
					<br />
					<span>Miyota 8n24</span>
				</div>
				<button
					className="
                        border-[1px] 
                        px-10 
                        py-2
                        font-bold
                        text-white-gold
                        duration-200
                        ease-in-out
                      hover:border-brown-gold"
				>
					Discover
				</button>
			</div>
		</div>
	);
};

export default Presentation;
