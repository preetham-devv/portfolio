import { EDUCATION, TESTIMONIALS } from "../constants";
import { motion } from "framer-motion";
import Testimonials from "./Testimonials";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Education = () => {
  return (
    <div className="container mx-auto mt-20 py-16 tracking-tighter" id="Education">
      <h2 className="mb-12 text-center text-4xl font-semibold text-white">Education</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {EDUCATION.map((education, index) => (
          <motion.div
            key={index}
            className="flex flex-col p-6 rounded-lg border border-dotted border-gray-600 bg-transparent"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <img
                src={education.image}
                alt={education.role}
                className="h-16 w-16 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-white">{education.role}</p>
                <p className="text-white">{education.company}</p>
              </div>
              <p className="ml-auto text-white">{education.period}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
