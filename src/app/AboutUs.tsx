import Image from "next/image";
import React from "react";
import HealthIcon from "@/../public/icons/health.png";
import BeautyIcon from "@/../public/icons/beauty.png";
import QualityIcon from "@/../public/icons/quality.png";
import VisionIcon from "@/../public/icons/vision.png";
import ValuesIcon from "@/../public/icons/values.png";
import MissionIcon from "@/../public/icons/mission.png";
import * as motion from "motion/react-client";
import { Divider } from "antd";

type Props = {};
const valuesArray = [
  "Professionalism",
  "Transparency",
  "Quality",
  "Flexibility",
  "Cultural",
  "Respect",
];

const AboutUs = (props: Props) => {
  return (
    <>
      <div className="flex flex-col pb-8 md:pb-16 justify-between px-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 text-charcoal-500 flex flex-row justify-center"
        >
          <div className="sm:w-[35%] border-b-2 border-charcoal-500" />
          <p className="sm:w-[30%] text-center">Who are We?</p>
          <div className="sm:w-[35%] border-b-2 border-charcoal-500" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -180 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center px-2"
        >
          INOOR is a global brand built on the values of:
        </motion.div>

        <div className="mt-4 gap-8 sm:gap-16 md:gap-32 lg:gap-64 flex flex-col sm:flex-row text-lg md:text-xl items-center justify-center">
          <div className="duration-200 hover:scale-125 hover:-translate-y-4 ">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                scale: {
                  type: "spring",
                  visualDuration: 0.4,
                  bounce: 0.5,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={HealthIcon}
                alt=""
                width={120}
                height={120}
                className="sm:w-[150px] sm:h-[150px]"
              />
              <p className="text-center text-xl sm:text-2xl md:text-3xl">
                Beauty
              </p>
            </motion.div>
          </div>
          <div className="duration-200 hover:scale-125 hover:-translate-y-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                scale: {
                  type: "spring",
                  visualDuration: 0.4,
                  bounce: 0.5,
                  delay: 0.4,
                },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={BeautyIcon}
                alt=""
                width={120}
                height={120}
                className="sm:w-[150px] sm:h-[150px]"
              />
              <p className="text-center text-xl sm:text-2xl md:text-3xl">
                Health
              </p>
            </motion.div>
          </div>
          <div className="duration-200 hover:scale-125 hover:-translate-y-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                scale: {
                  type: "spring",
                  visualDuration: 0.4,
                  bounce: 0.5,
                  delay: 0.6,
                },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={QualityIcon}
                alt=""
                width={120}
                height={120}
                className="sm:w-[150px] sm:h-[150px]"
              />
              <p className="text-center text-xl sm:text-2xl md:text-3xl">
                Quality
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Divider style={{ border: "1px solid" }} />
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-6 lg:gap-6 md:gap-12 pb-8 md:pb-16 justify-between items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl lg:col-span-3 text-center lg:text-left"
        >
          To become the first choice for beauty and wellness distributors across
          Asia and the Middle East.
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-col items-center"
        >
          <motion.div
            whileInView={{
              scale: 1,
              scaleY: [1, 0, 1, 0, 1],
            }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <Image
              src={VisionIcon}
              alt=""
              width={120}
              height={120}
              className="sm:w-[150px] sm:h-[150px] -mb-4 sm:-mb-6"
            />
          </motion.div>
          <h2 className="text-center mb-6 md:mb-12 text-charcoal-500">
            Our Vision
          </h2>
        </motion.div>
      </div>
      <Divider style={{ border: "1px solid" }} />
      <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-6 lg:gap-6 md:gap-12 pb-8 md:pb-16 justify-between items-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-col items-center order-2 lg:order-1"
        >
          <Image
            src={MissionIcon}
            alt=""
            width={120}
            height={120}
            className="sm:w-[150px] sm:h-[150px]"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-12 text-charcoal-500">
            Our Mission
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg  sm:block sm:text-xl md:text-2xl lg:text-3xl lg:col-span-3 text-center lg:text-left order-1 lg:order-2"
        >
          To deliver effective products and professional logistics that ensure a
          seamless, high-end experience.
        </motion.div>
      </div>
      <Divider style={{ border: "1px solid" }} />
      <div className="flex flex-col  justify-between items-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-col sm:flex-row items-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-charcoal-500 mb-4 sm:mb-0">
            Our Values
          </h2>
          <motion.div
            whileInView={{ scale: 1, y: [12, 0, 12] }}
            transition={{ repeat: Infinity, duration: 2 }}
            viewport={{ once: false }}
          >
            <Image
              src={ValuesIcon}
              alt=""
              width={120}
              height={120}
              className="sm:w-[150px] sm:h-[150px]"
            />
          </motion.div>
        </motion.div>

        <div
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl grid grid-cols-2 sm:flex sm:flex-row  gap-4 sm:gap-6 md:gap-8 justify-center items-center mt-6
        pb-8 
        "
        >
          {valuesArray.map((txt, ix) => (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * ix }}
              viewport={{ once: true }}
              key={ix}
              className="text-center sm:text-left items-center flex-row sm:flex-col xl:flex-row flex gap-3"
            >
              <span className="text-green-600 font-bold "> ✔</span> {txt}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
