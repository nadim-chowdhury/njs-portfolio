"use client";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <div className="py-9 mt-2 sm:mx-3 lg:mx-0 text-slate-700">
      <motion.h3
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-3xl sm:text-4xl dark:text-neutral-200 text-center"
      >
        Hello World!
      </motion.h3>
      <motion.h2
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        className="text-2xl font-bold sm:text-4xl py-2 text-gd text-center my-4 rounded-tl-xl rounded-br-xl sm:max-w-3xl sm:mx-auto"
      >
        It&apos;s Me Nadim Chowdhury
      </motion.h2>
      <motion.h3
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        className="text-xl sm:text-3xl dark:text-neutral-200 text-center"
      >
        As a Web Developer
      </motion.h3>
      <h3 className="text-[12px] sm:text-lg mt-4 py-2 pl-1 dark:text-neutral-200 text-center">
        <Typewriter
          options={{
            strings: [
              "I Can Build & Develop Full Stack / ME(A)RN Stack",
              "Creative & Responsive Web Applications",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>

      <div className="mt-4 flex justify-center items-center text-xs">
        <a
          href="./nadim-chowdhury-mearn-resume-cl.pdf"
          download
          className="cv-cl"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
