"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { projectObjSort } from "@/components/JS/links";
function ProjectCard({}:{image:string, name:string, desc:string}){
    return (
        <>
          
        </>
    )
}
export default function ProjectLayOut({mobile}:{mobile?:boolean}) {
  return (
    <>
      <div id="projects">
        <div className="py-16"></div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl">PROJECTS</h2>
          <div>
            <Swiper
             modules={[Navigation, Pagination, Autoplay]}
             slidesPerView={mobile ? 2 : 3}
             navigation
             pagination
             autoplay={{
                delay:4500
             }}
            >
                {projectObjSort.map((project:{name:string, image:string, desc:string, stack:string}, i:number)=>{
                   return (
                    <SwiperSlide>

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
