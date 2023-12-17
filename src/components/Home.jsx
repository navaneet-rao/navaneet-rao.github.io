import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.jpg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center py-12">
        <h2 className="sm:text-7xl text-4xl font-bold text-white">
          I'm a Full Stack Web Developer
        </h2>
        <p className="text-gray-400 py-4 max-w-md">
            I am a EX200 Red Hat Certified System Administrator Passionate about coding and tech. Currently exploring open-stack, 
          ReactJS, Network analysis, Cybersecurity, and more
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-full md:h-auto md:max-w-lg md:ms-auto max-w-xs "
        />
      </div>
    </div>
  </div>
  );
};
export default Home;