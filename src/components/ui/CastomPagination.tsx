import React from "react";
import s from "./CastomPagination.module.css";
import clsx from "clsx";

type PaginationProps = {
	lists: ItemProps[] | undefined;
	activeSlide: number | null;
	className?: string;
	type?: string;
};

type ItemProps = {
	id: number;
	href?: string;
	img?: string;
	stars?: number;
	text?: string;
	user?: string;
};

const CastomPagination = ({
	lists = [],
	activeSlide,
	className,
	type,
}: PaginationProps) => {
	const isReviews = type === "reviews";
	return (
		<div
			className={clsx(
				"flex items-center gap-[8px] h-[40px] md:h-[60px]",
				className,
			)}
		>
			{lists.map((step, index) => (
				<div key={index} className="flex items-center justify-center gap-[8px]">
					{index === activeSlide ? (
						<div
							className={`h-[6px] md:h-[8px] bg-[#f6a0be] rounded-xl ${isReviews ? "w-[6px] md:w-[8px]" : "w-[24px] md:w-[32px]"}`}
						></div>
					) : (
						<div
							className={`w-[6px] h-[6px] md:w-[8px] md:h-[8px]  rounded-xl ${isReviews ? "bg-[#F7D7E3]" : "bg-[#f6a0be]"}`}
						></div>
					)}
				</div>
			))}
		</div>
	);
};

export default CastomPagination;
