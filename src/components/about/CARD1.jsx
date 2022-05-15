import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const CARD1 = () => {
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
        <motion.h2 layout="position">
          My Background... <br />
        </motion.h2>
        {isOpen && (
          <motion.div
            className="expand"
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>
              Born in Londonderry, Northern Ireland. Engineering graduate from
              Univesity of Ulster, Belfast. I moved to London over 5 years ago
              now and absolutely love living here. After 8 years of working as a
              mechanical engineer, I decided to leave the industry so that I can
              pursue my passion in tech. I'm thankful for my time as an engineer
              where I learnt and developed many of my skills which are also
              directly transferrable into programming.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CARD1;
