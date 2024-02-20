"use client";
import { RegularGithub, RegularTwitter, RegularTwitterFill, RegularTwitterOriginal } from "lineicons-react";
import { motion } from "framer-motion";

export default function Profile(){
    const variants={
        hover:{
            scale:[1,0.7,1]
        }
    }
    return (
        <>
          <div  id="profile">
              <div className="pb-24"></div>
              <h1 className="text-center text-3xl pb-14">PROFILES</h1>
              <hr className="pb-14"/>
              <div className="flex gap-5 justify-center">
                <motion.div
                variants={variants}
                whileHover={`hover`}
                >
                     <a href="https://github.com/MikeyA-yo" className="hover:bg-blue-500"><RegularGithub className="h-24 w-24 hover:fill-white hover:bg-blue-500" /></a>
                </motion.div>
                <div className=" border-r-2"></div>
                <motion.div
                variants={variants}
                whileHover={`hover`}
                >
                     <a href="https://x.com/OluwatolaAyomi4?t=GQoEQpDSRlm7pyPLPxQHhA&s=09" className="hover:bg-blue-500"><RegularTwitter className="h-24 w-24 fill-blue-500 hover:bg-blue-500 hover:fill-white" /></a>
                </motion.div>
              </div>
          </div>
        </>
    )
}