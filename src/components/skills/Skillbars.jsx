import React, { useEffect } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skillbars = ({ name, percentagetext }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView + " this is inview");
    if (inView) {
      animation.start({
        width: `${percentagetext}`,
        transition: { duration: 1 },
      });
    }

    if (!inView) {
      animation.start({
        width: `0%`,
        // transition:{duration: 1 }
      });
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="flex flex-col  gap-2 w-[90%] lg:w-[40%] md:w-[40%]"
    >
      {" "}
      <div className=" flex flex-col gap-2">
        {" "}
        <span className="text-[18px]">
          {name} - <span className="text-[#72e2ae] ">{percentagetext}</span>
        </span>
        <div className="w-full h-4 mb-4 bg-[#2d4a4e] rounded-full dark:bg-[#2d4a4e]">
          <motion.div
            className="h-4  bg-[#72e2ae] rounded-full"
            // initial={{ width: "0%" }}
            animate={animation}
            // animate={{ width: `${percentagetext}` }}
            // transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skillbars;
