"use client"
import { motion } from "framer-motion"
import { Montserrat, Josefin_Sans } from "next/font/google"
import Image from "next/image";
import {  RegularGithub, RegularTwitter, RegularWhatsapp, RegularEnvelope } from "lineicons-react";
import { useState } from "react";
import X from "./X";

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
const jose = Josefin_Sans({weight:['600'], style:['normal'], subsets:['latin']});
function Handle(){
  return(
    <>
      <div className="flex gap-5 justify-around w-full">
      <a href={handles[0].link} target="_blank"><RegularGithub className="h-6 w-6 hover:h-8 hover:w-8 duration-200" /></a>
      <a href={handles[1].link} target="_blank"><RegularEnvelope className="h-6 w-6 hover:h-8 hover:w-8 duration-200" /></a>
      <a href={handles[2].link} target="_blank"><X className="h-6 w-6 hover:h-8 hover:w-8 duration-200 " /></a>
      <a href={handles[3].link} target="_blank" ><RegularWhatsapp className="h-6 w-6 hover:h-8 hover:w-8 duration-200" /></a>
      </div>
    </>
  )
}
function Mobile(){
  return (
    <>
    <div className="lg:hidden md:hidden gap-10 flex flex-col justify-between p-14">
             <div className="pl-7 ">
                <p>I'm a passionate  <span className="text-slate-800 font-bold animate-pulse">web developer</span> from lagos, who loves to build out my ideas 
                 I like to build out ideas, and learn more in the process.
                <br />
                 <br />
                 <br />
                 I'm Ayo, a seasoned full-stack developer with a strong focus on creating dynamic and efficient web applications.
                  My expertise lies in harnessing the power of Next.js and the MERN stack—MongoDB, Express.js, React.js, and Node.js—to craft 
                  seamless and feature-rich solutions.
                  In my coding journey, I'm making sure to keep evolving so as to keep being a pro at juggling both front-end and back-end magic.
                   Next.js helps me conjure up smooth and fast interfaces, 
                   while the <span className="text-slate-800 font-bold">MERN</span>  stack gives me the tools to build powerful server-side applications.
                   I'm not just about writing code; I'm all about crafting solutions that last. 
                   I'm obsessed with clean, maintainable code that not only works but stands strong over time. 
                   I believe in doing things right, the first time.
                   Beyond the techy stuff, I know it's crucial to connect the dots between tech solutions and the bigger picture of a project. 
                   I've danced through various industries, learning the ropes and tailoring my skills to meet different needs.
                   Excited to bring my bag of tricks to your projects and make some coding magic happen!
                </p>
                <div>
                  <p className={`text-2xl pt-7 ${jose.className}`}>HOBBIES</p>
                  <ul className="pl-5">
                    <li>Playing Table tennis</li>
                    <li>Learning new things</li>
                    <li>Programming</li>
                  </ul>
                </div>
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
                <p>I'm a professional <span className="text-slate-800 font-bold animate-pulse">web developer</span> from lagos, who loves to create amazing fullstack web pages
                  I like to build out ideas, and learn more in the process.
                 <br />
                 <br />
                 <br />
                  I'm Ayo, a seasoned full-stack developer with a strong focus on creating dynamic and efficient web applications.
                  My expertise lies in harnessing the power of Next.js and the MERN stack—MongoDB, Express.js, React.js, and Node.js—to craft 
                  seamless and feature-rich solutions.
                  In my coding journey, I'm making sure to keep evolving so as to keep being a pro at juggling both front-end and back-end magic.
                   Next.js helps me conjure up smooth and fast interfaces, 
                   while the <span className="text-slate-800 font-bold">MERN</span>  stack gives me the tools to build powerful server-side applications.
                   I'm not just about writing code; I'm all about crafting solutions that last. 
                   I'm obsessed with clean, maintainable code that not only works but stands strong over time. 
                   I believe in doing things right, the first time.
                   Beyond the techy stuff, I know it's crucial to connect the dots between tech solutions and the bigger picture of a project. I've danced through various industries, learning the ropes and tailoring my skills to meet different needs.
                   <br />
                   Excited to bring my bag of tricks to your projects and make some coding magic happen!
                </p>
                <div>
                  <p className={`text-2xl pt-7 ${jose.className}`}>HOBBIES</p>
                   <ul className="pl-5">
                    <li>Playing Table tennis</li>
                    <li>Learning new things</li>
                    <li>Programming</li>
                   </ul>
                </div>
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
            </div>
          </div>
           <Mobile />
        </div>
        </>
    )
}