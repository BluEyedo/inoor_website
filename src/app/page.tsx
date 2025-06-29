"use client";
import Hero from "@/components/Hero";
import ProductSlider from "@/components/ProductSlider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <div className="px-24 py-16">
        <ProductSlider />
      </div>
    </main>
  );
}
