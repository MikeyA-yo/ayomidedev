import { RegularGithub} from "lineicons-react";

import { MotionDiv } from "./Motion";
import X from "./X";

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
                <MotionDiv
                variants={variants}
                whileHover={`hover`}
                >
                     <a href="https://github.com/MikeyA-yo" className="hover:bg-blue-500"><RegularGithub className="h-24 w-24 hover:fill-white hover:bg-black" /></a>
                </MotionDiv>
                <div className=" border-r-2"></div>
                <MotionDiv
                variants={variants}
                whileHover={`hover`}
                >
                     <a href="https://x.com/OluwatolaAyomi4?t=GQoEQpDSRlm7pyPLPxQHhA&s=09" className="hover:bg-blue-500"><X  className="h-24 w-24 fill-grey-500 hover:bg-black hover:fill-white" /></a>
                </MotionDiv>
              </div>
          </div>
        </>
    )
}