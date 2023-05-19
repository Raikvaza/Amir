import React from 'react';

const _items = [
	{
		player: {
			title: 'Efren Reyes',
			desc:
				'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
			image: '../assets/nomad.png',
		},
	},
	{
		player: {
			title: "Ronnie O'Sullivan",
			desc:
				"Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
			image: '../assets/classima.png',
		},
	},
	{
		player: {
			title: 'Shane Van Boening',
			desc:
				'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
			image: '../assets/shanyrak.png',
		},
	},
];

const length = _items.length;
const slideWidth = 30;
const slideCount = 3;
_items.push(..._items);

const sleep = (ms = 0) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
	const item = {
		styles: {
			transform: `translateX(calc(${position * slideWidth}rem))`,
		},
		player: _items[idx].player,
	};

	switch (position) {
		case length - 1:
		case length + 1:
			item.styles = { ...item.styles, filter: 'grayscale(1)' };
			break;
		case length:
			break;
		default:
			// CHANGE OPACITY TO 0
			item.styles = { ...item.styles, opacity: 10 };
			break;
	}

	return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
	const item = createItem(pos, idx, activeIdx);

	return (
		<li
			className={`
                absolute
                flex
                h-[${slideWidth}rem]
                w-[${slideWidth}rem]
                flex-col
                items-center
                justify-center
                bg-black
                p-4
                transition-all
                duration-300
            `}
			style={{ ...item.styles, height: `${slideWidth}rem` }}
		>
			<div
				className="
                    after:ease-ease
                    relative
                    flex
                    h-full
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
                        ${activeIdx == idx ? 'scale-[60%] ' : 'scale-50'}
                        object-cover
                        transition-all
                        duration-500
                    `}
					src={item.player.image}
					alt={item.player.title}
				/>
			</div>
			<div className="absolute bottom-[-2.5rem] h-[10%] bg-amber-200">
				<h4 className="mx-0 mb-0 mt-[0.7rem] text-center uppercase">
					{item.player.title}
				</h4>
				<p className="mx-0 mb-0 mt-[0.7rem] text-[1.2rem] leading-[1.6]">
					{item.player.desc}
				</p>
			</div>
		</li>
	);
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
	const [items, setItems] = React.useState(keys);
	const [isTicking, setIsTicking] = React.useState(false);
	const [activeIdx, setActiveIdx] = React.useState(0);
	const bigLength = items.length;

	const prevClick = (jump = 1) => {
		if (!isTicking) {
			setIsTicking(true);
			setItems((prev) => {
				return prev.map((_, i) => prev[(i + jump) % bigLength]);
			});
		}
	};

	const nextClick = (jump = 1) => {
		if (!isTicking) {
			setIsTicking(true);
			setItems((prev) => {
				return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
			});
		}
	};

	const handleDotClick = (idx) => {
		if (idx < activeIdx) prevClick(activeIdx - idx);
		if (idx > activeIdx) nextClick(idx - activeIdx);
	};

	React.useEffect(() => {
		if (isTicking) sleep(300).then(() => setIsTicking(false));
	}, [isTicking]);

	React.useEffect(() => {
		setActiveIdx((length - (items[0] % length)) % length);
	}, [items]);

	return (
		<div
			className="
                relative
                mx-auto
                flex
                w-4/5
                items-center 
                justify-center 
                bg-red"
		>
			<div
				className={`
                    relative 
                    h-[40rem] 
                    bg-yellow
                    p-2
                `}
				style={{ width: `calc(${slideWidth}rem*${slideCount})` }}
			>
				<button
					className="
                        absolute 
                        left-[-10rem] 
                        top-2/4 
                        flex
                        -translate-y-2/4 
                        cursor-pointer 
                        items-center 
                        justify-center 
                        border-0"
					onClick={() => prevClick()}
				>
					<i
						className="
                            border-[0 0.4rem 0.4rem 0] 
                            z-10
                            h-24 
                            w-24 
                            rotate-[135deg] 
                            border-solid 
                            bg-white 
                            p-[3px]"
					/>
				</button>
				{/* OVERFLOW */}
				<div
					className="
                        relative
                        h-full
                        w-full 
                        overflow-hidden
                        bg-grey
                        "
				>
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
				<button
					className="
                        absolute 
                        right-[-10rem] 
                        top-2/4 flex 
                        -translate-y-2/4 
                        cursor-pointer 
                        items-center 
                        justify-center 
                        border-0"
					onClick={() => nextClick()}
				>
					<i
						className="
                            border-[0 0.4rem 0.4rem 0] 
                            z-10 
                            h-24 
                            w-24
                            -rotate-45
                            border-solid 
                            bg-white 
                            p-[3px]"
					/>
				</button>
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
