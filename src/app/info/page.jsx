"use client";
import { info } from "../info";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <section className="py-3 sm:mx-3 lg:mx-0">
      <h3 className="my-3 text-2xl text-center pb-2 text-gd">Information</h3>

      <div className="flex items-center justify-between bg-slate-200 dark:bg-neutral-700 rounded-lg my-4">
        <h4 className="font-bold p-2 text-slate-700 text-gd">JavaScript</h4>
      </div>

      <div className="my-6">
        {info.map((i) => (
          <div
            key={i.id}
            className="my-4 p-2 text-slate-600 dark:text-neutral-300 border rounded-lg"
          >
            <motion.h4
              initial={{ x: 20 }}
              animate={{
                x: 0,
              }}
              className="font-semibold"
            >
              {i.title}
            </motion.h4>
            <p>
              &nbsp;
              <span className="text-slate-500 dark:text-neutral-400">&gt;</span>
              &nbsp;
              {i.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
