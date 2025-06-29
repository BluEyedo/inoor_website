import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import banner from "@/../public/banner.png";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  // Splide options
  const splideOptions = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 4000,
    arrows: true,
    pagination: true,
    drag: true,
    keyboard: true,
    speed: 600,
  };

  return (
    <div className="w-full mt-16">
      <Splide options={splideOptions}>
        <SplideSlide key={1}>
          <Image
            className=" h-[467px] w-full bg-black text-white object-cover aspect-[1920/467]"
            src={banner}
            alt=""
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
