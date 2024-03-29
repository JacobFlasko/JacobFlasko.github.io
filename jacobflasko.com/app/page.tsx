import React from "react";
import Image from "next/image";
//Component Imports
import Navbar from "./components/global/Navbar/Navbar";
import HeroText from "./components/Home/HeroText/HeroText";
import Footer from "./components/global/Footer/Footer";
//CSS Style Import
import styles from "./styles.module.css";
//Images
import { FaReact } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="snap-mandatory">
      <Navbar />
      {/* First Section for hero text and icons */}
      <section className="flex flex-col space-y-24 lg:space-y-36 h-screen w-full justify-center items-center snap-center">
        <div className="flex justify-center items-center space-x-8 md:space-x-24 lg:space-x-28 xl:space-x-64">
          <span className="w-20 h-20 md:w-30 md:h-30 lg:h-40 lg:w-40 xl:w-44 xl:h-44 shadow-yellow-300]">
            <Image
              src="/Home/javascriptIcon.png"
              width={150}
              height={150}
              alt="Javascript Icon"
              className={`shadow-2xl shadow-yellow-300 -rotate-12 ${styles.bump}`}
            />
          </span>
          <span className="w-24 h-24 md:w-30 md:h-30 lg:h-40 lg:w-40 xl:w-44 xl:h-44 drop-shadow-[0_35px_35px_rgba(248,19,12,0.5)]">
            <Image
              src="/Home/git_icon.png"
              alt="Git Icon"
              width={150}
              height={150}
              className={`${styles.bump_delay}`}
            />
          </span>
          <span
            className={`w-20 h-20 md:w-30 md:h-30 lg:h-40 lg:w-40 xl:w-44 xl:h-44 drop-shadow-[0_45px_45px_rgba(35,124,255,0.65)] rotate-12 shadow-blue-300  ${styles.bump}`}
          >
            <Image src="/Home/react_icon.png" fill={true} alt="React Icon" />
          </span>
        </div>
        <HeroText />
        <div className="flex justify-center items-center space-x-4 md:space-x-8 lg:space-x-36 xl:space-x-64">
          <span className="w-20 h-20 md:w-30 md:h-30 lg:h-40 lg:w-40 xl:w-44 xl:h-44">
            <Image
              src="/Home/java_icon.png"
              width={150}
              height={150}
              alt="Java Icon"
              className={`drop-shadow-[0_45px_45px_rgba(35,124,255,0.65)]  rotate-12 ${styles.bump_delay}`}
            />
          </span>
          <span className="w-20 h-20 md:w-30 md:h-30 lg:h-40 lg:w-40 xl:w-44 xl:h-44">
            <Image
              src="/Home/python-logo-only.png"
              width={150}
              height={150}
              alt="Python Icon"
              className={`drop-shadow-[0_45px_45px_rgba(255,249,75,0.65)]  ${styles.bump}`}
            />
          </span>
          <span className="w-20 h-20 md:w-30 md:h-30 lg:h-40 lg:w-40 xl:w-44 xl:h-44">
            <Image
              src="/Home/html5_icon.png"
              width={150}
              height={150}
              alt="HTML 5 Icon"
              className={`drop-shadow-[0_45px_45px_rgba(255,64,64,0.65)] -rotate-12 ${styles.bump_delay}`}
            />
          </span>
        </div>
      </section>

      {/*Second Section */}
      <section className="w-full h-screen bg-gray-50 snap-center flex flex-col-reverse justify-center items-center space-y-8 md:flex-row md:space-x-48 ">
        <div className="flex justify-center items-center h-auto w-2/3 xl:w-5/12 pt-10">
          <Image
            src={"/Home/programmer_room.svg"}
            alt={"Programmer At Work"}
            width={600}
            height={600}
            className="pt-10 w-full h-auto  md:w-3/4 md:h-auto lg:w-2/3 lg:h-auto 2xl:w-11/12 2xl:h-auto p-4 shadow-2xl"
          />
        </div>
        <div className="flex flex-col space-y-4 md:items-start md:text-left md:space-y-4">
          <h1 className="text-3xl md:text-5xl">Hi, I&#39;m Jacob</h1>
          <p className="text-sm md:text-xl">
            I am a software developer based in{" "}
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Pittsburgh,+PA/@40.4314699,-80.0629009,12z/data=!3m1!4b1!4m6!3m5!1s0x8834f16f48068503:0x8df915a15aa21b34!8m2!3d40.4406248!4d-79.9958864!16zL20vMDY4cDI?entry=ttu"
              className="text-indigo-700 font-bold hover:underline"
            >
              Pittsburgh, PA
            </a>
          </p>
          <p className="text-sm md:text-xl">
            To learn more about me, visit{" "}
            <a
              className="text-indigo-700 font-bold hover:underline"
              href={"/About"}
            >
              About
            </a>
          </p>
          <p className="text-sm md:text-xl">
            To view a catalogue of my skills, visit{" "}
            <a
              className="text-indigo-700 font-bold hover:underline"
              href={"/Skills"}
            >
              Skills
            </a>
          </p>
          <p className="text-sm md:text-xl">
            To view my contact information, visit{" "}
            <a
              className="text-indigo-700 font-bold hover:underline"
              href={"/Contact"}
            >
              Contact
            </a>
          </p>
        </div>
      </section>

      {/*Third Section */}
      <section className="w-full h-screen snap-center flex flex-col-reverse justify-center items-center space-y-8 md:flex-row md:space-x-48">
        <div className="flex flex-col items-center justify-center space-y-4 md:items-start md:text-left md:space-y-4">
          <h1 className="text-3xl md:text-5xl">About this Website</h1>
          <p className="text-sm md:text-xl">
            This Website was built using{" "}
            <span className="font-bold text-indigo-700">NextJS</span>
          </p>
          <p className="text-sm md:text-xl">
            Components were developed in{" "}
            <span className="font-bold text-indigo-700">ReactJS</span>
          </p>
          <p className="text-sm md:text-xl">
            Custom animations were developed in{" "}
            <span className="font-bold text-indigo-700">CSS</span>
          </p>
          <p className="text-sm md:text-xl">
            The source code is available on my{" "}
            <a
              className="text-indigo-700 font-bold hover:underline"
              href={"https://github.com/JacobFlasko"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
          <p className="text-sm md:text-xl">Thanks for Visiting!</p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"Home/web_design_icon.svg"}
            alt={"Website Tech Icon"}
            width={500}
            height={500}
            className="pb-10 w-3/4 h-auto md:w-3/4 md:h-auto lg:w-11/12 lg:h-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
