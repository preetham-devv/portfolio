import { SKILLS } from "../constants";
import { motion } from "framer-motion";

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
      <motion.div
        className="mx-2 flex flex-wrap justify-center gap-10 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20" // flex-wrap for wrapping items side by side
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center" // Make it a column to put the name under the icon
            variants={itemVariants}
          >
            <div className="flex flex-col items-center">
              {skill.icon}
              <h3 className="text-sm mt-2 lg:text-lg">{skill.name}</h3> {/* Adjust font size and spacing */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
