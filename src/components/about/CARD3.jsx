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
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>
              Chris im form ireland mobed t london 4 years ago. After 98 years
              working ads a dskhdfbfe fh h f fh f h vjkhbfuf fhfb frhf rfr
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CARD3;
