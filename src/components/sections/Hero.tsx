"use client";
import Container from "@/components/layout/Container";

import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
	return (
		<div id="hero" className="h-[463px] lg:h-[800px]">
			<div id="hero" className="w-full overflow-hidden">
				<div className="absolute  w-full h-[463px] lg:h-[800px]">
					<Image
						src="/img/hero/ed52b2fe6c1d471b3ce6680465dd58e9948d3e13.webp"
						alt="background"
						fill
						priority
						className="object-cover object-[80%_center] md:object-center"
					/>
					<div className="absolute inset-0 md:bg-[radial-gradient(51.67%_130.15%_at_69.46%_62.26%,rgba(245,238,240,0)_0%,rgba(255,255,255,0.9)_100%)]" />
					<div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.8)_17.29%,rgba(255,255,255,0.6)_34.91%,rgba(255,255,255,0)_50.11%)] md:bg-none"></div>
				</div>
				<div className="relative z-10">
					<Container>
						<div className="max-w-[610px] pt-[50px] lg:pt-[75px]">
							<h1 className="font-primary text-title font-bold text-primary leading-[36px] tracking-[0] text-[32px] lg:text-[72px] lg:leading-[72px]">
								Наша студія - простір жіночої суперсили
							</h1>
							<p className="pt-[8px] pb-[16px] lg:pt-[32px] text-subtitle font-primary font-semibold text-[16px] leading-[100%] tracking-[0] lg:text-[24px]">
								Місце де народжується стиль впевненість та внутрішня собода
							</p>
							<div className="max-w-[162px] lg:max-w-[282px]">
								<Button
									onClick={() => {
										document
											.getElementById("callback")
											?.scrollIntoView({ behavior: "smooth" });
									}}
									className="lg:hidden"
								>
									Записатися
								</Button>
								<Button
									onClick={() => {
										document
											.getElementById("callback")
											?.scrollIntoView({ behavior: "smooth" });
									}}
									className="hidden lg:flex mt-[275px]"
								>
									Записатися на заняття
								</Button>
							</div>
						</div>
					</Container>
				</div>
			</div>
		</div>
	);
};

export default Hero;
