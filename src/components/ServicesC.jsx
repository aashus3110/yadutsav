import { motion } from "framer-motion";
import React from "react";
import ServicesBox from "./ServicesBox";

const ServicesC = () => {
  return (
    <>
      <h1>
        <div className="md:text-center text-start pt-5 md:text-5xl text-xl md:px-20 px-5 font-black md:font-black capitalize bg-gradient-to-tr from-secondary from-11% via-primary via-41% to-accent to-21% bg-clip-text text-transparent">
          AYODHYA, UTTAR PRADESH EVENT PLANNER:
        </div>
        <div className="md:text-center text-start pb-5 md:text-5xl text-xl md:px-20 px-5 font-black md:font-black capitalize bg-gradient-to-tl from-accent from-11% via-primary via-41% to-secondary to-21% bg-clip-text text-transparent">
          CREATING TIMELESS MEMORIES FOR YOUR SPECIAL OCCASION
        </div>
      </h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            <ServicesBox />
            <ServicesBox />
            <ServicesBox />
            <ServicesBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesC;
