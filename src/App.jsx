import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";
import About from "./components/About";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoDribbble,
} from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" wrapper relative min-h-screen w-full bg-grey blurredBg">
      <div>

        <Navbar/>

        <main className=" page-content relative bg-grey bg-opacity-95 backdrop-blur-lg backdrop-filter">
          <div className="bglines fixed left-0 top-0 z-20 flex h-screen w-full justify-around">
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
          </div>

          <div className=" relative z-30 min-h-screen">
            <div className="section-home">
              <div className="herosection relative overflow-hidden">
                <div className="herosection-content relative z-20 bg-grey-darken  bg-opacity-20">
                  <div className=" container mx-auto relative">
                    <div className=" flex min-h-screen w-full items-center justify-center">
                      <div className=" herosection-content w-full py-20 text-center md:w-3/4">
                        <div
                          style={{ opacity: 1, transform: "none" }}
                          className=" herosection-imagewrapper relative mb-5 inline-block overflow-hidden rounded-full align-middle"
                        >
                          <span className="herosection-imageanimation absolute left-0 top-0 z-10 h-full w-full animate-spin rounded-full bg-gradient-to-tr from-primary to-transparent"></span>
                          <div className="herosection-image fiximage relative z-20 inline-block h-[150px] w-[150px] overflow-hidden rounded-full border-6 border-primary border-opacity-10 align-middle">
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
                        </div>
                        <h1
                          className="mb-5 text-heading text-[46px] font-bold flex align-middle justify-center"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <span className="block sm:inline">Hi, I am</span>
                          <span className=" text-primary ps-2">
                            <Typewriter
                              options={{
                                strings: [
                                  "Shin Khant",
                                  "Frontend Developer",
                                  "Web Desginer",
                                ],
                                autoStart: true,
                                loop: true,
                              }}
                            />
                          </span>
                        </h1>
                        <p
                          className="lead mb-0 text-[18px]"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          I am a frontend web developer. I can provide clean
                          code and pixel perfect design. I also make website
                          more &amp; more interactive with web animations.
                        </p>
                        <div
                          style={{ opacity: 1, transform: "none" }}
                          className=" mt-7 text-center"
                        >
                          <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
                            <li className="inline-block align-middle">
                              <a
                                href=""
                                target="_blank"
                                rel=" noopener noreferrer"
                                className="group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
                              >
                                <span className=" front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                                  <BiLogoFacebook />
                                </span>
                                <span className=" back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                                  <BiLogoFacebook />
                                </span>
                              </a>
                            </li>
                            <li className="inline-block align-middle">
                              <a
                                href=""
                                target="_blank"
                                rel=" noopener noreferrer"
                                className="group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
                              >
                                <span className=" front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                                  <BiLogoTwitter />
                                </span>
                                <span className=" back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                                  <BiLogoTwitter />
                                </span>
                              </a>
                            </li>
                            <li className="inline-block align-middle">
                              <a
                                href=""
                                target="_blank"
                                rel=" noopener noreferrer"
                                className="group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
                              >
                                <span className=" front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                                  <BiLogoGithub />
                                </span>
                                <span className=" back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                                  <BiLogoGithub />
                                </span>
                              </a>
                            </li>
                            <li className="inline-block align-middle">
                              <a
                                href=""
                                target="_blank"
                                rel=" noopener noreferrer"
                                className="group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
                              >
                                <span className=" front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                                  <BiLogoLinkedinSquare />
                                </span>
                                <span className=" back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                                  <BiLogoLinkedinSquare />
                                </span>
                              </a>
                            </li>
                            <li className="inline-block align-middle">
                              <a
                                href=""
                                target="_blank"
                                rel=" noopener noreferrer"
                                className="group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
                              >
                                <span className=" front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                                  <BiLogoDribbble />
                                </span>
                                <span className=" back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                                  <BiLogoDribbble />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div
                          style={{ opacity: 1, transform: "none" }}
                          className="herosection-bottom absolute left-0 top-auto bottom-10 w-full justify-between text-center"
                        >
                          <a
                            href=""
                            className=" cursor-pointer text-xs font-medium uppercase tracking-widest transition-all hover:text-primary"
                          >
                            <AiOutlineArrowDown className=" inline animate-bounce text-base" />
                            <span className="pl-2">Scroll Down</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <About />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
