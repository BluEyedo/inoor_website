"use client";
import AboutUs from "@/app/AboutUs";
import Hero from "@/app/Hero";
import ProductSlider from "@/app/ProductSlider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ShippingLogistics from "./ShippingLogistics";
import Ditributors from "./Ditributors";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <div
        className="py-16
          sm:max-w-screen-sm    
          md:max-w-screen-md
          lg:max-w-screen-lg 
          2xl:max-w-screen-xl
      "
      >
        <AboutUs />
        <ProductSlider />
        <ShippingLogistics />
        <Ditributors />
        <ContactUs />
      </div>
    </main>
  );
}
