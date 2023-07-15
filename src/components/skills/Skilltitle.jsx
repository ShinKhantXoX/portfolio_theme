import React from "react";
import "../../App.css";
const Skilltitle = () => {
  return (
    <div className=" relative mx-auto w-[100%] p-10 text-center">
      {" "}
      <p className=" text-4xl font-semibold mx-auto">MY SKILLS</p>
      <div className="relative z-10 mx-auto mt-[5px] overflow-hidden w-[8rem] bg-[#2e494e]  h-[0.375rem]  rounded-lg">
        <div className="absolute top-0 left-0 h-[100vh] w-[5%]">
          {" "}
          <div className=" left-right-ani  rounded-lg w-full   h-[5px] opacity-[100%]  "></div>
        </div>
      </div>
      <span className=" pointer-events-none text-[120px] opacity-[10%] font-semibold absolute left-0 right-0  top-0">
        SKILLS
      </span>
    </div>
  );
};

export default Skilltitle;
