// app/[locale]/layout.tsx
import { ReduxToolkitProvider } from "../providers";
import Header from "@/components/Header";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div lang={params.locale} dir={params.locale === "ar" ? "rtl" : "ltr"}>
      <ReduxToolkitProvider>
        <Header />
        {children}
      </ReduxToolkitProvider>
    </div>
  );
}
