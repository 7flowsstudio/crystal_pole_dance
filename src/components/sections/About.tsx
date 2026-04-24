import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { about } from "@/data/about";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <div className="pt-[40px] pb-[40px] md:pt-[100px] md:pb-[100px]">
        <div className="flex flex-col md:flex-row gap-[24px]">
          <div className="md:w-1/2">
            <SectionHeading className="pb-[24px] md:pb-[32px]">
              Хто ми
            </SectionHeading>

            <p className="font-primary text-[18px] lg:text-[20px] xl:leading-[40px]">
              {about.text}
            </p>
          </div>
          <div className="relative w-full md:w-1/2 max-w-[609px] h-[280px] md:h-[473px]">
            <Image
              src="/img/about/aboutcrystal.webp"
              alt="dancing"
              fill
              className="object-contain"
            ></Image>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
