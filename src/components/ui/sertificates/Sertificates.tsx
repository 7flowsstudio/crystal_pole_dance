import React from "react";
import SectionHeading from "../SectionHeading";
import SliderSertifications from "./SliderSertifications";

const Sertificates = () => {
	return (
		<div id="sertifications" className="flex flex-col gap-[40px]">
			<SectionHeading className="pb-[8px] md:pb-[32px] text-center">
				Сертифікати та нагороди
			</SectionHeading>
			<SliderSertifications />
		</div>
	);
};

export default Sertificates;
