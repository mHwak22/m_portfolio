/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I'm <span className="text-yellow-400">Mohak!</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[18px] text-[#ffffff92]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            excepturi nulla unde cupiditate! Tenetur ipsum, excepturi qui
            temporibus ullam amet odio nesciunt incidunt, sequi assumenda
            cumque, autem quas dolor doloremque?
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row item-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55w6a5] text-black flex items-center space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;


// 43:09 time stamp-------https://youtu.be/6jFFkGU-ZBU?si=fjaLZYB-z7mi1Usz