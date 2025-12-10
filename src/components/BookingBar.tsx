import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const BookingBar = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSearch = () => {
    navigate("/reserve", {
      state: { checkIn, checkOut, guests },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative booking-bar rounded-2xl p-6 md:p-8 w-full max-w-5xl mx-auto overflow-hidden"
    >
      {/* Animated background shimmer */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, hsla(45, 80%, 65%, 0.1), transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating sparkle decorations */}
      <motion.div
        className="absolute top-4 right-8 text-gold/40"
        animate={{ 
          y: [-5, 5, -5],
          rotate: [0, 15, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={16} />
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        {/* Check-in */}
        <motion.div 
          className="space-y-2"
          animate={{ 
            scale: focusedField === "checkin" ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <motion.div
              animate={{ rotate: focusedField === "checkin" ? [0, -10, 10, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar size={16} className="text-gold" />
            </motion.div>
            Check In
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            onFocus={() => setFocusedField("checkin")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-b-2 border-border focus:border-gold py-3 text-foreground text-lg font-light outline-none transition-all duration-300 cursor-pointer hover:border-gold/50"
          />
        </motion.div>

        {/* Check-out */}
        <motion.div 
          className="space-y-2"
          animate={{ 
            scale: focusedField === "checkout" ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <motion.div
              animate={{ rotate: focusedField === "checkout" ? [0, -10, 10, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar size={16} className="text-gold" />
            </motion.div>
            Check Out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            onFocus={() => setFocusedField("checkout")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-b-2 border-border focus:border-gold py-3 text-foreground text-lg font-light outline-none transition-all duration-300 cursor-pointer hover:border-gold/50"
          />
        </motion.div>

        {/* Guests */}
        <motion.div 
          className="space-y-2"
          animate={{ 
            scale: focusedField === "guests" ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <motion.div
              animate={{ scale: focusedField === "guests" ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Users size={16} className="text-gold" />
            </motion.div>
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            onFocus={() => setFocusedField("guests")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-b-2 border-border focus:border-gold py-3 text-foreground text-lg font-light outline-none transition-all duration-300 cursor-pointer appearance-none hover:border-gold/50"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6+ Guests</option>
          </select>
        </motion.div>

        {/* Search Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="gold"
            size="xl"
            className="w-full flex items-center justify-center gap-2 relative overflow-hidden group"
            onClick={handleSearch}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-dark"
              style={{ backgroundSize: "200% 100%" }}
              animate={{
                backgroundPosition: ["0% 0", "100% 0", "0% 0"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Search size={18} />
              Check Availability
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
