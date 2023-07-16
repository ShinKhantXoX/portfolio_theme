import React from "react";

import Skillbars from "./Skillbars";

const Skillbar = () => {
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
    <div className=" flex flex-wrap flex-col md:flex-row  lg:flex-row justify-center gap-5 mt-[30px]">
      {BAR?.map((item) => (
        <Skillbars
          key={item?.id}
          name={item?.name}
          percentagetext={item?.percentagetext}
        />
      ))}
    </div>
  );
};

export default Skillbar;
