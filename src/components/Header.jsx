"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(<></>);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    setMenu(
      <motion.div
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        className="text-lg p-2 absolute flex flex-col right-0 top-[70px] bg-white border-2 rounded z-10"
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
          href="/info"
          onClick={() => setShow(!show)}
          className="py-2 px-3 hover:bg-slate-100 transition duration-300 rounded-lg"
        >
          Info
        </Link>
        <Link
          href="/gallery"
          onClick={() => setShow(!show)}
          className="py-2 px-3 hover:bg-slate-100 transition duration-300 rounded-lg"
        >
          Gallery
        </Link>
      </motion.div>
    );
  }, [show]);

  return (
    <header className="flex justify-between items-center bg-white text-slate-900 py-3 border-b-2 sm:mx-3 lg:mx-0 sticky top-0">
      <h1 className="text-3xl uppercase">
        <Link href="/">Nadim</Link>
      </h1>

      <div className="block text-[26px] cursor-pointer" onClick={handleShow}>
        <AiOutlineMenu />
      </div>

      {show && menu}
    </header>
  );
}
