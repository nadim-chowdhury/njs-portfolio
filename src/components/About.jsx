"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-3 sm:mx-3 lg:mx-0">
      <h2 className="title">About Me</h2>
      <motion.p
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        className="text-slate-600 text-justify text-md sm:text-lg my-4"
      >
        I&apos;m a creative and passionate web developer who likes to build and
        develop websites for anyone. Learning, improving skills, and adapting to
        new technologies are my hobbies. I can give my total effort and perform
        any teamwork with responsibility.
      </motion.p>
    </div>
  );
}
