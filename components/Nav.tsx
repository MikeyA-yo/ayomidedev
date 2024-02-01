"use client";
import { useParams,  useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { NextURL } from "next/dist/server/web/next-url";
import { useEffect, useState } from "react";
import   { Link as Reactlink } from 'react-scroll';
import './nav.css';
// const scroll = require('react-scroll');

const ubuntu = Ubuntu({weight:['500'], subsets:['greek']});
const values=[
    {
        name:"EDUCATION",
        link:"education"
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
        name:"PORTFOLIO",
        link:"portfolio"
    },
    {
        name:"CLIENTS",
        link:"clients"
    },
    {
        name:"CONTACT",
        link:"contact"
    },
]

function NavElements({name, link}:{name:string, link:any}){

   
      return (
        <div className="p-2">
            <Reactlink 
            to={link}
            smooth = {true}
            duration={800}
            delay={200}
            activeClass="active-link"
            spy={true}
             >
                <p className={`${ubuntu.className} text-gray-400 cursor-pointer `}>{name}</p>
            </Reactlink>
        </div>
      )
}

export default  function Navbar(){
  // const router = useRouter();
    return (
        <>
          <div className={`w-full h-24 p-4 fixed md:flex lg:flex items-center pl-8 hidden justify-between gap-40 bg-white`}>
             <div>
                <Link href={'/'}><p className={`text-xl text-violet-700 ${ubuntu.className}`}>AYOMIDE</p></Link>
             </div>
            <div className="w-full flex gap-2 justify-between">
            {values.map((item, index) =>{
                return <NavElements key={index} name={item.name} link={item.link} />
             })}
            </div>
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