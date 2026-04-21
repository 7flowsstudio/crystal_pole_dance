"use client";
import Container from "@/components/layout/Container";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[800px]">
      <div id="hero" className="w-full h-[800px] overflow-hidden">
        <div className="absolute  w-full h-[800px]">
          <Image
            src="/img/hero/ed52b2fe6c1d471b3ce6680465dd58e9948d3e13.webp"
            alt="background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <Container>
            <div></div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
