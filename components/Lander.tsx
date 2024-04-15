import { Single_Day } from "next/font/google";
import { Gupter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { MotionDiv } from "./Motion";

const mont = Montserrat({weight:["600"], subsets:['cyrillic-ext'], style:['normal']})
// const gupter = Gupter({weight:['500'], subsets:['latin'], style:['normal']});
const single = Single_Day({weight:["400"], style:['normal']});
const singday = single.className;
export default function Lander(){
    return (
        // gap-6 items-center justify-center
        <>
        <div className="min-h-screen relative  " id="lander">
        <div className="hidden lg:block md:block">
              <img src="/pc.jpg" alt="pc image" className="min-h-screen" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <div className="flex flex-col gap-6 items-center justify-center w-full">
                   <MotionDiv
                    initial={{opacity:0, y: "-30"}}
                     animate={{opacity:1, y:0}}
                    transition={{duration:0.7}}
                    >
                      <p className={`text-6xl font-bold text-white  ${mont.className} p-3`}>Hi<span className="text-5xl font-bold text-blue-600">,</span> I Am <br /> Ayomide <br /> Oluwatola <span className="text-sky-500 text-5xl font-bold">.</span> </p>
                    </MotionDiv>
                  <MotionDiv
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                     transition={{duration:0.7}}
                    >
                        <p className={`text-5xl font-medium text-blue-700 ${singday} p-3`}>Web developer from lagos, Nigeria</p>
                    </MotionDiv>
                  </div>
              </div>
        </div>
        <div className="block lg:hidden md:hidden">
              <img src="/mobile.jpg" alt="pc image" className="h-screen" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
                  <div className="flex flex-col gap-6 items-center justify-center w-full ">
                   <MotionDiv
                    initial={{opacity:0, y: "-30"}}
                     animate={{opacity:1, y:0}}
                    transition={{duration:0.7}}
                    >
                      <p className={`text-5xl font-bold text-white  ${mont.className} p-3`}>Hi<span className="text-5xl font-bold text-blue-600">,</span> I Am  Ayomide Oluwatola <span className="text-sky-500 text-5xl font-bold">.</span> </p>
                    </MotionDiv>
                  <MotionDiv
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                     transition={{duration:0.7}}
                    >
                        <p className={`text-5xl font-medium text-blue-700 ${singday} p-3`}>Web developer from lagos, Nigeria</p>
                    </MotionDiv>
                  </div>
              </div>
        </div>
        </div>    
        </>
    )
}