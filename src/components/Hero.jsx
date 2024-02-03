import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-screen mx-auto overflow-hidden">
        <div
          className={`${styles.paddingX}
      absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5`}
        >
          <div
            className="flex flex-col
        justify-center items-center mt-5"
          >
            <div
              className="w-5 h-5 rounded-full 
          bg-[#915eff]"
            />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1
              className={`${styles.heroHeadText}
          text-white`}
            >
              Hi, I'm
              <span className="text-[#915eff]">Thiruppathi</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 
          text-white-100`}
            >
              I develop user interfaces <br className="sm:block hidden" />
              and web applications
            </p>
          </div>
        </div>

        <ComputersCanvas />

        <BottomNav link="/about" title="About" />
      </section>
    </>
  );
};

export default Hero;
