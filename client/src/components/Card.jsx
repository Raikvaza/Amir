const Card = ({ type, title }) => {
	return (
		<div
			className="
                flex 
                w-full 
                flex-col 
                items-center
                justify-center
                gap-4
              bg-white 
                py-5 
                md:w-[400px]"
		>
			<div className="text-[20px] font-bold">{type}</div>
			<div className="text-[18px]">{title}</div>
			<div className="h-[200px] w-[80%] bg-white-gold ">
				Some image for the future
			</div>
		</div>
	);
};

export default Card;
