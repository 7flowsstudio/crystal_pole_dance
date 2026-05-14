import React from "react";
import Container from "../layout/Container";
import Sertificates from "../ui/sertificates/Sertificates";
import Reviews from "../ui/reviews/Reviews";
import Photo from "../ui/photo/Photo";

const SertificationAndReviews = () => {
	return (
		<div
			id="sertifications_and_reviews"
			className="bg-[linear-gradient(180deg,#fefefe_0%,#fef0f1_100%)] pt-[40px] pb-[40px] lg:pt-[100px] lg:pb-[100px]"
		>
			<Container>
				<div className="flex flex-col gap-[40px]">
					<Sertificates />
					<Photo />
					<Reviews />
				</div>
			</Container>
		</div>
	);
};

export default SertificationAndReviews;
