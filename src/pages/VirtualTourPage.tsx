import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PanoramaViewer } from "@/components/PanoramaViewer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ShimmerButton";
import { Play, Eye, MapPin, Rotate3D, MousePointer, Move } from "lucide-react";

const tourPreviews = [
  {
    id: "bedroom",
    title: "Master Bedroom",
    description: "Experience our luxurious king-size suite",
    image: "/panoramas/bedroom-360.jpg",
  },
  {
    id: "living",
    title: "Living Room",
    description: "Elegant living space with designer furnishings",
    image: "/panoramas/living-360.jpg",
  },
  {
    id: "suite",
    title: "Presidential Suite",
    description: "The pinnacle of luxury accommodation",
    image: "/panoramas/suite-360.jpg",
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
                <span className="text-foreground">360° Virtual </span>
                <span className="text-gold">Tour</span>
              </h1>
              <div className="divider-gold mb-8" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Immerse yourself in our exquisite suites with true 360-degree panoramic views. 
                Explore every corner as if you were there.
              </p>
              <Button
                variant="gold"
                size="lg"
                onClick={() => startTour("bedroom")}
                className="px-10 py-6 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Virtual Tour
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: Rotate3D,
                  title: "Full 360° View",
                  description: "Look in any direction with immersive panoramic photography",
                },
                {
                  icon: MousePointer,
                  title: "Interactive Hotspots",
                  description: "Click markers to learn about features and navigate rooms",
                },
                {
                  icon: Move,
                  title: "Seamless Navigation",
                  description: "Move between connected spaces as if walking through",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Previews */}
        <section className="py-20 bg-secondary/30">
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
                <span className="text-gold">Our Spaces</span>
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
                      <span className="text-sm uppercase tracking-wider">360° Panorama</span>
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

        {/* CTA */}
        <section className="py-20 bg-charcoal">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center px-6"
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-6">
              Ready to <span className="text-gold">Experience</span> Luxury?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              After exploring our virtual tour, book your stay and experience these spaces in person.
            </p>
            <ShimmerButton to="/reserve" variant="gold" size="xl">
              Reserve Your Suite
            </ShimmerButton>
          </motion.div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />

      {/* Virtual Tour Modal */}
      <PanoramaViewer
        isOpen={showTour}
        onClose={() => setShowTour(false)}
        initialRoom={initialRoom}
      />
    </div>
  );
};

export default VirtualTourPage;
