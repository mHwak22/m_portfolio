import { AcademicCapIcon } from "@heroicons/react/20/solid";
import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] flex flex-col items-center">
      <div className="flex items-center">
        <AcademicCapIcon className="text-yellow-300 w-[3.5rem] h-[3.5rem] mx-4 animate-spin-slow" />
        <h1 className="heading">
          {" "}
          Education & <span className="text-yellow-400">Skills</span>
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem title="React Developer" year="2014-2018" />
          <SkilsItem title="MERN Stack" year="2016-2020" />
          <SkilsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkilsItem title="Next JS Developer" year="2014-2018" />
          <SkilsItem title="Node JS Developer" year="2016-2020" />
          <SkilsLanguage
            skill1="Reactjs"
            skill2="NextJS"
            skill3="TypeScript"
            level1="w-[81%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
