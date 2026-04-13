import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.2 0.9", "1 0.7"]
  });

  const words = ABOUT_TEXT.split(" ");

  return (
    <div id="about" ref={containerRef} className="py-32 md:py-64 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-8 md:px-24">
        <h2 className="mb-16 text-sm tracking-[0.3em] uppercase text-neutral-500">
          About Me
        </h2>
        
        <p className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight flex flex-wrap gap-x-2 gap-y-1">
          {words.map((word, i) => {
            // Calculate a staggered opacity for each word
            const start = i / words.length;
            const end = start + (1 / words.length);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            
            return (
              <span key={i} className="relative">
                <span className="absolute opacity-10">{word}</span>
                <motion.span style={{ opacity }}>{word}</motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default About;
