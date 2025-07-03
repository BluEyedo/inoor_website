import React from "react";
import ProductSlider from "../ProductSlider";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
        className="
      flex min-h-screen flex-col items-center justify-between 
      py-16
          sm:max-w-screen-sm    
          md:max-w-screen-md
          lg:max-w-screen-lg 
          2xl:max-w-screen-xl"
      >
        <ProductSlider />
      </div>
    </main>
  );
};

export default page;
