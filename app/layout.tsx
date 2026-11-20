import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "700", "900"] });
export const metadata: Metadata = { title: "ItzFallenMe | Developer & Student", description: "Portfolio of ItzFallenMe, a developer and student based in India." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col overflow-x-clip`}>
        <Header /><main className="flex-1 pt-20">{children}</main><Footer />
      </body>
    </html>
  );
}
