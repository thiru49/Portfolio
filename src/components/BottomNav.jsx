import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RouteContext } from "../App";
const BottomNav = ({ link, title }) => {
  const { setActive } = useContext(RouteContext);
  return (
    <div
      className="absolute xs:bottom-10
 bottom-32 left-[50%]"
    >
      <Link to={link} onClick={() => {setActive(title);window.scrollTo(0, 0);
      }}>
        <div
          className="w-[35px] h-[64px] rounded-3xl
     border-4 border-secondary
     flex justify-center items-start p-2"
        >
          <motion.dev
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full
     bg-secondary mb-1"
          />
        </div>
      </Link>
    </div>
  );
};

export default BottomNav;
