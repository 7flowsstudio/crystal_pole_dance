"use client";

import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

import Stars from "./Stars";

type ReviewsItemProps = {
	item: Item;
};

type Item = {
	id: number;
	img: string;
	imgm: string;
	stars: number;
	text: string;
	user: string;
};

const ReviewsItem = ({ item }: ReviewsItemProps) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	return (
		<div className="flex flex-col md:flex-row items-center gap-[8px] md:gap-[32px] bg-background p-[8px] md:p-[48px]">
			<div className="relative w-full aspect-[327/208] md:min-w-[200px] md:max-w-[200px] md:h-[240px] md:aspect-auto rounded-2xl overflow-hidden">
				<Image
					src={isMobile ? item.imgm : item.img}
					alt="dancing"
					fill
					className="object-cover"
				/>
			</div>

			<div className="flex flex-col gap-[16px]">
				<Stars rating={item.stars} />

				<p className="text-primary text-[16px] md:text-[20px] text-subtitle font-normal">
					{item.text}
				</p>

				<p className="text-primary text-[16px] md:text-[20px] text-subtitle font-normal">
					{item.user}
				</p>
			</div>
		</div>
	);
};

export default ReviewsItem;
