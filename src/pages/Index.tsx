import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Crown, Shield, Star, Clock, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BookingBar } from "@/components/BookingBar";
import { SuiteCard } from "@/components/SuiteCard";

import heroImage from "@/assets/hero-living.jpg";
import suite1 from "@/assets/suite-bedroom-1.jpg";
import suite2 from "@/assets/suite-living.jpg";
import suite3 from "@/assets/suite-dining.jpg";

const suites = [
  {
    image: suite1,
    title: "Deluxe King Suite",
    description: "A spacious haven featuring elegant wooden furnishings, plush bedding, and modern amenities for the discerning traveler.",
    price: "$180/night",
    guests: 2,
    size: "45 m²",
  },
  {
    image: suite2,
    title: "Royal Living Suite",
    description: "Experience refined luxury in our signature suite with a separate living area, designer interiors, and panoramic city views.",
    price: "$280/night",
    guests: 4,
    size: "75 m²",
  },
  {
    image: suite3,
    title: "Presidential Suite",
    description: "The pinnacle of luxury living with private dining, full kitchen, and bespoke services tailored to your every need.",
    price: "$450/night",
    guests: 6,
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
    icon: Clock,
    title: "Concierge Service",
    description: "Round-the-clock assistance for all your needs",
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

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          <img
            src={heroImage}
            alt="Maison Luxe Interior"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80"
            style={{ opacity: heroOpacity }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Crown className="w-14 h-14 text-gold mx-auto mb-6 animate-float" />

            <p className="text-gold text-sm md:text-base uppercase tracking-[0.4em] mb-4 font-medium">
              Welcome to
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream tracking-tight mb-4">
              MAISON LUXE
            </h1>

            <p className="text-cream/60 text-sm uppercase tracking-[0.3em] mb-8">
              By Whistling Woods
            </p>

            <div className="w-24 h-px bg-gold mx-auto mb-8" />

            <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Experience the art of refined living in our exclusive collection of 
              luxury suites, where every moment is crafted for perfection.
            </p>
          </motion.div>
        </div>

        {/* Booking Bar */}
        <div className="relative z-10 w-full px-6 mt-8">
          <BookingBar />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Discover Excellence
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Where Luxury Meets{" "}
              <span className="text-gold">Comfort</span>
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Maison Luxe, we redefine hospitality with meticulously designed spaces 
              that blend contemporary elegance with timeless sophistication. Every suite 
              tells a story of refined taste and uncompromising quality.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-8 rounded-2xl bg-card hover:shadow-elegant transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
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

      {/* Featured Suites */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Our Collection
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Exceptional{" "}
              <span className="text-gold">Suites</span>
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover our handpicked selection of premium accommodations, 
              each designed to provide an unforgettable stay.
            </p>
          </motion.div>

          {/* Suite Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {suites.map((suite, index) => (
              <SuiteCard key={suite.title} {...suite} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Guest Experiences
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              What Our Guests{" "}
              <span className="text-gold">Say</span>
            </h2>
            <div className="divider-gold" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Mitchell",
                location: "New York, USA",
                text: "An absolutely extraordinary experience. The attention to detail and impeccable service exceeded all expectations. This is luxury hospitality at its finest.",
              },
              {
                name: "James Chen",
                location: "Singapore",
                text: "From the moment we arrived, we were enveloped in sophistication. The suite was a masterpiece of design with stunning city views.",
              },
              {
                name: "Emma Williams",
                location: "London, UK",
                text: "Simply sublime. Every aspect of our stay was thoughtfully curated. The seamless blend of modern luxury with warm hospitality made this unforgettable.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display text-lg text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
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
          className="relative z-10 text-center px-6"
        >
          <Crown className="w-12 h-12 text-gold mx-auto mb-6 animate-float" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-6">
            Begin Your{" "}
            <span className="text-gold">Luxury Experience</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-8" />
          <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover a world where exceptional design meets unparalleled service. 
            Your extraordinary journey begins at Maison Luxe.
          </p>
          <a href="/reserve">
            <button className="btn-gold px-10 py-4 rounded-lg text-base">
              Reserve Your Suite
            </button>
          </a>
        </motion.div>
      </section>

      {/* Properties We Manage Section */}
      <section className="py-20 bg-background">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic text-foreground mb-8">
              Properties We Manage
            </h2>
            
            <Link to="/suites">
              <button className="btn-gold px-8 py-3 rounded-full text-sm uppercase tracking-wider mb-12">
                Explore Our Properties
              </button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Link to="/suites" className="group text-center">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-gold transition-colors">
                  Unreal Homes
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                  Dar es Salaam
                </p>
              </Link>
              
              <Link to="/suites" className="group text-center">
                <h3 className="font-display text-xl md:text-2xl font-medium italic text-foreground group-hover:text-gold transition-colors">
                  Staycation Villas
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                  Dodoma
                </p>
              </Link>
              
              <Link to="/suites" className="group text-center">
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground group-hover:text-gold transition-colors">
                  Maison Luxe
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                  Dodoma
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
