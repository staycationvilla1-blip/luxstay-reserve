import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Users, Maximize, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface SuiteCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  guests: number;
  size: string;
  index?: number;
}

export const SuiteCard = ({
  image,
  title,
  description,
  price,
  guests,
  size,
  index = 0,
}: SuiteCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-card rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(105deg, transparent 40%, hsla(45, 80%, 65%, 0.1) 45%, hsla(45, 80%, 65%, 0.2) 50%, hsla(45, 80%, 65%, 0.1) 55%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 200%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Price Badge */}
        <motion.div 
          className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-elegant"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 + 0.3 }}
        >
          <span className="text-sm font-medium text-gold">From {price}</span>
        </motion.div>

        {/* View button on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        >
          <Link to="/reserve">
            <Button variant="gold" size="lg" className="shadow-gold-glow">
              View Suite
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4" style={{ transform: "translateZ(20px)" }}>
        <h3 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: "hsl(var(--gold))" }}
          >
            <Users size={16} className="text-gold" />
            {guests} Guests
          </motion.span>
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: "hsl(var(--gold))" }}
          >
            <Maximize size={16} className="text-gold" />
            {size}
          </motion.span>
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: "hsl(var(--gold))" }}
          >
            <Wifi size={16} className="text-gold" />
            Free WiFi
          </motion.span>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Link to="/reserve">
            <Button variant="outline" className="group/btn overflow-hidden relative">
              <span className="relative z-10 flex items-center">
                View Details
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover/btn:translate-x-1"
                />
              </span>
              <motion.div
                className="absolute inset-0 bg-gold"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
