import React from "react";
import { data } from "../data/data";

export default function Projects() {
  const project = data;

  return (
    <div>
      <div className="lg:mx-8 mx-4 text-4xl font-bold text-[#cdccfd]"> Projects</div>
      <div name="projects" className="w-full md:h-screen text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          {/* container for projects */}

          <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-cols-1 gap-4">
            {/* Gird Item */}
            {project.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex mb-4 justify-center text-center items-center mx-auto content-div lg:w-[300px] h-[200px]   overflow-hidden bg-cover bg-center "
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
