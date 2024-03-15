"use client";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { useEffect, useState } from "react";
import   { Link as Reactlink } from 'react-scroll';
import { AnimatePresence, motion } from "framer-motion";
import './nav.css';
// const scroll = require('react-scroll');

const ubuntu = Ubuntu({weight:['500'], subsets:['greek']});
const ub = ubuntu.className;
const values=[
    {
        name:"ABOUT",
        link:"about"
    },
    {
        name:"SKILLS",
        link:"skills"
    },
    {
        name:"PROFILE",
        link:"profile"
    },
    {
        name:"PROJECTS",
        link:"projects"
    },
    {
        name:"CONTACT",
        link:"contact"
    },
]

function NavElements({name, link}:{name:string, link:any}){

   
      return (
        <div className="p-2 bg-white">
            <Reactlink
               className={`${ub} text-gray-400 hover:text-sky-700 cursor-pointer `} 
               to={link}
               smooth = {true}
               duration={800}
               delay={200}
               activeClass="active-link"
               spy={true}
             >
                {name}
            </Reactlink>
        </div>
      )
}
function MenuDisplay({value}:{value:boolean}){
    let component;
    if(value){
       component =  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
      </svg>)
    }else{
        component = ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
     </svg> )
    }
    return component;
}
const variants = {
    opening:{y:"-100%", opacity: 0},
    opened:{y:0, opacity:1},
    closing:{x:"-100%", opacity:0}
}
function OpenedBar({open}:{open:boolean}){
    return (
        <>
          <AnimatePresence>
            {!open && ( <motion.div className="flex justify-end w-full flex-col"
              initial="opening"
              animate="opened"
              exit="closing"
              transition={{duration:0.9}}
              variants={variants}
             >
               {values.map((item, index) =>{
                   return <NavElements key={index} name={item.name} link={item.link} />
                })}

           </motion.div>)}
          </AnimatePresence>
        </>
    )
}

export default  function Navbar(){
  // const router = useRouter();
  const [openBar, setOpenBar] = useState(true)
    return (
        <>
          <div className={`w-full h-24 p-4 fixed md:flex lg:flex items-center z-50  hidden justify-between gap-40 bg-white`}>
             <div className="flex-grow">
                <Link href={'/'}><p className={`text-xl text-violet-700 ${ub}`}>AYOMIDE</p></Link>
             </div>
            <div className="w-full flex gap-2 justify-between">
            {values.map((item, index) =>{
                return <NavElements key={index} name={item.name} link={item.link} />
             })}
            </div>
          </div>
          <div className="flex flex-col md:hidden lg:hidden gap-3 h-20 p-4 bg-white fixed z-50 w-full items-center">
             <div className="flex gap-5 items-center justify-between w-full">
               <div className="flex-grow">
                <Link href={'/'}><p className={`text-xl text-violet-700 ${ub}`}>AYOMIDE</p></Link>
               </div>
               <div className="" 
                onClick={()=> {setOpenBar(!openBar)}}
                >
               <MenuDisplay value={openBar} />
              </div>
             </div>
            <OpenedBar open={openBar} />
          </div>
        </>
    )
}
//     const path = useRouter() ;
//     const hash = path.asPath.split('#')[1] || '';
//    // window.location.href
//     //const params =useParams(); active == link ? 'text-violet-700': 'text-gray-400'
//     let col;
//     console.log(window.location.href);
    
//         if (path==link){
//             col = 'text-violet-700';
//          }else{
//              col= 'text-gray-400';
//          }