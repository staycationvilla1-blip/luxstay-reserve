import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RelaxingExperiences } from "@/components/RelaxingExperiences";
import { RestaurantMenu } from "@/components/RestaurantMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Crown } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.985, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  out: { opacity: 0, y: -24, scale: 0.995, transition: { duration: 0.35, ease: "easeIn" } },
};

const childRise: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  out: { opacity: 0, y: -12, transition: { duration: 0.3, ease: "easeIn" } },
};

const Amenities = () => {
  const { controls: titleCtrls, ref: titleRef } = useScrollAnimations({ amount: 0.35 });
  const { controls: menuCtrls, ref: menuRef } = useScrollAnimations({ amount: 0.35 });
  const { controls: relaxCtrls, ref: relaxRef } = useScrollAnimations({ amount: 0.35 });

  useEffect(() => {
    try {
      if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    } catch {}
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Title Section */}
        <motion.section
          ref={titleRef}
          initial="hidden"
          animate={titleCtrls}
          variants={sectionReveal}
          className="relative py-20 bg-secondary/30 overflow-hidden"
        >
          {/* Soft halo glow behind the crown */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-start justify-center"
            initial={{ opacity: 0.15, scale: 0.9 }}
            animate={{ opacity: 0.3, scale: 1.1 }}
            transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            <div className="mt-6 h-40 w-40 rounded-full bg-gold blur-[90px]" />
          </motion.div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div variants={childRise} className="mb-6">
              <Crown className="w-16 h-16 text-gold mx-auto mb-6 animate-float" />
            </motion.div>

            <motion.h1
              variants={childRise}
              className="font-display text-5xl lg:text-7xl font-light mb-6"
            >
              <span className="text-foreground">Luxury </span>
              <span className="text-gold">Amenities</span>
            </motion.h1>

            <motion.p
              variants={childRise}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Experience world-class facilities and exceptional services designed for the discerning guest.
              Every amenity has been crafted to elevate your stay.
            </motion.p>
          </div>
        </motion.section>

        {/* Restaurant Menu */}
        <motion.section
          ref={menuRef}
          initial="hidden"
          animate={menuCtrls}
          variants={sectionReveal}
          className="relative"
        >
          <RestaurantMenu />
        </motion.section>

        {/* Relaxing Experiences */}
        <motion.section
          ref={relaxRef}
          initial="hidden"
          animate={relaxCtrls}
          variants={sectionReveal}
          className="relative"
        >
          <RelaxingExperiences />
        </motion.section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Amenities;
