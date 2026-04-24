import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: Props) {
  return (
    <h2
      className={clsx(
        "font-secondary text-[24px] md:text-[32px] lg:text-[40px] text-subtitle font-medium",
        className,
      )}
    >
      {children}
    </h2>
  );
}
