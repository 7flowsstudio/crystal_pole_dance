import React from "react";
import Container from "../layout/Container";
import { statistics } from "@/data/statistics";

const Statistics = () => {
	const items = statistics.map((c) => ({
		id: c.id.toString(),
		numeric: c.numeric,
		text: c.text,
	}));
	return (
		<div
			id="statistics"
			className="bg-[linear-gradient(180.92deg,#FEFEFE_0.76%,#FEF4F3_99.18%)] pt-[40px] pb-[40px] lg:pt-[100px] lg:pb-[100px]"
		>
			<Container>
				<div className="grid grid-cols-2 md:flex md:justify-between w-full max-w-[1240px]">
					{items.map((item, index) => (
						<div key={item.id} className="w-full flex items-center">
							<div key={item.id} className="w-full flex flex-col items-center">
								<span className="font-primary text-numeric text-[36px] lg:text-[48px] font-bold">
									{item.numeric}
								</span>
								<span className="font-primary text-center text-[20px] lg:text-[24px]">
									{item.text}
								</span>
							</div>
							{index !== items.length - 1 && (
								<div className="hidden md:block min-w-[2px] h-[81px] md:mx-6 md:bg-[linear-gradient(180deg,#FEF5F4_0%,rgba(243,81,133,0.5)_50%,#FEF5F4_100%)]" />
							)}
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Statistics;
