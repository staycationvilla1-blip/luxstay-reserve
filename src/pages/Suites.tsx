import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RoomModal, type Suite } from "@/components/RoomModal";
import { Gallery } from "@/components/Gallery";
import {
  useScrollAnimations,
  fadeInUp,
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  scaleIn,
} from "@/hooks/useScrollAnimations";
import {
  Crown,
  MapPin,
  Bed,
  Bath,
  Square,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Tv,
  Sparkles,
  Shield,
  Dumbbell,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import suite1 from "@/assets/suite-bedroom-1.jpg";
import suite2 from "@/assets/suite-bedroom-2.jpg";
import suiteLiving from "@/assets/suite-living.jpg";
import suiteKitchen from "@/assets/suite-kitchen.jpg";
import suiteDining from "@/assets/suite-dining.jpg";
import suiteCozy from "@/assets/suite-cozy.jpg";

const suites: Suite[] = [
  {
    id: 1,
    name: "Deluxe King Suite",
    price: "$180",
    period: "per night",
    image: suite1,
    bedrooms: 1,
    bathrooms: 1,
    area: "45 m²",
    description:
      "A spacious haven featuring elegant wooden furnishings, plush king-size bedding, and modern amenities for the discerning traveler seeking comfort and style.",
    features: [
      "Free High-Speed Wi-Fi",
      "Premium King Bed",
      "Smart TV",
      "Mini Bar",
      "Room Service",
      "Luxury Bathroom",
    ],
  },
  {
    id: 2,
    name: "Premium Queen Suite",
    price: "$160",
    period: "per night",
    image: suite2,
    bedrooms: 1,
    bathrooms: 1,
    area: "40 m²",
    description:
      "Elegantly appointed with premium bedding, ambient lighting, and thoughtful touches that create a serene retreat in the heart of the city.",
    features: [
      "Free High-Speed Wi-Fi",
      "Queen Bed",
      "Smart TV",
      "Work Desk",
      "Coffee Maker",
      "City Views",
    ],
  },
  {
    id: 3,
    name: "Royal Living Suite",
    price: "$280",
    period: "per night",
    image: suiteLiving,
    bedrooms: 2,
    bathrooms: 2,
    area: "75 m²",
    description:
      "Experience refined luxury in our signature suite with a separate living area, designer forest-green accents, and panoramic city views.",
    features: [
      "Separate Living Area",
      "Premium Furnishings",
      "Smart Home Controls",
      "Private Balcony",
      "Concierge Service",
      "Spa Bathroom",
    ],
  },
  {
    id: 4,
    name: "Executive Suite",
    price: "$320",
    period: "per night",
    image: suiteKitchen,
    bedrooms: 2,
    bathrooms: 2,
    area: "85 m²",
    description:
      "A home away from home with a fully equipped modern kitchen, premium appliances, and generous living space for extended stays.",
    features: [
      "Full Kitchen",
      "Washer & Dryer",
      "Dining Area",
      "Walk-in Closet",
      "24/7 Security",
      "Gym Access",
    ],
  },
  {
    id: 5,
    name: "Presidential Suite",
    price: "$450",
    period: "per night",
    image: suiteDining,
    bedrooms: 3,
    bathrooms: 3,
    area: "120 m²",
    description:
      "The pinnacle of luxury living with private dining area, sophisticated interiors, and bespoke services tailored to your every need.",
    features: [
      "Private Dining Room",
      "Butler Service",
      "Premium Bar",
      "Meeting Room",
      "VIP Check-in",
      "Airport Transfer",
    ],
  },
  {
    id: 6,
    name: "Garden View Suite",
    price: "$200",
    period: "per night",
    image: suiteCozy,
    bedrooms: 1,
    bathrooms: 1,
    area: "55 m²",
    description:
      "A cozy retreat with warm wooden tones, contemporary design elements, and serene garden views for a peaceful escape.",
    features: [
      "Garden Views",
      "Private Terrace",
      "Rainfall Shower",
      "Organic Amenities",
      "Yoga Mat",
      "Meditation Space",
    ],
  },
];

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Car, label: "Free Parking" },
  { icon: Coffee, label: "Premium Coffee" },
  { icon: Utensils, label: "Full Kitchen" },
  { icon: Tv, label: "Smart TV" },
  { icon: Shield, label: "24/7 Security" },
];

