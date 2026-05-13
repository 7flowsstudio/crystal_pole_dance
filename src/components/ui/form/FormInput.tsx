"use client";

import clsx from "clsx";
import FormFieldError from "./FormFieldError";

interface FormInputProps {
	name: string;
	type?: string;
	placeholder?: string;
	error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
	name,
	type = "text",
	placeholder,
	error,
}) => {
	return (
		<div className="flex flex-col justify-end relative">
			<label
				htmlFor={name}
				className="text-primary text-subtitle text-[14px]/[100%] md:text-[20px] top-[-2] absolute left-[6px] bg-[#fff4f4] px-[8px] py-[8px]"
			>
				{placeholder}
			</label>
			<input
				name={name}
				type={type}
				className={clsx(
					"py-4 px-4 mt-4 rounded-2xl border-[1px] h-[48px] border-[#f69fbd] transition-colors",
					"focus:border-secondary",
					"not-placeholder-shown:border-primary",
					error && "border-error",
				)}
			/>

			<FormFieldError error={error} />
		</div>
	);
};
