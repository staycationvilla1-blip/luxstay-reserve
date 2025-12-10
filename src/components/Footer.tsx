import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/90 overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full px-6 lg:px-12 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.img 
              src={logo} 
              alt="Maison Luxe" 
              className="h-20 w-auto brightness-0 invert opacity-90"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-cream/70 leading-relaxed">
              Experience unparalleled luxury in the heart of the city. 
              Where elegance meets comfort.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gold/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ borderRadius: "50%" }}
                  />
                  <social.icon size={18} className="relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xl text-cream mb-6 relative inline-block">
              Quick Links
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gold"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Suites", path: "/suites" },
                { name: "Virtual Tour", path: "/virtual-tour" },
                { name: "Amenities", path: "/amenities" },
                { name: "About", path: "/about" },
                { name: "Reserve Now", path: "/reserve" },
              ].map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.3 }}
                >
                  <Link
                    to={item.path}
                    className="text-cream/70 hover:text-gold transition-colors flex items-center group"
                  >
                    <motion.span
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      {item.name}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xl text-cream mb-6 relative inline-block">
              Contact Us
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gold"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={18} className="text-gold mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-cream/70">
                  123 Luxury Avenue<br />
                  City Center, State 10001
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={18} className="text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+1234567890" className="text-cream/70 hover:text-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={18} className="text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@maisonluxe.com" className="text-cream/70 hover:text-gold transition-colors">
                  hello@maisonluxe.com
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xl text-cream mb-6 relative inline-block">
              Stay Updated
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gold"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </h4>
            <p className="text-cream/70 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-cream/5 border border-cream/20 rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold focus:bg-cream/10 transition-all duration-300"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gold text-charcoal font-medium py-3 rounded-lg relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Subscribe</span>
                <motion.div
                  className="absolute inset-0 bg-gold-dark"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-cream/10 px-6 lg:px-12 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} Maison Luxe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <motion.a 
              href="#" 
              className="hover:text-gold transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-gold transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};