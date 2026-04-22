import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "font-manrope font-normal text-[16px] lg:text-[20px] leading-[100%] tracking-[0] flex items-center justify-center rounded-[10px] w-full max-w-[441px] h-[40px] lg:h-[56px] cursor-pointer transition duration-300 text-white",
        "bg-[linear-gradient(85.07deg,#F55E8F_0%,#F35084_100.73%)]",
        "hover:opacity-80",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
