import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const BookingBar = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSearch = () => {
    navigate("/reserve", {
      state: { checkIn, checkOut, guests },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="booking-bar rounded-2xl p-6 md:p-8 w-full max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        {/* Check-in */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <Calendar size={16} className="text-gold" />
            Check In
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent border-b-2 border-border focus:border-gold py-3 text-foreground text-lg font-light outline-none transition-colors cursor-pointer"
          />
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <Calendar size={16} className="text-gold" />
            Check Out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent border-b-2 border-border focus:border-gold py-3 text-foreground text-lg font-light outline-none transition-colors cursor-pointer"
          />
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <Users size={16} className="text-gold" />
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent border-b-2 border-border focus:border-gold py-3 text-foreground text-lg font-light outline-none transition-colors cursor-pointer appearance-none"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6+ Guests</option>
          </select>
        </div>

        {/* Search Button */}
        <Button
          variant="gold"
          size="xl"
          className="w-full flex items-center justify-center gap-2"
          onClick={handleSearch}
        >
          <Search size={18} />
          Check Availability
        </Button>
      </div>
    </motion.div>
  );
};
