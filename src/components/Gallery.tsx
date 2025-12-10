import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import suite1 from "@/assets/suite-bedroom-1.jpg";
import suite2 from "@/assets/suite-bedroom-2.jpg";
import suiteLiving from "@/assets/suite-living.jpg";
import suiteKitchen from "@/assets/suite-kitchen.jpg";
import suiteDining from "@/assets/suite-dining.jpg";
import suiteCozy from "@/assets/suite-cozy.jpg";
import heroLiving from "@/assets/hero-living.jpg";

const galleryImages = [
  { src: heroLiving, alt: "Luxurious Living Space", category: "Living" },
  { src: suite1, alt: "Deluxe King Bedroom", category: "Bedroom" },
  { src: suite2, alt: "Premium Queen Suite", category: "Bedroom" },
  { src: suiteLiving, alt: "Royal Living Suite", category: "Living" },
  { src: suiteKitchen, alt: "Modern Kitchen", category: "Kitchen" },
  { src: suiteDining, alt: "Elegant Dining Area", category: "Dining" },
  { src: suiteCozy, alt: "Cozy Interior Details", category: "Details" },
];

export const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Visual Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Explore Our <span className="text-gold">Gallery</span>
          </h2>
          <div className="w-20 h-px bg-gold mx-auto mb-8" />
          <p className="text-muted-foreground text-lg">
            Immerse yourself in the refined elegance of Maison Luxe through our curated collection of images.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`${index === 0 ? "h-[400px] md:h-[500px]" : "h-[200px] md:h-[240px]"}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-gold uppercase tracking-wider">{image.category}</span>
                    <p className="text-cream text-sm mt-1">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-gold text-sm uppercase tracking-wider">
                  {galleryImages[selectedIndex].category}
                </span>
                <p className="text-cream mt-1">{galleryImages[selectedIndex].alt}</p>
                <p className="text-cream/50 text-sm mt-2">
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
