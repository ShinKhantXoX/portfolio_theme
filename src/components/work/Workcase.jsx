import React from "react";
// import "./Work.css";
import { AiFillGithub } from "react-icons/ai";
const Workcase = () => {
  return (
    <div className=" flex flex-wrap flex-col items-center lg:flex-row md:flex-row  justify-center gap-5 mt-[50px]">
      <div className="flex group hover:translate-y-[-2px]  h-[55vh] lg:h-[55vh] md:h-[40vh] transition-all overflow-x-hidden  flex-col gap-5 bg-[#1a1a34] w-[90%] lg:w-[25%] md:w-[40%] shadow-lg p-5 border-gray-800 border-[1px]">
        <div className="overflow-x-hidden   w-full bg-[url('./assets/Tour.png')] bg-no-repeat bg-cover lg:h-[30vh] h-[30vh] md:h-[20vh] ">
          <div className=" translate-x-[-600px] gap-5 background-img items-center group-hover:translate-x-0  duration-[0.8s] ease-in-out flex justify-center w-full h-full bg-black opacity-[90%]">
            <a className=" cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <AiFillGithub className="text-[20px]" />
            </a>
            <a className="cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
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
          <span className="text-2xl font-semibold">Travel Tour Page</span>
          <p className=" text-gray-500">
            This page is for booking to travel around wonderful places and enjoy
            seesight of them.You can book in website by email and pay the price
            with whatever methods you wish.
          </p>
        </div>
      </div>

      <div className="flex group hover:translate-y-[-2px] h-[55vh] lg:h-[55vh] md:h-[40vh] transition-all overflow-x-hidden  flex-col gap-5 bg-[#1a1a34] w-[90%] lg:w-[25%] md:w-[40%] shadow-lg p-5 border-gray-800 border-[1px]">
        <div className="overflow-x-hidden   w-full bg-[url('./assets/Dashboard.png')] bg-no-repeat bg-cover lg:h-[30vh] h-[30vh] md:h-[20vh] ">
          <div className=" translate-x-[-600px] md:translate-x-[-900px] lg:translate-x-[-340px] gap-5 background-img items-center group-hover:translate-x-0  duration-[0.8s] ease-in-out flex justify-center w-full h-full bg-black opacity-[90%]">
            <a className=" cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <AiFillGithub className="text-[20px]" />
            </a>
            <a className="cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
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
            who book in the dashboard and you can watch details all of them.
          </p>
        </div>
      </div>

      <div className="flex group hover:translate-y-[-2px]  h-[55vh] lg:h-[55vh] md:h-[40vh] transition-all overflow-x-hidden  flex-col gap-5 bg-[#1a1a34] w-[90%] lg:w-[25%] md:w-[40%] shadow-lg p-5 border-gray-800 border-[1px]">
        <div className="overflow-x-hidden   w-full bg-[url('./assets/Contact.png')] bg-no-repeat bg-cover lg:h-[27vh] h-[30vh] md:h-[20vh] ">
          <div className=" translate-x-[-600px] gap-5 background-img items-center group-hover:translate-x-0  duration-[0.8s] ease-in-out flex justify-center w-full h-full bg-black opacity-[90%]">
            <a className=" cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <AiFillGithub className="text-[20px]" />
            </a>
            <a className="cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
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
            includes CRUD and Bin process.But,at first,you need to log or sign
            in.
          </p>
        </div>
      </div>

      <div className="flex group hover:translate-y-[-2px]  h-[55vh] lg:h-[55vh] md:h-[40vh] transition-all overflow-x-hidden  flex-col gap-5 bg-[#1a1a34] w-[90%] lg:w-[25%] md:w-[40%] shadow-lg p-5 border-gray-800 border-[1px]">
        <div className="overflow-x-hidden   w-full bg-[url('https://tf-react-bieber.vercel.app/images/portfolios/portfolio-image-19.jpg')] bg-no-repeat bg-cover lg:h-[30vh] h-[30vh] md:h-[20vh] ">
          <div className=" translate-x-[-600px] gap-5 background-img items-center group-hover:translate-x-0  duration-[0.8s] ease-in-out flex justify-center w-full h-full bg-black opacity-[90%]">
            <a className=" cursor-pointer bg-[#04b261] rounded-full  p-3 text-white">
              <AiFillGithub className="text-[20px]" />
            </a>
            <a className="cursor-pointer bg-[#04b261] rounded-full p-3 text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
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

        <div className=" flex flex-col gap-2 pointer-events-none">
          <span className="text-2xl font-semibold">Travel Tour Page</span>
          <p className=" text-gray-500">
            This page is for booking to travel around wonderful places and enjoy
            seesight of them.You can book in website by email and pay the price
            with whatever methods you wish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workcase;
