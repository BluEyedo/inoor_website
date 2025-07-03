"use client";
import React from "react";
import ContactUs from "../ContactUs";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-16">
      <div
        className="
        py-16
          sm:max-w-screen-sm    
          md:max-w-screen-md
          lg:max-w-screen-lg 
          2xl:max-w-screen-xl
          w-full
          "
      >
        <ContactUs />
      </div>
    </main>
  );
};

export default page;
