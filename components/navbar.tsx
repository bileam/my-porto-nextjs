"use client"
import { Book, MenuIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navbar(){
    const [active,setActive] = useState("Home")
    const [menuActive,setMenuActive] = useState(false)
    const menu = [
       {name: 'Home', href:"#home"},
       {name: 'About', href:"#about"},
       {name: 'Skills', href:"#skills"},
       {name: 'projects', href:"#projects"},
       {name: 'home', href:"#home"},
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
    ]
        return(
        <div className="shadow bg-white fixed top-0 right-0 left-0 z-50">
            <div className="relative justify-between items-center flex  py-6 px-2 max-w-7xl  mx-auto w-full">  
            <div>
                <Link href="#home" className="flex gap-2 items-center">
                <h1 className="bg-black text-white p-2 rounded-full">B<span>M</span></h1>
                <span className="font-semibold">Bileam</span>
                </Link>
            </div>
            {/* menu */}
            <div className="md:flex hidden items-center gap-10 ">
                {
                    menu.map((item,index)=>(
                      <Link  key={index} href={item.href} onClick={()=>setActive(item.name)}  
                      className={`transition-colors duration-500    flex flex-col  gap-1 ${active === item.name?"text-blck":"hover:text-black text-gray-500"} `}>
                        <span className="inline-block">       {item.name}</span>
                 
                        <span className={` ${active === item.name?"border border-black":""} inline-block`}></span>
                        </Link>
                    ))
                }
            </div>
            {/* resume */}
            <div className="md:block hidden">
                   <Link href="#"  className="flex shadow-lg gap-2 border group border-gray-500 rounded-md px-4 py-2 hover:border-blue-500 transition-colors duration-500">
                   <Book className="w-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-500"/>
                   <span className="font-mono text-gray-500 group-hover:text-blue-600 transition-colors duration-500">Resume</span>
                   </Link>
            </div> 

            {/* burger */}
            <button  className="md:hidden cursor-pointer" onClick={()=>setMenuActive((prev)=>!prev)}>
                <MenuIcon/>
            </button>
            {/* tampilan mobile */}
              <div className={` md:hidden absolute w-full ${menuActive?"h-100":"h-0 "} transition-all duration-500 overflow-hidden px-4  bg-white top-22 left-0 right-0 `}>
                     <div className="flex flex-col items-center gap-10 ">
                {
                    menu.map((item,index)=>(
                      <Link  key={index} href={item.href} onClick={()=>setActive(item.name)}  
                      className={`transition-colors duration-500 flex flex-col gap-1  ${active === item.name?"text-black":"hover:text-black text-gray-500"}`}>
                        <span className="inline-block">{item.name}</span>
                        <span className={` ${active === item.name?"border border-black":""} inline-block`}></span>
                        </Link>
                    ))
                }
            </div>
            {/* resume */}
            <div className="md:block hidden">
                   <Link href="#"  className="flex shadow-lg gap-2 border group border-gray-500 rounded-md px-4 py-2 hover:border-blue-500 transition-colors duration-500">
                   <Book className="w-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-500"/>
                   <span className="font-mono text-gray-500 group-hover:text-blue-600 transition-colors duration-500">Resume</span>
                   </Link>
            </div>
</div>
            </div>
        </div>
    )
}
