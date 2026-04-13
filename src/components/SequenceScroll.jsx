import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const SequenceScroll = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values for text overlays
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const text2X = useTransform(scrollYProgress, [0.25, 0.45], [-50, 0]);

  const text3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const text3X = useTransform(scrollYProgress, [0.55, 0.75], [50, 0]);

  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // =============== FALLBACK CANVAS ANIMATION ===============
    // While waiting for the image sequence, we draw some abstract geometry reacting to scroll
    let animationFrameId;

    const renderFallback = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const progress = scrollYProgress.get(); // 0 to 1
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw grid lines that expand
      ctx.strokeStyle = `rgba(80, 80, 80, ${0.1 + (progress * 0.15)})`;
      ctx.lineWidth = 1;

      const spacing = 50 + (progress * 100);
      
      ctx.beginPath();
      for (let x = (centerX % spacing) - spacing; x < canvas.width + spacing; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = (centerY % spacing) - spacing; y < canvas.height + spacing; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Draw a rotating shape in the center
      const rotation = progress * Math.PI * 4; 
      const sizeMultiplier = 1 + Math.sin(progress * Math.PI) * 2; 

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      ctx.strokeStyle = "rgba(220, 220, 220, 0.7)";
      ctx.lineWidth = 1.5;
      
      ctx.beginPath();
      const baseSize = 60 * sizeMultiplier;
      ctx.moveTo(0, -baseSize);
      ctx.lineTo(baseSize/3, -baseSize/3);
      ctx.lineTo(baseSize, 0);
      ctx.lineTo(baseSize/3, baseSize/3);
      ctx.lineTo(0, baseSize);
      ctx.lineTo(-baseSize/3, baseSize/3);
      ctx.lineTo(-baseSize, 0);
      ctx.lineTo(-baseSize/3, -baseSize/3);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(renderFallback);
    };
    
    // IF YOU HAVE IMAGES: uncomment below logic and comment out the renderFallback call
    /*
    const frameCount = 240;
    const images = [];
    let imagesLoaded = 0;

    // Load all images (e.g. from /sequence/ezgif-frame-001.jpg)
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
      images.push(img);
      
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === 1) { 
          requestAnimationFrame(renderImageSequence);
        }
      }
    }

    const renderImageSequence = () => {
      // Get current frame based on scroll progress
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollYProgress.get() * frameCount)
      );

      const frame = images[frameIndex];
      if (frame && frame.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Scale to cover
        const scale = Math.max(
          canvas.width / frame.width,
          canvas.height / frame.height
        );
        const x = (canvas.width / 2) - (frame.width / 2) * scale;
        const y = (canvas.height / 2) - (frame.height / 2) * scale;
        const w = frame.width * scale;
        const h = frame.height * scale;
        
        ctx.drawImage(frame, x, y, w, h);
      }
      animationFrameId = requestAnimationFrame(renderImageSequence);
    }
    */

    renderFallback();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-[#050505]">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* --- SCROLLYTELLING TEXT OVERLAYS --- */}
        
        {/* 0% - Title */}
        <motion.div 
          style={{ opacity: text1Opacity, y: text1Y }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4"
        >
          <p className="tracking-[0.3em] text-sm md:text-base text-neutral-400 mb-4 uppercase">
            Mobile & Web Developer
          </p>
          <h1 className="text-5xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter text-white">
            RIFQI DANI
          </h1>
        </motion.div>

        {/* 30% - Slogan 1 */}
        <motion.div 
          style={{ opacity: text2Opacity, x: text2X }}
          className="absolute inset-0 flex items-center justify-start pointer-events-none p-8 md:p-24"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
              Crafting <span className="italic opacity-80 text-neutral-400">digital</span><br/>experiences.
            </h2>
            <p className="text-neutral-400 md:text-xl font-light">
              I specialize in building interactive applications and clean interfaces that merge aesthetics with functionality.
            </p>
          </div>
        </motion.div>

        {/* 60% - Slogan 2 */}
        <motion.div 
          style={{ opacity: text3Opacity, x: text3X }}
          className="absolute inset-0 flex items-center justify-end pointer-events-none p-8 md:p-24 text-right"
        >
          <div className="max-w-xl ml-auto">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
              Driven by <br/><span className="italic opacity-80 text-neutral-400">motion.</span>
            </h2>
            <p className="text-neutral-400 md:text-xl font-light">
              Every interaction is an opportunity to delight. I bring interfaces to life with fluid animations.
            </p>
          </div>
        </motion.div>

        {/* 90% - Scroll CTA */}
        <motion.div 
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-24 pointer-events-none"
        >
          <p className="text-sm tracking-[0.2em] text-neutral-400 uppercase mb-6">
            Keep Scrolling
          </p>
          <div className="w-[1px] h-24 bg-gradient-to-b from-neutral-400 to-transparent"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default SequenceScroll;
