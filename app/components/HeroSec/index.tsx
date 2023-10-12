import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function HeroSec() {
  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col gap-10 lg:p-14 p-7">
        <div className="flex flex-col pt-10">
          <div className="lg:text-7xl text-3xl">We help our clients</div>
          <div className="lg:text-7xl text-4xl font-bold">achieve their goals</div>
        </div>
        <div className="w-full lg:w-[613.41px] text-lg font-medium">
          Our expert team use creativity and data analytics to build digital
          experiences that deliver our clients' objectives.
        </div>
        <div className="flex items-center gap-3">
          <div className="text-lg font-normal">More about us</div>
          <div className="bg-[#643EFF] w-[40px] h-[40px] rounded-full p-2">
            <BsArrowRight className="text-white w-6 h-6" />
          </div>
        </div>
        
        <div className="flex flex-col gap-10 pt-10">
          <div className="flex flex-col gap-7">
            <div>
              <p>Our Beliefs</p>
            </div>
            <div className="w-full lg:w-[1011.66px] lg:text-5xl text-2xl font-light">
              We believe in doing what it takes to help our clients achieve
              their goals. Doing right by them and building long-lasting
              partnerships. We believe in working hard and having a great time
              doing it.{" "}
              <span className="lg:text-4xl text-2xl font-semibold">
                {" "}
                We believe in flexibility–
              </span>{" "}
              the flexibility of our team, their skills, their working hours and
              their work location.
            </div>
          </div>
          <div className="w-full border-b-2 border-black pt-14"></div>
        </div>
      </div>
    </div>
  );
}
