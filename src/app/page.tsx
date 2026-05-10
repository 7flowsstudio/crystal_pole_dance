import About from "@/components/sections/About";
import Callback from "@/components/sections/Callback";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Whous from "@/components/sections/Whous";

export default function Home() {
	return (
		<>
			<Hero />
			<Statistics />
			<About />
			<Whous />
			<Callback />
		</>
	);
}
