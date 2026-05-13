import React from "react";
import SectionHeading from "../SectionHeading";
import SliderReviews from "./SliderReviews";

const Reviews = () => {
	return (
		<div id="reviews" className="flex flex-col gap-[40px]">
			<SectionHeading className="pb-[8px] md:pb-[32px] text-center">
				Відгуки
			</SectionHeading>
			<SliderReviews />
		</div>
	);
};

export default Reviews;
