import Container from "@/components/layout/Container";
import React, { useEffect, useState } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	section?: string;
	desktopStyles?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	section,
	desktopStyles,
}) => {
	const [isAnimating, setIsAnimating] = useState(false);
	const isReviews = section === "reviews";

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape" && isOpen) {
				onClose();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			setTimeout(() => setIsAnimating(true), 300);
		} else {
			document.body.style.overflow = "unset";
			const timer = setTimeout(() => setIsAnimating(false), 300);
			return () => clearTimeout(timer);
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!isOpen && !isAnimating) return null;

	return (
		<Container
			className={`fixed inset-0 z-100 bg-transparent transition-all duration-300 opacity-100 backdrop-blur-sm`}
		>
			<div className="flex flex-col items-center justify-center h-full bg-transparent">
				<div
					className={`relative w-full transition-all duration-300 ${desktopStyles || ""} `}
				>
					<button
						onClick={onClose}
						className={`absolute top-6 right-6 z-20 p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer ${isReviews ? "bg-gray-100 border-[1px] border-button" : ""}`}
						aria-label="Закрити"
					>
						<svg
							width="20"
							height="19"
							viewBox="0 0 20 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.70712 1L18.6777 17.9706M17.9706 1L1 17.9706"
								stroke="#f35084"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
					{children}
				</div>
			</div>
		</Container>
	);
};

export default Modal;
