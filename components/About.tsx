"use client"
import { motion } from "framer-motion"
import { Montserrat } from "next/font/google"
import Image from "next/image";


const mont = Montserrat({weight:['600'], subsets:['latin'], style:['normal']});
export default function About(){
    return (
        <>
        <div id="about">
          <div className="pb-16"></div>
          <motion.div 
          initial={{x:"-100%", opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{delay:0.4, duration:0.7}}
          className="flex justify-center p-14"
          >
            <h2 className={`text-2xl ${mont.className}`}>ABOUT ME</h2>
          </motion.div>
          <hr />
          <div className="flex gap-10 justify-between">
             <div className="">
                
             </div>
             
          </div>
        </div>
        </>
    )
}