import { motion } from "motion/react";
import React from "react";
type Props = {};

const valuesArray = [
  "Competitive wholesale pricing",
  "Marketing support",
  "Ready-to-use product catalog",
  "Flexible payment terms",
];

const Ditributors = (props: Props) => {
  return (
    <div className="px-4 flex flex-col">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 text-charcoal-500 flex flex-row justify-center"
      >
        <div className="sm:w-[15%] border-b-2 border-charcoal-500" />
        <p className="sm:w-[70%] text-center">Become a Distributor (B2B)</p>
        <div className="sm:w-[15%] border-b-2 border-charcoal-500" />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div className="mb-16">
          <div className=" sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Interested in representing INOOR in your country?
          </div>
          <div className=" sm:text-lg md:text-xl lg:text-2xl">
            We’re looking for trusted distributors in beauty and food sectors.
          </div>
        </div>

        <div className="mb-16">
          <div className=" sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Benefits
          </div>
          <div className=" sm:text-lg md:text-xl lg:text-2xl">
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
      </motion.div>
    </div>
  );
};

export default Ditributors;
