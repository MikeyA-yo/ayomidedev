"use client"
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
export default function Modal(){
    const { scrollY } = useScroll()
    const [scrollPosition, setScrollPosition] = useState(0);

useMotionValueEvent(scrollY, "change", (latest) => {
  setScrollPosition(latest);
})

    return (
       <>
        <Link
            to="lander"
            smooth = {true}
            duration={800}
            delay={200}
            className={`fixed bottom-4 right-4  bg-blue-500 hover:bg-transparent hover:text-blue-500 hover:border-blue-500 hover:border-2 text-white font-bold py-2 px-4 rounded-full ${scrollPosition > 400 ?'opacity-100' : 'opacity-0'} shadow-lg`}
        >
          <div className="animate-bounce">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                 </svg>
          </div>
        </Link>
       </>
      );
}