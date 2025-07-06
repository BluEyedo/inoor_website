"use client";
import React from "react";
import AboutUs from "../../../../components/AboutUs";

type Props = { params: { locale: string } };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

const AboutUsPage = ({ params }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-16">
      <div
        className="
      py-16
          sm:max-w-screen-sm    
          md:max-w-screen-md
          lg:max-w-screen-lg 
          2xl:max-w-screen-xl"
      >
        <AboutUs />
      </div>
    </main>
  );
};

export default AboutUsPage;
