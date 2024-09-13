"use client";
import { motion } from "framer-motion";
import { Montserrat, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import {
  RegularGithub,
  RegularWhatsapp,
  RegularEnvelope,
} from "lineicons-react";
import { useState } from "react";
import X from "./X";
("I'm Ayo, a professional full-stack web developer from Lagos. I specialize in creating dynamic and efficient web applications using Next.js and the MERN stack (MongoDB, Express.js, React.js, Node.js). My focus is on building seamless, feature-rich solutions with clean, maintainable code that lasts. I continually evolve my skills to stay proficient in both front-end and back-end development. With experience across various industries, I align tech solutions with the broader project vision, bringing expertise and passion to every project. Excited to make coding magic happen for your projects!");

const handles = [
  {
    name: "github",
    link: "https://github.com/MikeyA-yo",
  },
  {
    name: "mail",
    link: "mailto:ayomideoluwatola1@gmail.com",
  },
  {
    name: "twitter/x",
    link: "https://x.com/OluwatolaAyomi4?t=GQoEQpDSRlm7pyPLPxQHhA&s=09",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/+2348089132385",
  },
];
const mont = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
  style: ["normal"],
});
const jose = Josefin_Sans({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});
function Handle() {
  return (
    <>
      <div className="flex gap-5 justify-around w-full">
        <a href={handles[0].link} target="_blank">
          <RegularGithub className="h-6 w-6 hover:h-8 hover:w-8 duration-200" />
        </a>
        <a href={handles[1].link} target="_blank">
          <RegularEnvelope className="h-6 w-6 hover:h-8 hover:w-8 duration-200" />
        </a>
        <a href={handles[2].link} target="_blank">
          <X className="h-6 w-6 hover:h-8 hover:w-8 duration-200 " />
        </a>
        <a href={handles[3].link} target="_blank">
          <RegularWhatsapp className="h-6 w-6 hover:h-8 hover:w-8 duration-200" />
        </a>
      </div>
    </>
  );
}
function Mobile() {
  return (
    <>
      <div className="lg:hidden md:hidden gap-10 flex flex-col justify-between pt-14 px-4 text-center">
        <div className={mont.className}>
          <h1 className="text-2xl text-center">I&apos;m Ayo</h1>
          <p>
            A professional full-stack web developer from Lagos. I specialize in
            creating dynamic and efficient web applications using Next.js and
            the MERN stack (MongoDB, Express.js, React.js, Node.js). My focus is
            on building seamless, feature-rich solutions with clean,
            maintainable code that lasts. I continually evolve my skills to stay
            proficient in both front-end and back-end development. With
            experience across various industries, I align tech solutions with
            the broader project vision, bringing expertise and passion to every
            project. Excited to make coding magic happen for your projects!
          </p>
          <div className="pt-5">
            <h3 className="text-xl text-center">Passion</h3>
            <p>
              I have strong passion in programming and aspects of development,
              in every thing i build i make sure to put in effort and time to
              get it done, The joy in development for me is seeing my project
              come to life
            </p>
          </div>
        </div>
        <div className="p-8 flex items-center justify-center flex-col">
          <Image
            src={`/me.jpeg`}
            unoptimized
            alt="image of me"
            width={400}
            height={345}
            className="w-full"
          />
          <div className="relative bottom-6 z-10 flex bg-slate-600 h-10 items-center justify-center w-full">
            <Handle />
          </div>
        </div>
      </div>
    </>
  );
}
export default function About() {
  const [hover, setHover] = useState<boolean>(false);
  function src(state: boolean) {
    let src;
    if (state) {
      src = "/me2.jpg";
    } else {
      src = "/me.jpeg";
    }
    return src;
  }
  return (
    <>
      <div id="about">
        <div className="pb-16"></div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex justify-center p-14"
        >
          <h2 className={`text-2xl ${mont.className} animate-bounce `}>
            ABOUT ME
          </h2>
        </motion.div>
        <hr />
        <div className="lg:flex md:flex gap-10 hidden justify-between p-14">
          <div className={mont.className}>
            <h1 className="text-2xl p-4 text-center">I&apos;m Ayo</h1>
            <p>
              A professional full-stack web developer from Lagos. I specialize
              in creating dynamic and efficient web applications using Next.js
              and the MERN stack (MongoDB, Express.js, React.js, Node.js). My
              focus is on building seamless, feature-rich solutions with clean,
              maintainable code that lasts. I continually evolve my skills to
              stay proficient in both front-end and back-end development. With
              experience across various industries, I align tech solutions with
              the broader project vision, bringing expertise and passion to
              every project. Excited to make coding magic happen for your
              projects!
            </p>
            <div className="pt-5">
              <h3 className="text-xl text-center">Passion</h3>
              <p>
                I have strong passion in programming and aspects of development,
                in every thing i build i make sure to put in effort and time to
                get it done, The joy in development for me is seeing my project
                come to life
              </p>
            </div>
          </div>
          <div className="pr-7 lg:min-w-96 md:min-w-72">
            <div className="w-full h-96 overflow-hidden">
              <Image
                src={src(hover)}
                unoptimized
                alt="image of me"
                width={400}
                height={345}
                className="transition-transform transform hover:scale-110 w-full h-full duration-200"
                onMouseOver={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              />
            </div>
            <div className="relative bottom-6 z-10 h-10 items-center w-full justify-center flex bg-slate-600 ">
              <Handle />
            </div>
          </div>
        </div>
        <Mobile />
      </div>
    </>
  );
}
