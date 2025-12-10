import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Crown, Heart, Award, Users } from "lucide-react";

import aboutImage from "@/assets/suite-dining.jpg";
import teamImage from "@/assets/suite-living.jpg";

const values = [
  {
    icon: Crown,
    title: "Excellence",
    description: "We pursue perfection in every detail, from the thread count of our linens to the warmth of our welcome.",
  },
  {
    icon: Heart,
    title: "Hospitality",
    description: "Genuine care and personalized attention form the foundation of every guest experience.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Only the finest materials, furnishings, and amenities meet our exacting standards.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in creating connections and supporting the communities we serve.",
  },
];

const stats = [
  { number: "15+", label: "Luxury Suites" },
  { number: "5000+", label: "Happy Guests" },
  { number: "4.9", label: "Average Rating" },
  { number: "24/7", label: "Concierge Service" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={aboutImage}
            alt="About Maison Luxe"
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
              Our Story
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-6">
              About Maison Luxe
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-6" />
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              A legacy of luxury, a commitment to excellence, 
              and a passion for creating unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Est. 2020
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                The Art of <span className="text-gold">Refined Living</span>
              </h2>
              <div className="w-20 h-px bg-gold mb-8" />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Maison Luxe was born from a simple vision: to create a sanctuary 
                  where luxury meets comfort, and where every guest feels like royalty. 
                  Founded by Whistling Woods, our journey began with a commitment to 
                  redefine hospitality standards.
                </p>
                <p>
                  Our properties are more than just accommodations—they are carefully 
                  curated experiences. From the selection of premium furnishings to 
                  the training of our dedicated staff, every element is designed to 
                  exceed expectations.
                </p>
                <p>
                  Today, Maison Luxe stands as a testament to our unwavering dedication 
                  to excellence. Each suite tells a story of meticulous attention to 
                  detail, blending contemporary design with timeless elegance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={teamImage}
                  alt="Maison Luxe Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl text-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-cream/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Our Core <span className="text-gold">Values</span>
            </h2>
            <div className="divider-gold" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-8 rounded-2xl bg-card hover:shadow-elegant transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-6"
        >
          <Crown className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Experience <span className="text-gold">Maison Luxe</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            We invite you to discover the Maison Luxe difference. 
            Your extraordinary journey begins with a single reservation.
          </p>
          <a href="/reserve">
            <button className="btn-gold px-10 py-4 rounded-lg">
              Make a Reservation
            </button>
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
