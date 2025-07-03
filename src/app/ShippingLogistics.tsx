import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import ShippingIcon from "@/../public/icons/shipping.png";
import BoxIcon from "@/../public/icons/box.png";
import GlobeIcon from "@/../public/icons/globe.png";
import DocumentIcon from "@/../public/icons/document.png";
import DhlLogo from "@/../public/dhl.png";
import AramexLogo from "@/../public/aramex.png";
import FedexLogo from "@/../public/fedex.png";

type Props = {};

const ShippingLogistics = (props: Props) => {
  return (
    <div className="pb-8 md:pb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-6 text-charcoal-500 "
      >
        <div className="flex flex-row">
          <div className="sm:w-[15%] border-b-2 border-charcoal-500" />
          <p className="sm:w-[70%]">Shipping & Packaging Services</p>
          <div className="sm:w-[15%] border-b-2 border-charcoal-500" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="sm:grid sm:grid-cols-2 gap-4  
         justify-items-center items-center 
         text-lg sm:text-xl md:text-2xl lg:text-3xl lg:col-span-3"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [12, 0, 12] }}
            transition={{ repeat: Infinity, delay: 0.2, duration: 3.5 }}
          >
            <Image
              width={130}
              height={130}
              src={GlobeIcon}
              alt=""
              className="w-24 md:w-auto"
            />
          </motion.div>
          <p>Fast delivery to over 20 countries</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [12, 0, 12] }}
            transition={{ repeat: Infinity, delay: 0.4, duration: 3.5 }}
          >
            <Image
              width={130}
              height={130}
              src={BoxIcon}
              alt=""
              className="w-24 md:w-auto"
            />
          </motion.div>
          <p>Customized packaging with private labeling</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [12, 0, 12] }}
            transition={{ repeat: Infinity, delay: 0.6, duration: 3.5 }}
          >
            <Image
              width={130}
              height={130}
              src={ShippingIcon}
              alt=""
              className="w-24 md:w-auto"
            />
          </motion.div>
          <p>Delivery time: 5 to 14 business days</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [12, 0, 12] }}
            transition={{ repeat: Infinity, delay: 0.2, duration: 3.5 }}
          >
            <Image
              width={130}
              height={130}
              src={DocumentIcon}
              alt=""
              className="w-24 md:w-auto"
            />
          </motion.div>
          <p>Full shipping documentation (invoices, certificates of origin)</p>
        </div>
      </motion.div>

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
  );
};

export default ShippingLogistics;
