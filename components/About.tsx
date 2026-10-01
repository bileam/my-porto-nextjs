"use client"
import { ArrowRightLeft, Folder, WorkflowIcon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export function About(){
useEffect(() => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });
}, []); 
    return(
        <div id="about" className="w-full flex flex-col border-y overflow-hidden border-gray-300 mt-3 gap-6  text-[20px]  text-gray-500  py-20  max-w-7xl mx-auto px-4 ">
           <div data-aos="fade-right"  className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold text-gray-700">About Me</h2>
            <p className="text-gray-500">Background and overview</p>
           </div>
           <div data-aos-delay="200" data-aos="fade-right"   className="flex md:flex-row flex-col  gap-4 ">
            <div className="flex flex-col gap-4 md:w-[60%]">
                <p className="text-justify md:text-start">I am <strong>Bileam Mangalla</strong>, a Frontend Web Developer dedicated to crafting clean, structured, and practical user interfaces for modern web applications.</p>
                <p className="text-justify md:text-start">My primary core stack revolves around React, Next.js, JavaScript, and Tailwind CSS. I place a strong emphasis on writing clean code, component-driven design systems, and responsive user experiences without unnecessary complexity.</p>
            </div>
            <div className=" flex-1 flex flex-col gap-4 md:-mt-10 mt-3">
               <div  data-aos="fade-left" className="text-gray-600 shadow-md border-t-4 border-sky-500 p-4 items-center bg-blue-200/5 group rounded-2xl flex justify-between">
              <div className="flex flex-col -space-y-2"> 
                 <p className="font-mono group-hover:scale-125 transition-all duration-400">PROJECTS</p>
               <h3 className="text-[25px] font-semibold text-gray-700 delay-100 group-hover:scale-125 transition-all duration-400 ">3+ Completed</h3>
               </div>
               <Folder className="delay-150 group-hover:scale-125 transition-all duration-400"/>
               </div>
               <div data-aos-delay="200"  data-aos="fade-left"  className="text-gray-600 shadow-md border-t-4 border-yellow-500 p-4 items-center bg-blue-200/5 group rounded-2xl flex justify-between">
              <div className="flex flex-col -space-y-2"> 
                 <p className="font-mono group-hover:scale-125 transition-all duration-400">EXPERIENCE</p>
               <h3 className="text-[25px] font-semibold text-gray-700 delay-100 group-hover:scale-125 transition-all duration-400 ">1+ Years</h3>
               </div>
               <WorkflowIcon className="delay-150 group-hover:scale-125 transition-all duration-400"/>
               </div>
               <div  data-aos-delay="400"  data-aos="fade-left"  className="text-gray-600 shadow-md border-t-4 border-green-500    p-4 items-center bg-blue-200/5 group rounded-2xl flex justify-between">
              <div className="flex flex-col -space-y-2"> 
                 <p className="font-mono group-hover:scale-125 transition-all duration-400">ROLE</p>
               <h3 className="text-[25px] font-semibold text-gray-700 delay-100 group-hover:scale-125 transition-all duration-400 ">Frontend Developer</h3>
               </div>
              <ArrowRightLeft className="delay-150 group-hover:scale-125 transition-all duration-400"/>
               </div>
            </div>
           </div>
        </div>
    )
}