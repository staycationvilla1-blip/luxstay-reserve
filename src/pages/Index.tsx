import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Crown, Shield, Star, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BookingBar } from "@/components/BookingBar";
import { SuiteCard } from "@/components/SuiteCard";
import { ShimmerButton } from "@/components/ShimmerButton";
import { LocationMap } from "@/components/LocationMap";

import heroImage from "@/assets/hero-living.jpg";
import suite1 from "@/assets/suite-bedroom-1.jpg";
import suite2 from "@/assets/suite-living.jpg";
import suite3 from "@/assets/suite-dining.jpg";

const suites = [
  {
    image: suite1,
    title: "Deluxe Studio",
    description: "A spacious haven featuring elegant wooden furnishings, plush bedding, and modern amenities for the discerning traveler.",
    price: "$81",
    guests: 2,
    size: "45 m²",
  },
  {
    image: suite2,
    title: "One Bedroom Suite - No Dining Room",
    description: "Experience refined luxury in our signature suite with a separate living area, designer interiors, and panoramic city views.",
    price: "$101",
    guests: 2,
    size: "75 m²",
  },
  {
    image: suite3,
    title: "1 Bedroom Suite - With Dining Room",
    description: "The pinnacle of luxury living with private dining, full kitchen, and bespoke services tailored to your every need.",
    price: "$121",
    guests: 2,
    size: "120 m²",
  },
];

const features = [
  {
    icon: Crown,
    title: "Luxury Experience",
    description: "Every detail curated for exceptional comfort and elegance",
  },
  {
    icon: Shield,
    title: "Premium Security",
    description: "24/7 security and privacy for your peace of mind",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Impeccable cleanliness with premium amenities",
  },
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Enhanced Responsive */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex flex-col items-center justify-start sm:justify-center overflow-hidden"
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          <img
            src={heroImage}
            alt="Maison Luxe Interior"
            className="w-full h-full object-cover object-center"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80"
            style={{ opacity: heroOpacity }}
          />
        </motion.div>

        {/* Hero Content - Responsive Typography & Spacing */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto pt-40 sm:pt-0 md:pt-0 lg:pt-0 pb-32 sm:pb-40 md:pb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-gold text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 font-medium">
              Welcome to
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-cream tracking-tight mb-3 sm:mb-4 leading-tight">
              MAISON LUXE
            </h1>

            <p className="text-cream/60 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8">
              By Whistling Woods
            </p>

            <div className="w-16 sm:w-20 md:w-24 h-px bg-gold mx-auto mb-6 sm:mb-8" />

            <p className="hidden sm:block text-cream/80 text-lg md:text-xl lg:text-2xl max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-4">
              Experience the art of refined living in our exclusive collection of 
              luxury suites, where every moment is crafted for perfection.
            </p>
          </motion.div>
        </div>

        {/* Booking Bar - Responsive Positioning */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <BookingBar />
        </div>

        {/* Scroll Indicator - Hidden on small mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section - Enhanced Responsive */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
              Discover Excellence
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6 px-4">
              Where Luxury Meets{" "}
              <span className="text-gold">Comfort</span>
            </h2>
            <div className="divider-gold mb-6 sm:mb-8" />
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-4">
              At Maison Luxe, we redefine hospitality with meticulously designed spaces 
              that blend contemporary elegance with timeless sophistication. Every suite 
              tells a story of refined taste and uncompromising quality.
            </p>
          </motion.div>

          {/* Features Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 sm:p-8 rounded-2xl bg-card hover:shadow-elegant transition-all duration-500 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Suites - Enhanced Responsive */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary/30">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          >
            <p className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
              Our Collection
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6 px-4">
              Exceptional{" "}
              <span className="text-gold">Suites</span>
            </h2>
            <div className="divider-gold mb-6 sm:mb-8" />
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-4">
              Discover our handpicked selection of premium accommodations, 
              each designed to provide an unforgettable stay.
            </p>
          </motion.div>

          {/* Suite Cards - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {suites.map((suite, index) => (
              <SuiteCard key={suite.title} {...suite} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced Responsive */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          >
            <p className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
              Guest Experiences
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4 sm:mb-6 px-4">
              What Our Guests{" "}
              <span className="text-gold">Say</span>
            </h2>
            <div className="divider-gold" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Isaac",
                location: "Maison Luxe Studio • Nov 2025",
                text: "Good customer care, clean. I enjoyed my staying and I definitely stay there when ever I visit Dodoma.",
              },
              {
                name: "Angela",
                location: "Maison Luxe Studio • Sept 2025",
                text: "Elegance and comfort. This space became home as soon as we entered. The ambiance and helpfulness of the staff was amazing. Amazing hosts that made our stay memorable. Nothing was a miss.",
              },
              {
                name: "Jovin",
                location: "Maison Luxe Suite • Sept 2025",
                text: "A truly exceptional stay - a hidden gem! Communication with the host, Ester, was effective and prompt from the start. The service provided was beyond my expectations. I was pleasantly surprised by the complimentary shuttle and breakfast, which added immense value to my stay. The property was impeccably clean, and the staff were incredibly kind and helpful, making me feel right at home.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-card p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500"
              >
                <div className="flex gap-1 mb-5 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display text-base sm:text-lg text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LocationMap />

      {/* Properties We Manage - Enhanced Responsive */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic text-foreground mb-6 sm:mb-8 px-4">
              Properties We Manage
            </h2>
            
            <Link to="/suites">
              <button className="btn-gold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider mb-10 sm:mb-12 hover:scale-105 transition-transform">
                Explore Our Properties
              </button>
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
              <Link to="/suites" className="group text-center p-4 sm:p-0 hover:bg-background/50 rounded-xl transition-colors">
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-foreground group-hover:text-gold transition-colors">
                  Unreal Homes
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider mt-1">
                  Dar es Salaam
                </p>
              </Link>
              
              <Link to="/suites" className="group text-center p-4 sm:p-0 hover:bg-background/50 rounded-xl transition-colors">
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-medium italic text-foreground group-hover:text-gold transition-colors">
                  Staycation Villas
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider mt-1">
                  Dodoma
                </p>
              </Link>
              
              <Link to="/suites" className="group text-center p-4 sm:p-0 hover:bg-background/50 rounded-xl transition-colors sm:col-span-2 lg:col-span-1">
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-medium text-foreground group-hover:text-gold transition-colors">
                  Maison Luxe
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider mt-1">
                  Dodoma
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced Responsive */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${suite3})` }}
        >
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 md:px-8"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-4 sm:mb-6 px-4 leading-tight">
            Begin Your{" "}
            <span className="text-gold">Luxury Experience</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gold mx-auto mb-6 sm:mb-8" />
          <p className="text-cream/80 text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
            Discover a world where exceptional design meets unparalleled service. 
            Your extraordinary journey begins at Maison Luxe.
          </p>
          <ShimmerButton 
            variant="gold" 
            size="xl"
            onClick={() => window.open('https://live.ipms247.com/booking/book-rooms-maisonluxeapartments', '_blank', 'noopener,noreferrer')}
            className="text-sm sm:text-base px-6 sm:px-8 md:px-10 py-3 sm:py-4"
          >
            Reserve Your Suite
          </ShimmerButton>
        </motion.div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;