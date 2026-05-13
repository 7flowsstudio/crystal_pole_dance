import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link
			href="/"
			className=" group relative flex items-center justify-center w-16 h-16 xl:w-20 xl:h-20 transition-all duration-500 hover:scale-[1.06] active:scale-95"
		>
			<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(243,81,133,0.18)_0%,rgba(243,81,133,0)_70%)] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

			<Image
				src="/icon.svg"
				fill
				priority
				alt="Crystal Logo"
				className="object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(243,81,133,0.35)] group-active:rotate-0"
			/>
		</Link>
	);
};

export default Logo;
