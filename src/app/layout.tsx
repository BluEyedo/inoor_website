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
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} dir={params.locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${ptSerif.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
