"use client";
import Container from "@/components/layout/Container";

import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="h-[800px]">
      <div id="hero" className="w-full overflow-hidden">
        <div className="absolute  w-full h-[463px] lg:h-[800px]">
          <Image
            src="/img/hero/ed52b2fe6c1d471b3ce6680465dd58e9948d3e13.webp"
            alt="background"
            fill
            priority
            className="object-cover object-[80%_center] md:object-center"
          />
          <div
            className="absolute inset-0 
      md:bg-[radial-gradient(51.67%_130.15%_at_69.46%_62.26%,rgba(245,238,240,0)_0%,rgba(255,255,255,0.9)_100%)]"
          />
        </div>
        <div className="relative z-10">
          <Container>
            <div className="max-w-[162px] lg:max-w-[282px]">
              <Button className="">Записатися</Button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
