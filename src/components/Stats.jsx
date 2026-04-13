import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ from = 0, to, duration = 2 }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / (duration * 1000), 1);
      // Easing function: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - percentage, 4);

      setCount(Math.floor(easeProgress * (to - from) + from));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

const STATS = [
  { label: "Lines of Code", value: 120000, suffix: "+" },
  { label: "Completed Projects", value: 45, suffix: "" },
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Cups of Coffee", value: 870, suffix: "" },
];

const Stats = () => {
  return (
    <div className="py-24 bg-[#050505] relative z-10 border-t border-neutral-900">
      <div className="container mx-auto px-8 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-2">
                <AnimatedCounter to={stat.value} />
                <span className="text-pink-500">{stat.suffix}</span>
              </h3>
              <p className="text-sm tracking-[0.2em] uppercase text-neutral-500 text-center md:text-left">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
