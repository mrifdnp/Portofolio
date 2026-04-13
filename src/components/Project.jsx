import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="projects" className="py-24 bg-[#050505] relative z-10">
      <div className="container mx-auto px-8 md:px-24">
        <h2 className="mb-16 text-sm tracking-[0.3em] uppercase text-neutral-500">
          Selected Works
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => {
            // Make the first project span 2 columns if on large screen
            // or vary based on index
            const isLarge = index === 0;

            return (
              <motion.div
                key={index}
                whileHover="hover"
                initial="initial"
                className={`relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Image Background */}
                <div className="h-64 sm:h-80 md:h-[400px] w-full overflow-hidden">
                  <motion.img
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <motion.div
                    variants={{
                      initial: { y: 20, opacity: 0.8 },
                      hover: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs tracking-widest uppercase bg-white/10 backdrop-blur-md rounded-full text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
