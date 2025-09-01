import { TESTIMONIALS } from "../constants";
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

const Testimonials = () => {
  return (
    <div className="container mx-auto mt-20 py-16 tracking-tighter" id="Testimonials">
      <h2 className="mb-12 text-center text-4xl font-semibold text-white">Experience</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex flex-col p-6 rounded-lg border border-dotted border-gray-600 bg-transparent"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.role}
                className="h-16 w-16 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-bold text-white">{testimonial.role}</p>
                <p className="text-white">
                  {testimonial.company}{" "}
                  <span className="text-neutral-400">({testimonial.dates})</span>
                </p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-4 text-sm text-neutral-400">
              {testimonial.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;