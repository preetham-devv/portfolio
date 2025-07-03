import { TESTIMONIALS } from "../constants"; // Assuming this is now your experience data
import { motion } from "framer-motion";

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

const Experience = () => {
  return (
    // Changed id to "Experience" for consistency
    <div className="container mx-auto mt-20 py-16 tracking-tighter" id="Experience">
      <h2 className="mb-12 text-center text-4xl font-semibold text-white">Experience</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Renamed variable to "experience" for clarity */}
        {TESTIMONIALS.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between p-6 rounded-lg border border-dotted border-gray-600 bg-transparent"
            variants={itemVariants}
          >
            <div>
              <div className="flex items-center mb-2">
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="h-16 w-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-bold text-white">{experience.name}</p>
                  <p className="text-white">{experience.title}</p>
                </div>
              </div>
            </div>
            {/* --- CHANGE IS HERE --- */}
            {/* Displaying the 'dates' property instead of 'quote' */}
            <p className="mt-4 text-sm text-neutral-400">{experience.dates}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Renamed export for consistency
export default Experience;