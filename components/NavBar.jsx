import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("#c4dfe4");
  const [linkColor, setLinkColor] = useState("#1e2836");
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  //Mount handleShadow to the DOM onScroll
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed h-20 w-full shadow-xl z-[100] ease-in-out duration-300"
          : "fixed h-20 w-full z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <p className="uppercase text-blue-400 h-5 font-bold">mdi</p>
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="text-sm uppercase ml-10 hover:border-b border-amber-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm uppercase ml-11 hover:border-b border-amber-500">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="text-sm uppercase ml-11 hover:border-b border-amber-500">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="text-sm uppercase ml-11 hover:border-b border-amber-500">
              <Link href="https://mdi.hashnode.dev">Blog</Link>
            </li>
            <li className="text-sm uppercase ml-11 hover:border-b border-amber-500">
              <Link href="/#contact">Hire me</Link>
            </li>
          </ul>
          {/* Hamburger */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <FaBars size={30} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Backdrop - Overlay */}
      <div
        className={
          nav ? "fixed left-0 top-0 md:hidden w-full h-screen bg-black/70" : ""
        }
      >
        {/* Hamburger Menu */}
        <div
          className={
            nav
              ? "top-0 fixed right-0 w-[75%] sm:w-[60%] md:w-[45%] h-[100%] bg-[#e5edf3] p-10 ease-in-out duration-300"
              : "top-0 fixed right-[-100%] ease-in duration-300 bottom-0"
          }
        >
          <div>
            <div className="flex items-center w-full justify-between">
              <Link href="/">
                <a>
                  <p className="uppercase text-blue-400 h-5 font-bold">mdi</p>
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-200 p-3 cursor-pointer"
              >
                <FaTimes />
              </div>
            </div>
            <div className="border-b border-amber-500 my-4">
              <p className="md:w-[90%] py-4 w-[85%]">
                My name is Nnamdi, a software engineer.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Blog
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Work
                </li>
              </Link>
              <Link href="https://www.linkedin.com/in/nnamdi-ogbangwo">
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Profile
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Hire Me
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest uppercase text-[#5651e5]">
                Available on:
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/nnamdi-ogbangwo"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="rounded-full p-3 cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                </a>
                <a
                  href="https://github.com/MajorReact"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="rounded-full p-3 cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    className="rounded-full p-3 cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300"
                    onClick={() => setNav(!nav)}
                  >
                    <FaEnvelope />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    className="rounded-full p-3 cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300"
                    onClick={() => setNav(!nav)}
                  >
                    <FaUser />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;