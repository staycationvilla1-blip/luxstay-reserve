import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Calendar, Users, Mail, Phone, User, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import heroImage from "@/assets/suite-bedroom-1.jpg";

const Reserve = () => {
  const location = useLocation();
  const { toast } = useToast();
  const initialState = location.state || {};

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: initialState.checkIn || "",
    checkOut: initialState.checkOut || "",
    guests: initialState.guests || "2",
    suiteType: "",
    specialRequests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Reservation Request Sent!",
      description: "We'll contact you shortly to confirm your booking.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-lg"
          >
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Your reservation request has been received. Our concierge team will 
              contact you within 24 hours to confirm your booking details.
            </p>
            <a href="/">
              <Button variant="gold" size="lg">
                Return to Home
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Reserve"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Book Your Stay
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6">
              Reserve Now
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-6" />
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Complete the form below and our concierge team will 
              confirm your reservation within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 lg:py-28">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-gold" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                      <Mail size={14} className="text-gold" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                      <Phone size={14} className="text-gold" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>
              </div>

              {/* Stay Details */}
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-gold" />
                  Stay Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                      <Users size={14} className="text-gold" />
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Suite Type *
                    </label>
                    <select
                      name="suiteType"
                      required
                      value={formData.suiteType}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="">Select a suite</option>
                      <option value="deluxe-king">Deluxe King Suite - $180/night</option>
                      <option value="premium-queen">Premium Queen Suite - $160/night</option>
                      <option value="royal-living">Royal Living Suite - $280/night</option>
                      <option value="executive">Executive Suite - $320/night</option>
                      <option value="presidential">Presidential Suite - $450/night</option>
                      <option value="garden-view">Garden View Suite - $200/night</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-gold" />
                  Special Requests
                </h3>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Let us know about any special requests, dietary requirements, or preferences..."
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-4">
                <Button type="submit" variant="gold" size="xl" className="min-w-[250px]">
                  Submit Reservation
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  By submitting, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Reserve;
