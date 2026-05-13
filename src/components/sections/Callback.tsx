"use client";
import React, { useActionState, useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";
import { FormInput } from "../ui/form/FormInput";
import { UserFormState } from "@/data/lib/types/forms";
import { sendUserForm } from "@/data/lib/actions/send-form-actions";
import { FormTextarea } from "../ui/form/FormTextarea";
import Button from "../ui/Button";
import DesktopPopUp from "../ui/modal/DesktopPopUp";
import Modal from "../ui/modal/Modal";
import { usePathname, useRouter } from "next/navigation";

const initialState: UserFormState = {
	success: false,
	errors: {},
};

const Callback = () => {
	const [state, formAction, pending] = useActionState<UserFormState, FormData>(
		sendUserForm,
		initialState,
	);
	const formRef = useRef<HTMLFormElement>(null);
	const [isAgreed, setIsAgreed] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (state.success && formRef.current) {
			formRef.current.reset();
			setTimeout(() => {
				setIsOpen(true);
			}, 0);
		}
	}, [state.success]);

	const handleHomeClick = () => {
		if (pathname === "/") {
			setIsOpen(false);
		} else {
			router.push("/");
			setIsOpen(false);
		}
	};

	return (
		<div
			id="callback"
			className="bg-[linear-gradient(180deg,#fef0f1_0%,#fefefe_100%)] pt-[40px] pb-[40px] lg:pt-[100px] lg:pb-[100px]"
		>
			<Container>
				<div className="lg:max-w-[1042px] mx-auto">
					<SectionHeading className="pb-[8px] md:pb-[32px] text-center">
						Зворотний зв’язок
					</SectionHeading>
					<p className="font-secondary text-[16px]/[20px] md:text-[20px] text-subtitle font-medium text-center pb-[16px] md:pb-[32px]">
						Залишіть свої контактні данні та ми зв’яжемося з вами найближчим
						часом
					</p>
					<div className="flex flex-col md:flex-row items-stretch max-w-[560px] md:max-w-full mx-auto gap-[16px] lg:gap-[32px]">
						<form
							action={formAction}
							ref={formRef}
							className="flex flex-col gap-[20px] basis-1/2 bg-[#fff4f4] shadow-[0_0_10px_0_#eeb9ca,0_0_4px_0_#f35185] rounded-2xl overflow-hidden px-[8px] py-[8px] md:py-[24px] lg:px-[32px] lg:py-[48px]"
						>
							<FormInput
								name="name"
								placeholder="Ім'я"
								error={state.errors?.name?.join(", ")}
							/>
							<FormInput
								name="phone"
								placeholder="Телефон"
								error={state.errors?.phone?.join(", ")}
							/>
							<FormTextarea
								name="message"
								placeholder="Повідомлення (необов’язково)"
							/>

							<div
								className="flex items-center gap-3 cursor-pointer select-none"
								onClick={() => setIsAgreed(!isAgreed)}
							>
								<div
									className={`
            min-w-4 h-4 border-1 rounded-md flex items-center justify-center transition-all duration-200
            ${isAgreed ? "border-[#f55d8e]" : "bg-transparent border-[#f55d8e]"}
          `}
								>
									{isAgreed && (
										<svg
											className=""
											width="10"
											height="8"
											viewBox="0 0 12 10"
											fill="#f55d8e"
											xmlns="http://w3.org"
										>
											<use href="/sprite.svg#icon-check"></use>
										</svg>
									)}
								</div>
								<p className="text-[12px] text-primary text-[rgba(56,19,32,0.8)] lg:text-[16px]">
									Даю згоду на обробку моїх персональних даних
								</p>
								{state.error && (
									<p className="text-error text-center pt-2">{state.error}</p>
								)}
							</div>
							<Button
								type="submit"
								disabled={pending || !isAgreed}
								className={`w-full max-w-full ${!isAgreed ? "opacity-60 cursor-not-allowed" : ""}`}
							>
								{pending ? "Відправка..." : "Записатися на заняття"}
							</Button>
							<div
								className="flex items-center justify-center gap-3 cursor-pointer select-none"
								onClick={() => setIsAgreed(!isAgreed)}
							>
								<div className="">
									<svg
										className=""
										width="16"
										height="12"
										viewBox="0 0 12 10"
										fill="#f55d8e"
										xmlns="http://w3.org"
									>
										<use href="/sprite.svg#icon-check"></use>
									</svg>
								</div>
								<p className="text-[14px] text-primary text-subtitle lg:text-[20px]">
									Ми звяжемся з вами протягом 15 хвилин
								</p>
								{state.error && (
									<p className="text-error text-center pt-2">{state.error}</p>
								)}
							</div>
						</form>
						<div className="relative basis-1/2 min-h-[500px] shadow-[0_0_10px_0_#eeb9ca,0_0_4px_0_#f35185] rounded-2xl overflow-hidden">
							<Image
								src="/img/callback/image_girl.webp"
								alt="dancing"
								fill
								className="object-cover"
							></Image>
						</div>
					</div>

					<Modal
						isOpen={isOpen}
						onClose={() => setIsOpen(false)}
						desktopStyles="rounded-[24px] bg-[#F7F5F3] shadow-[0_0_14.3px_24px_rgba(0,0,0,0.19)]"
					>
						<DesktopPopUp onHomeClick={handleHomeClick} />
					</Modal>
				</div>
			</Container>
		</div>
	);
};

export default Callback;
