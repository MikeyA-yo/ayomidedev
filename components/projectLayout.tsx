"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { projectObjSort } from "@/components/JS/links";
export default function ProjectLayOut() {
  return (
    <>
      <div id="projects">
        <div className="py-16"></div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl">PROJECTS</h2>
          <div>
            <Swiper></Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
