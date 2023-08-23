"use client";
import { useState } from "react";
// import { BsMoon, BsMoonFill } from "react-icons/bs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HocLayout({ children }) {
  // const [dark, setDark] = useState(false);

  return (
    <html lang="en">
      <body className="mx-4 sm:max-w-4xl sm:mx-auto min-h-screen dark:bg-gradient-to-tr dark:bg-gray-900 relative">
        <Header />
        {/* <div
          onClick={() => setDark(!dark)}
          className={`absolute top-[19px] z-10 right-10 text-sm border p-1 rounded-full cursor-pointer ${
            dark && "text-white"
          }`}
        >
          {dark ? <BsMoonFill /> : <BsMoon />}
        </div> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
