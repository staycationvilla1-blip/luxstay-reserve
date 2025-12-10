import { useEffect } from "react";
import { motion } from "framer-motion";
import { Bed, Bath, Square, X, Wifi, Car, Coffee, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export type Suite = {
  id: number;
  name: string;
  price: string;
  period: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  features: string[];
  description: string;
};

interface RoomModalProps {
  room: Suite;
  onClose: () => void;
}

export const RoomModal = ({ room, onClose }: RoomModalProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBookNow = () => {
    onClose();
    navigate("/reserve", { state: { suiteType: room.name } });
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: -6 }}
        transition={{ duration: 0.2 }}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-background shadow-luxury"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header image */}
        <div className="relative h-72">
          <img
            src={room.image}
            alt={room.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-cream">
            <div>
              <h3 className="font-display text-3xl font-light">{room.name}</h3>
              <p className="text-sm mt-2 flex items-center gap-4 opacity-90">
                <span className="inline-flex items-center gap-1">
                  <Bed className="w-4 h-4 text-gold" /> {room.bedrooms} Bed
                </span>
                <span className="inline-flex items-center gap-1">
                  <Bath className="w-4 h-4 text-gold" /> {room.bathrooms} Bath
                </span>
                <span className="inline-flex items-center gap-1">
                  <Square className="w-4 h-4 text-gold" /> {room.area}
                </span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-display">{room.price}</div>
              <div className="text-xs opacity-90">{room.period}</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          <p className="text-muted-foreground leading-relaxed mb-6">
            {room.description}
          </p>

          <h4 className="text-sm font-semibold tracking-wide text-gold uppercase mb-4">
            Suite Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {room.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-gold" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <Button
              onClick={onClose}
              variant="outline"
              className="sm:min-w-[140px]"
            >
              Close
            </Button>
            <Button
              onClick={handleBookNow}
              variant="gold"
              className="sm:min-w-[160px]"
            >
              Book Now
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
