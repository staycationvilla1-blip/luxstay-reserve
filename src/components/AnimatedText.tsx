import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  as: Component = "span",
}: AnimatedTextProps) => {
  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        staggerChildren: 0.02,
        delayChildren: delay,
      }}
      className={className}
      style={{ perspective: 1000 }}
    >
      {typeof children === "string"
        ? children.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              custom={i}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))
        : children}
    </MotionComponent>
  );
};

export const AnimatedWord = ({
  children,
  className = "",
  delay = 0,
}: AnimatedTextProps) => {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={wordVariants}
      transition={{ delay }}
      className={`inline-block ${className}`}
      style={{ transformOrigin: "bottom" }}
    >
      {children}
    </motion.span>
  );
};
