import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<TrailPoint[]>([]);
  const trailId = useRef(0);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      
      // Add trail point
      trailId.current += 1;
      setTrails(prev => [
        ...prev.slice(-12),
        { x: e.clientX, y: e.clientY, id: trailId.current }
      ]);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [cursorX, cursorY]);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => prev.slice(-8));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Trail particles */}
      {trails.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[9998]"
          initial={{ 
            x: point.x - 4, 
            y: point.y - 4, 
            scale: 1, 
            opacity: 0.6 
          }}
          animate={{ 
            scale: 0, 
            opacity: 0 
          }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut" 
          }}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: `radial-gradient(circle, hsl(45 80% 60% / ${0.3 + index * 0.05}), transparent)`,
            boxShadow: "0 0 10px hsl(45 80% 60% / 0.4)",
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          {/* Outer ring */}
          <motion.div
            className="absolute -inset-3 rounded-full border-2 border-gold/50"
            animate={{
              scale: isHovering ? 1.2 : 1,
              borderColor: isHovering ? "hsl(45 80% 60%)" : "hsl(45 80% 60% / 0.5)",
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Inner dot */}
          <motion.div
            className="w-3 h-3 rounded-full bg-gold"
            style={{
              boxShadow: "0 0 20px hsl(45 80% 60% / 0.8), 0 0 40px hsl(45 80% 60% / 0.4)",
            }}
            animate={{
              scale: isHovering ? 0.5 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
