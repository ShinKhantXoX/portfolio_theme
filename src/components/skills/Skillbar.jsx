import React, { useEffect } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skillbars from "./Skillbars";

const Skillbar = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView + " this is inview");
    if (inView) {
      animation.start({
        y: "0px",

        opacity: "100%",

        transition: { duration: 1 },
      });
    }

    if (!inView) {
      animation.start({
        y: "100px",

        opacity: "0%",
        // transition:{duration: 1 }
      });
    }
  }, [inView]);
  const BAR = [
    {
      name: "Javascript",
      percentagetext: "85%",
      id: 1,
    },
    {
      name: "React Js",
      percentagetext: "80%",
      id: 2,
    },
    {
      name: "Html-Css",
      percentagetext: "90%",
      id: 3,
    },

    {
      name: "Illustrator",
      percentagetext: "70%",
      id: 4,
    },
    {
      name: "Node Js",
      percentagetext: "90%",
      id: 5,
    },
    {
      name: "React Native",
      percentagetext: "70%",
      id: 6,
    },
    {
      name: "Photoshop",
      percentagetext: "70%",
      id: 7,
    },
    {
      name: "Figma",
      percentagetext: "90%",
      id: 8,
    },
  ];
  return (
    <motion.div
      ref={ref}
      animate={animation}
      className=" flex flex-wrap flex-col md:flex-row  lg:flex-row justify-between gap-5 mt-[30px]"
    >
      {BAR?.map((item) => (
        <Skillbars
          key={item?.id}
          name={item?.name}
          percentagetext={item?.percentagetext}
        />
      ))}
    </motion.div>
  );
};

export default Skillbar;
