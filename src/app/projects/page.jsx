/* eslint-disable @next/next/no-img-element */

"use client";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import { projectsData } from "../projectsData";

export default function Projects() {
  return (
    <section className="py-3 projects sm:mx-3 lg:mx-0">
      <h3 className="my-3 text-2xl text-center pb-2 text-gd">My Projects</h3>

      <div>
        {projectsData.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between bg-slate-200 rounded-md my-4 dark:bg-slate-700">
              <h4 className="font-bold px-4 py-2 text-slate-700 text-gd text-lg">
                {item.title}
              </h4>
              <div className="px-2 text-slate-600 dark:text-neutral-200 flex items-center">
                <Link href={item.liveLink} className="projects-link">
                  <AiOutlineLink />
                </Link>
                <Link href={item.gitHub} className="projects-link">
                  <AiOutlineGithub />
                </Link>
              </div>
            </div>

            <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {item.img.map((image) => (
                <img
                  src={image}
                  alt=""
                  key={1 + Math.random()}
                  className="projects-img"
                />
              ))}
            </div>

            <motion.ul
              initial={{ opacity: 0.25 }}
              animate={{ opacity: 1 }}
              className="px-4 pb-1 mx-1 rounded-md text-slate-600 list-disc dark:text-neutral-300"
            >
              {item.desc.map((data) => (
                <li key={Math.random()}>{data}</li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>

      <div className="mb-1">
        <div className="flex items-center justify-between bg-slate-200 rounded-md my-4 dark:bg-slate-700">
          <h4 className="font-bold px-4 py-2 text-slate-700 text-gd text-lg">
            Others
          </h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <Link href="https://coiinbase.netlify.app">
            <img className="others-project" src="/p1.png" alt="" />
          </Link>
          <Link href="https://b0oking.netlify.app">
            <img className="others-project" src="/p2.png" alt="" />
          </Link>
          <Link href="https://hoo-bnk.netlify.app">
            <img className="others-project" src="/p3.png" alt="" />
          </Link>
          <Link href="https://ec0mmerce.netlify.app">
            <img className="others-project" src="/p4.png" alt="" />
          </Link>
          <Link href="https://gpt3aiclone.netlify.app">
            <img className="others-project" src="/p5.png" alt="" />
          </Link>
          <Link href="https://greatcars.netlify.app">
            <img className="others-project" src="/p6.png" alt="" />
          </Link>
          <Link href="https://movie-app-rjs.netlify.app">
            <img className="others-project" src="/p7.png" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}
