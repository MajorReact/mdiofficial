import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import TopBanner from "../public/assets/lorum-ipsum-logo.jpg";

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
            <Image
              src={TopBanner}
              alt="/"
              width="50"
              height="50"
              className="cursor-pointer border-none rounded-full"
            />
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
              <a
                href="https://www.github.com/MajorReact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects
              </a>
            </li>
            <li className="text-sm uppercase ml-11 hover:border-b border-amber-500">
              <Link href="https://mdi.hashnode.dev">Blog</Link>
            </li>
            <li className="text-sm uppercase ml-11 hover:border-b border-amber-500">
              <a href="mailto:nnamdiogbangwo@gmail.com">Hire me</a>
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
              : "top-0 fixed right-[-1000%] ease-in duration-300 bottom-0"
          }
        >
          <div>
            <div className="flex items-center w-full justify-between">
              <Link href="/">
                <a>
                  <p className="uppercase text-blue-400 h-5 font-bold">
                    Nnamdi
                  </p>
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
                Physics whiz ❤️ web dev.
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
              <a
                href="https://mdi.hashnode.dev"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Blog
                </li>
              </a>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Skills
                </li>
              </Link>
              <a
                href="https://www.github.com/MajorReact"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Work
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/nnamdi-ogbangwo"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  LinkedIn
                </li>
              </a>
              <a href="mailto:nnamdiogbangwo@gmail.com">
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Hire Me
                </li>
              </a>
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
                <Link href="mailto:nnamdiogbangwo">
                  <div
                    className="rounded-full p-3 cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300"
                    onClick={() => setNav(!nav)}
                  >
                    <FaTwitter />
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
