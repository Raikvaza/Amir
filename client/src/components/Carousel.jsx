import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
const watches = [
	{
		watch: {
			title: 'Efren Reyes',
			desc:
				'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest.',
			image: '../assets/nomad.png',
			button: '4 models',
		},
	},
	{
		watch: {
			title: "Ronnie O'Sullivan",
			desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful watch.",
			image: '../assets/classima.png',
			button: '4 models',
		},
	},
	{
		watch: {
			title: 'Shane Van Boening',
			desc:
				'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
			image: '../assets/shanyrak.png',
			button: '4 models',
		},
	},
];

const length = watches.length;
const slideWidth = 30;
const slideCount = 3;
watches.push(...watches); // Double the amount of watches for infinite scroll

const sleep = (ms = 0) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
	const item = {
		styles: {
			transform: `translateX(calc(${position * slideWidth}rem))`,
			width: `${slideWidth}rem`,
		},
		watch: watches[idx].watch, // Create an item with corresponding INFO from watches array
	};

	switch (position) {
		//VISIBLE ITEMS left and right
		case length - 1:
		case length + 1:
			item.styles = { ...item.styles, zIndex: '100' };
			break;
		case length:
			//Item in the middle
			break;
		default:
			// CHANGE OPACITY TO 0
			item.styles = { ...item.styles, opacity: '0', zIndex: '-100' };
			break;
	}

	return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
	const item = createItem(pos, idx, activeIdx);

	return (
		// ITEM CONTAINER
		<li
			className={`
                absolute
                flex
                h-full
                flex-col
                items-center
                justify-evenly
                bg-brown-gold
                p-1
                transition-all
                duration-300
            `}
			style={{ ...item.styles }}
		>
			{/* ITEM IMAGE */}
			<div
				className="
                    after:ease-ease
                    relative
                    flex
                    
                    h-[50%]
                    w-full
                    cursor-zoom-in
                    items-center
                    justify-center
                    overflow-hidden
                    after:absolute
                    after:flex
                    after:h-full
                    after:w-full
                    after:items-center
                    after:justify-center
                    after:text-white
                    after:opacity-0
                    after:transition-all
                    after:duration-500
                    after:content-['Read_more']
                    hover:after:opacity-100"
			>
				<img
					className={`
                        ease-ease
                        ${pos == length ? 'scale-[55%] ' : 'scale-50'}
                        object-cover
                        transition-all 
                        duration-500
                        
                    `}
					src={item.watch.image}
					alt={item.watch.title}
				/>
			</div>
			{/* ITEM TEXT */}
			<div
				className="
				relative 
				flex 
				flex-col 
				items-center 
				justify-center 
				bg-brown-gold 
				px-3 
				py-2"
			>
				<h4
					className="
					mx-0 
					mb-0 
					mt-[0.7rem] 
					text-center 
					uppercase"
				>
					{item.watch.title}
				</h4>
				<p
					className="
					mx-0 
					mb-0 
					mt-[0.7rem] 
					text-center 
					text-[1.2rem] 
					leading-[1.6]"
				>
					{item.watch.desc}
				</p>
			</div>
			{/* ITEM BUTTON */}
			<div>
				<button
					className="
					border-[2px] 
					border-white-gold
					px-12 
					py-2 
					text-lg 
					text-white-gold
					duration-200 
					ease-in-out 
					hover:border-white hover:px-14 hover:text-white
					
					"
				>
					{item.watch.button}
				</button>
			</div>
		</li>
	);
};

const keys = Array.from(Array(watches.length).keys());

const Carousel = () => {
	const [items, setItems] = React.useState(keys);
	const [isTicking, setIsTicking] = React.useState(false);
	const [activeIdx, setActiveIdx] = React.useState(0);
	console.log(activeIdx);
	const bigLength = items.length;
	// HANDLING LEFT ARROW
	const prevClick = (jump = 1) => {
		if (!isTicking) {
			setIsTicking(true);
			setItems((prev) => {
				return prev.map((_, i) => prev[(i + jump) % bigLength]);
			});
		}
	};
	// HANDLING RIGHT ARROW
	const nextClick = (jump = 1) => {
		if (!isTicking) {
			setIsTicking(true);
			setItems((prev) => {
				return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
			});
		}
	};
	// TICKING
	React.useEffect(() => {
		if (isTicking) sleep(300).then(() => setIsTicking(false));
	}, [isTicking]);
	// HANDLING DOT CLICKS
	const handleDotClick = (idx) => {
		if (idx < activeIdx) prevClick(activeIdx - idx);
		if (idx > activeIdx) nextClick(idx - activeIdx);
	};
	// UPDATING ACTIVE INDEX
	React.useEffect(() => {
		setActiveIdx((length - (items[0] % length)) % length);
	}, [items]);

	return (
		// MAIN CONTAINER
		<div
			className="
                relative
                mx-auto
                flex
                w-4/5
                items-center 
                justify-center 
                bg-brown-gold"
		>
			{/* INNER CONTAINER */}
			<div
				className={`
                    relative 
                    bg-brown-gold
                    p-2
                `}
				style={{
					width: `calc(${slideWidth}rem * ${slideCount})`,
					height: `calc(${slideWidth}rem / 0.75)`,
				}}
			>
				{/* BUTTON LEFT */}
				<button
					className="
                        absolute 
                        left-[-5rem] 
                        top-2/4 
                        flex
                        -translate-y-2/4
                        cursor-pointer 
                        items-center 
                        justify-center 
                        border-0"
					onClick={() => prevClick()}
				>
					<ChevronLeftIcon className="h-20 w-20 text-white" />
				</button>
				{/* OVERFLOW ITEMS CONTAINER */}
				<div
					className="
                        relative
                        h-full
                        w-full 
                        overflow-hidden
                        bg-grey
                        "
				>
					{/* ITEMS LIST */}
					{/* Apply left-2/4 to move left side of the div to the center */}
					{/* Then apply -translate-x-2/4 to translate the entire div to the center */}
					<ul
						className={`
                            absolute
                            left-2/4
                            m-0 
                            h-full 
                            -translate-x-2/4
                            list-none
                            p-0 
                        `}
						style={{ width: `calc((${slideCount} + 0.5) * ${slideWidth}rem * 2)` }}
					>
						{items.map((pos, i) => (
							<CarouselSlideItem key={i} idx={i} pos={pos} activeIdx={activeIdx} />
						))}
					</ul>
				</div>
				{/* BUTTON RIGHT */}
				<button
					className="
                        absolute 
                        right-[-5rem] 
                        top-2/4 flex 
                        -translate-y-2/4 
                        cursor-pointer 
                        items-center 
                        justify-center 
                        border-0"
					onClick={() => nextClick()}
				>
					<ChevronRightIcon className="h-20 w-20 text-white" />
				</button>
				{/* DOT NAVIGATION */}
				<div
					className="
                        absolute
                        left-2/4
                        mt-8
                        inline-block 
                        -translate-x-2/4"
				>
					{items.slice(0, length).map((pos, i) => (
						<button
							key={i}
							onClick={() => handleDotClick(i)}
							className={
								i === activeIdx
									? 'mx-[0.3rem] my-0 h-8 w-8 scale-50 cursor-pointer rounded-[50%] border-0 bg-black outline-none'
									: 'mx-[0.3rem] my-0 h-8 w-8 scale-50 cursor-pointer rounded-[50%] border-0 bg-gray-300 outline-none'
							}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
