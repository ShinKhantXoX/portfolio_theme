import React from "react";
// import "./Work.css";
import { useEffect, useState } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiFillGithub } from "react-icons/ai";
const Workcase = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: "0px",
        opacity: "100%",

        transition: { duration: 1 },
      });
    }

    if (!inView) {
      animation.start({
        x: "100px",
        opacity: "0%",
      });
    }
  }, [inView]);
  return (
    <motion.div
      animate={animation}
      ref={ref}
      className=" flex flex-wrap flex-col gap-5 lg:gap-2 justify-between items-center lg:flex-row md:flex-row  mt-[50px]"
    >
      <div className="flex group hover:translate-y-[-2px]  h-[55vh] lg:h-[55vh] md:h-[40vh] transition-all overflow-x-hidden  flex-col gap-5 bg-[#1a1a34] w-[90%] lg:w-[24.5%] md:w-[46%] shadow-lg p-5 border-gray-800 border-[1px]">
        <div className="overflow-x-hidden   w-full bg-[url('./assets/Tour.png')] bg-no-repeat bg-cover lg:h-[23vh] h-[30vh] md:h-[20vh] ">
          <div className=" translate-x-[-600px] gap-5 background-img items-center group-hover:translate-x-0  duration-[0.8s] ease-in-out flex justify-center w-full h-full bg-black opacity-[90%]">
            <a className=" cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <AiFillGithub className="text-[20px]" />
            </a>
            <a className="cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <motion.dev className=" flex flex-col gap-2  pointer-events-none">
          <span className="text-2xl font-semibold">Travel App</span>
          <p className=" text-gray-500">
            This pages is all about tour which are very popular among people and
            with an amazing sightseeing.
          </p>
        </motion.dev>
      </div>

      <div className="flex group hover:translate-y-[-2px] h-[55vh] lg:h-[55vh] md:h-[40vh] transition-all overflow-x-hidden  flex-col gap-5 bg-[#1a1a34] w-[90%] lg:w-[24.5%] md:w-[46%] shadow-lg p-5 border-gray-800 border-[1px]">
        <div className="overflow-x-hidden   w-full bg-[url('./assets/Dashboard.png')] bg-no-repeat bg-cover lg:h-[23vh] h-[30vh] md:h-[20vh] ">
          <div className=" translate-x-[-600px] md:translate-x-[-900px] lg:translate-x-[-340px] gap-5 background-img items-center group-hover:translate-x-0  duration-[0.8s] ease-in-out flex justify-center w-full h-full bg-black opacity-[90%]">
            <a className=" cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <AiFillGithub className="text-[20px]" />
            </a>
            <a className="cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className=" flex flex-col gap-2 pointer-events-none ">
          <span className="text-2xl font-semibold">Dashboard</span>
          <p className=" text-gray-500">
            This is admin dashboard for hotel booking app.You can see the person
            who book in the dashboard.
          </p>
        </div>
      </div>

      <div className="flex group hover:translate-y-[-2px]  h-[55vh] lg:h-[55vh] md:h-[40vh] transition-all overflow-x-hidden  flex-col gap-5 bg-[#1a1a34] w-[90%] lg:w-[24.5%] md:w-[46%] shadow-lg p-5 border-gray-800 border-[1px]">
        <div className="overflow-x-hidden   w-full bg-[url('./assets/Contact.png')] bg-no-repeat bg-cover lg:h-[23vh] h-[30vh] md:h-[20vh] ">
          <div className=" translate-x-[-600px] gap-5 background-img items-center group-hover:translate-x-0  duration-[0.8s] ease-in-out flex justify-center w-full h-full bg-black opacity-[90%]">
            <a className=" cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <AiFillGithub className="text-[20px]" />
            </a>
            <a className="cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className=" flex flex-col gap-2  pointer-events-none">
          <span className="text-2xl font-semibold">Content App</span>
          <p className=" text-gray-500">
            This page is all about the contents you make will be shown.It
            includes CRUD and Bin process.
          </p>
        </div>
      </div>

      <div className="flex group hover:translate-y-[-2px]  h-[55vh] lg:h-[55vh] md:h-[40vh] transition-all overflow-x-hidden  flex-col gap-5 bg-[#1a1a34] w-[90%] lg:w-[24.5%] md:w-[46%] shadow-lg p-5 border-gray-800 border-[1px]">
        <div className="overflow-x-hidden   w-full bg-[url('https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')] bg-no-repeat bg-cover lg:h-[23vh] h-[30vh] md:h-[20vh] ">
          <div className=" translate-x-[-600px] gap-5 background-img items-center group-hover:translate-x-0  duration-[0.8s] ease-in-out flex justify-center w-full h-full bg-black opacity-[90%]">
            <a className=" cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <AiFillGithub className="text-[20px]" />
            </a>
            <a className="cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className=" flex flex-col gap-2  pointer-events-none">
          <span className="text-2xl font-semibold">Travel App</span>
          <p className=" text-gray-500">
            This pages is all about tour which are very popular among people and
            with an amazing sightseeing.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Workcase;
