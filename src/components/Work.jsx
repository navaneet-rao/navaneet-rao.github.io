import React from "react";
import { Projects } from "../data/constants";

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8 w-full flex justify-center items-center flex-col  wide:landscape:mt-64 portrait:mt-40">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Projects
          </p>
          <p className="py-6 text-2xl text-center portrait:text-center">
            Check out some of my recent projects that i have worked on and more
            in my github
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {Projects.map((project) => (
            <project>
              <div
                style={{ backgroundImage: `url(${project.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                  <span className=" text-lg font-bold text-white tracking-wider">
                    {project.title}
                  </span>
                  <p className="text-center">{project.description}</p>
                  <div className="pt-8 text-center">
                    {project.haveDemo ? (
                      <div>
                        <a href={project.demo}>
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Demo
                          </button>
                        </a>
                        <a href={project.code}>
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                          </button>
                        </a>
                      </div>
                    ) : (
                      <div>
                        <a href={project.code}>
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            GIt Hub Code
                          </button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </project>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Works;
