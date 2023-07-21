import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
// import { IoLocationOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Form = () => {
  const targetRef = useRef(null);
  const [ref, inView] = useInView();
  const slideUpAni = useAnimation();
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

  useEffect(() => {
    if (inView) {
      slideUpAni.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      slideUpAni.start({
        y: "100%",
        opacity: 0,
        transition: {
          type: "spring",
          duration: 0.4,
          bounce: 0.3,
        },
      });
    }
  }, [inView]);

  return (
    <div
      // style={{ opacity, y }}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ root: targetRef }}
      // variants={{
      //   hidden: {opacity: 0, y:75},
      //   visiable: {opacity: 1, y: 0}
      // }}
      // initial={{opacity, y}}
      // animate={{opacity, y}}
      // transition={{ duration: 0.5, delay: 0.25 }}
      id="contact"
      className=" min-h-screen about-section pt-24 lg:pt-28 xl:pt-32"
    >
      <div className=" container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase">contact up</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
          </span>
          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            CONTACT
          </span>
        </div>

        <div ref={ref} className=" grid grid-cols-9  gap-7">
          <div className=" col-span-9 lg:col-span-4 ">
            <h4 className=" font-[600] text-[22px] mb-[17px] text-white">
              Contact Information
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis,
              iusto harum possimus non praesentium qui facere.
            </p>
            <span className="inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20"></span>
            <div className="mt-5 gap-[16px] flex flex-col">
              <div className=" flex p-4 md:p-5 card">
                <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                  <FiPhone />
                </span>
                <div>
                  <h5 className=" mb-2">Contact on phone</h5>
                  <p>
                    <a href="">+012-3456-7891</a>
                  </p>
                  <p>
                    <a href="">+012-3456-7891</a>
                  </p>
                </div>
              </div>
              <div className=" flex p-4 md:p-5 card">
                <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                  <AiOutlineMail />
                </span>
                <div>
                  <h5 className=" mb-2">Contact on mail</h5>
                  <p>
                    <a href="">demomail@demo.com</a>
                  </p>
                  <p>
                    <a href="">demomail2@demo.com</a>
                  </p>
                </div>
              </div>
              <div className=" flex p-4 md:p-5 card">
                <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                  <IoLocationOutline />
                </span>
                <div>
                  <h5 className=" mb-2">Contact address</h5>
                  <p>
                    <a href="">121 King Street, Melbourne, United States</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-9 lg:col-span-5">
            <form action="" className=" flex flex-col gap-[16px] card md:p-5">
              <div className=" flex flex-col">
                <label htmlFor="" className=" mb-[6px]">
                  Name
                </label>
                <input
                  className=" card !rounded-sm h-[43px] px-[16px]"
                  type="text"
                  placeholder="Enter your name..."
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="" className=" mb-[6px]">
                  Email
                </label>
                <input
                  className=" card !rounded-sm h-[43px] px-[16px]"
                  type="text"
                  placeholder="Enter your email..."
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="" className=" mb-[6px]">
                  Subject
                </label>
                <input
                  className=" card !rounded-sm h-[43px] px-[16px]"
                  type="text"
                  placeholder="Enter subject..."
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="" className=" mb-[6px]">
                  Message
                </label>
                <textarea
                  className=" card !rounded-sm h-[128px] py-[10px] px-[16px]"
                  type="text"
                  placeholder="Enter your message..."
                />
              </div>
              <div className="header-button ">
                <a className="btn btn-small">
                  <span>send mail</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <span class="block pb-24 lg:pb-28 xl:pb-32"></span>
    </div>
  );
};

export default Form;
