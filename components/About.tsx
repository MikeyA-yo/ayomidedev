"use client"
import { motion } from "framer-motion"
import { Montserrat } from "next/font/google"
import Image from "next/image";
import { useState } from "react";


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
            <h2 className={`text-2xl ${mont.className} animate-bounce `}>ABOUT ME</h2>
          </motion.div>
          <hr />
          <div className="flex gap-10 justify-between p-14">
             <div className="pl-7 ">
                <p>I'm a professional web developer from lagos, who loves to build out my ideas 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum."
                </p>
             </div>
             <div className="pr-7 min-w-96">
              <Image src={`/me.jpeg`} unoptimized alt="image of me" width={400} height={345} />
              <span className=""></span>
             </div>
          </div>
        </div>
        </>
    )
}