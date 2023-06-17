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
                bg-white-gold
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
			<Card
				type="NEW COLLECTION"
				title="Explore the newest Nomad collection of luxurious watches"
				image="../assets/collection.avif"
			/>
			<Card
				type="THE HISTORY OF AMIR WATCHES"
				title="Discover the roots and aspirations of our company"
				image="../assets/taraz.jpg"
			/>

			<Card
				type="CAREER OPPORTUNITIES"
				title="Become a part of Amir Watches LTD"
				image="../assets/vacancy.webp"
			/>
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
                    border-dark-gold 
                    px-14
                    
                    py-2"
				>
					More
				</button>
			</div>
		</div>
	);
};

export default News;
