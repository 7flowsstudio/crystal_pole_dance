import { forwardRef } from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = forwardRef<HTMLDivElement, Props>(
	({ children, className = "", ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={`max-w-[1440px] mx-auto px-[16px] md:px-[32px] lg:px-[48px] xl:px-[100px] ${className}`}
				{...props}
			>
				{children}
			</div>
		);
	},
);

Container.displayName = "Container";
export default Container;
