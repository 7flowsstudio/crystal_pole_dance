"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import clsx from "clsx";
import CastomPagination from "../CastomPagination";
import ReviewsItem from "./ReviewsItem";

const cardLists = [
	{
		id: 0,
		img: "/img/reviews/photo_r_1.webp",
		imgm: "/img/reviews/photo_m_1.webp",
		stars: 4,
		text: "Напрям танцю називається Exotic dance. \nЦікаво було спробувати щось ще окрім Pole sport. \nДуже важко, але неймовірно гарно 😍👌 \nПотрібно качати та зміцнювати все тіло, щоб себе втримати і при цьому виглядати граційно та легко. \nАле з тренерами @irina_drobysh333 і @ruslana_kozinska21.08 точно все вийде 😊",
		user: "@mare1313_",
	},
	{
		id: 1,
		img: "/img/reviews/photo_r_2.webp",
		imgm: "/img/reviews/photo_m_2.webp",
		stars: 4,
		text: "Сьогодні було тренування з Exotic – і це було просто космос!✨ \nНаш тренер @irina_drobysh333 – це окрема любов ❤️ \nВона така уважна до кожної, пояснить, підстрахує, підбадьорить і зробить так, щоб ти відчула себе впевненою та жіночною з першого кроку.Її подача – це мікс професіоналізму, ніжності й вогника, який заряджає на весь день 🔥",
		user: "@_rapunzel_av",
	},
	{
		id: 2,
		img: "/img/reviews/photo_r_3.webp",
		imgm: "/img/reviews/photo_m_3.webp",
		stars: 3,
		text: "Половина людей здаються на шляху до своєї мети, тому що їм ніхто не сказав: \n«Я вірю в тебе, у тебе все вийде». \nДякую моєму найкращому тренеру @irina_drobysh333, яка щиро вірить у кожну із нас 💖",
		user: "@svitlana_eismont",
	},
];

const SliderReviews = () => {
	const [activeSlide, setActiveSlide] = useState<number | null>(null);
	return (
		<div id="HowItWorksSwiper" className="w-full">
			<div className="flex w-full flex-col items-center gap-[40px] relative">
				<Swiper
					className="w-full h-auto shadow-[0_0_40px_0_#eeb9ca] rounded-2xl"
					navigation={{
						nextEl: ".reviews-next",
						prevEl: ".reviews-prev",
					}}
					modules={[Pagination, Navigation]}
					loop={true}
					onSlideChange={(swiper) => {
						setActiveSlide(swiper.realIndex);
					}}
					autoHeight={true}
					breakpoints={{
						320: { slidesPerView: 1, spaceBetween: 4 },
					}}
				>
					{cardLists?.map((item, index) => (
						<SwiperSlide key={index} className="flex justify-center">
							<ReviewsItem item={item} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className="flex items-center justify-between w-[180px] md:w-[224px] h-[40px] md:h-[60px] absolute bottom-[0px]">
					<button
						className={clsx(
							"group",
							"reviews-prev",
							"flex items-center justify-center cursor-pointer z-10 min-w-[40px] h-[40px] md:min-w-[60px] md:h-[60px]",
							"rounded-full bg-numeric md:hover:bg-numeric-hover backdrop-blur-[25px] shadow-[inset_0_1px_40px_0_rgba(227,222,255,0.3)] hover:shadow-[inset_0_1px_40px_0_rgba(227,222,255,0.3)] active:translate-y-[2px] active:shadow-[inset_0_2px_20px_0_rgba(0,0,0,0.2)]",
						)}
					>
						<svg className="stroke-subtitle group-hover:stroke-subtitle-hover fill-none w-[24px] h-[24px] md:w-[24px] md:h-[20px] rotate-[180deg]">
							<use href="/sprite.svg#icon-arrow-right-long"></use>
						</svg>
					</button>
					<button
						className={clsx(
							"group",
							"reviews-next",
							"flex items-center justify-center cursor-pointer z-10 min-w-[40px] h-[40px] md:min-w-[60px] md:h-[60px]",
							"rounded-full bg-numeric md:hover:bg-numeric-hover backdrop-blur-[25px] shadow-[inset_0_1px_40px_0_rgba(227,222,255,0.3)] hover:shadow-[inset_0_1px_40px_0_rgba(227,222,255,0.3)] active:translate-y-[2px] active:shadow-[inset_0_2px_20px_0_rgba(0,0,0,0.2)]",
						)}
					>
						<svg className="stroke-subtitle group-hover:stroke-subtitle-hover fill-none w-[24px] h-[24px] md:w-[24px] md:h-[20px] rotate-[0deg]">
							<use href="/sprite.svg#icon-arrow-right-long"></use>
						</svg>
					</button>
				</div>
				<CastomPagination
					lists={cardLists}
					activeSlide={activeSlide}
					type="reviews"
				/>
			</div>
		</div>
	);
};

export default SliderReviews;
