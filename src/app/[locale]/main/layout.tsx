import "../../globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={``}>
      <Header />
      {children}
    </div>
  );
}
