import React from "react";
import Skilltitle from "./Skilltitle";
import Skillring from "./Skillring";
import Skillbar from "./Skillbar";

const Skills = () => {
  return (
    <div className="container mx-auto flex flex-col gap-3">
      <Skilltitle />
      <Skillring />
      <Skillbar />
    </div>
  );
};

export default Skills;
