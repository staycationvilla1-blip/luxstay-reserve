import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/90">
      <div className="w-full px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <img src={logo} alt="Maison Luxe" className="h-20 w-auto brightness-0 invert opacity-90" />
            <p className="text-cream/70 leading-relaxed">
              Experience unparalleled luxury in the heart of the city. 
              Where elegance meets comfort.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Suites", "About", "Reserve Now"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : item === "Reserve Now" ? "/reserve" : `/${item.toLowerCase()}`}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-cream mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <span className="text-cream/70">
                  123 Luxury Avenue<br />
                  City Center, State 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+1234567890" className="text-cream/70 hover:text-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:hello@maisonluxe.com" className="text-cream/70 hover:text-gold transition-colors">
                  hello@maisonluxe.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-xl text-cream mb-6">Stay Updated</h4>
            <p className="text-cream/70 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-cream/5 border border-cream/20 rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gold text-charcoal font-medium py-3 rounded-lg hover:bg-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10 px-6 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} Maison Luxe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
