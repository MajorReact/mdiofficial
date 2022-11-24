import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyAvatar from "../public/assets/mdiofficial-x-preview.png";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <br></br>
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About Me 🤍
          </p>
          <br></br>
          <div className="uppercase text-xl tracking-widest text-[#5651e5]">
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
                  .typeString("..an Open Source Contributor")
                  .pauseFor(2500)
                  .deleteAll()
                  .stop()
                  .start();
              }}
            />
          </div>
          <p className="py-2 text-gray-600">
            My name is Nnamdi, and I am a passionate Junior Web Engineer with
            proficiency in the JavaScript programming Language. I started out
            frontend heavy. Slowly but progressively ventured into backend
            development with Node Express. I am a Competitive Programmer and
            Clan member of Code Ninjas. Consistently striving to improve and
            grow my skillset code by code. I also document my experiences to
            inspire others by writing and sharing my challenges on Hashnode.
          </p>
          <p className="py-2 text-gray-600">
            SOFT SKILLS: Problem solving || Fast Learner || Efficient
            Communicator || Team Player
          </p>
          <p className="py-2 text-gray-600">
            INTERESTS: COLLABS || OPEN SOURCE
          </p>
          <p className="py-2 text-amber-700">
            <a
              href="https://linkedin.com/in/nnamdi-ogbangwo"
              target="_blank"
              rel="noopener noreferrer"
            >
              LET'S CONNECT!
            </a>
          </p>
          <a
            href="https://github.com/MajorReact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Peek a few of my latest projects.
            </p>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={MyAvatar} className="rounded-xl" alt="myAvatar" />
        </div>
      </div>
    </div>
  );
};

export default About;
