"use client";
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useParams, usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useSelector, useDispatch } from "react-redux";
import { arabicSwitch, englishSwitch } from "@/redux/langToggle";

type Props = {};

const Header = (props: Props) => {
  const path = usePathname();
  const lang = useSelector((state: any) => state.lang.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const url = process.env.NODE_EN == "production" ? "/inoor_website" : "";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);


  

  return (
    <>
      {open && (
        <div className="bg-white fixed lg:hidden left-0 top-0 w-[100%] h-[100%] z-20">
          <motion.button
            onClick={() => {
              setOpen(false);
            }}
            whileTap={{ scale: 1.3 }}
            className="absolute right-5 top-5"
          >
            <XMarkIcon width={50} height={50} />
          </motion.button>

          <div className="flex flex-col pl-5 pt-16 gap-8">
            <Link
              className={`whitespace-nowrap overflow-hidden text-ellipsis text-xl lg:text-base ${
                path.split("/").length == 3
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main`}
            >
              {lang == "en" && "Home"}
              {lang == "ar" && "الرئيسية"}
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path.split("/")[2] == "about-us"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/about-us`}
            >
              {lang == "en" && "About Us"}
              {lang == "ar" && "من نحن"}
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path.split("/")[2] == "our-products"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/our-products`}
            >
              {lang == "en" && "Our products"}
              {lang == "ar" && "منتجاتنا"}
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path.split("/")[2] == "shipping-logistics"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/shipping-logistics`}
            >
              {lang == "en" && "Shipping and logistics"}
              {lang == "ar" && "الشحن والتوزيع"}
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path.split("/")[2] == "distributors"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/distributors`}
            >
              {lang == "en" && "Be a Distributor (B2B)"}
              {lang == "ar" && "كن موزعًا معنا"}
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path.split("/")[2] == "contact-us"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/contact-us`}
            >
              {lang == "en" && "Contact us"}
              {lang == "ar" && "تواصل معنا"}
            </Link>
          </div>
        </div>
      )}
      <Navbar
        className="fixed top-0 bg-white px-6 py-3 shadow-md w-full z-10"
        shouldHideOnScroll
      >
        <NavbarBrand>
          <div className="flex-col">
            <div className="font-bold text-inherit text-4xl  border-gold-500 border-b-[3px] ">
              INOOR
            </div>
          </div>
        </NavbarBrand>

        <motion.button
          className="lg:hidden"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 1.3 }}
        >
          <Bars3Icon width={50} height={50} />
        </motion.button>

        <NavbarContent
          className="hidden lg:flex gap-8 scale-[0.95] lg:scale-100 "
          justify="center"
        >
          <NavbarItem>
            <Link
              className={`whitespace-nowrap overflow-hidden text-ellipsis text-xs lg:text-base ${
                path.split("/").length == 3
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main`}
            >
              {lang == "en" && "Home"}
              {lang == "ar" && "الرئيسية"}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path.split("/")[2] == "about-us"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/about-us`}
            >
              {lang == "en" && "About Us"}
              {lang == "ar" && "من نحن"}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path.split("/")[2] == "our-products"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/our-products`}
            >
              {lang == "en" && "Our products"}
              {lang == "ar" && "منتجاتنا"}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path.split("/")[2] == "shipping-logistics"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/shipping-logistics`}
            >
              {lang == "en" && "Shipping and logistics"}
              {lang == "ar" && "الشحن والتغليف"}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path.split("/")[2] == "distributors"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/distributors`}
            >
              {lang == "en" && "Be a Distributor (B2B)"}
              {lang == "ar" && "كن موزعًا معنا"}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path.split("/")[2] == "contact-us"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href={`${url}/main/contact-us`}
            >
              {lang == "en" && "Contact us"}
              {lang == "ar" && "تواصل معنا"}
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-row items-center text-xs  fixed sm:top-1 top-0 sm:right-1 right-5 gap-3 z-30">
        <motion.button
          className={`${lang == "en" ? "text-gold-900" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.3 }}
          onClick={() => {
            // const segments = path.split("/");
            // segments[2] = `en`;
            // const newPath = segments.join("/");
            // router.replace(`${newPath}`);
            dispatch(englishSwitch());
          }}
        >
          EN
        </motion.button>
        <div>|</div>
        <motion.button
          className={`${lang == "ar" ? "text-gold-900" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.3 }}
          onClick={() => {
            // const segments = path.split("/");
            // segments[2] = `ar`;
            // const newPath = segments.join("/");
            // router.replace(`${newPath}`);
            dispatch(arabicSwitch());
          }}
        >
          AR
        </motion.button>
      </div>
    </>
  );
};

export default Header;
