import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
};

export default function Button({
	children,
	className,
	disabled,
	...props
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			className={clsx(
				"font-manrope font-normal text-[16px] lg:text-[20px] leading-[100%] flex items-center justify-center rounded-[10px] w-full max-w-[441px] h-[40px] lg:h-[56px] transition duration-300 text-white",

				// базовий фон
				"bg-[linear-gradient(85.07deg,#F55E8F_0%,#F35084_100.73%)]",

				// hover тільки коли НЕ disabled
				!disabled && "hover:opacity-80 cursor-pointer",

				// disabled стан
				disabled && "opacity-60 cursor-not-allowed",

				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
