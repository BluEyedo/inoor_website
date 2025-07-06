import type { Metadata } from "next";
import { Cairo, PT_Serif } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import { ReduxToolkitProvider } from "../providers";

const ptSerif = PT_Serif({
  subsets: ["cyrillic"],
  weight: "400",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "INOOR International",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${ptSerif.className} ${cairo.className}`}>
      <ReduxToolkitProvider>
        <Header />
        {children}
      </ReduxToolkitProvider>
    </div>
  );
}
