import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Wait a bit before hiding
          return 100;
        }
        // Random increment between 5 and 15
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-neutral-300"
        >
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-light tracking-[0.2em] lg:text-6xl">
              RIFQI DANI
            </h1>
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-neutral-800">
              <motion.div
                className="h-full bg-neutral-200"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <p className="text-sm tracking-widest text-neutral-500">
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Preloader;
