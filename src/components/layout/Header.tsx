"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navigation } from "@/data/navigation";
import HamburgerButton from "../ui/HamburgerButton";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "@/data/hooks/useMobileMenu";
import MobileMenu from "../navigation/MobileMenu";

const Header = () => {
	const pathname = usePathname();
	const { isOpen, toggle, close } = useMobileMenu();

	useEffect(() => {
		close();
	}, [pathname]);

	return (
		<>
			<header className={`w-full md:py-2.5`}>
				<Container>
					<div className="flex items-center justify-between">
						<Logo />
						<nav className="hidden md:flex md:gap-6 lg:gap-9 xl:gap-12">
							{navigation.map((item, index) => (
								<a
									key={index}
									href={item.href}
									className="font-manrope font-normal text-[16px] md:text-[18px] lg:text-[24px]"
								>
									{item.label}
								</a>
							))}
						</nav>
						<button
							type="button"
							className="hidden md:block font-manrope font-normal text-[16px] md:text-[18px] lg:text-[24px] leading-[100%] tracking-[0] bg-[linear-gradient(45deg,var(--pink)_0%,var(--fuchsia)_100%)] rounded-[10] md:w-[162] md:h-[40] lg:w-[190] lg:h-[56] cursor-pointer transition duration-300 text-white hover:opacity-80"
						>
							Консультація
						</button>
						<HamburgerButton isOpen={isOpen} onToggle={toggle} />
					</div>
				</Container>
			</header>
			<MobileMenu isOpen={isOpen} onClose={close} />
		</>
	);
};

export default Header;
