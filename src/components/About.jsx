import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 "
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6  wide:landscape:mt-64 wide:landscape:w-5/6 wide:landscape:m-100 portrait:mt-35 portrait:w-5/6">
          <div className="max-w-[1000px] w-full justify-center items-center ">
            <div className=" pb-8 pl-4 text-center">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500 ">
                About Me
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
            <div className="sm:text-right text-4xl font-bold wide:landscape:text-2xl portrait:text-3xl ">
              <p>
                Hi.{" "}
                <span className="wave wide:landscape:text-5xl text-6xl portrait:text-3xl">
                  👋
                </span>{" "}
                I'm Navaneet, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <ul className="list-disc portrait:list-none ">
                <li>
                  A software developer with experience in building Responsive
                  and Scalable Web apps.
                </li>
                <li>
                  Certified IT professional specializing in Linux system
                  administration with recent achievement of RHCSA certification.
                  Proven expertise in optimizing system performance, managing
                  networks, and implementing security protocols.
                </li>
                <li>
                  Actively fostering innovation and collaboration. Dedicated
                  Computer Science and Engineering student committed to staying
                  current with the latest technologies.
                </li>
                <li>Loves Listening to music everyday and Taking photos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
