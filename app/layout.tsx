import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import GoogleSiteSearch from "@/components/GoogleSiteSearch";
import Footer from "@/components/Footer";
import "./globals.css";
import "./header.css";

export const metadata = {
  metadataBase: new URL("https://www.lib.miamioh.edu"),
  title: "Miami University Libraries",
  description: "MU Libraries Main Website",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {GoogleSiteSearch()}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
