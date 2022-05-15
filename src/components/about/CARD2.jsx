import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const CARD2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="EXP">
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: "1rem",
        }}
      >
        <motion.h2 layout="position">Hobbies & Interests... </motion.h2>
        {isOpen && (
          <motion.div
            className="expand"
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>
              I have been a gamer all of my life and play on console mainly. I
              am hoping to create a couple of gaming projects that I can add to
              my portfolio. <br />
              Since I was young I've always been interested in building things,
              taking things apart and putting them back together. I still have
              this curiostiy when programming.
              <br />I enjoy sports and have played ruby and gaelic football most
              of my life and am always up for trying new activities!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CARD2;
