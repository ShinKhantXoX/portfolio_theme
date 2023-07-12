import React, { useState } from 'react'

const Navbar = () => {

    const [scroll,setScroll] = useState(true);

    const scrollHandler = () => {
        if (window.scrollY >= 100) {
          setScroll(false);
        } else {
          setScroll(true);
        }
      };


      window.addEventListener("scroll", scrollHandler);

  return (
    <div>
                <header className={scroll ? " header top-0 left-0 z-50 h-auto w-full absolute" : "header top-0 left-0 z-50 h-auto w-full fixed animate-slidedown border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter"}>
          <div className=" container mx-auto">
            <div className=" header-inner flex items-center justify-between">
              <a className="sitelogo py-2" href="/homepage2">
                <span className="h-8 max-h-full w-auto text-primary text-2xl font-bold">
                  Team A
                </span>
              </a>
              <div className="header-nav hidden lg:block">
                <nav className="flex-grow px-5 text-center">
                  <ul className="mb-0 inline-flex list-none gap-7 pl-0">
                    <li className="inline-block align-middle">
                      <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary !text-primary">
                        Home
                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                      </a>
                    </li>
                    <li className="inline-block align-middle">
                      <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                        About
                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                      </a>
                    </li>
                    <li className="inline-block align-middle">
                      <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                        Resume
                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                      </a>
                    </li>
                    <li className="inline-block align-middle">
                      <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                        Works
                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                      </a>
                    </li>
                    <li className="inline-block align-middle">
                      <a
                        className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                        href="/posts/1"
                      >
                        Blog
                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                      </a>
                    </li>
                    <li className="inline-block align-middle">
                      <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                        Contact
                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              
              <div className="header-button hidden lg:block"><a className="btn"><span>Hire Me</span></a></div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Navbar