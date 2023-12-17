import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full justify-center items-center ">
            <div className=" pb-8 pl-4 text-center">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500 ">
                About Me
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. <span className="wave">👋</span> I'm Navaneet R Rao,
                nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A software developer with experience in building Responsive and
                Scalable Web apps. Certified IT professional specializing in
                Linux system administration with recent achievement of RHCSA
                certification. Proven expertise in optimizing system
                performance, managing networks, and implementing security
                protocols. actively fostering innovation and collaboration.
                Dedicated Computer Science and Engineering student committed to
                staying current with the latest technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
