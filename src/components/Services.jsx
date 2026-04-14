import { assets } from "../assets/assets";
import Image from "./image";
import React from "react";
import { motion } from "framer-motion"; // ✅ correct import

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo text-gray-900 dark:text-white"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400"
      >
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-8 py-12 
                       shadow-sm dark:shadow-none 
                       hover:shadow-lg dark:hover:shadow-white/10 
                       cursor-pointer transition-all duration-500 
                       hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1"
          >
            <Image src={icon} alt="" className="w-10" />

            <h3 className="text-lg my-4 text-gray-800 dark:text-white">
              {title}
            </h3>

            <p className="text-sm text-gray-600 leading-5 dark:text-gray-400">
              {description}
            </p>

            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more{" "}
              <Image src={assets.right_arrow} className="w-6" alt="" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
