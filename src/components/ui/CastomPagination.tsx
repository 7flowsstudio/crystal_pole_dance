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
			{lists.map((step, index) => {
				const isActive = index === activeSlide;

				return (
					<div
						key={index}
						className={clsx(
							"rounded-xl transition-all duration-300 ease-out",
							isActive
								? [
										"h-[6px] md:h-[8px]",
										isReviews ? "w-[6px] md:w-[8px]" : "w-[24px] md:w-[32px]",
										"bg-[#f6a0be]",
									]
								: [
										"w-[6px] h-[6px] md:w-[8px] md:h-[8px]",
										isReviews ? "bg-[#F7D7E3]" : "bg-[#f6a0be]",
									],
						)}
					/>
				);
			})}
		</div>
	);
};

export default CastomPagination;
