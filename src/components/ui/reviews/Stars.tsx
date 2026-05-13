import React from "react";

type RatingProps = {
	rating: number;
};

const Stars = ({ rating }: RatingProps) => {
	return (
		<div className="flex items-center gap-[8px]">
			<ul className="flex items-center gap-[4px]">
				{Array.from({ length: 5 }).map((_, index) => {
					const isActive = index < rating;

					return (
						<li
							className="flex items-center justify-center w-[24px] h-[24px]"
							key={index}
						>
							<svg
								className={`w-full h-full ${
									isActive ? "fill-goldstar" : "fill-gray-300"
								}`}
							>
								<use href="/sprite.svg#icon-star"></use>
							</svg>
						</li>
					);
				})}
			</ul>

			<p className="text-primary font-normal text-[20px]/[100%] text-subtitle">
				{rating}.0
			</p>
		</div>
	);
};

export default Stars;
