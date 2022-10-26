import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm text-gray-600">🌍 Hello World!</p>
          <h1 className="py-4 text-gray-700">My name is Nnamdi 👋</h1>
          <Typewriter
            options={{
              strings: ["Pleased to meet you!"],
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I am a JavaScript Developer!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("..a Frontend Engineer!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("..a Technical Writer!")
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(500)
                .typeString("..an Open Source Contibutor")
                .pauseFor(2500)
                .deleteAll()
                .stop()
                .start();
            }}
          />
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            ❤️ Built on NextJs framework ❤️
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://github.com/MajorReact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/nnamdi-ogbangwo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <Link href="mailto:nnamdiogbangwo@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
             a </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
