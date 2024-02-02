import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <>
        <Navbar />
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 min-h-[100vh]`}
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
          <Component />
        </motion.section>
      </>
    );
  }

  return HOC; // Return the wrapped component
};

export default SectionWrapper;
