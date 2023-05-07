"use client";
import Typewriter from "typewriter-effect";

export default function HeroBanner() {
  return (
    <div className="py-8 sm:mx-3 lg:mx-0 text-slate-700">
      <h3 className="text-2xl sm:text-3xl">Hello World!</h3>
      <h2 className="text-2xl font-bold sm:text-4xl py-4">
        MySelf Nadim Chowdhury
      </h2>
      <h3 className="text-2xl sm:text-3xl">A Web Developer</h3>
      <h3 className="text-[12px] sm:text-lg mt-4">
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
    </div>
  );
}
