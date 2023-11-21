import React, { useEffect } from "react";
import { IoIosPeople } from "react-icons/io";
import { RiCalendarEventLine, RiPinDistanceFill } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

const Counters = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 10000);

    return controls.stop;
  }, []);

  return (
    <div className="text-7xl flex flex-col md:flex-row md:gap-6 gap-5 lg:gap-20 justify-center items-center md:mt-32 md:mb-5 my-0 text-primary text-opacity-60 font-bold ">
      <div className="flex flex-col justify-center items-center gap-1">
        <IoIosPeople />
        <div className="flex text-base justify-center">
          <motion.div>{rounded}</motion.div>
          <sub>+</sub>
        </div>
        <div className="flex text-base justify-center">
          <span>People Talking about us</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <RiCalendarEventLine />
        <div className="flex text-base justify-center">
          <span>300</span>
          <sub>+</sub>
        </div>
        <div className="flex text-base justify-center">
          <span>Event's Organised</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <RiPinDistanceFill />
        <div className="flex text-base justify-center">
          <span>India</span>
        </div>
        <div className="flex text-base justify-center">
          <span>Ayodhya , Uttar Pradesh</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <FaBriefcase />
        <div className="flex text-base justify-center">
          <span>5</span>
          <sub>+</sub>
          <span>years</span>
        </div>
        <div className="flex text-base justify-center">
          <span>Industry Experience and Expertise</span>
        </div>
      </div>
    </div>
  );
};

export default Counters;
