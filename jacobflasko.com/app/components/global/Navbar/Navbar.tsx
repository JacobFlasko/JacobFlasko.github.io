import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar light:bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="/Skills">Skills</Link>
              </li>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-md lg:text-xl" href="/">
            Jacob Flasko
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg bold">
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Skills">Skills</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/*Theme Switch*/}

          {/* <ThemeSwitch /> */}
          {/*Link to Linkedin*/}
          <Link
            href="https://www.linkedin.com/in/jacob-flasko-a52a3a244/"
            target="_blank"
          >
            <GrLinkedin size={48} className="mx-2" />
          </Link>
          {/*Link to Github*/}
          <Link href="https://github.com/JacobFlasko" target="_blank">
            <FaGithub size={48} className="mx-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
