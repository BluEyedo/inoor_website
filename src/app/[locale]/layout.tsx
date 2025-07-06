// app/[locale]/layout.tsx
import { ReduxToolkitProvider } from "../providers";
import Header from "@/components/Header";

function getDirection(locale: string): "rtl" | "ltr" {
  const rtlLocales = ["ar", "ar"]; // Add other RTL locales if needed
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale || "en"; 
  const direction = getDirection(locale);

  return (
    <div lang={locale} dir={direction}>
      <ReduxToolkitProvider>
        <Header />
        {children}
      </ReduxToolkitProvider>
    </div>
  );
}
