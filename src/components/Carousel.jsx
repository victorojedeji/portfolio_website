import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../lib/database";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextProject, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-[60vh] overflow-hidden mx-auto">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 1 }}
          className="h-full w-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${projects[currentIndex].screenshot})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black opacity-50 w-full h-full absolute"></div>
          <div className="bg-white p-6 rounded-lg relative z-10">
            <h2 className="text-2xl font-bold">
              {projects[currentIndex].title}
            </h2>
            <p className="text-gray-600">{projects[currentIndex].description}</p>
            <div className="mt-4">
              <a
                href={projects[currentIndex].githubUrl}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                GitHub
              </a>
              <a
                href={projects[currentIndex].websiteUrl}
                target="_blank"
                className="ml-4 text-blue-500 hover:underline cursor-pointer"
              >
                Website
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
