import { motion } from "motion/react";
import { useParams } from "next/navigation";
import React from "react";
type Props = {};

const valuesArray = [
  { en: "Competitive wholesale pricing", ar: "أسعار جملة مرنة" },
  { en: "Marketing support", ar: "دعم تسويقي" },
  { en: "Ready-to-use product catalog", ar: "كتالوج احترافي" },
  { en: "Flexible payment terms", ar: "شروط ميسّرة" },
];

const Ditributors = (props: Props) => {
  const { locale } = useParams();
  return (
    <div className="px-4 flex flex-col">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 text-charcoal-500 flex flex-row justify-center"
      >
        <div
          className={`${
            locale == "en" ? "sm:w-[15%]" : "sm:w-[35%]"
          }  border-b-2 border-charcoal-500`}
        />
        <p
          className={`${
            locale == "en" ? "sm:w-[70%]" : "sm:w-[30%]"
          } text-center`}
        >
          {locale == "en" && "Become a Distributor (B2B)"}
          {locale == "ar" && "كن موزّعًا معنا"}
        </p>
        <div
          className={`${
            locale == "en" ? "sm:w-[15%]" : "sm:w-[35%]"
          }  border-b-2 border-charcoal-500`}
        />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div className="mb-16">
          <div className=" sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
            {locale == "en" &&
              "Interested in representing INOOR in your country?"}
            {locale == "ar" && (
              <div dir="rtl">هل ترغب في تمثيل INOOR في بلدك؟</div>
            )}
          </div>
          <div className=" sm:text-lg md:text-xl lg:text-2xl">
            {locale == "en" &&
              "We’re looking for trusted distributors in beauty and food sectors."}
            {locale == "ar" && (
              <div dir="rtl">
                نحن نبحث عن موزعين موثوقين في مجال التجميل والمنتجات الغذائية.
              </div>
            )}
          </div>
        </div>

        <div className="mb-16">
          <div className=" sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
            {locale == "en" && "Benefits"}
            <div dir={"rtl"}>{locale == "ar" && "المزايا"}</div>
          </div>
          <div className=" sm:text-lg md:text-xl lg:text-2xl">
            {valuesArray.map((txt, ix) => (
              <motion.div
                dir={locale == "en" ? "ltr" : "rtl"}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * ix }}
                viewport={{ once: true }}
                key={ix}
                className={`text-center ${
                  locale == "en" ? "sm:text-left" : "sm:text-right"
                } items-center flex-row sm:flex-col xl:flex-row flex gap-3`}
              >
                {locale == "en" && (
                  <>
                    <span className="text-green-600 font-bold "> ✔</span>{" "}
                    {txt.en}
                  </>
                )}

                {locale == "ar" && (
                  <>
                    <span className="text-green-600 font-bold "> ✔</span>
                    {txt.ar}{" "}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Ditributors;
