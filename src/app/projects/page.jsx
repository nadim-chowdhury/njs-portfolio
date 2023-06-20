/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-3 projects sm:mx-3 lg:mx-0">
      <h3 className="my-3 text-2xl text-center pb-2 text-gd">My Projects</h3>

      <div>
        <div className="flex items-center justify-between bg-slate-200 rounded-md my-4 dark:bg-slate-700">
          <h4 className="font-bold p-2 text-slate-700 text-gd text-lg">
            Dashboard
          </h4>
          <div className="px-2 text-slate-600 dark:text-neutral-200 flex items-center">
            <Link
              href="https://dash-b0ard.netlify.app"
              className="projects-link"
            >
              <AiOutlineLink />
            </Link>
            <Link
              href="https://github.com/nadim-chowdhury/njs-dashboard"
              className="projects-link"
            >
              <AiOutlineGithub />
            </Link>
          </div>
        </div>

        <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <img src="/d1.png" alt="" className="projects-img" />
          <img src="/d3.png" alt="" className="projects-img" />
          <img src="/d5.png" alt="" className="projects-img" />
          <img src="/d2.png" alt="" className="projects-img" />
          {/* <img src="/d4.png" alt="" className="projects-img" /> */}
        </div>

        <motion.ul
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          className="px-4 pb-1 mx-1 rounded-md text-slate-600 list-disc dark:text-neutral-300"
        >
          <li>Multiple pages added for routing</li>
          <li>Weather and country data fetched from api</li>
          <li>Searching functionality added</li>
          <li>Google firebase authentication implemented</li>
        </motion.ul>
      </div>

      <div>
        <div className="flex items-center justify-between bg-slate-200 rounded-md my-4 dark:bg-slate-700">
          <h4 className="font-bold p-2 text-slate-700 text-gd text-lg">
            Cars Showroom
          </h4>
          <div className="px-2 text-slate-600 dark:text-neutral-200 flex items-center">
            <Link
              href="https://cars-showroom.vercel.app"
              className="projects-link"
            >
              <AiOutlineLink />
            </Link>
            <Link
              href="https://github.com/nadim-chowdhury/cars-showroom"
              className="projects-link"
            >
              <AiOutlineGithub />
            </Link>
          </div>
        </div>

        <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <img src="/f1.png" alt="" className="projects-img" />
          <img src="/f2.png" alt="" className="projects-img" />
          <img src="/f3.png" alt="" className="projects-img" />
          <img src="/f4.png" alt="" className="projects-img" />
          {/* <img src="/e4.png" alt="" className="projects-img" /> */}
        </div>

        <motion.ul
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          className="px-4 pb-1 mx-1 rounded-md text-slate-600 list-disc dark:text-neutral-300"
        >
          <li>
            Elegent lokking and responsive web application build in React js.
          </li>
          <li>All cars data are fetched from API.</li>
          <li>Cars details page added using modal.</li>
          <li>
            Custom Search functionality and URL parameters implemented using
            ssr.
          </li>
        </motion.ul>
      </div>

      <div>
        <div className="flex items-center justify-between bg-slate-200 rounded-md my-4 dark:bg-slate-700">
          <h4 className="font-bold p-2 text-slate-700 text-gd text-lg">
            eCommerce
          </h4>
          <div className="px-2 text-slate-600 dark:text-neutral-200 flex items-center">
            <Link href="https://sh0pcart.netlify.app" className="projects-link">
              <AiOutlineLink />
            </Link>
            <Link
              href="https://github.com/nadim-chowdhury/rjs-shopcart"
              className="projects-link"
            >
              <AiOutlineGithub />
            </Link>
          </div>
        </div>

        <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <img src="/e1.png" alt="" className="projects-img" />
          <img src="/e2.png" alt="" className="projects-img" />
          <img src="/e5.png" alt="" className="projects-img" />
          <img src="/e3.png" alt="" className="projects-img" />
          {/* <img src="/e4.png" alt="" className="projects-img" /> */}
        </div>

        <motion.ul
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          className="px-4 pb-1 mx-1 rounded-md text-slate-600 list-disc dark:text-neutral-300"
        >
          <li>Multiple routes added with react-router-dom</li>
          <li>Store pages all data are coming from api</li>
          <li>Google firebase authentication added</li>
          <li>Searching functionality added</li>
          <li>You can&apos;t access the cart page without login</li>
        </motion.ul>
      </div>

      <div className="mb-1">
        <div className="flex items-center justify-between bg-slate-200 rounded-md my-4 dark:bg-slate-700">
          <h4 className="font-bold p-2 text-slate-700 text-gd text-lg">
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
