import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";
import me from "../assets/me.jpg";
import resume from "../assets/Navaneet_R_Rao_12_dec_2023.pdf";
import { Link } from "react-scroll";

const Home = () => {
  const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Navaneet_R_Rao_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center py-12  wide:landscape:mt-16 ">
          <div className=" wide:landscape:mt-6 mx-auto  landscape:hidden">
            <img
              src={me}
              alt="my profile"
              className="rounded-full xl:h-auto xl:max-w-lg xl:ms-auto max-w-xs  wide:landscape:max-w-[200px]  "
            />
          </div>
          <h2 className="sm:text-7xl text-4xl font-bold text-white portrait:text-center portrait:py-[40px] wide:landscape:text-4xl">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-400 portrait:text-center py-4 max-w-md">
            I am a EX200 Red Hat Certified System Administrator Passionate about
            coding and tech. Currently exploring ReactJS, open-stack, Network
            analysis, Cybersecurity, and more
          </p>
          <div>
            <ul className="flex md:flex gap-x-8 portrait:gap-x-1 portrait:justify-center">
              <li>
                <Link
                  to="about"
                  smooth
                  duration={500}
                  className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-500 "
                >
                  <p>About Me</p>
                  <span className="group-hover:rotate-90 duration-300 hover:scale-110 duration-500 ">
                    <HiArrowNarrowRight size={20} className="ml-2" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  duration={500}
                  onClick={onButtonClick}
                  className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-green-500 cursor-pointer hover:scale-110 duration-500"
                >
                  Resume
                  <button className="hover:scale-110 duration-500">
                    <FaFileDownload size={20} className="ml-2" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" wide:landscape:mt-6 mx-auto portrait:py-[40px] portrait:hidden">
          <img
            src={me}
            alt="my profile"
            className="rounded-full xl:h-auto xl:max-w-[420px] xl:ms-auto max-w-xs  wide:landscape:max-w-[300px]  "
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
