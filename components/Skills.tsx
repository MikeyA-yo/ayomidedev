"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './progress.css';

//w-40 lg:w-72 md:w-64
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
                  <h2>HTML</h2>
                  <ProgressBar progress={90} />
                </div>
                <div className="flex flex-col w-full gap-3">
                   <h2>CSS</h2>
                   <ProgressBar progress={50} />
                </div>
                <div className="flex flex-col w-full gap-3">
                   <h2>JS</h2>
                   <ProgressBar progress={70} />
                </div>
              {/* <h2>HTML</h2>
              <ProgressBar progress={90} />
              <ProgressBar progress={50} />
              <ProgressBar progress={70} /> */}
              </div>
            </div>
           </div>
        </div>
    )
}