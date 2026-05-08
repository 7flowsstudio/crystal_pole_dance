import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { contacts, menus, socials } from "@/data/footer";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="bg-white pt-[40px] pb-[40px] lg:pt-[76px] lg:pb-[76px]">
			<Container>
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
					<li className="flex flex-col items-start gap-4">
						<Logo />
						<h2 className="text-secondary font-normal text-subtitle text-[32px]/[100%]">
							Crystal Pole Dance
						</h2>
						<p className="text-primary font-normal text-subtitle text-[20px]/[150%]">
							Місце сили, відновлення та краси з 2012 року. Розвивай свою жіночу
							суперсилу разом з нами!
						</p>
					</li>
					<li className="flex flex-col items-start gap-8 pt-[24px] pl-[32px]">
						<h3 className="text-primary font-normal text-subtitle text-[24px]/[100%]">
							Контакти
						</h3>
						<ul className="flex flex-col items-start gap-[16px]">
							{contacts.map((item) => (
								<li key={item.id} className="flex items-center gap-[16px]">
									<div className="flex items-center justify-center size-6 shrink-0">
										<svg
											className={`w-[100%] h-[100%] shrink-0 ${item.id !== 1 ? "stroke-subtitle fill-none" : "fill-subtitle"}`}
										>
											<use href={item.icon}></use>
										</svg>
									</div>
									<p className="text-primary font-normal text-subtitle text-[20px]/[100%]">
										{item.title}
									</p>
								</li>
							))}
						</ul>
					</li>
					<li className="flex flex-col items-start gap-8 pt-[24px] pl-[32px]">
						<h3 className="text-primary font-normal text-subtitle text-[24px]/[100%]">
							Меню
						</h3>
						<ul className="flex items-start flex-wrap gap-[30px]">
							{menus.map((item) => (
								<li key={item.id} className="flex items-center gap-[16px]">
									<Link
										href={item.link}
										className="text-primary font-normal text-subtitle text-[20px]/[100%]"
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</li>
					<li className="flex flex-col items-start gap-8 pt-[24px]">
						<h3 className="text-primary font-normal text-subtitle text-[24px]/[100%]">
							Ми в соціальних мережах
						</h3>
						<p className="text-primary font-normal text-subtitle text-[16px]/[150%]">
							Слідкуйте за нашими новинами та успіхами наших учениць!
						</p>
						<ul className="flex items-start gap-[24px]">
							{socials.map((item) => (
								<li key={item.id} className="flex items-center justify-center">
									<Link
										href={item.link}
										className="text-primary font-normal text-subtitle text-[20px]/[100%]"
									>
										<div className="flex items-center justify-center size-10 shrink-0">
											<svg className="w-[100%] h-[100%]">
												<use href={item.icon}></use>
											</svg>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</Container>
		</div>
	);
};

export default Footer;
