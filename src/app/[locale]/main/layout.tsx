import type { Metadata } from "next";
import { Inter, Montserrat, PT_Serif } from "next/font/google";
import "../../globals.css";
import Header from "@/components/Header";
import { ReduxToolkitProvider } from "../../providers";

const ptSerif = PT_Serif({
  subsets: ["cyrillic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "INOOR International",
  description: "",
  icons: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${ptSerif.className}`}>
      <ReduxToolkitProvider>
        <Header />
        {children}
      </ReduxToolkitProvider>
    </div>
  );
}
