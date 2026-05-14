import React from "react";
import SectionHeading from "../SectionHeading";
import SliderPhoto from "./SliderPhoto";

const Photo = () => {
	return (
		<div id="sertifications" className="flex flex-col gap-[40px]">
			<SectionHeading className="pb-[8px] md:pb-[32px] text-center">
				Фото наших випускників
			</SectionHeading>
			<SliderPhoto />
		</div>
	);
};

export default Photo;
