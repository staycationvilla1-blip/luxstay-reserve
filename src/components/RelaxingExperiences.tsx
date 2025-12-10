import { motion, type Variants } from "framer-motion";
import { Sparkles, Dumbbell, Waves, Coffee, Leaf, Music } from "lucide-react";

const childRise: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const experiences = [
  {
    icon: Sparkles,
    title: "Luxury Spa",
    description: "Indulge in rejuvenating treatments with our expert therapists using premium organic products.",
    hours: "7:00 AM - 10:00 PM",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art equipment and personal trainers available for your wellness journey.",
    hours: "24 Hours",
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Swim with panoramic views in our temperature-controlled rooftop infinity pool.",
    hours: "6:00 AM - 11:00 PM",
  },
  {
    icon: Coffee,
    title: "Executive Lounge",
    description: "Exclusive access to premium beverages, light bites, and quiet workspaces.",
    hours: "6:00 AM - 12:00 AM",
  },
  {
    icon: Leaf,
    title: "Meditation Garden",
    description: "Find inner peace in our serene outdoor sanctuary with guided meditation sessions.",
    hours: "Sunrise - Sunset",
  },
  {
    icon: Music,
    title: "Live Entertainment",
    description: "Enjoy world-class musicians and performers in our elegant cocktail lounge.",
    hours: "7:00 PM - 1:00 AM",
  },
];

export const RelaxingExperiences = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={childRise} className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Wellness & Recreation
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Relaxing{" "}
            <span className="text-gold">Experiences</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover a world of tranquility and wellness designed to rejuvenate your body, mind, and spirit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={childRise}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 card-hover"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <exp.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {exp.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              <p className="text-gold text-sm font-medium">
                {exp.hours}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelaxingExperiences;
