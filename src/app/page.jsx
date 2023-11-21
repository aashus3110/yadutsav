"use client";
import Image from "next/image";
import React from "react";
import Event from "@/assets/unevent.jpg";
import TextBox from "@/components/TextBox";
import { motion } from "framer-motion";
import About from "./About/page";
import Contact from "./Contact/page";
import Services from "./Services/page";
import Counters from "@/components/Counters";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        {/* Mobile Animation */}
        <motion.div
          whileInView={{ y: 0 }}
          initial={{ y: -400 }}
          animate={{ y: [-400, -300, -200, -100, 0] }}
          transition={{ ease: "easeIn", duration: 2 }}
        >
          <Image
            loading="eager"
            src={Event}
            alt="Picture of the author"
            className="md:h-[34rem] h-[25rem] w-full bg-cover bg-center rounded-bl-[5rem] rounded-br-[3rem] md:hidden block"
          />
        </motion.div>
        {/* Desktop Animation */}
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: -400 }}
          animate={{ x: [-400, -300, -200, -100, 0] }}
          transition={{ ease: "easeIn", duration: 2 }}
          className="md:block hidden"
        >
          <Image
            loading="lazy"
            src={Event}
            alt="Picture of the author"
            className="md:h-[34rem] h-[20rem] w-full rounded-tr-[10rem] rounded-br-[4rem] md:block hidden"
          />
        </motion.div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full mx-auto py-10 md:py-20 px-0">
          {/* Title Animation */}
          <motion.div
            whileInView={{ y: 0, scale: [0, 0.5, 1] }}
            initial={{ y: -100, scale: 0 }}
            animate={{ y: [-200, -100, 0], scale: [0, 0.5, 1] }}
            transition={{ ease: "easeIn", duration: 2 }}
          >
            <h1 className="items-center flex font-black text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow shadow-secondary tracking-wider">
              Yadutsav Event: Bridging Time, Unveiling Tradition
            </h1>
          </motion.div>
          {/* description animation */}
          <div className="flex md:gap-5 flex-col md:flex-row gap-1 items-center w-full my-5">
            <motion.div
              whileInView={{ x: 0, scale: [0, 1] }}
              initial={{ x: 100, scale: 0 }}
              animate={{ scale: [null, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 3 }}
              className="md:absolute relative lg:end-[10rem] md:end-[2rem] md:top-[11rem] lg:top-[7rem]"
            >
              <TextBox
                Text={
                  "Join us in this unique rendezvous, where the past and present coalesce in a spectacle of diversity"
                }
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, scale: [0, 1] }}
              initial={{ x: 100, scale: 0 }}
              animate={{ scale: [null, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 3 }}
              className="md:absolute relative lg:end-[15rem] lg:top-[23rem] md:end-[2rem] md:top-[27.5rem]"
            >
              <TextBox Text={"Embark on a journey that transcends Yadutsav"} />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, scale: [0, 1] }}
              initial={{ x: 100, scale: 0 }}
              animate={{ scale: [null, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 3 }}
              className="md:absolute relative lg:end-[28rem] lg:top-[10rem] md:top-[18rem] md:end-[16rem]"
            >
              <TextBox
                Text={
                  "where the tapestry of tradition is interwoven with the vibrancy of the modern era"
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Counters />
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
