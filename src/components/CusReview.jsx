import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  A11y,
  Autoplay,
} from "swiper/modules";
import "../App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import SwiperNavBtn from "./SwiperNavBtn";

const CusReview = () => {
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
    <div>
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
        className=" lg:min-h-screen about-section pt-24 pb-24 md:pb-10 lg:pt-28 xl:pt-32"
      >
        <div className=" container mx-auto">
          <div className="section-heading relative overflow-hidden pb-14 text-center">
            <h2 className="relative z-10 mb-2 uppercase lg:text-3xl font-bold">
              Client Reviews
            </h2>
            <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
              <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
            </span>
            <span
              className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
              style={{ willChange: "transform" }}
            >
              Reviews
            </span>
          </div>

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className=" w-full md:max-w-[397px] mr-28px">
                <div className=" mt-11 p-4 md:p-5 card">
                  <div className=" -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-opacity-10 border-primary md:-mt-16">
                    <span className=" span-1">
                      <span className=" span-2"></span>
                      <img
                        alt="Joseph Bieber"
                        src="https://tf-react-bieber.vercel.app/images/formal-image.png"
                        decoding="async"
                        data-nimg="responsive"
                        className=" hero-profile "
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <h5 className=" mb-0 text-white">Anonymous 1</h5>
                  <p className=" mb-2">
                    <small>Client - MMSIT</small>
                  </p>
                  <div className=" mb-3 flex text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>
                    Working with this team is very good experience for me.
                    They're good and patient. If I need developers in future,
                    I’ll definately hire them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" max-w-[397px] mr-28px">
                <div className=" mt-11 p-4 md:p-5 card">
                  <div className=" -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-opacity-10 border-primary md:-mt-16">
                    <span className=" span-1">
                      <span className=" span-2"></span>
                      <img
                        alt="Joseph Bieber"
                        src="https://tf-react-bieber.vercel.app/images/formal-image.png"
                        decoding="async"
                        data-nimg="responsive"
                        className=" hero-profile"
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <h5 className=" mb-0 text-white">Anonymous 2</h5>
                  <p className=" mb-2">
                    <small>Client - MMSIT</small>
                  </p>
                  <div className=" mb-3 flex text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>
                    Working with this team is very good experience for me.
                    They're good and patient. If I need developers in future,
                    I’ll definately hire them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" max-w-[397px] mr-28px">
                <div className=" mt-11 p-4 md:p-5 card">
                  <div className=" -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-opacity-10 border-primary md:-mt-16">
                    <span className=" span-1">
                      <span className=" span-2"></span>
                      <img
                        alt="Joseph Bieber"
                        src="https://tf-react-bieber.vercel.app/images/formal-image.png"
                        decoding="async"
                        data-nimg="responsive"
                        className=" hero-profile"
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <h5 className=" mb-0 text-white">Anonymous 3</h5>
                  <p className=" mb-2">
                    <small>Client - MMSIT</small>
                  </p>
                  <div className=" mb-3 flex text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>
                    Working with this team is very good experience for me.
                    They're good and patient. If I need developers in future,
                    I’ll definately hire them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" max-w-[397px] mr-28px">
                <div className=" mt-11 p-4 md:p-5 card">
                  <div className=" -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-opacity-10 border-primary md:-mt-16">
                    <span className=" span-1">
                      <span className=" span-2"></span>
                      <img
                        alt="Joseph Bieber"
                        src="https://tf-react-bieber.vercel.app/images/formal-image.png"
                        decoding="async"
                        data-nimg="responsive"
                        className=" hero-profile"
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <h5 className=" mb-0 text-white">Anonymous 4</h5>
                  <p className=" mb-2">
                    <small>Client - MMSIT</small>
                  </p>
                  <div className=" mb-3 flex text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>
                    Working with this team is very good experience for me.
                    They're good and patient. If I need developers in future,
                    I’ll definately hire them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" max-w-[397px] mr-28px">
                <div className=" mt-11 p-4 md:p-5 card">
                  <div className=" -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-opacity-10 border-primary md:-mt-16">
                    <span className=" span-1">
                      <span className=" span-2"></span>
                      <img
                        alt="Joseph Bieber"
                        src="https://tf-react-bieber.vercel.app/images/formal-image.png"
                        decoding="async"
                        data-nimg="responsive"
                        className=" hero-profile"
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                  <h5 className=" mb-0 text-white">Anonymous 5</h5>
                  <p className=" mb-2">
                    <small>Client - MMSIT</small>
                  </p>
                  <div className=" mb-3 flex text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>
                    Working with this team is very good experience for me.
                    They're good and patient. If I need developers in future,
                    I’ll definately hire them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperNavBtn />
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default CusReview;
