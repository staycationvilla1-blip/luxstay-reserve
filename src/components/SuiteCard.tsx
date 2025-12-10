import { motion } from "framer-motion";
import { ArrowRight, Users, Maximize, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative bg-card rounded-2xl overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-gold">From {price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Users size={16} className="text-gold" />
            {guests} Guests
          </span>
          <span className="flex items-center gap-2">
            <Maximize size={16} className="text-gold" />
            {size}
          </span>
          <span className="flex items-center gap-2">
            <Wifi size={16} className="text-gold" />
            Free WiFi
          </span>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Link to="/reserve">
            <Button variant="outline" className="group/btn">
              View Details
              <ArrowRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
