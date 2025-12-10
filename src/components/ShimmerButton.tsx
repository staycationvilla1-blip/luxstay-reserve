import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ShimmerButtonProps {
  children: ReactNode;
  to: string;
  className?: string;
  variant?: "gold" | "outline";
  size?: "default" | "lg" | "xl";
  onClick?: () => void;
}

export const ShimmerButton = ({ 
  children, 
  to, 
  className = "", 
  variant = "gold",
  size = "default",
  onClick
}: ShimmerButtonProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAnimating) return;
    
    setIsAnimating(true);
    onClick?.();
    
    // Navigate after shimmer animation completes
    setTimeout(() => {
      navigate(to);
    }, 600);
  };

  const sizeClasses = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const variantClasses = {
    gold: "bg-gold text-charcoal hover:bg-gold-light",
    outline: "bg-transparent border-2 border-gold text-gold hover:bg-gold/10",
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-hidden rounded-lg font-medium uppercase tracking-wider transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isAnimating}
    >
      {/* Button content */}
      <span className="relative z-10">{children}</span>

      {/* Shimmer overlay on click */}
      <AnimatePresence>
        {isAnimating && (
          <>
            {/* Radial burst effect */}
            <motion.div
              className="absolute inset-0 z-20"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                background: "radial-gradient(circle, hsl(45 90% 70% / 0.8) 0%, transparent 70%)",
              }}
            />

            {/* Horizontal shimmer sweep */}
            <motion.div
              className="absolute inset-0 z-20"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(90deg, transparent, hsl(45 90% 80% / 0.9), hsl(45 100% 90%), hsl(45 90% 80% / 0.9), transparent)",
                width: "50%",
              }}
            />

            {/* Sparkle particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gold rounded-full z-30"
                initial={{ 
                  x: "50%", 
                  y: "50%",
                  scale: 0,
                  opacity: 1 
                }}
                animate={{ 
                  x: `${50 + (Math.random() - 0.5) * 200}%`,
                  y: `${50 + (Math.random() - 0.5) * 200}%`,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0]
                }}
                transition={{ 
                  duration: 0.5,
                  delay: i * 0.03,
                  ease: "easeOut"
                }}
                style={{
                  boxShadow: "0 0 10px hsl(45 80% 60%), 0 0 20px hsl(45 80% 60% / 0.5)",
                }}
              />
            ))}

            {/* Gold border pulse */}
            <motion.div
              className="absolute inset-0 z-10 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.4 }}
              style={{
                boxShadow: "inset 0 0 20px hsl(45 80% 60% / 0.8), 0 0 30px hsl(45 80% 60% / 0.6)",
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Ambient glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(ellipse at center, hsl(45 80% 60% / 0.2), transparent 70%)",
        }}
      />
    </motion.button>
  );
};

export default ShimmerButton;
