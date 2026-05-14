import Link from "next/link";
import HandleScroll from "../ui/HandleScroll";
interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	return (
		<>
			<div
				className={`fixed inset-0 z-40 transition-opacity duration-300 ${
					isOpen ? "opacity-10 bg-background" : "opacity-0 pointer-events-none"
				}`}
				onClick={onClose}
			/>

			<div
				data-mobile-menu
				className={`fixed top-0 right-0 h-full w-4/5 bg-background z-50 overflow-hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex justify-end p-6">
					<button
						onClick={onClose}
						className="size-10 flex justify-center items-center cursor-pointer border-none bg-transparent hover:bg-gray-200 rounded-full transition-colors"
						aria-label="Закрити меню"
					>
						<svg
							width="25"
							height="24"
							viewBox="0 0 30 29"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.999835 27.661C11.6906 17.264 17.6844 11.4349 28.3752 1.03796"
								stroke="#F55D8E"
								strokeWidth="3"
								strokeLinecap="round"
							/>
							<path
								d="M1.33008 1L28.2944 27.9929"
								stroke="#F55D8E"
								strokeWidth="3"
								strokeLinecap="round"
							/>
						</svg>
					</button>
				</div>

				<nav className="flex-1 flex flex-col justify-between px-8 pb-8 gap-8">
					<div className="flex flex-col min-h-[60%] justify-between items-center text-subtitle">
						<button
							onClick={() => HandleScroll({ id: "about", onClose })}
							className="text-xl font-medium tracking-tight leading-normal"
						>
							Про нас
						</button>

						<button
							onClick={() => HandleScroll({ id: "whyus", onClose })}
							className="text-xl font-medium tracking-tight leading-normal"
						>
							Чому ми
						</button>

						<button
							onClick={() => HandleScroll({ id: "price", onClose })}
							className="text-xl font-medium tracking-tight leading-normal"
						>
							Ціни
						</button>

						<button
							onClick={() => HandleScroll({ id: "reviews", onClose })}
							className="text-xl font-medium tracking-tight leading-normal"
						>
							Відгуки
						</button>

						<button
							onClick={() => HandleScroll({ id: "footer", onClose })}
							className="text-xl font-medium tracking-tight leading-normal"
						>
							Контакти
						</button>
					</div>
					<div className="flex items-center justify-center gap-8">
						<a
							href="https://www.instagram.com/with_tasty_k?igsh=aHV2YWJyb2wxbThy"
							aria-label="Instagram"
							className="p-2.5"
						>
							<svg
								width="40"
								height="40"
								viewBox="0 0 39 39"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<use href="/sprite.svg#icon-instagram"></use>
							</svg>
						</a>
						<a
							href="https://www.facebook.com/share/14YT5fHMW4o/?mibextid=wwXIfr"
							aria-label="Facebook"
						>
							<svg
								width="40"
								height="40"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<use href="/sprite.svg#icon-telegram"></use>
							</svg>
						</a>
						<a href="https://t.me/+JsAPy-yAXAg0ZTMy" aria-label="Telegram">
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<use href="/sprite.svg#icon-tiktok"></use>
							</svg>
						</a>
					</div>
					<button
						type="button"
						onClick={() => HandleScroll({ id: "callback", onClose })}
						className="block self-center font-manrope font-normal text-[20px] leading-[100%] tracking-[0] bg-[linear-gradient(45deg,var(--pink)_0%,var(--fuchsia)_100%)] rounded-[10] w-[162] h-[40] cursor-pointer transition duration-300 text-white hover:opacity-80"
					>
						Консультація
					</button>
				</nav>
			</div>
		</>
	);
};

export default MobileMenu;
