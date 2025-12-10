import { motion } from "framer-motion";

export const LocationMap = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium tracking-widest text-sm uppercase mb-4 block">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Our Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conveniently located at Kisasa Center B in the heart of Dodoma, Tanzania
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/20"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.123456789!2d35.7494!3d-6.1731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKisasa%20Center%20B%2C%20Dodoma%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maison Luxe Apartments Location"
            className="w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-display text-xl text-foreground">Maison Luxe Apartments</h3>
                <p className="text-muted-foreground">Kisasa Center B, Dodoma, Tanzania</p>
              </div>
              <a
                href="https://www.google.com/maps/search/Kisasa+Center+B+Dodoma+Tanzania"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
