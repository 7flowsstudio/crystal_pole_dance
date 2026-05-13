import React from "react";
import Container from "../layout/Container";
import Sertificates from "../ui/sertificates/Sertificates";
import Reviews from "../ui/reviews/Reviews";

const SertificationAndReviews = () => {
	return (
		<div className="bg-[linear-gradient(180deg,#fefefe_0%,#fef0f1_100%)] pt-[40px] pb-[40px] lg:pt-[100px] lg:pb-[100px]">
			<Container>
				<div className="flex flex-col gap-[100px]">
					<Sertificates />
					<Reviews />
				</div>
			</Container>
		</div>
	);
};

export default SertificationAndReviews;
