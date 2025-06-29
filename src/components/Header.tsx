"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
  const path = usePathname();

  console.log(path);

  return (
    <Navbar
      className="fixed top-0 bg-white px-6 py-3 shadow-md w-full z-10"
      shouldHideOnScroll
    >
      <NavbarBrand>
        <div className="flex-col">
          <div className="font-bold text-inherit text-4xl  border-gold-500 border-b-2 ">
            INOOR
          </div>
        </div>
      </NavbarBrand>
      <NavbarContent
        className="hidden lg:flex gap-8 scale-100 "
        justify="center"
      >
        <NavbarItem>
          <Link
            className={`text-xs lg:text-base ${
              path == "/" ? "text-gold-700" : "text-charcoal-500"
            } hover:text-gold-700 duration-100`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-xs lg:text-base ${
              path == "/about-us" ? "text-gold-700" : "text-charcoal-500"
            } hover:text-gold-700 duration-100`}
            href="about-us"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-xs lg:text-base ${
              path == "/our-products" ? "text-gold-700" : "text-charcoal-500"
            } hover:text-gold-700 duration-100`}
            href="our-products"
          >
            Our products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-xs lg:text-base ${
              path == "/shipping-logistics"
                ? "text-gold-700"
                : "text-charcoal-500"
            } hover:text-gold-700 duration-100`}
            href="shipping-logistics"
          >
            Shipping and logistics
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-xs lg:text-base ${
              path == "/distributors" ? "text-gold-700" : "text-charcoal-500"
            } hover:text-gold-700 duration-100`}
            href="distributors"
          >
            Become a Distributor (B2B)
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-xs lg:text-base ${
              path == "/contact-us" ? "text-gold-700" : "text-charcoal-500"
            } hover:text-gold-700 duration-100`}
            href="contact-us"
          >
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
