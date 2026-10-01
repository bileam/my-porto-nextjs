"use client"

import { profile } from "@/data/profile"
import axios from "axios"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

type Profile = typeof profile

export function Hero() {
  const [data, setData] = useState<Profile | null>(null)
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
    axios.get<Profile>("/api/profile").then((response) => {
      setData(response.data)
    })
  }, [])


    return(
        <section id="home" className="w-full mt-3   py-26  max-w-7xl mx-auto px-4 text-gray-700">
           <div className="py-10 flex md:flex-row flex-col justify-center md:justify-start gap-10 md:gap-2 items-center">
            <div className="md:w-[60%] flex flex-col gap-10 order-2 md:order-1">
                <div data-aos="fade-right"   className="">
                <div  className="md:flex  hidden gap-2 items-center w-50 py-2 px-4 bg-blue-500/10 rounded-xl">     <span className="h-3 w-3 inline-block rounded-full bg-green-500"></span>
                    <span>{data?.availability}</span>
                    </div>
                </div>
                <h2 data-aos-delay="50  " data-aos="fade-right"   className="text-[20px]">Hallo, i am {data?.name}</h2>
                <h1 data-aos-delay="100" data-aos="fade-right" className="text-6xl font-black">{data?.role}</h1>
                <p data-aos-delay="150" data-aos="fade-right"     className="text-[20px]">{data?.shortDescription}</p>
            {/* untuk button */}
            <div data-aos-delay="120" data-aos="fade-right"   className="flex gap-3 items-center">
                <Link href="#" className="flex gap-2 px-4 py-2 bg-gray-800 text-white brightness-120 hover:brightness-150 transition-all duration-300 rounded-md"><span>View My projects</span> <MoveRight className="w-4"/></Link>
                <Link href="#" className="px-4 py-2 border border-gray-500 rounded-md  hover:border-gray-800 transition-all duration-500 brightness-125 font-semibold text-black">Contect me</Link>
            </div>
            {/* link github, linkedln , instagram */}
            <div data-aos-delay="250" data-aos="fade-right"   className="flex gap-4 ">
                <Link href="#"><img src="/github.jpg"  alt="logo github" className="w-10 h-10 cursor-pointer shadow-2xl hover:scale-120 transition-all duration-500 " /></Link>
                <Link href="#"><img src="/linkednl.jpg" alt="logo github" className="w-10 h-10 cursor-pointer shadow-2xl hover:scale-120 transition-all duration-500" /></Link>
                <Link href="#"><img src="/instagram.jpg" alt="logo github" className="w-10 h-10 cursor-pointer shadow-2xl hover:scale-120 transition-all duration-500" /></Link>
                <Link href="#"><img src="/whatsapp.jpg" alt="logo github" className="w-10 h-10 cursor-pointer shadow-2xl hover:scale-120 transition-all duration-500 rounded-xl" /></Link>    
            </div>
            </div>
            <div data-aos-delay="150" data-aos="fade-left"   className="flex items-center relative justify-center md:order-2 order-1">
                <img src="/person.jpg" alt="gambar personal"  className="w-100 h-100 rounded-lg border-4 border-gray-200"/>
              <div  className="flex  md:hidden absolute top-5 left-5 gap-2 items-center w-50 py-2 px-4  rounded-xl">     
              <span className="h-3 w-3 inline-block rounded-full bg-green-500"></span>
                    <span className="text-white brightness-200">{data?.availability}</span>
                    </div>
             </div>
           </div>
        </section>
    )
}