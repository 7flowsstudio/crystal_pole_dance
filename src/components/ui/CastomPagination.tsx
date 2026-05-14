import React from "react";
import clsx from "clsx";

type PaginationProps = {
	lists: readonly ItemProps[] | undefined;
	activeSlide?: number;
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
	activeSlide = 0,
	className,
	type,
}: PaginationProps) => {
	const isReviews = type === "reviews";

	// групування по 3
	const groupedSlides =
		lists.length > 3
			? Array.from({
					length: Math.ceil(lists.length / 3),
				})
			: lists;

	const activeGroup =
		lists.length > 3 ? Math.floor(activeSlide / 3) : activeSlide;

	return (
		<div
			className={clsx(
				"flex items-center gap-[8px] h-[40px] md:h-[60px]",
				className,
			)}
		>
			{groupedSlides.map((_, index) => {
				const isActive = index === activeGroup;

				return (
					<div
						key={index}
						className={clsx(
							"rounded-xl transition-all duration-500 ease-out",
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
