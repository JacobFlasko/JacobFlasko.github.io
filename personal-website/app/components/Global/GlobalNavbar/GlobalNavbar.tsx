import Link from "next/link";
import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

//Variables

const linkedinLink = "https://www.linkedin.com/in/jacob-flasko-a52a3a244/";
const githubLink = "https://github.com/JacobFlasko";

const GlobalNavbar = () => {
  return (
    <div className="navbar backdrop-blur-2xl">
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Jacob Flasko</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end shadow-indigo-500 ">
        <Link className="mx-2 hover:animate-bounce" href={githubLink}>
          <VscGithub size={48} />
        </Link>
        <Link className="mx-2 hover:animate-bounce" href={linkedinLink}>
          <FaLinkedin size={48} />
        </Link>
      </div>
    </div>
  );
};

export default GlobalNavbar;