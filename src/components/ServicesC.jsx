import { motion } from "framer-motion";
import React from "react";

const ServicesC = () => {
  return (
    <>
      <h1>
        <motion.div
          // whileInView={{ x: 0, scale: [0, 1] }}
          // initial={{ x: 0, scale: 0 }}
          // animate={{ scale: [null, 1] }}
          // transition={{ ease: "easeIn", duration: 3 }}
          className="md:text-center text-start pt-5 md:text-5xl text-xl md:px-20 px-5 font-black md:font-black capitalize bg-gradient-to-tr from-secondary from-11% via-primary via-41% to-accent to-21% bg-clip-text text-transparent"
        >
          AYODHYA, UTTAR PRADESH EVENT PLANNER:
        </motion.div>
        <motion.div
          // whileInView={{ x: 0, scale: [0, 1] }}
          // initial={{ x: 0, scale: 0 }}
          // animate={{ scale: [null, 1] }}
          // transition={{ ease: "easeIn", duration: 3, delay: 2 }}
          className="md:text-center text-start pb-5 md:text-5xl text-xl md:px-20 px-5 font-black md:font-black capitalize bg-gradient-to-tl from-accent from-11% via-primary via-41% to-secondary to-21% bg-clip-text text-transparent"
        >
          CREATING TIMELESS MEMORIES FOR YOUR SPECIAL OCCASION
        </motion.div>
      </h1>
    </>
  );
};

export default ServicesC;
