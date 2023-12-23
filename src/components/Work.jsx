import React from "react";
// import code from "../assets/images/code2.png";
import PortfolioPhoto from "../assets/images/portfolio-photo.png";
import FaceDetection from "../assets/images/Face-Detection-With-BetaFaceAPI-Application.png";
import NTFY from "../assets/images/ntfy1.png";
import calc from "../assets/images/simple-calc.png"
const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8 w-full flex justify-center items-center flex-col  wide:landscape:mt-64 portrait:mt-40">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Projects
          </p>
          <p className="py-6 text-2xl text-center portrait:text-center">
            Check out some of my recent projects that i have worked on and more in my github
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${PortfolioPhoto})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                My Portfolio
              </span>
              <p className="text-center">
                my portfolio website built with React and tailwind
              </p>
              <div className="pt-8 text-center">
                <a href="https://navaneet-rao.github.io/portfolio-website/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/navaneet-rao/portfolio-website">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FaceDetection})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center  items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Face Detection Application
              </span>
              <p className="text-center">Face Detection With BetaFaceAPI</p>
              <div className="pt-8 text-center">
                <a href="https://github.com/navaneet-rao/Face-Detection-With-BetaFaceAPI-Application">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Git Hub Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${NTFY})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-NTFY content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Automated Push Notification
              </span>
              <p className="text-center">
                Automated Push Notification with NTFY and using PowerShell
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/navaneet-rao/Automated-Push-Notification-Using-NTFY-PowerShell">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Git Hub Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${calc})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Basic calculator
              </span>
              <p className="text-center">
                Build a basic calculator using html and css
              </p>
              <div className="pt-8 text-center">
                <a href="https://navaneet-rao.github.io/Simple-HTML-Calculator/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/navaneet-rao/Simple-HTML-Calculator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
