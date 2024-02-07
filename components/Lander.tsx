"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Single_Day } from "next/font/google";
import { Gupter } from "next/font/google";
import { Montserrat } from "next/font/google";

const mont = Montserrat({weight:["600"], subsets:['cyrillic-ext'], style:['normal']})
const gupter = Gupter({weight:['500'], subsets:['latin'], style:['normal']});
const single = Single_Day({weight:["400"], style:['normal']});
export default function Lander(){
    return (
        // gap-6 items-center justify-center
        <>
        <div className="min-h-screen relative  " id="lander">
        <div className="hidden lg:block md:block">
              <img src="/pc.jpg" alt="pc image" className="min-h-screen" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <div className="flex flex-col gap-6 items-center justify-center w-full">
                   <motion.div
                    initial={{opacity:0, y: "-30"}}
                     animate={{opacity:1, y:0}}
                    transition={{duration:0.7}}
                    >
                      <p className={`text-6xl font-bold text-white  ${mont.className} p-3`}>Hi<span className="text-5xl font-bold text-blue-600">,</span> I Am <br /> Ayomide <br /> Oluwatola <span className="text-sky-500 text-5xl font-bold">.</span> </p>
                    </motion.div>
                  <motion.div
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                     transition={{duration:0.7}}
                    >
                        <p className={`text-3xl font-medium text-gray-500 ${single.className} p-3`}>Web developer from lagos, Nigeria</p>
                    </motion.div>
                  </div>
              </div>
        </div>
        <div className="block lg:hidden md:hidden">
              <img src="/mobile.jpg" alt="pc image" className="h-screen" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
                  <div className="flex flex-col gap-6 items-center justify-center w-full ">
                   <motion.div
                    initial={{opacity:0, y: "-30"}}
                     animate={{opacity:1, y:0}}
                    transition={{duration:0.7}}
                    >
                      <p className={`text-5xl font-bold text-white  ${mont.className} p-3`}>Hi<span className="text-5xl font-bold text-blue-600">,</span> I Am  Ayomide Oluwatola <span className="text-sky-500 text-5xl font-bold">.</span> </p>
                    </motion.div>
                  <motion.div
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                     transition={{duration:0.7}}
                    >
                        <p className={`text-3xl font-medium text-gray-500 ${single.className} p-3`}>Web developer from lagos, Nigeria</p>
                    </motion.div>
                  </div>
              </div>
        </div>
             {/* <motion.div
             initial={{opacity:0, y: "-30"}}
             animate={{opacity:1, y:0}}
             transition={{duration:0.7}}
             >
                  <p className={`text-6xl font-bold text-white  ${mont.className} p-3`}>Hi<span className="text-5xl font-bold text-blue-600">,</span> I Am  Ayo </p>
             </motion.div>
             <motion.div
             initial={{opacity:0, y:30}}
             animate={{opacity:1, y:0}}
             transition={{duration:0.7}}
             >
                 <p className={`text-3xl font-medium text-gray-500 ${single.className} p-3`}>Web developer from lagos, Nigeria</p>
             </motion.div> */}
        </div>    
        {/* <div className="hidden lg:block md:block">
              <img src="/pc.jpg" alt="pc image" />
        </div>
        <div className=" lg:hidden md:hidden block">
           <img src="/mobile.jpg" alt="pc image" className="h-screen"/>
        </div> */}
        </>
    )
}