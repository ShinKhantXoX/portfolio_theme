import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
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
      <div className=" container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase">About Me</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
          </span>
          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            About
          </span>
        </div>

        <div className=" grid grid-cols-2 items-center gap-7">
          <div className="col-span-2 lg:col-span-1">
            <div
              className="about-image overflow-hidden rounded-lg"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="about-image-inner fiximage relative border-10 border-primary border-opacity-20">
                <span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-cyan-200"></span>
                <span className="absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-transparent to-cyan-200"></span>
                <span className="absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-cyan-200"></span>
                <span className="absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-cyan-200"></span>
                <span className=" box-border block w-full h-full bg-none opacity-100 border-0 p-0 m-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: "63.9394% 0px 0px",
                    }}
                  ></span>
                  <img
                    alt="Joseph Bieber"
                    src="https://tf-react-bieber.vercel.app/images/about-image.jpg"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: "0px",
                      height: "0px",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div
              className="about-content"
              style={{ opacity: 1, transform: "none" }}
            >
              <h3 className=" text-2xl font-bold">
                Hi, I am <span className="text-primary">Joseph Bieber</span>
              </h3>
              <ul className="styledlist">
                <li className="text-lg list">
                  <strong className="inline-block min-w-[120px] font-medium">
                    First Name{" "}
                  </strong>
                  : Joseph
                </li>
                <li className="text-lg list">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Last Name{" "}
                  </strong>
                  : Bieber
                </li>
                <li className="text-lg list">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Age{" "}
                  </strong>
                  : 27 years
                </li>
                <li className="text-lg list">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Nationality{" "}
                  </strong>
                  : American
                </li>
                <li className="text-lg list">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Languages{" "}
                  </strong>
                  : English, French
                </li>
                <li className="text-lg list">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Address{" "}
                  </strong>
                  : 121 King Street, Melbourne, United States
                </li>
                <li className="text-lg list">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Freelance{" "}
                  </strong>
                  : Available
                </li>
              </ul>
              <a href="/resume.pdf" className="btn mt-3">
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
