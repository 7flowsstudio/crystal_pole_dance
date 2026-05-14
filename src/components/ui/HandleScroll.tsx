import React from "react";

type HendleScrollProps = {
	id: string;
	onClose: () => void;
};

const HandleScroll = ({ id, onClose }: HendleScrollProps) => {
	onClose();

	setTimeout(() => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	}, 150);
};

export default HandleScroll;
