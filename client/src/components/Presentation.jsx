const Presentation = () => {
	return (
		<div
			className="
                relative 
                h-[520px] 
                w-full 
                bg-brown-gold"
		>
			video content
			<div
				className="
                        absolute 
                        bottom-0 
                        left-5 
                        flex 
                        h-[300px] 
                        w-[250px]
                        flex-col items-center justify-around
                        bg-dark-gold"
			>
				<div
					className="
                        w-[100%]
                        text-center
                        text-xl
                      text-white-gold"
				>
					Some text for the future
				</div>
				<button
					className="
                        border-[1px] 
                        px-5 
                        py-2 
                        font-bold
                      text-white-gold"
				>
					Discover
				</button>
			</div>
		</div>
	);
};

export default Presentation;
