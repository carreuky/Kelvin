import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About() {
  return (
    <div className="m-4 h-auto grid grid-rows lg:gap-10 gap-6 text-[#cdccfd] text-center">
      <div className="lg:text-7xl text-5xl font-bold text-[#cdccfd] ">
        Hi, I am <span className="text-[#90a0d9]">Kelvin Nderitu.</span>
      </div>
      <div className="lg:text-4xl text-2xl font-bold">
        Fullstack Developer.
      </div>
      <div className="text-lg flex justify-center">
        <div className="w-3/4">
          Fullstack developer with strong analytical and service-oriented
          architecture skills, as well as excellent communication skills.
          Developing app solutions through the use of cutting-edge technology,
          conceptual designs, and a healthy dose of imagination
        </div>
      </div>
      <div className="shadow-sm flex justify-center mt-6">
        <a href="#" aria-current="page" className="px-4 py-3  font-medium  border">
          Resume
        </a>
        <a href="https://github.com/carreuky" className="px-4 py-2  ">
          <AiFillGithub style={{ fontSize: "30px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/kelvin-nderitu-5845b3208/"
          className="px-4 py-2 "
        >
          <AiFillLinkedin style={{ fontSize: "30px" }} />
        </a>
      </div>
    </div>
  );
}
