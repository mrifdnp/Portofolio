import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between p-6 md:p-8 mix-blend-difference text-white">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter cursor-pointer relative z-[70]">
          RD<span className="text-neutral-500">.</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm md:text-base font-medium uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer relative z-[70]"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[50] bg-[#0a0a0a] flex flex-col justify-center px-8 md:px-24"
          >
            <div className="flex flex-col gap-4 md:gap-8">
              {navLinks.map((link, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.76, 0, 0.24, 1],
                      delay: i * 0.1,
                    }}
                    className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </motion.a>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 md:bottom-12 md:left-24 flex gap-8 text-neutral-500 text-sm tracking-widest uppercase"
            >
              <a href="https://www.linkedin.com/in/rifqi-dani-8a18352b2/?originalSubdomain=id" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/mrifdnp" className="hover:text-white transition-colors">Github</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
