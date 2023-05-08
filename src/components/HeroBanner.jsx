"use client";
import Typewriter from "typewriter-effect";

export default function HeroBanner() {
  return (
    <div className="py-9 sm:mx-3 lg:mx-0 text-slate-700">
      <h3 className="text-3xl sm:text-5xl">Hello World!</h3>
      <h2 className="text-2xl font-bold sm:text-5xl py-6">
        MySelf Nadim Chowdhury
      </h2>
      <h3 className="text-2xl sm:text-4xl">As a Web Developer</h3>
      <h3 className="text-[12px] sm:text-lg mt-4 pl-[2px]">
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
