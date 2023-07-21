import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scroll, setScroll] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const [toggle, setToggle] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  window.onscroll = function () {
    scrollPoint();
  };

  function scrollPoint() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let getclientHeight = document.documentElement.clientHeight;

    let calcHeight = scrollHeight - getclientHeight;
    let final = Math.round((scrollTop * 100) / calcHeight);
    scrollTop = final;
    setScrollTop(scrollTop);
  }

  return (
    <div>
      <header
        className={
          scroll
            ? " header top-0 left-0 z-50 h-auto w-full absolute"
            : "header top-0 left-0 z-50 h-auto w-full fixed animate-slidedown border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter"
        }
      >
        <div className="container mx-auto px-5 md:px-10 lg:px-10 ">
          <div className=" header-inner flex items-center justify-between">
            <Link
              activeClass="group-hover:origin-top-left group-hover:scale-100"
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="sitelogo py-2 cursor-pointer"
            >
              <span className="h-8 max-h-full w-auto text-primary text-2xl font-bold">
                Team A
              </span>
            </Link>
            <div className="header-mobilenav block lg:hidden">
              <button
                onClick={() => setToggle(!toggle)}
                className="btn btn-small btn-transparent px-3 text-sm"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                  </g>
                </svg>
              </button>
              <div
                className={`${
                  toggle ? "animate-slideUpOpen" : "animate-slideUpClose"
                } fixed z-50 flex h-screen w-screen items-center justify-center bg-grey p-4 text-center`}
                data-projection-id="23"
                // style={{transform: 'translateY(0vh) translateZ(0px)'}}
              >
                <button
                  onClick={() => setToggle(!toggle)}
                  className="btn btn-small btn-transparent absolute left-auto right-4 top-4 z-10 h-10 w-10 rounded-full p-0 text-center text-3xl"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="inline"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                    </g>
                  </svg>
                </button>
                <nav className="relative max-h-full w-full overflow-y-hidden">
                  <ul className="mb-0 list-none pl-0">
                    <li className="block">
                      <Link
                        onClick={() => setToggle(!toggle)}
                        activeClass="active-nav"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary text-primary"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="block">
                      <Link
                        onClick={() => setToggle(!toggle)}
                        activeClass="active-nav"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                      >
                        About
                      </Link>
                    </li>
                    <li className="block">
                      <Link
                        onClick={() => setToggle(!toggle)}
                        activeClass="active-nav"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                      >
                        Resume
                      </Link>
                    </li>
                    <li className="block">
                      <Link
                        onClick={() => setToggle(!toggle)}
                        activeClass="active-nav"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                      >
                        Works
                      </Link>
                    </li>
                    <li className="block">
                      <a
                        className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                        href="/posts/1"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="block">
                      <Link
                        onClick={() => setToggle(!toggle)}
                        activeClass="active-nav"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <div className="header-button pt-8">
                    <a className="btn btn-small">
                      <span>Hire Me</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="header-nav hidden lg:block">
              <nav className="flex-grow px-5 text-center">
                <ul className="mb-0 inline-flex list-none gap-7 pl-0">
                  <li className="inline-block align-middle">
                    <Link
                      activeClass="active-nav"
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                    >
                      Home
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </Link>
                  </li>
                  <li className="inline-block align-middle">
                    <Link
                      activeClass="active-nav"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                    >
                      About
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </Link>
                  </li>
                  <li className="inline-block align-middle">
                    <Link
                      activeClass="active-nav"
                      to="resume"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                    >
                      Resume
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </Link>
                  </li>
                  <li className="inline-block align-middle">
                    <Link
                      activeClass="active-nav"
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                    >
                      Works
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </Link>
                  </li>
                  <li className="inline-block align-middle">
                    <Link
                      activeClass="active-nav"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                    >
                      Contact
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-button hidden lg:block">
              <a className="btn">
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </div>
        <div className="progress-bar-container absolute left-0 top-[3rem] md:top-[3rem] lg:top-[4.2rem] w-full">
          <div className="w-full h-[3px]">
            <div
              className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[3px]"
              style={{ width: `${scrollTop}%` }}
            ></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
