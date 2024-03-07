import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { FaFileDownload } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import me from "../assets/me.jpg";
import resume from "../assets/Navaneet R Rao Resume Mar 1.pdf";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const Home = ({ scrollPosition }) => {
  const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    // link.download = "Navaneet_R_Rao_Resume.pdf"; // specify the filename
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    window.open(pdfUrl, "_blank", "noreferrer");
  };
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f] ">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row ">
        <div className="flex flex-col justify-center   wide:landscape:mt-16 ">
          <div className=" wide:landscape:mt-6 mx-auto  landscape:hidden">
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src={me}
              alt="my profile"
              className="rounded-full xl:h-auto xl:max-w-lg xl:ms-auto max-w-xs  wide:landscape:max-w-[200px]  "
            />
          </div>
          <h2 className="sm:text-7xl text-4xl text-[#B5D99C] font-bold portrait:text-center portrait:py-[17px]  wide:landscape:text-4xl">
            I am Navaneet R Rao
          </h2>

          <TypeAnimation
            sequence={[
              "I'm a Full Stack Developer",
              2000,
              "I'm a Programmer",
              2000,
              "I'm a Network Analyst",
              2000,
              "And a Music lover 🎧",
              2000,
            ]}
            repeat={Infinity}
            style={{ fontSize: "1.5em" }}
            className=" text-[#FFFF82] portrait:text-center "
          />

          <div className="text-gray-400 portrait:text-center py-4 portrait:mx-auto max-w-md">
            <ul className="list-disc">
              <li>
                {" "}
                I am Passionate about coding and tech. Currently exploring
                ReactJS, open-stack, Network analysis, Cybersecurity, and more.{" "}
              </li>
              <li>
                Let's connect, collaborate, and make a lasting impact together.
              </li>
              <li>
                Thank you for visiting my portfolio, and I look forward to the
                exciting possibilities ahead!
              </li>
            </ul>
          </div>
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
                  <span className="group-hover:rotate-90 hover:scale-110 duration-500 ">
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
                    {/* <FaFileDownload size={20} className="ml-2" /> */}
                    <FaRegFilePdf size={20} className="ml-2" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" wide:landscape:mt-6 mx-auto portrait:py-[40px] portrait:hidden">
          <LazyLoadImage
            scrollPosition={scrollPosition}
            src={me}
            alt="my profile"
            className="rounded-full xl:h-auto xl:max-w-[420px] xl:ms-auto max-w-xs  wide:landscape:max-w-[300px]  "
          />
        </div>
      </div>
    </div>
  );
};
export default trackWindowScroll(Home);
