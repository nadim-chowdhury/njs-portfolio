"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header className="flex justify-between items-center text-slate-800 py-3 border-b-2 relative sm:mx-3 lg:mx-0">
      <h1 className="text-3xl uppercase">
        <Link href="/">Nadim</Link>
      </h1>

      <div className="block text-[26px] cursor-pointer" onClick={handleShow}>
        <AiOutlineMenu />
      </div>

      <div
        className={
          show
            ? "text-lg p-2 absolute flex flex-col right-0 top-[68px] bg-white border-2 rounded"
            : "hidden"
        }
      >
        <Link
          href="/"
          onClick={() => setShow(!show)}
          className="py-2 px-3 hover:bg-slate-100 transition duration-300 rounded-lg"
        >
          Home
        </Link>
        <Link
          href="/projects"
          onClick={() => setShow(!show)}
          className="py-2 px-3 hover:bg-slate-100 transition duration-300 rounded-lg"
        >
          Projects
        </Link>
        <Link
          href="/certificates"
          onClick={() => setShow(!show)}
          className="py-2 px-3 hover:bg-slate-100 transition duration-300 rounded-lg"
        >
          Certificates
        </Link>
      </div>
    </header>
  );
}
