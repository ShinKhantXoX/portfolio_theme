import { RingProgress } from "@mantine/core";
import React, { useEffect } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skillring = () => {
  useInView();
  return (
    <div className=" w-full">
      <div className=" flex justify-between  gap-5 flex-wrap">
        <div className=" bg-[#0f1b31] hover:translate-y-[-10px] transition-all shadow-md border-gray-800 rounded-sm border-[0.1px] h-fit p-2 flex flex-col gap-2 items-center w-[90%] lg:w-[20%] md:w-[40%]">
          <RingProgress
            sections={[{ value: 85, color: "#72e2ae" }]}
            rootColor="#2d4a4e"
            roundCaps
            size={150}
            thickness={12}
            label={<p className=" text-center font-semibold">85%</p>}
          />

          <p className=" text-white font-semibold">UI/UX Design</p>
        </div>
        <div className=" bg-[#0f1b31] hover:translate-y-[-10px] transition-all shadow-md border-gray-800 rounded-sm border-[0.1px] h-fit p-2 flex flex-col gap-2 items-center w-[90%] lg:w-[20%] md:w-[40%]">
          <RingProgress
            sections={[{ value: 80, color: "#72e2ae" }]}
            rootColor="#2d4a4e"
            roundCaps
            size={150}
            thickness={12}
            label={<p className=" text-center font-semibold">80%</p>}
          />

          <p className=" text-white font-semibold">Backend Development</p>
        </div>
        <div className=" bg-[#0f1b31] hover:translate-y-[-10px] transition-all shadow-md border-gray-800 rounded-sm border-[0.1px] h-fit p-2 flex flex-col gap-2 items-center w-[90%] lg:w-[20%] md:w-[40%]">
          <RingProgress
            sections={[{ value: 95, color: "#72e2ae" }]}
            rootColor="#2d4a4e"
            roundCaps
            size={150}
            thickness={12}
            label={<p className=" text-center font-semibold">95%</p>}
          />

          <p className=" text-white font-semibold">Frontend Development</p>
        </div>
        <div className=" hover:translate-y-[-10px] transition-all bg-[#0f1b31] shadow-md border-gray-800 rounded-sm border-[0.1px] h-fit p-2 flex flex-col gap-2 items-center w-[90%] lg:w-[20%] md:w-[40%]">
          <RingProgress
            sections={[{ value: 75, color: "#72e2ae" }]}
            rootColor="#2d4a4e"
            roundCaps
            size={150}
            thickness={12}
            label={<p className=" text-center font-semibold">75%</p>}
          />

          <p className=" text-white font-semibold">Mobile App Development</p>
        </div>
      </div>
    </div>
  );
};

export default Skillring;
