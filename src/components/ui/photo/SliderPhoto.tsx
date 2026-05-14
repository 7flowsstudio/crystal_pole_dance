"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import clsx from "clsx";
import Image from "next/image";
import CastomPagination from "../CastomPagination";
import Modal from "../modal/Modal";
import ImagePopUp from "../modal/ImagePopUp";
import { cardListsPhoto } from "@/data/photoslider";

const SliderPhoto = () => {
	const [activeSlide, setActiveSlide] = useState<number>(0);
	const [image, setImage] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div id="HowItWorksSwiper" className="w-full">
				<div className="flex w-full flex-col items-center gap-[40px] relative">
					<Swiper
						className="min-w-0 md:max-w-[calc(100%-140px)] w-full h-auto"
						navigation={{
							nextEl: ".photo-next",
							prevEl: ".photo-prev",
						}}
						modules={[Pagination, Navigation]}
						loop={true}
						onSlideChange={(swiper) => {
							setActiveSlide(swiper.realIndex);
						}}
						autoHeight={true}
						breakpoints={{
							320: { slidesPerView: 1, spaceBetween: 4 },
							768: { slidesPerView: 2, spaceBetween: 16 },
							1028: { slidesPerView: 3, spaceBetween: 32 },
						}}
					>
						{cardListsPhoto?.map((item, index) => (
							<SwiperSlide key={index} className="flex justify-center">
								<div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_10px_0_#eeb9ca,0_0_4px_0_#f35185] mt-1 mb-1 cursor-pointer">
									<Image
										src={item.href}
										alt="dancing"
										width={800}
										height={600}
										className="w-full h-auto object-cover"
										onClick={() => {
											setImage(item.href);
											setIsOpen(true);
										}}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="flex items-center justify-between w-[240px] h-[40px] md:w-full md:h-[60px] absolute bottom-[0px] md:top-[45%] md:translate-y-[-100%]">
						<button
							className={clsx(
								"group",
								"photo-prev",
								"flex items-center justify-center cursor-pointer z-10 min-w-[40px] h-[40px] md:min-w-[60px] md:h-[60px]",
								"rounded-full bg-numeric md:hover:bg-numeric-hover backdrop-blur-[25px] shadow-[inset_0_1px_40px_0_rgba(227,222,255,0.3)] hover:shadow-[inset_0_1px_40px_0_rgba(227,222,255,0.3)] active:translate-y-[2px] active:shadow-[inset_0_2px_20px_0_rgba(0,0,0,0.2)]",
							)}
						>
							<svg className="fill-subtitle md:group-hover:fill-subtitle-hover transition-colors duration-300 w-[24px] h-[24px] md:w-[40px] md:h-[40px] rotate-[0deg]">
								<use href="/sprite.svg#icon-arrow-left"></use>
							</svg>
						</button>
						<button
							className={clsx(
								"group",
								"photo-next",
								"flex items-center justify-center cursor-pointer z-10 min-w-[40px] h-[40px] md:min-w-[60px] md:h-[60px]",
								"rounded-full bg-numeric md:hover:bg-numeric-hover backdrop-blur-[25px] shadow-[inset_0_1px_40px_0_rgba(227,222,255,0.3)] hover:shadow-[inset_0_1px_40px_0_rgba(227,222,255,0.3)] active:translate-y-[2px] active:shadow-[inset_0_2px_20px_0_rgba(0,0,0,0.2)]",
							)}
						>
							<svg className="fill-subtitle md:group-hover:fill-subtitle-hover transition-colors duration-300 w-[24px] h-[24px] md:w-[40px] md:h-[40px] rotate-[180deg]">
								<use href="/sprite.svg#icon-arrow-left"></use>
							</svg>
						</button>
					</div>
					<CastomPagination
						lists={cardListsPhoto}
						activeSlide={activeSlide}
						className="h-[40px]"
					/>
				</div>
			</div>
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				section="reviews"
				desktopStyles="rounded-[24px] bg-[#F7F5F3] shadow-[0_0_14.3px_24px_rgba(0,0,0,0.19)]"
			>
				<ImagePopUp image={image} />
			</Modal>
		</>
	);
};

export default SliderPhoto;
