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
import { useParams } from "next/navigation";

type Props = {};

const ShippingLogistics = (props: Props) => {
  const { locale } = useParams();
  return (
    <div className="pb-8 md:pb-16 px-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-6 text-charcoal-500 "
      >
        <div className="flex flex-row">
          <div className="sm:w-[15%] border-b-2 border-charcoal-500" />
          <p className="sm:w-[70%]">
            {locale == "en" && "Shipping & Packaging Services"}
            {locale == "ar" && "خدمات الشحن والتغليف"}
          </p>
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
              width={50}
              height={50}
              src={GlobeIcon}
              alt=""
              className="w-24 md:w-[120px]"
            />
          </motion.div>
          <p>
            {locale == "en" && "Fast delivery to over 20 countries"}
            {locale == "ar" && "شحن دولي سريع إلى أكثر من 20 دولة"}
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [12, 0, 12] }}
            transition={{ repeat: Infinity, delay: 0.4, duration: 3.5 }}
          >
            <Image
              width={50}
              height={50}
              src={BoxIcon}
              alt=""
              className="w-24 md:w-[120px]"
            />
          </motion.div>
          <p>
            {locale == "en" && "Customized packaging with private labeling"}
            {locale == "ar" && "تغليف بعلامتك التجارية"}
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [12, 0, 12] }}
            transition={{ repeat: Infinity, delay: 0.6, duration: 3.5 }}
          >
            <Image
              width={50}
              height={50}
              src={ShippingIcon}
              alt=""
              className="w-24 md:w-[120px]"
            />
          </motion.div>
          <p>
            {locale == "en" && "Delivery time: 5 to 14 business days"}
            {locale == "ar" && "توصيل خلال 5 إلى 14 يومًا"}
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [12, 0, 12] }}
            transition={{ repeat: Infinity, delay: 0.2, duration: 3.5 }}
          >
            <Image
              width={50}
              height={50}
              src={DocumentIcon}
              alt=""
              className="w-24 md:w-[120px]"
            />
          </motion.div>
          <p>
            {locale == "en" &&
              "Full shipping documentation (invoices, certificates of origin)"}
            {locale == "ar" && "مستندات الشحن كاملة (فواتير، شهادات منشأ)"}
          </p>
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
          <p className="sm:w-[30%]">
            {locale == "en" && "Our Parterns"}
            {locale == "ar" && "شركاؤنا"}
          </p>
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
            className="w-[340px]"
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
            className="w-[340px]"
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
            className="w-[340px]"
          />
        </motion.div>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl lg:col-span-3 justify-self-center">
          {locale == "en" && "...and more"}
          {locale == "ar" && "...وغيرها"}
        </div>
      </div>
    </div>
  );
};

export default ShippingLogistics;
