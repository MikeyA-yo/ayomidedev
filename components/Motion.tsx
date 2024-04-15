"use client";

import { motion } from "framer-motion";

const motionDiv = ({props, children}:{props:any, children:JSX.IntrinsicElements})=>{
    return ( <motion.div {...props}>
                {children}
              </motion.div>)
};
export default motionDiv;