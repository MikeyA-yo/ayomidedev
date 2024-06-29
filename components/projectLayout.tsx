"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { projectObjSort } from "@/components/JS/links";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Roboto_Condensed } from "next/font/google";
const mont = Montserrat({weight:['700'], subsets:['vietnamese']});
const robCon = Roboto_Condensed({weight:['500'], subsets:['vietnamese']});
function ProjectCard({image, name,desc, stack}:{image:string, name:string, desc:string, stack:string}){
    return (
        <>
          <div className="flex flex-col items-center gap-3 h-full">
             <div className="">
               <Image src={'/'+image} width={150} height={150} alt="Image of My project" className="h-44 w-44" />
             </div>
             <span className="h-[0.1rem] w-4/5 bg-gray-300"></span>
             <div className="flex flex-col py-4 items-center max-w-96 justify-evenly gap-3">
               <h2 className={`text-2xl ${mont.className}`}>{name}</h2>
               <h3 className={`text-xl text-gray-700 ${robCon.className}`}>{stack}</h3>
               <p className="text-gray-500 leading-relaxed ">{desc}</p>
             </div>
          </div>
        </>
    )
}
export default function ProjectLayOut({mobile}:{mobile?:boolean}) {
  return (
    <>
      <div>
        <div className="py-16"></div>
        <div className="flex flex-col h-auto px-4 items-center justify-center">
          <h2 className="text-3xl py-10">PROJECTS</h2>
          <div className="flex justify-center h-[75svh] w-full">
            <Swiper
             modules={[Navigation, Pagination, Autoplay]}
             slidesPerView={mobile ? 1 : 2}
             spaceBetween={20}
             navigation
             pagination
             autoplay={{
                delay:7500
             }}
             className="h-full w-full"
            >
                {projectObjSort.map((project:{name:string, image:string, desc:string, stack:string, link:string}, i:number)=>{
                   return (
                    <SwiperSlide key={i}>
                       <Link href={project.link} target="_blank"><ProjectCard name={project.name.toUpperCase()} image={project.image} desc={project.desc} stack={project.stack} /></Link>
                    </SwiperSlide>
                   )
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
