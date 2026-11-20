import "./globals.css";
import type {Metadata} from "next";
import {Inter,Playfair_Display} from "next/font/google";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
const playfair=Playfair_Display({subsets:["latin"],variable:"--font-playfair",weight:["400","700","900"]});
export const metadata:Metadata={title:"Test",description:""};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="dark"><body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col overflow-x-clip`}><main className="flex-1 pt-20">{children}</main></body></html>;}