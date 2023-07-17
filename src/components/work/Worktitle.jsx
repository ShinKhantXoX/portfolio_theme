import React from "react";
import "../../App.css";
const Worktitle = () => {
  return (
    <div className=" relative mx-auto w-[100%]  p-10 text-center">
      {" "}
      <p className=" text-4xl font-semibold mx-auto">MY Works</p>
      <div className="relative z-10 mx-auto mt-[5px] w-[8rem] bg-[#2e494e]  h-[0.375rem] overflow-hidden  rounded-lg">
        <div className="absolute top-0 left-0 w-[5%]">
          {" "}
          <div className=" left-right-ani  rounded-lg w-full   h-[5px] opacity-[100%]  "></div>
        </div>
      </div>
      <span className=" pointer-events-none text-[120px] opacity-[10%] font-semibold absolute left-0 right-0  top-0">
        Works
      </span>
    </div>
  );
};

export default Worktitle;
