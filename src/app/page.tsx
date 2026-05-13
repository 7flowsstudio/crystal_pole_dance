import About from "@/components/sections/About";
import Callback from "@/components/sections/Callback";
import Hero from "@/components/sections/Hero";
import SertificationAndReviews from "@/components/sections/SertificationAndReviews";
import Statistics from "@/components/sections/Statistics";
import Whyus from "@/components/sections/Whyus";

export default function Home() {
	return (
		<>
			<Hero />
			<Statistics />
			<About />
			<Whyus />
			<SertificationAndReviews />
			<Callback />
		</>
	);
}
