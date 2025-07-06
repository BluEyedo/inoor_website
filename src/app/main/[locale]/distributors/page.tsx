"use client";
import React from "react";
import Ditributors from "../../../../components/Ditributors";

type Props = { params: { locale: string } };


const DistributorsPage = ({ params }: Props) => {
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
        <Ditributors />
      </div>
    </main>
  );
};

export default DistributorsPage;
