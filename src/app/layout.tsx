import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Md. Akash Miya | AI Researcher",
  description:
    "Portfolio of Md. Akash Miya - AI Researcher, Deep Learning, Computer Vision and Explainable AI",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        <Navbar />

        {children}

      </body>

    </html>

  );
}