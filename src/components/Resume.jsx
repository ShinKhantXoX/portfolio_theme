import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWeb, MdWorkOutline } from "react-icons/md";
import { FaReact, FaPhp, FaLaravel } from "react-icons/fa";

const Resume = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.75, 1],
    ["-25%", "-15%", "-5%", 0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ root: targetRef }}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visiable: { opacity: 1, y: 0 },
      }}
      // initial={{opacity, y}}
      // animate={{opacity, y}}
      // transition={{ duration: 0.5, delay: 0.25 }}
      id="about"
      ref={targetRef}
      className=" min-h-screen about-section pt-24 lg:pt-28 xl:pt-32"
    >
      <div className=" container mx-auto mt-40">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase lg:text-3xl font-bold">
            My Resume
          </h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
          </span>
          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            Resume
          </span>
        </div>
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#72E2AE1A", color: "#72e2ae" }}
              contentArrowStyle={{
                borderRight: "7px solid  #72E2AE1A",
              }}
              date={
                <div className=" bg-[#72E2AE1A] text-[#bfbecb] w-fit me-auto rounded-full px-3 ">
                  1/10/2021 - 12/12/2021
                </div>
              }
              iconStyle={{
                background: "#162033",
                color: "#72e2ae",
              }}
              icon={<MdWeb className=" text-4xl" />}
            >
              <h3 className="vertical-timeline-element-title text-xl">
                The Starting
              </h3>
              <p className=" text-[#bfbecb]">
                We started learning Basic Web Design and got in touch with HTML,
                CSS and JavaScript.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#72E2AE1A", color: "#72e2ae" }}
              contentArrowStyle={{
                borderRight: "7px solid  #72E2AE1A",
              }}
              date={
                <div className=" bg-[#72E2AE1A] text-[#bfbecb] w-fit ms-auto rounded-full px-3 ">
                  1/1/2022 - 21/4/2022
                </div>
              }
              iconStyle={{
                background: "#162033",
                color: "#72e2ae",
              }}
              icon={<FaReact className=" text-4xl" />}
            >
              <h3 className="vertical-timeline-element-title text-xl">
                Started learning Advanced Level
              </h3>
              <p className=" text-[#bfbecb]">
                After learning basic things we love making websites.So, we
                Joined "Special Web Design" class in MMSIT and learned
                Bootstrap, Tailwind and React.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#72E2AE1A", color: "#72e2ae" }}
              contentArrowStyle={{
                borderRight: "7px solid  #72E2AE1A",
              }}
              date={
                <div className=" bg-[#72E2AE1A] text-[#bfbecb] w-fit me-auto rounded-full px-3 ">
                  1/5/2022 - 10/9/2022
                </div>
              }
              iconStyle={{
                background: "#162033",
                color: "#72e2ae",
              }}
              icon={<FaPhp className=" text-4xl" />}
            >
              <h3 className="vertical-timeline-element-title text-xl">
                Getting in touch with Backend Languages
              </h3>
              <p className=" text-[#bfbecb] ">
                After we learned react and able to create some small projects,
                We started learning Backend Languages such as PHP.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#72E2AE1A", color: "#72e2ae" }}
              contentArrowStyle={{
                borderRight: "7px solid  #72E2AE1A",
              }}
              date={
                <div className=" bg-[#72E2AE1A] text-[#bfbecb] w-fit ms-auto rounded-full px-3 ">
                  15/9/2022 - 20/12/2022
                </div>
              }
              iconStyle={{
                background: "#162033",
                color: "#72e2ae",
              }}
              icon={<FaLaravel className=" text-4xl" />}
            >
              <h3 className="vertical-timeline-element-title text-xl">
                Laravel
              </h3>
              <p className=" text-[#bfbecb]">
                After knowing basic and able to understand the workflow of
                backend languages, We started learning Laravel.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#72E2AE1A", color: "#72e2ae" }}
              contentArrowStyle={{
                borderRight: "7px solid  #72E2AE1A",
              }}
              date={
                <div className=" bg-[#72E2AE1A] text-[#bfbecb] w-fit me-auto rounded-full px-3 ">
                  1/1/2023 - current
                </div>
              }
              iconStyle={{
                background: "#162033",
                color: "#72e2ae",
              }}
              icon={<MdWorkOutline className=" text-4xl" />}
            >
              <h3 className="vertical-timeline-element-title text-xl">
                Joined workshops and started seeking Jobs
              </h3>
              <p className=" text-[#bfbecb] ">
                After we learned Laravel, we started training our skills in
                workshop and now we can able to join some internship programs or
                even Junior Level Jobs.{" "}
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
