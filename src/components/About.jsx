import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About() {
  return (
    <div className="mt-4 grid grid-rows gap-10 text-[#cdccfd] text-center">
        
      <div className="text-7xl font-bold text-[#cdccfd] ">
        Hi, I am <span className="text-[#90a0d9]">Kelvin Nderitu.</span>
      </div>
      <div className="text-4xl font-bold">A Front End Engineer.</div>
      <div className="text-lg flex justify-center">
        <div className="w-3/4">
          Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
          perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
          modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
          minima consectetur.
        </div>
      </div>
      <div class="shadow-sm flex justify-center mt-6">
        <a
          href="#"
          aria-current="page"
          class="px-4 py-3  font-medium  border"
        >
          Resume
        </a>
        <a href="https://github.com/carreuky" class="px-4 py-2  ">
          <AiFillGithub style={{ fontSize: "30px" }} />
        </a>
        <a href="https://www.linkedin.com/in/kelvin-nderitu-5845b3208/" class="px-4 py-2 ">
          <AiFillLinkedin style={{ fontSize: "30px" }} />
        </a>
      </div>
    </div>
  );
}
