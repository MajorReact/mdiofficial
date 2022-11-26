import React, { useState } from "react";
import {
  FaGithubSquare,
  FaLinkedinIn,
  FaUser,
  FaTwitterSquare,
} from "react-icons/fa";

import countapi from "countapi-js";
import Link from "next/link";

const Footer = () => {
  countapi.hit("nnamdiogbangwo.netlify.app", "visits").then((result) => {
    document.getElementById("updateViews").innerText = result.value;
  });

  return (
    <div
      id="footer"
      className="2xl:w-full 2xl:h-[100%] 2xl:pt-8 2xl:mt-8 mb-0 pb-0"
    >
      <div className="flex flex-col items-center pt-8 mt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blue-700">
                Let &apos;s keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blue-600">
                If you found the source code helpful, you can{" "}
                <a href="" className="text-pink-600">
                  buy me a coffee
                </a>{" "}
                Connect with me on any of these platforms.
              </h5>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/nnamdi-ogbangwo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/MajorReact"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithubSquare />
                  </div>
                </a>
                <a
                  href="http://twitter.com/mdiofficial1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaTwitterSquare />
                  </div>
                </a>
                <a
                  href="mailto:nnamdiogbangwo@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaUser />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blue-500 text-sm font-semibold mb-2">
                    LINKS ✨
                  </span>
                  <ul>
                    <li>
                      <Link
                        className="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        About Me 📌
                      </Link>
                    </li>
                    <li>
                      <li>
                        <a
                          className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                          href="https://www.github.com/MajorReact"
                          target="__blank"
                          rel="noreferrer"
                        >
                          Projects ⚙️
                        </a>
                      </li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/MajorReact"
                        target="__blank"
                      >
                        Github 🔨
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="https://linkedin.com/in/nnamdi-ogbangwo"
                        target="__blank"
                      >
                        LinkedIn 💼
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blue-500 text-sm font-semibold mb-2">
                    Other Resources 🚀
                  </span>
                  <ul>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="https://mdi.hashnode.dev"
                        target="__blank"
                      >
                        Blog 📚
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="https://www.twitter.com/mdiofficial1"
                        target="__blank"
                      >
                        Twitter 🛡️
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/MajorReact"
                      >
                        Repo 🔗
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="mailto:nnamdiogbangwo@gmail.com"
                      >
                        Contact Me 🌐
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blue-500 font-semibold py-1">
                © <span>nnamdiogbangwo</span>
                <a
                  href="https://github.com/MajorReact/mdiofficial"
                  className="text-red-800 hover:text-gray-800"
                  target="__blank"
                >
                  {" "}
                  view source🛠️
                </a>
                <p>Site Visits: </p>
                <div id="updateViews" className="text-red-500"></div>
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
