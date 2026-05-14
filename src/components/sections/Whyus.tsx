import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { whous, whousprice } from "@/data/whous";
import Image from "next/image";

const Whyus = () => {
	return (
		<div
			id="whyus"
			className="bg-[linear-gradient(180deg,#fef0f1_0%,#fefefe_100%)] pt-[40px] pb-[40px] lg:pt-[100px] lg:pb-[100px]"
		>
			<Container>
				<SectionHeading className="pb-[32px] md:pb-[80px] text-center">
					Чому ми
				</SectionHeading>
				<ul className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6">
					{whous.map((item) => (
						<li
							key={item.id}
							className="max-w-sm w-[100%] md:w-[calc((100%-48px)/3)] xl:w-[calc((100%-120px)/3)] flex flex-col items-center gap-3 rounded-[20px] px-9 py-9 lg:py-12.5 xl:p-12.5 bg-background shadow-[0_0_10px_0_#eeb9ca]"
						>
							<div className="w-13 h-13 md:w-10 md:h-10 flex items-center justify-center">
								<svg className="w-11 h-11 md:w-8 md:h-8">
									<use href={item.icon}></use>
								</svg>
							</div>
							<div className="flex flex-col items-center gap-2">
								<h3 className="font-secondary font-bold text-[16px] md:text-[20px] text-subtitle text-center">
									{item.title}
								</h3>
								<p className="font-secondary font-normal text-[16px] md:text-[20px] text-subtitle text-center">
									{item.subtitle}
								</p>
							</div>
						</li>
					))}
				</ul>
				<div className="mt-[32px] md:mt-[100px] px-[16px] py-[16px] sm:px-[32px] sm:py-[32px] lg:px-[115px] lg:py-[65px] flex flex-row items-center gap-[100px] lg:gap-[140px] bg-[linear-gradient(180deg,#feebef_0%,rgba(254,241,242,0.6)_100%)] rounded-[20px]">
					<div className="hidden md:block relative md:w-[162px] h-[380px] lg:h-[487px]">
						<Image
							src="/img/whyus/Image_girl.png"
							alt="dancing"
							fill
							className="object-contain md:scale-[1.5] lg:scale-[1.8]"
						></Image>
					</div>
					<div id="price" className="flex flex-col gap-8 w-full">
						<h3 className="font-secondary font-bold text-[24px]/[100%] lg:text-[40px] text-subtitle text-left">
							Наші ціни
						</h3>
						<ul className="flex flex-col gap-8">
							{whousprice.map((item) => (
								<li
									key={item.id}
									className="flex flex-row justify-between items-center gap-4"
								>
									<p className="whitespace-nowrap font-primary font-medium text-[16px]/[100%] lg:text-[28px] text-subtitle">
										{item.title}
									</p>
									<div className="border-t border-t-numeric opacity-50 w-full h-0"></div>
									<span className="font-primary font-medium text-[16px]/[100%] lg:text-[28px] text-numeric">
										{item.price}₴
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Whyus;
