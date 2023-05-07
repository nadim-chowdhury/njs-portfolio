"use client";
import Typewriter from "typewriter-effect";

export default function HeroBanner() {
  return (
    <div className="py-8 text-slate-700 sm:mx-3 lg:mx-0">
      <h3 className="text-xl sm:text3xl">Hello World!</h3>
      <h2 className="text-2xl sm:text-4xl font-semibold py-4">
        It&apos;s Me Nadim Chowdhury
      </h2>
      <h3 className="text-xl sm:text-3xl">I&apos;m a Web Developer</h3>
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
