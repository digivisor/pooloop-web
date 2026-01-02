import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pooloop | Havuz Sistemleri ve Kimyasalları",
  description: "Havuz yapımı, havuz kimyasalları, su arıtma sistemleri ve teknik servis hizmetleri. Türkiye'nin her yerine profesyonel havuz çözümleri.",
  keywords: "havuz, havuz kimyasalları, havuz yapımı, su arıtma, havuz bakımı, havuz sistemleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
