"use client";
import { info } from "../info";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <section className="py-3 sm:mx-3 lg:mx-0 text-justify">
      <h3 className="my-3 text-2xl text-center pb-2 text-gd">Information</h3>

      <div className="flex items-center justify-between bg-slate-200 dark:bg-slate-700 rounded-md my-4">
        <h4 className="font-bold px-4 py-2 text-slate-700 text-gd text-lg">
          JavaScript
        </h4>
      </div>

      <div className="my-6">
        {info.map((i) => (
          <div
            key={i.id}
            className="my-4 px-4 py-2 text-slate-600 dark:text-neutral-300 border rounded-md"
          >
            <motion.h4
              initial={{ y: 5 }}
              animate={{
                y: 0,
              }}
              className="font-semibold"
            >
              {i.title}
            </motion.h4>
            <p>
              &nbsp;
              <span className="text-slate-800 dark:text-[#00eebb]">&gt;</span>
              &nbsp;
              {i.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
