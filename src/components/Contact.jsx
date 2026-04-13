import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div id="contact" className="py-48 bg-[#050505] relative z-10 flex flex-col items-center justify-center text-center px-8">
      <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-12">
        Let's work <br/>
        <span className="italic text-neutral-500">together.</span>
      </h2>

      {/* Magnetic Button */}
      <motion.a
        href="mailto:contact@rifqidani.com"
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative group w-48 h-48 md:w-64 md:h-64 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer"
      >
        <span className="text-white text-lg md:text-xl uppercase tracking-widest pointer-events-none group-hover:scale-110 transition-transform duration-300">
          Get in touch
        </span>
        <div className="absolute inset-0 rounded-full border border-pink-400 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
      </motion.a>

      <div className="mt-32 w-full max-w-4xl flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-sm tracking-widest text-neutral-500">
        <p>© {new Date().getFullYear()} RIFQI DANI.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
