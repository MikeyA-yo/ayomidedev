"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Single_Day } from "next/font/google";

const single = Single_Day({weight:["400"], style:['normal']});
export default function Lander(){
    return (
        <>
        <div className="min-h-screen bg-slate-800 flex flex-col gap-6 items-center justify-center">
             <motion.div
             initial={{opacity:0, y: "-30"}}
             animate={{opacity:1, y:0}}
             transition={{duration:0.7}}
             >
                  <p className={`text-6xl font-bold text-white  ${single.className}`}>Hi <span className="text-3xl font-bold text-gray-400">,</span>I Am  Ayo </p>
             </motion.div>
             <motion.div
             initial={{opacity:0, y:30}}
             animate={{opacity:1, y:0}}
             >
                 <p className="text-xl font-medium text-gray-500">Web developer from lagos, Nigeria</p>
             </motion.div>
        </div>
        {/* <div className="hidden lg:block md:block">
            <Image unoptimized src='/program.jpg' alt="program image" width={1920} height={1080}/>
        </div>
        <div className=" lg:hidden md:hidden block">
            <Image unoptimized src='/program(mobile).jpg' alt="program image" width={900} height={700}/>
        </div> */}
        </>
    )
}