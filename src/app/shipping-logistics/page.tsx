"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import ShippingLogistics from "../ShippingLogistics";

import DhlLogo from "@/../public/dhl.png";
import AramexLogo from "@/../public/aramex.png";
import FedexLogo from "@/../public/fedex.png";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-16">
      <div
        className="
          py-16
          sm:max-w-screen-sm    
          md:max-w-screen-md
          lg:max-w-screen-lg 
          2xl:max-w-screen-xl
          "
      >
        <ShippingLogistics />

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-16 md:mb-6 mb-8 text-charcoal-500 "
        >
          <div className="flex flex-row ">
            <div className="sm:w-[35%] border-b-2 border-charcoal-500" />
            <p className="sm:w-[30%]">Our Parterns</p>
            <div className="sm:w-[35%] border-b-2 border-charcoal-500" />
          </div>
        </motion.div>

        <div className="grid grid-cols-3 place-content-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className=""
          >
            <Image
              alt=""
              src={DhlLogo}
              width={195}
              height={195}
              className="w-auto"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className=""
          >
            <Image
              alt=""
              src={FedexLogo}
              width={195}
              height={195}
              className="w-auto"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className=""
          >
            <Image
              alt=""
              src={AramexLogo}
              width={195}
              height={195}
              className="w-auto"
            />
          </motion.div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl lg:col-span-3 justify-self-center">
            ...and more
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
