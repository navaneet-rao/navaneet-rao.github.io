import React from "react";
import { skills } from "../data/constants";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-full bg-[#0a192f] text-gray-200 sm:py-10"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  wide:landscape:mt-64">
        <div className=" w-full h-full flex justify-center items-center flex-col mt-5 portrait:mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center ">
            Skills
          </p>
          <p className="py-4 text-2xl text-center">
            I enjoy learning new things. Here's a list of some of technologies
            I've worked with.
          </p>
        </div>
        <div>
          {skills.map((skill) => (
            <skill>
              <div className="text-2xl font-bold inline mx-auto text-center ">
                <h1>{skill.title}</h1>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center text-center py-8 ">
                {skill.skills.map((item) => (
                  <div className="shadow-md shadow-[#040c16] bg-[] hover:scale-110 text-l  duration-500 py-4">
                    <item>
                      <img
                        src={item.image}
                        alt={item.name}
                        className=" mx-auto h-7 w-7 float-right mr-[3rem] justify-center "
                      />
                      {item.name}
                    </item>
                  </div>
                ))}
              </div>
            </skill>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
