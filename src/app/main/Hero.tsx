import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import banner from "@/../public/banner.png";
import banner2 from "@/../public/banner2.png";
import Image from "next/image";
import { motion } from "motion/react";

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
    <div className="w-full mt-16 h-[467px]">
      <Splide options={splideOptions}>
        <SplideSlide key={1}>
          <div className="bg-gradient-to-r from-black/70 to-white/0 absolute w-full h-[467px] z-10 " />
          <div className="absolute left-10 top-10 z-30 w-44 sm:w-[650px]">
            <motion.p
              initial={{ opacity: 0, x: -180 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-2 border-b-gold-500"
            >
              INOOR
            </motion.p>
            <motion.p
             initial={{ opacity: 0, y: -30 }}
             whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Quality Begins at the Source
            </motion.p>
          </div>
          <Image
            className=" h-[467px] w-full bg-black text-white object-cover aspect-[1920/467]"
            src={banner}
            alt=""
          />
        </SplideSlide>
        <SplideSlide key={1}>
          <div className="bg-gradient-to-r from-white/0 to-black/90 absolute w-full h-[467px] z-20 " />
          <Image
            className=" h-[467px] w-full bg-black/70 text-white object-cover aspect-[1920/467]"
            src={banner2}
            alt=""
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
