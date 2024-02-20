"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './progress.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Autoplay ,Navigation, Pagination} from "swiper/modules";
import 'swiper/css'
import 'swiper/css/virtual'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

//w-40 lg:w-72 md:w-64
function Slides({mobile}:{mobile?:boolean}){
  const slides = [
    'bash.svg',
    'bootstrap.svg',
    'c.svg',
    'css.svg',
    'express.svg',
    'HTML.svg',
    'javascript.svg',
    'mongodb.svg',
    'next.svg',
    'nodejs.svg',
    'python.svg',
    'react.svg',
    'tailwind.svg',
    'typescript.svg'
  ]
  return(
    <Swiper modules={[Virtual, Autoplay]}
      spaceBetween={20}
      slidesPerView={mobile ? 3 : 5}
      loop={true}
      virtual
      autoplay={{
        delay:500,
     }}
     >
      {
        slides.map((value, index) => {
          return <SwiperSlide className=" w-full" key={index}><img src={`/${value}`} alt={`image of ${value.substring(0,)} `} className="h-12 w-12" /></SwiperSlide>
        })
      }
  </Swiper>
  )
}
function ProgressBar({progress}:{progress:string | number }){
    return(
        <div className="progress-bar-container w-full">
             <motion.div
               className="progress-bar"
               style={{ width: `${progress}%` }}
               initial={{ width: '0%' }}
               whileInView={{ width: `${progress}%` }}
               transition={{ duration: 1, ease: 'easeInOut' }}
             >
               {progress}%
             </motion.div>
         </div>
    )
}
export default function Skills(){
    const [val, setVal] = useState(0)
    useEffect(() => {
        // Simulate progress increment
        const interval = setInterval(() => {
          setVal((val) => {
            const newProgress = val + 10;
            return newProgress >= 100 ? 100 : newProgress;
          });
        }, 1000);
        return () => clearInterval(interval);
    }, []);    
    return (
        <div id='skills'>
           <div className="pb-16"></div>
           <div className="flex justify-center  flex-col gap-9">
           <h1 className="text-center text-2xl">SKILLS</h1>
           <hr />
            <div className=" p-14">
              <div className="flex container flex-col lg:flex-row md:flex-row gap-5 w-full justify-around">
                <div className="flex flex-col w-full flex-wrap gap-3">
                 <div>
                 <h2 className="pl-5">HTML</h2>
                  <ProgressBar progress={90} />
                 </div>
                 <div>
                 <h2 className="pl-5">JS</h2>
                   <ProgressBar progress={90} />
                 </div>
                </div>
                <div className="flex flex-col w-full gap-3">
                  <div>
                  <h2 className="pl-5">CSS</h2>
                   <ProgressBar progress={70} />
                  </div>
                  <div>
                  <h2 className="pl-5">GIT</h2>
                   <ProgressBar progress={95} /> 
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
    )
}