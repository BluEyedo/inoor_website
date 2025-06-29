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
    interval: 6000,
    arrows: false,
    pagination: true,
    drag: true,
    keyboard: true,
    speed: 600,
  };

  return (
    <div className="w-full mt-16">
      <Splide options={splideOptions}>
        <SplideSlide key={1}>
          <div className="bg-gradient-to-r from-black/70 to-white/0 absolute w-full h-[467px] z-10 " />
          <div className="absolute left-14 top-10 z-30 ">
            <p className="text-white text-5xl font-bold border-b-2 border-b-gold-500">
              INOOR
            </p>
            <p className="text-white text-4xl">Quality Begins at the Source</p>
          </div>
          <Image
            className=" h-[467px] w-full bg-black text-white object-cover aspect-[1920/467]"
            src={banner}
            alt=""
          />
        </SplideSlide>
        <SplideSlide key={1}>
          <div className="bg-gradient-to-r from-white/0 to-black absolute w-full h-[467px] z-20 " />
          <Image
            className=" h-[467px] w-full bg-black/70 text-white object-cover aspect-[1920/467]"
            src={banner}
            alt=""
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