const Suites = () => {
  const [selectedSuite, setSelectedSuite] = useState<Suite | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // Section observers
  const { controls: heroCtrls, ref: heroRef } = useScrollAnimations({ amount: 0.4 });
  const { controls: ribbonCtrls, ref: ribbonRef } = useScrollAnimations({ amount: 0.35 });
  const { controls: gridCtrls, ref: gridRef } = useScrollAnimations({ amount: 0.2 });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ===== HERO SECTION ===== */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroCtrls}
        variants={staggerContainer}
        className="relative pt-24 pb-24 overflow-hidden"
      >
        {/* Background */}
        <img
          src={suiteLiving}
          alt="Maison Luxe Suites"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/55 to-charcoal/35" />
        
        {/* Decorative Glows */}
        <div className="absolute -left-24 -top-24 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute -right-24 bottom-0 w-[420px] h-[420px] bg-gold-light/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div variants={slideInFromLeft} className="lg:col-span-7 text-cream">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cream/10 ring-1 ring-cream/20 backdrop-blur mb-6">
                <Crown className="w-4 h-4 text-gold mr-2" />
                <span className="text-sm tracking-wide">Our Collection</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-light leading-tight mb-6">
                Find Your{" "}
                <span className="text-gold">Royal Residence</span>
              </h1>
              
              <p className="text-cream/85 text-lg max-w-2xl mb-6">
                Curated suites crafted for the discerning traveler — generous layouts, 
                signature finishes, and vistas that feel like a private gallery.
              </p>

              <div className="inline-flex items-center gap-2 text-cream/90">
                <MapPin className="w-4 h-4 text-gold" />
                Prime City Location
              </div>
            </motion.div>

            <motion.div variants={slideInFromRight} className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-luxury ring-1 ring-cream/10">
                <img
                  src={suite1}
                  alt="Interior preview"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cream/90">
                    <Sparkles className="w-5 h-5 text-gold" />
                    <span className="text-sm">Curated Interiors</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-cream/15 text-cream text-xs ring-1 ring-cream/20">
                    Premium Finishes
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== AMENITIES RIBBON ===== */}
      <motion.section
        ref={ribbonRef}
        initial="hidden"
        animate={ribbonCtrls}
        variants={staggerContainer}
        className="bg-secondary/50 py-10 border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {amenities.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-soft border border-border/50"
              >
                <Icon className="w-5 h-5 text-gold" />
                <p className="font-medium text-foreground text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== SUITES GRID ===== */}
      <motion.section
        ref={gridRef}
        initial="hidden"
        animate={gridCtrls}
        variants={staggerContainer}
        className="py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Accommodations
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Our Luxury <span className="text-gold">Suites</span>
            </h2>
            <div className="w-20 h-px bg-gold mx-auto mb-8" />
            <p className="text-muted-foreground text-lg">
              Each suite is thoughtfully designed to provide the ultimate in comfort, 
              style, and sophistication for your stay.
            </p>
          </motion.div>

          {/* Suites Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {suites.map((suite) => (
              <motion.article
                key={suite.id}
                variants={scaleIn}
                className="group relative rounded-2xl overflow-hidden shadow-elegant cursor-pointer"
                onClick={() => setSelectedSuite(suite)}
              >
                {/* Image */}
                <div className="relative h-[320px] md:h-[360px]">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />

                  {/* Bottom Info */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div className="text-cream">
                      <h3 className="font-display text-2xl md:text-3xl font-light tracking-wide">
                        {suite.name}
                      </h3>
                      <div className="mt-2 text-sm flex items-center gap-4 opacity-90">
                        <span className="inline-flex items-center gap-1">
                          <Bed className="w-4 h-4 text-gold" /> {suite.bedrooms}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Bath className="w-4 h-4 text-gold" /> {suite.bathrooms}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Square className="w-4 h-4 text-gold" /> {suite.area}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-cream">
                      <div className="text-xl md:text-2xl font-display">{suite.price}</div>
                      <div className="text-xs opacity-90">{suite.period}</div>
                    </div>
                  </div>

                  {/* Hover Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="gold"
                      size="sm"
                      className="backdrop-blur"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSuite(suite);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ===== SPECIAL OFFERS ===== */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Crown className="w-12 h-12 text-gold mx-auto mb-6" />
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Exclusive Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-6">
              Extended Stay <span className="text-gold">Discount</span>
            </h2>
            <div className="w-20 h-px bg-gold mx-auto mb-8" />
            <p className="text-cream/70 text-lg mb-8">
              Book 7 nights or more and enjoy 20% off your entire stay. 
              Experience the full Maison Luxe lifestyle with our extended stay package.
            </p>
            <a href="/reserve">
              <Button variant="gold" size="xl">
                Book Extended Stay
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <Gallery />

      <Footer />

      {/* Room Modal */}
      <AnimatePresence>
        {selectedSuite && (
          <RoomModal room={selectedSuite} onClose={() => setSelectedSuite(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Suites;
