"use client";

import { FaReact,FaJs,FaNodeJs,FaJava,FaPython,FaLaravel,FaGithub, } from "react-icons/fa";
import {SiTailwindcss,SiNextdotjs,SiTensorflow,SiCplusplus,SiDotnet,SiKubernetes} from "react-icons/si";

const about={
  title:"Mohammad Jawad Hamdan",
  description:"Full-Stack Software Engineer and a passionate learner with a strong interest in machine learning .",
  info:[
    {
      fieldname:"Name",
      fieldValue:"Mohammad Jawad Hamdan"
    },
    {
      fieldname:"Phone",
      fieldValue:"(+961) 78 958 764"
    },
    {
      fieldname:"Experience",
      fieldValue:"4+ Years"
    },
    {
      fieldname:"Nationality",
      fieldValue:"Lebanese"
    },
    {
      fieldname:"Email",
      fieldValue:"hamdanjawad789@gmail.com"
    },
    {
      fieldname:"Freelance",
      fieldValue:"Available"
    },
      {
      fieldname:"Github",
      fieldValue:"https://github.com/mohamadjawad11"
    }
  ]
}


const experience={
  icon:"/assets/resume/bada.png",
  title:"My Experience",
  description:"A Full Stack Developer experienced in web application development. I have a background in professional and freelance work, with a focus on creating efficient digital solutions.",

  items:[
    {
      company:"Keeways",
      position:"Full Stack Developer",
      duration:"2025-Present",
    },

    {
      company:"Vanrise",
      position:"Full Stack Developer",
      duration:"Internship 2 months",
    },

    {
      company:"IDS",
      position:"Full Stack Developer",
      duration:"Internship 2 months",
    },

    {
      company:"SE2",
      position:"backend Developer",
      duration:"Internship 1 month",
    },

    {
      company:"E-Commerce startup",
      position:"web developer freelancer",
      duration:"2021-2022",
    },
     {
      company:"SE2",
      position:"backend Developer",
      duration:"Internship 1 month",
    }
  ]
}

const education={
  icon:"/assets/resume/cap.png",
  title:"My Education",
  description:" computer science student with a strong foundation in web development, machine learning, and DevOps, complemented by extensive online certifications.",

  items:[
     {
      institution:"Antonine University",
      degree:"BS Computer Science",
      duration:"2022-present",
    },
    {
      institution:"Udemy Online Course",
      degree:"Full Stack Web bootcamp",
      duration:"2022",
    },

     {
      institution:"Google For Developers",
      degree:"Machine Learning Course",
      duration:"2023",
    },

    {
      institution:"Udemy Online Course",
      degree:"Data Structures and Algorithms Course",
      duration:"2022",
    },

    {
      institution:"Online Course",
      degree:"Ci/Cd pipeline Course",
      duration:"2023",
    },

     {
      institution:"Online Course",
      degree:"Dockerization & kubernetes Course",
      duration:"2023",
    },
  ]
}

const skills={
  title:"Skills",
  description:"",
 skillList :[
  {
    icon: <FaReact />,
    name: "React"
  },
  {
    icon: <FaJs />,
    name: "Javascript"
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js"
  },
  {
    icon: <FaJava />,
    name: "Java"
  },
  {
    icon: <FaPython />,
    name: "Python"
  },
  {
    icon: <FaLaravel />,
    name: "Laravel"
  },
  {
    icon: <FaGithub />,
    name: "Git"
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js"
  },
  {
  icon: <SiTailwindcss />,
  name: "Tailwindcss"
  },
  {
  icon: <SiTensorflow />,
  name: "Tensorflow"
  },
  {
  icon: <SiCplusplus />,
  name: "C++"
  },
  {
  icon: <SiDotnet />,
  name: ".NET"
  },
]

}

import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{
          delay:2.4,
          duration:0.4,
          ease:"easeIn"
        }}} className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0">
  <div className="container mx-auto max-w-[1150px] ml-10 mr-10 xl:ml-0 xl:mr-0">
    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
     <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 cursor-pointer ">
  <TabsTrigger 
    value="experience" 
    className="w-full py-4 rounded-md bg-[#212128FF] text-white data-[state=active]:bg-[#00ff9d] data-[state=active]:text-black transition-colors cursor-pointer hover:opacity-90 hover:scale-105 transition-transform duration-200"
  >
    Experience
  </TabsTrigger>

  <TabsTrigger 
    value="education" 
    className="w-full py-4 rounded-md bg-[#212128FF] text-white data-[state=active]:bg-[#00ff9d] data-[state=active]:text-black transition-colors cursor-pointer hover:opacity-90 hover:scale-105 transition-transform duration-200"
  >
    Education
  </TabsTrigger>

  <TabsTrigger 
    value="skills" 
    className="w-full py-4 rounded-md bg-[#212128FF] text-white data-[state=active]:bg-[#00ff9d] data-[state=active]:text-black transition-colors cursor-pointer hover:opacity-90 hover:scale-105 transition-transform duration-200"
  >
    Skills
  </TabsTrigger>

  <TabsTrigger 
    value="about" 
    className="w-full py-4 rounded-md bg-[#212128FF] text-white data-[state=active]:bg-[#00ff9d] data-[state=active]:text-black transition-colors cursor-pointer hover:opacity-90 hover:scale-105 transition-transform duration-200"
  >
    About me
  </TabsTrigger>
</TabsList>


      <div className="min-h-[70vh] w-full">
        <TabsContent value="experience" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-3xl font-bold">{experience.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index)=>{
                  return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-[#00ff99]">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>
                })}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>

         <TabsContent value="education" className="w-full">
           <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-3xl font-bold">{education.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item, index)=>{
                  return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-[#00ff99]">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                      <p className="text-white/60">{item.institution}</p>
                    </div>
                  </li>
                })}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>

         <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex col gap-[30px]">
              <h3 className="text-4xl font-bold text-center xl:text-left ml-[100px] xl:ml-0 mt-8 xl:mt-0">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-[15px]">
              {skills.skillList.map((skill, index)=>{
                return <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group cursor-pointer">
                        <div className="text-6xl group-hover:text-[#00ff99] transition-all duration-300 gap-5">{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent><p>{skill.name}</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              })}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="about" className="w-full text-center xl:text-left">
  <div className="flex flex-col gap-[30px]">
    <h3 className="text-4xl font-bold">{about.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-[120px] max-w-[620px] mx-auto xl:mx-0">
      {about.info.map((item, index) => {
        const isLast = index === about.info.length - 1; // check if last item (GitHub)
        return (
          <li
            key={index}
            className="flex items-center justify-between xl:justify-start gap-2"
          >
            <span className="text-[#00ff99]">{item.fieldname}</span>
            {isLast ? (
              // Show "GitHub" text only on mobile; full URL on xl
              <a
                href={item.fieldValue}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-[#A5D1C0FF] underline transition-colors"
              >
                <span className="inline xl:hidden">GitHub</span>
                <span className="hidden xl:inline">{item.fieldValue}</span>
              </a>
            ) : (
              <span className="text-white/90">{item.fieldValue}</span>
            )}
          </li>
        );
      })}
    </ul>
  </div>
</TabsContent>

      </div>
    </Tabs>
  </div>
  </motion.div>
}

export default Resume