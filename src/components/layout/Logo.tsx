import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link
			href="/"
			className="flex relative w-16 h-16 xl:w-20 xl:h-20 items-center content-center"
		>
			<Image
				src="/icon.svg"
				fill
				className="w-18 h-18"
				priority
				alt="Crystal Logo"
			/>
		</Link>
	);
};

export default Logo;
