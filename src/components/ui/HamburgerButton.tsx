interface HamburgerButtonProps {
	isOpen: boolean;
	onToggle: () => void;
	className?: string;
}

const HamburgerButton = ({
	isOpen,
	onToggle,
	className,
}: HamburgerButtonProps) => {
	return (
		<button
			data-mobile-menu-trigger
			onClick={onToggle}
			className={`md:hidden w-11 h-14 inline-flex flex-col justify-center items-center gap-2 cursor-pointer border-none bg-transparent ${className}`}
			aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
			{...(isOpen ? { "aria-expanded": true } : { "aria-expanded": false })}
		>
			<div className="w-9.5 flex flex-col gap-2 justify-center items-center">
				<span className="w-[27px] h-0.75 bg-[#F55D8E] rounded-full transition-all duration-300"></span>
				<span className="w-[27px] h-0.75 bg-[#F55D8E] rounded-full transition-all duration-300"></span>
				<span className="w-[27px] h-0.75 bg-[#F55D8E] rounded-full transition-all duration-300"></span>
			</div>
		</button>
	);
};

export default HamburgerButton;
