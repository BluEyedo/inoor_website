import Image from "next/image";
import React from "react";
import HealthIcon from "@/../public/icons/health.png";
import BeautyIcon from "@/../public/icons/beauty.png";
import QualityIcon from "@/../public/icons/quality.png";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <div className="flex flex-col pb-24 justify-between items-center">
        <h2 className="col-span-3 text-6xl font-bold text-center mb-6 text-charcoal-500">
          Who are We?
        </h2>

        <p className="text-3xl text-center">
          INOOR is a global brand built on the values of:
        </p>
        <div className="mt-4 gap-64 flex text-xl items-center ">
          <div className="duration-200 hover:scale-125 hover:-translate-y-4">
            <Image src={HealthIcon} alt="" width={150} height={150} />
            <p className="text-center text-3xl">Beauty</p>
          </div>
          <div className="duration-200 hover:scale-125 hover:-translate-y-4">
            <Image src={BeautyIcon} alt="" width={150} height={150} />
            <p className="text-center text-3xl">Health</p>
          </div>
          <div className="duration-200 hover:scale-125 hover:-translate-y-4">
            <Image src={QualityIcon} alt="" width={150} height={150} />
            <p className="text-center text-3xl">Quality</p>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-col grid-cols-6  gap-12 pb-24 justify-between items-end">
        <div className="text-3xl col-span-3">
          To become the first choice for beauty and wellness distributors across
          Asia and the Middle East.
        </div>

        <h2 className="col-span-3 text-6xl font-bold text-center mb-12 text-charcoal-500">
          Our Vision
        </h2>
      </div>

      <div className="grid grid-flow-col grid-cols-6  gap-12 pb-24 justify-between items-end">
        <h2 className="col-span-3 text-6xl font-bold text-center mb-12 text-charcoal-500">
          Our Mission
        </h2>
        <div className="text-3xl col-span-3">
          To deliver effective products and professional logistics that ensure a
          seamless, high-end experience.
        </div>
      </div>

      <div className="flex flex-col pb-24 justify-between items-center">
        <h2 className=" text-6xl font-bold text-center mb-16 text-charcoal-500">
          Our Values
        </h2>

        <div className="text-3xl flex flex-row gap-8">
          <div>✔ Professionalism</div>
          <div>✔ Transparency</div>
          <div>✔ Quality</div>
          <div>✔ Flexibility</div>
          <div>✔ Cultural</div>
          <div>✔ Respect</div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
