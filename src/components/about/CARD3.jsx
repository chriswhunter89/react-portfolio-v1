import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const CARD3 = () => {
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
        <motion.h2 layout="position">What I'm looking for... </motion.h2>
        {isOpen && (
          <motion.div
            className="expand"
            transition={{ layout: { duration: 0.5, type: "spring" } }}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>
              I am currently continuing to imporove my programming skills
              through building my own personal projects and attending online
              courses. I would love to work for a company where I can both
              progress as a developer and contribute to achieving new goals and
              milestones with my team. Whilst I am no stranger to working alone,
              I value working collaboratively with a team of likeminded
              individuals and supporting eachother.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CARD3;
