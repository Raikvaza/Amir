const Card = ({ type, title, image }) => {
	return (
		<div
			className="
                mx-10 
                flex 
                w-full 
                flex-col items-center 
				justify-evenly
				gap-4
              bg-white-gold
                py-5 
                md:w-[400px]"
		>
			<div className="text-[20px]">{type}</div>
			<div className="flex h-[200px] w-[90%] items-center justify-center bg-white-gold">
				<img src={image} alt="img" className="h-full w-full object-cover" />
			</div>
			<div className="px-5 text-[18px]">{title}</div>
		</div>
	);
};

export default Card;
