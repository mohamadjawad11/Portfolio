"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import novamind2 from "@/app/assets/image.png";
import property2 from "@/app/assets/property3.png";

// ================== PROJECTS DATA ==================
const projects = [
  {
    num: "01",
    category: "FullStack AI WEB",
    title: "NOVAMIND",
    description:
      "This project is built using React and Express.js. NOVAMIND contains AI features like generating images, removing background from images, removing objects, reviewing resumes, and generating articles.",
    stack: [{ name: "React" }, { name: "Express" }, { name: "Nodejs" }, { name: "NeonDB" }],
    image:novamind2,
    live: "https://novamind-black.vercel.app",
    github: "https://github.com/mohamadjawad11/NOVAMIND",
  },
  {
    num: "02",
    category: "MERN STACK",
    title: "QuickProperty",
    description:
      "This project is built using MERN. QuickProperty is a real estate platform that allows users to search for properties, view details, contact agents, and upload listings.",
    stack: [{ name: "React" }, { name: "Express" }, { name: "Nodejs" }, { name: "MongoDB" }],
    image: property2,
    live: "https://mern-real-estate-cpar.onrender.com",
    github: "https://github.com/mohamadjawad11/mern-real-estate",
  },
];

// ================== COMPONENT ==================
const Work = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCurrentProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
className="min-h-[80vh] flex flex-col justify-center py-12 px-10 xl:px-1 max-w-[1200px] mx-auto"

    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT CONTENT */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-6xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                {currentProject.num}
              </div>
              <h2 className="text-[30px] xl:text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize">
                {currentProject.category} project
              </h2>
              <p className="text-white/60">{currentProject.description}</p>
              <ul className="flex gap-4">
                {currentProject.stack.map((item, index) => (
                  <li key={index} className="text-sm xl:text-xl text-[#00ff99]">
                    {item.name}
                    {index !== currentProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center gap-4">
                {/* Live Project */}
                <Link href={currentProject.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-[#00ff99] cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub */}
                <Link href={currentProject.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-[#00ff99] cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - SLIDER */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-3xl">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                   <div className="relative w-full h-full ">
                  <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-3xl z-20"
                  priority
                  />
                  </div>

                  </div>
                </SwiperSlide>
              ))}

              {/* CUSTOM NAV BUTTONS */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-[#00ff99] hover:bg-[#1ECD87FF] text-[#232329] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
