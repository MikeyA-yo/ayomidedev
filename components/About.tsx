"use client"
import { motion } from "framer-motion"
import { Montserrat } from "next/font/google"
import Image from "next/image";
import {  RegularGithub, RegularTwitter, RegularWhatsapp, RegularEnvelope } from "lineicons-react";
import { useState } from "react";

const handles = [
{
  name:'github',
  link:'https://github.com/MikeyA-yo'
},
{
  name:'mail',
  link:'mailto:ayomideoluwatola1@gmail.com'
},
{
  name:'twitter/x',
  link:'https://x.com/OluwatolaAyomi4?t=GQoEQpDSRlm7pyPLPxQHhA&s=09'
},
{
  name:'whatsapp',
  link:'https://wa.me/+2348089132385'
}
]
interface Item{
  name:string,
  link:string
}
const mont = Montserrat({weight:['600'], subsets:['latin'], style:['normal']});
function Handle(){
  return(
    <>
      <div className="flex gap-5 justify-around w-full">
      <a href={handles[0].link} ><RegularGithub className="h-6 w-6 hover:h-8 hover:w-8 duration-200" /></a>
      <a href={handles[1].link} ><RegularEnvelope className="h-6 w-6 hover:h-8 hover:w-8 duration-200" /></a>
      <a href={handles[2].link} ><RegularTwitter className="h-6 w-6 hover:h-8 hover:w-8 duration-200 " /></a>
      <a href={handles[3].link} ><RegularWhatsapp className="h-6 w-6 hover:h-8 hover:w-8 duration-200" /></a>
      </div>
    </>
  )
}
function Mobile(){
  return (
    <>
    <div className="lg:hidden md:hidden gap-10 flex flex-col justify-between p-14">
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
             <div className="pr-7 flex items-center flex-col">
              <Image src={`/me.jpeg`} unoptimized alt="image of me" width={400} height={345} className="w-full" />
              <div className="relative bottom-6 z-10 flex bg-slate-600 h-10 items-center justify-center w-full">  
                <Handle />
             </div>
             </div>
          </div>
    </>
  )
}
export default function About(){
  const [hover, setHover] = useState<boolean>(false);
  function src(state:boolean){
    let src;
    if(state){
      src = '/me2.jpg'
    }else{
      src = '/me.jpeg'
    }
    return src;
  }
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
          <div className="lg:flex md:flex gap-10 hidden justify-between p-14">
             <div className="pl-7 ">
                <p>I'm a professional web developer from lagos, who loves to build out my ideas 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum."
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ver
                  itatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo
                  luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magn
                  i dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dol
                  orem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius m
                  odi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad mi
                  nima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliq
                  uid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
                  velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo volupta
                  s nulla pariatur?"
                </p>
             </div>
             <div className="pr-7 min-w-96">
              <div className="w-90 h-90 overflow-hidden">
              <Image src={src(hover)} unoptimized alt="image of me" width={400} height={345} 
              className="transition-transform transform hover:scale-110 w-full h-full duration-200"
              onMouseOver={()=>{
                setHover(true);
              }}
              onMouseLeave={()=>{
                setHover(false);
              }}
              />
              </div>
              <div className="relative bottom-6 z-10 h-10 items-center justify-center flex bg-slate-600 ">  
                <Handle />
             </div>
             {/* <LineIcon name="folder" /> */}
             </div>
          </div>
           <Mobile />
        </div>
        </>
    )
}