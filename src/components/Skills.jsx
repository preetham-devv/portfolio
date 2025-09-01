import { SKILLS_CATEGORIES } from "../constants";
import { motion } from "framer-motion";
import React from 'react';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(SKILLS_CATEGORIES).map((category, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-xl">
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS_CATEGORIES[category].map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="flex flex-col items-center"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center">
                    {skill.icon}
                    <h3 className="text-sm mt-2 lg:text-lg">{skill.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;