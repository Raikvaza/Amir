import Card from './Card';

const News = () => {
	return (
		<div
			className="
                flex 
                w-full 
                flex-col 
                flex-wrap 
                items-center 
                justify-center 
                bg-white 
                pb-5 
                md:flex-row"
		>
			<div
				className="
                    w-[80%] 
                    border-b-[2px] 
                    border-b-brown-gold 
                    py-4 
                    text-center 
                    text-[20px] 
                    font-bold"
			>
				CURRENT HIGHLIGHTS
			</div>
			<Card type="New/Collection" title="Something happened" />
			<Card type="News" title="Something happened" />

			<Card type="News" title="Something happened" />
			<div
				className="
                    flex 
                    w-full 
                    items-center 
                    justify-center 
                    md:flex-[100%]"
			>
				<button
					className=" 
                    border-[2px] 
                    border-white-gold 
                    px-10 
                    py-2"
				>
					More
				</button>
			</div>
		</div>
	);
};

export default News;
