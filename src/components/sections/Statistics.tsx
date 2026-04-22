import React from "react";
import Container from "../layout/Container";
import { statistics } from "@/data/statistics";

const Statistics = () => {
  const items = statistics.map((c) => ({
    id: c.id.toString(),
    numeric: c.numeric,
    text: c.text,
  }));
  return (
    <div className="bg-[linear-gradient(180.92deg,#FEFEFE_0.76%,#FEF4F3_99.18%)] pt-[40px] pb-[40px] lg:pt-[100px] lg:pb-[100px]">
      <Container>
        <div className="grid grid-cols-2 md:flex md:justify-between w-full max-w-[1240px]">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <span className="font-primary text-numeric text-[36px] lg:text-[48px] font-bold">
                {item.numeric}
              </span>
              <span className="font-primary text-[20px] lg:text-[24px]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
