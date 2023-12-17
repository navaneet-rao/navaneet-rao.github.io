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
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center py-12">
          <h2 className="sm:text-7xl text-4xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I am a EX200 Red Hat Certified System Administrator Passionate about
            coding and tech. Currently exploring ReactJS, open-stack, Network
            analysis, Cybersecurity, and more
          </p>
          <div>
            <ul className="flex md:flex gap-x-8">
              <li>
                <Link
                  to="about"
                  smooth
                  duration={500}
                  className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-500"
                >
                  About Me
                  <span className="group-hover:rotate-90 duration-300 hover:scale-110 duration-500">
                    <HiArrowNarrowRight size={25} className="ml-3" />
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
                    <FaFileDownload size={25} className="ml-3" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt="my profile"
            className="rounded-full xl:h-auto xl:max-w-lg xl:ms-auto max-w-xs "
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
