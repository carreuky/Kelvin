import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div class="text-white bg-[#10141E]">
      <div class="px-4 py-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:p-12">
        <div class="relative flex items-center justify-between">
          <a href="/" class="inline-flex items-center">
            <span class=" ml-2 text-xl font-bold  uppercase">KN.</span>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="/"
                class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/"
                class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/"
                class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact
              </a>
            </li>
          </ul>
          <div class="lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 text-center text-white left-0 w-full">
                <div class="p-5 bg-[#10141E] border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a href="/" class="inline-flex items-center">
                        <span class=" ml-2 text-xl font-bold  uppercase">
                          KN.
                        </span>
                      </a>
                    </div>
                    <div className="">
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-[#116DFA] focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          
                          class="font-medium hover:font-bold  tracking-wide  transition-colors duration-200 hover:text-[#116DFA]"
                        >
                          About Me
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="font-medium hover:font-bold tracking-wide  transition-colors duration-200 hover:text-[#116DFA]"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="font-medium hover:font-bold  tracking-wide  transition-colors duration-200 hover:text-[#116DFA]"
                        >
                          Skills
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                         
                          class="font-medium hover:font-bold tracking-wide  transition-colors duration-200 hover:text-[#116DFA]"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}