import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="border-b border-neutral-900 pb-4 relative">
      {/* Project Title */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Project
      </motion.h1>

      {/* Project List */}
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            
            {/* Image Section */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full flex justify-center lg:w-1/4 relative group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative">
                {/* Image with Hover Effect */}
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded mx-auto transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border group-hover:border-purple-500"
                />
                {/* Click to Expand Tooltip */}
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to Expand 🔍
                </span>
              </div>
            </motion.div>

            {/* Description Section */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Full-Size Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </div>
  );
};

export default Project;
