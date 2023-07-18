import { RingProgress } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skillring = () => {
  const [ref, inView] = useInView();
  const [uiWidth, setUiWidth] = useState(0);
  const [backend, setBackend] = useState(0);
  const [frontend, setFrontend] = useState(0);
  const [mobile, setMobile] = useState(0);
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: "0px",
        opacity: "100%",

        transition: { duration: 1 },
      });
      const interval = setInterval(() => {
        if (inView === true && uiWidth < 85) {
          setUiWidth((prev) => prev + 5);
        }
        if (inView === true && backend < 80) {
          setBackend((prev) => prev + 5);
        }
        if (inView === true && frontend < 85) {
          setFrontend((prev) => prev + 5);
        }
        if (inView === true && mobile < 75) {
          setMobile((prev) => prev + 5);
        }
      }, 50);

      return () => clearInterval(interval);
    }

    if (!inView) {
      animation.start({
        y: "100px",
        opacity: "0%",
      });
      const interval = setInterval(() => {
        if (inView === false && uiWidth > 0) {
          setUiWidth((prev) => prev - 5);
        }
        if (inView === false && backend > 0) {
          setBackend((prev) => prev - 5);
        }
        if (inView === false && frontend > 0) {
          setFrontend((prev) => prev - 5);
        }
        if (inView === false && mobile > 0) {
          setMobile((prev) => prev - 5);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView, uiWidth, backend, frontend, mobile]);

  return (
    <div>
      <motion.div
      className=" w-full"
      ref={ref}
      animate={animation}
      // animate={{ x: "0px", opacity: "100%" }}
      // initial={{ x: "-100px", opacity: "0%" }}
      // transition={{ duration: "1" }}
    >
      <div className=" flex justify-center md:justify-between  gap-5 flex-wrap">
        <div className=" bg-[#0f1b31] hover:translate-y-[-10px] transition-all shadow-md border-gray-800 rounded-sm border-[0.1px] h-fit p-2 flex flex-col gap-2 items-center w-[90%] lg:w-[20%] md:w-[40%]">
          <RingProgress
            sections={[{ value: uiWidth, color: "#72e2ae" }]}
            rootColor="#2d4a4e"
            roundCaps
            size={150}
            thickness={12}
            label={<p className=" text-center font-semibold">{uiWidth}%</p>}
          />

          <p className=" text-white font-semibold">UI/UX Design</p>
        </div>
        <div className=" bg-[#0f1b31] hover:translate-y-[-10px] transition-all shadow-md border-gray-800 rounded-sm border-[0.1px] h-fit p-2 flex flex-col gap-2 items-center w-[90%] lg:w-[20%] md:w-[40%]">
          <RingProgress
            sections={[{ value: backend, color: "#72e2ae" }]}
            rootColor="#2d4a4e"
            roundCaps
            size={150}
            thickness={12}
            label={<p className=" text-center font-semibold">{backend}%</p>}
          />

          <p className=" text-white font-semibold">Backend Development</p>
        </div>
        <div className=" bg-[#0f1b31] hover:translate-y-[-10px] transition-all shadow-md border-gray-800 rounded-sm border-[0.1px] h-fit p-2 flex flex-col gap-2 items-center w-[90%] lg:w-[20%] md:w-[40%]">
          <RingProgress
            sections={[{ value: frontend, color: "#72e2ae" }]}
            rootColor="#2d4a4e"
            roundCaps
            size={150}
            thickness={12}
            label={<p className=" text-center font-semibold">{frontend}%</p>}
          />

          <p className=" text-white font-semibold">Frontend Development</p>
        </div>
        <div className=" hover:translate-y-[-10px] transition-all bg-[#0f1b31] shadow-md border-gray-800 rounded-sm border-[0.1px] h-fit p-2 flex flex-col gap-2 items-center w-[90%] lg:w-[20%] md:w-[40%]">
          <RingProgress
            sections={[{ value: mobile, color: "#72e2ae" }]}
            rootColor="#2d4a4e"
            roundCaps
            size={150}
            thickness={12}
            label={<p className=" text-center font-semibold">{mobile}%</p>}
          />

          <p className=" text-white font-semibold">Mobile App Development</p>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default Skillring;
