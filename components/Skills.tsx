"use client";
import { motion } from "framer-motion";
import "./progress.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: ["500"],
  subsets: ["vietnamese"],
  style: ["normal"],
});
function Slides({ mobile }: { mobile?: boolean }) {
  const slides = [
    "bash.svg",
    "bootstrap.svg",
    "bun.svg",
    "c.svg",
    "css.svg",
    "deno.svg",
    "express.svg",
    "go.svg",
    "HTML.svg",
    "javascript.svg",
    "mongodb.svg",
    "next.svg",
    "nodejs.svg",
    "python.svg",
    "react.svg",
    "sqlite3.svg",
    "tailwind.svg",
    "typescript.svg",
  ];
  return (
    <Swiper
      modules={[Virtual, Autoplay]}
      spaceBetween={20}
      slidesPerView={mobile ? 3 : 5}
      loop={true}
      virtual
      autoplay={{
        delay: 500,
      }}
    >
      {slides.map((value, index) => {
        return (
          <SwiperSlide className=" w-full" key={index}>
            <img
              src={`/${value}`}
              alt={`image of ${value.substring(0)} `}
              className="h-12 w-12"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
function ProgressBar({ progress }: { progress: string | number }) {
  return (
    <div className="progress-bar-container w-full">
      <motion.div
        className="progress-bar"
        style={{ width: `${progress}%` }}
        initial={{ width: "0%" }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {progress}%
      </motion.div>
    </div>
  );
}
export default function Skills() {
  return (
    <div id="skills">
      <div className="py-16"></div>
      <div className="flex justify-center  flex-col gap-9">
        <h1 className="text-center text-2xl">SKILLS</h1>
        <hr />
        <div className="p-14">
          <div className={`flex flex-col items-center lg:flex-row md:flex-row gap-5 w-full justify-around ${oswald.className}`}>
            <div className="flex flex-col w-full flex-wrap gap-5">
              <div className="progress-items">
                <h2 className="pl-5">HTML</h2>
                <ProgressBar progress={90} />
              </div>
              <div className="progress-items">
                <h2 className="pl-5">JS</h2>
                <ProgressBar progress={90} />
              </div>
              <div className="progress-items">
                <h2 className="pl-5">React</h2>
                <ProgressBar progress={85} />
              </div>
              <div className="progress-items">
                <h2 className="pl-5">Nodejs</h2>
                <ProgressBar progress={75} />
              </div>
            </div>
            <div className="flex flex-col w-full gap-5">
              <div className="progress-items">
                <h2 className="pl-5">CSS</h2>
                <ProgressBar progress={70} />
              </div>
              <div className="progress-items">
                <h2 className="pl-5">GIT</h2>
                <ProgressBar progress={95} />
              </div>
              <div className="progress-items">
                <h2 className="pl-5">NextJs</h2>
                <ProgressBar progress={80} />
              </div>
              <div className="progress-items">
                <h2 className="pl-5">Mongodb</h2>
                <ProgressBar progress={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-24 w-full hidden lg:block md:block">
        <Slides />
      </div>
      <div className="p-20 w-full  lg:hidden md:hidden">
        <Slides mobile />
      </div>
    </div>
  );
}
