import { motion } from "framer-motion";

export const LocationMap = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Find{" "}
            <span className="text-gold">Our Location</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Located in the heart of Dodoma at Kisasa B Centre
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5892!2d35.8059714!3d-6.154527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184de552d9f881d7%3A0xaa4ef966678bf581!2sMaison%20Luxe%20Apartments!5e0!3m2!1sen!2stz!4v1734271234567"
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
                <p className="text-muted-foreground">Kisasa B Centre, Dodoma, Tanzania</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Maison+Luxe+Apartments/@-6.154527,35.8059714,17z"
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