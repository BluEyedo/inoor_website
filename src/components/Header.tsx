"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

type Props = {};

const Header = (props: Props) => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  console.log(path);

  return (
    <>
      {open && (
        <div className="bg-white fixed lg:hidden left-0 top-0 w-[100%] h-[100%] z-20">
          <motion.button
            onClick={() => setOpen(false)}
            whileTap={{ scale: 1.3 }}
            className="absolute right-5 top-5"
          >
            <XMarkIcon width={50} height={50} />
          </motion.button>

          <div className="flex flex-col pl-5 pt-16 gap-8">
            <Link
              className={`whitespace-nowrap overflow-hidden text-ellipsis text-xl lg:text-base ${
                path == "/main/" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main"
            >
              Home
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path == "/main/about-us" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/about-us"
            >
              About Us
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path == "/main/our-products" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/our-products"
            >
              Our products
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path == "/main/shipping-logistics"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/shipping-logistics"
            >
              Shipping and logistics
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path == "/main/distributors" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/distributors"
            >
              Become a Distributor (B2B)
            </Link>

            <Link
              className={`text-xl lg:text-base ${
                path == "/main/contact-us" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/contact-us"
            >
              Contact us
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
                path == "/main" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path == "/main/about-us" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/about-us"
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path == "/main/our-products" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/our-products"
            >
              Our products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path == "/main/shipping-logistics"
                  ? "text-gold-700"
                  : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/shipping-logistics"
            >
              Shipping and logistics
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path == "/main/distributors" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/distributors"
            >
              Become a Distributor (B2B)
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`text-xs lg:text-base ${
                path == "/main/contact-us" ? "text-gold-700" : "text-charcoal-500"
              } hover:text-gold-700 duration-100`}
              href="/inoor_website/main/contact-us"
            >
              Contact us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
