"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.scss";
import { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

export const metadata = {
  title: "Nadim Chowdhury",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <html lang="en" className={dark && "dark"}>
      <body className="mx-4 sm:max-w-3xl sm:mx-auto dark:bg-neutral-800 relative">
        <Header />
        <div
          onClick={() => setDark(!dark)}
          className={`absolute top-[17px] z-10 right-10 border p-1 rounded-full cursor-pointer ${
            dark && "text-white"
          }`}
        >
          {dark ? <BsMoonFill /> : <BsMoon />}
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
