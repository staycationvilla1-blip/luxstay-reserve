import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { VirtualTour } from "@/components/VirtualTour";
import { Button } from "@/components/ui/button";
import { Play, Eye, MapPin } from "lucide-react";

import suite1 from "@/assets/suite-bedroom-1.jpg";
import suite2 from "@/assets/suite-living.jpg";
import suite3 from "@/assets/suite-dining.jpg";

const tourPreviews = [
  {
    id: "bedroom",
    title: "Master Bedroom",
    description: "Experience our luxurious king-size suite",
    image: suite1,
  },
  {
    id: "living",
    title: "Living Room",
    description: "Elegant living space with designer furnishings",
    image: suite2,
  },
  {
    id: "dining",
    title: "Dining Area",
    description: "Sophisticated dining for memorable evenings",
    image: suite3,
  },
];

const VirtualTourPage = () => {
  const [showTour, setShowTour] = useState(false);
  const [initialRoom, setInitialRoom] = useState("bedroom");

  const startTour = (roomId: string) => {
    setInitialRoom(roomId);
    setShowTour(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Eye className="w-16 h-16 text-gold mx-auto mb-6 animate-float" />
              <h1 className="font-display text-5xl lg:text-7xl font-light mb-6">
                <span className="text-foreground">Virtual </span>
                <span className="text-gold">Tour</span>
              </h1>
              <div className="divider-gold mb-8" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Explore our exquisite suites from anywhere in the world. 
                Navigate through rooms with interactive 360° views and discover every luxurious detail.
              </p>
              <Button
                variant="gold"
                size="lg"
                onClick={() => startTour("bedroom")}
                className="px-10 py-6 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Full Tour
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Tour Previews */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Choose Your Starting Point
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                Explore{" "}
                <span className="text-gold">Individual Rooms</span>
              </h2>
              <div className="divider-gold" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tourPreviews.map((preview, index) => (
                <motion.div
                  key={preview.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer card-hover"
                  onClick={() => startTour(preview.id)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={preview.image}
                      alt={preview.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 text-gold mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm uppercase tracking-wider">360° View</span>
                    </div>
                    <h3 className="font-display text-2xl text-cream mb-2">
                      {preview.title}
                    </h3>
                    <p className="text-cream/70 text-sm">
                      {preview.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-5 h-5 text-charcoal ml-0.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: "Interactive Hotspots",
                  description: "Click on points of interest to learn about each feature and amenity.",
                },
                {
                  title: "Room Navigation",
                  description: "Seamlessly move between connected rooms as if walking through the suite.",
                },
                {
                  title: "Zoom & Pan",
                  description: "Get closer views of details with intuitive zoom and rotation controls.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8"
                >
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />

      {/* Virtual Tour Modal */}
      {showTour && (
        <VirtualTour
          isOpen={showTour}
          onClose={() => setShowTour(false)}
          initialRoom={initialRoom}
        />
      )}
    </div>
  );
};

export default VirtualTourPage;
