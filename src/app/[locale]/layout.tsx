// app/[locale]/layout.tsx
import { ReduxToolkitProvider } from "../providers";
import Header from "@/components/Header";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["cyrillic"],
  weight: "400",
});

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div>
      <ReduxToolkitProvider>
        <Header />
        {children}
      </ReduxToolkitProvider>
    </div>
  );
}
