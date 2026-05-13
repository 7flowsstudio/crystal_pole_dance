import Button from "../Button";
import SectionHeading from "../SectionHeading";
import SectionSubheading from "../SectionSubheading";

const DesktopPopUp = ({ onHomeClick }: { onHomeClick: () => void }) => {
	return (
		<div className="py-[150px] px-4 mx-auto flex flex-col gap-4 items-center justify-center h-full">
			<SectionHeading className=" z-20 text-center font-secondary lg:text-[64px] font-normal text-primary mb-6">
				Дякуємо
			</SectionHeading>

			<SectionSubheading className="z-20 w-full max-w-[453px] text-center text-xl font-normal text-black mb-12">
				за твій інтерес. Ми зв&apos;яжемося з тобою найближчим часомv
			</SectionSubheading>

			<Button onClick={onHomeClick} className="w-full flex font-bold">
				На головну
			</Button>
		</div>
	);
};

export default DesktopPopUp;
