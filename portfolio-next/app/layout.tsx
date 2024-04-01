import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import bgBlur from '../assets/Background_Blurs.png'
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahammad Abdullah",
  description: "Portfolio of Ahammad Abdullah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/100x.png" sizes="any" />
      <body className={fira.className}>
      <div className="bg-primary">
      <Toaster />
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col  justify-between items-center">
        <div className="z-30 w-full h-full flex-1 flex justify-center lg:pl-20 xl:pl-10">
          <Navbar />
        </div>
        <div className="w-full xl:flex-0 min-h-screen z-20">
        {children}
        </div>
        <div className="fixed  right-0 bottom-0 top-10 z-0 ">
          <Image className="min-h-screen" src={bgBlur} alt="" />
        </div>
      </div>
    </div>
        
        </body>
    </html>
  );
}
