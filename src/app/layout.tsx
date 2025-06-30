import type { Metadata } from "next";
import { Inter, Montserrat, PT_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["cyrillic"] });
const ptSerif = PT_Serif({
  subsets: ["cyrillic"],
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
    <html lang="en">
      <body
        className={`${ptSerif.className} bg-gradient-to-t from-rose-100 to-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
