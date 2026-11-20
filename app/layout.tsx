import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "ItzFallenMe | Flutter & Full-Stack Developer",
  description: "Portfolio of ItzFallenMe — Flutter apps, full-stack projects, Discord bots and creative web experiences.",
  openGraph: {
    title: "ItzFallenMe | Flutter & Full-Stack Developer",
    description: "Mobile apps, web experiences and software projects built with care.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col overflow-x-clip`}>
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
