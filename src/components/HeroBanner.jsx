"use client";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <div className="py-9 mt-2 sm:mx-3 lg:mx-0 text-slate-700">
      <motion.h3
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        className="text-3xl sm:text-4xl dark:text-neutral-200"
      >
        Hello World!
      </motion.h3>
      <motion.h2
        initial={{ x: 15 }}
        animate={{ x: 0 }}
        className="text-3xl font-bold sm:text-5xl py-6 text-gd"
      >
        I am Nadim Chowdhury
      </motion.h2>
      <motion.h3
        initial={{ x: 10 }}
        animate={{ x: 0 }}
        className="text-2xl sm:text-4xl dark:text-neutral-200"
      >
        As a Web Developer
      </motion.h3>
      <h3 className="text-[12px] sm:text-lg mt-4 py-2 pl-1 dark:text-neutral-200">
        <Typewriter
          options={{
            strings: [
              "I Can Build & Develop Full Stack / Mern Stack",
              "Creative & Responsive Web Applications",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>

      <div className="mt-4">
        <a href="./nadim_chowdhury_eu_cv.pdf" download className="cv-cl mr-2">
          CV
        </a>
        <a href="./nadim_chowdhury_eu_cl.pdf" download className="cv-cl">
          Cover Letter
        </a>
      </div>
    </div>
  );
}
