import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Rifqi translates complex logic into smooth, invisible experiences. The best motion developer I've worked with.",
    name: "John Doe",
    role: "Design Director, Studio X"
  },
  {
    quote: "He doesn't just write code, he crafts digital experiences. Our user engagement skyrocketed after his redesign.",
    name: "Jane Smith",
    role: "Founder, TechStartup"
  },
  {
    quote: "Incredible attention to detail. Rifqi bridges the gap between design and development flawlessly.",
    name: "Alex Johnson",
    role: "Product Manager, Creative Agency"
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-32 bg-neutral-900 relative z-10 flex flex-col justify-center min-h-[70vh]">
      <div className="container mx-auto px-8 md:px-24">
        
        <div className="relative h-[250px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="text-2xl md:text-5xl font-light tracking-tight text-white leading-tight mb-8">
                "{TESTIMONIALS[current].quote}"
              </p>
              <div>
                <p className="text-white tracking-widest uppercase text-sm">
                  {TESTIMONIALS[current].name}
                </p>
                <p className="text-neutral-500 text-sm mt-1">
                  {TESTIMONIALS[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-4 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="relative h-[2px] w-16 bg-neutral-700 overflow-hidden cursor-pointer"
            >
              {current === i && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-0 bg-pink-500"
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
