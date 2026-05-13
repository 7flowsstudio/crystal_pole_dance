import Image from "next/image";

const ImagePopUp = ({ image }: { image: string | null }) => {
	return (
		<div className="w-[calc(100%-32px)] m-4 aspect-[85/40] rounded-2xl overflow-auto">
			{image && (
				<Image
					src={image}
					alt="dancing"
					width={1600}
					height={1200}
					className="min-w-full h-auto"
				/>
			)}
		</div>
	);
};

export default ImagePopUp;
