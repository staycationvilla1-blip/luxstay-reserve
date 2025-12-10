import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

// Scroll to top on navigation
const useScrollToTopOnNavigation = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.key]);
};

const navItems = [
  { name: "Home", path: "/" },
  { name: "Suites", path: "/suites" },
  { name: "Virtual Tour", path: "/virtual-tour" },
  { name: "Amenities", path: "/amenities" },
  { name: "About", path: "/about" },
  { name: "Reserve Now", path: "/reserve" },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Scroll to top on navigation
  useScrollToTopOnNavigation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (location.pathname === path) {
      // Already on this page - scroll to top and force refresh by navigating with a new key
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(path, { replace: true, state: { refresh: Date.now() } });
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background shadow-soft py-3"
      >
        <nav className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={(e) => handleNavClick(e, "/")} className="relative z-10">
            <motion.img
              src={logo}
              alt="Maison Luxe"
              className="h-14 md:h-16 w-auto object-contain"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-3">
            {navItems.filter(item => item.name !== "Reserve Now").map((item, index) => (
              <a key={item.path} href={item.path} onClick={(e) => handleNavClick(e, item.path)}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant={location.pathname === item.path ? "nav-active" : "nav"}
                    size="lg"
                    className="gold-underline text-base font-semibold"
                  >
                    {item.name}
                  </Button>
                </motion.div>
              </a>
            ))}
          </div>
          
          {/* Reserve Button - Right Side */}
          <div className="hidden lg:block">
            <a href="/reserve" onClick={(e) => handleNavClick(e, "/reserve")}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button variant="gold" size="default">
                  Reserve Now
                </Button>
              </motion.div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={item.path} onClick={(e) => handleNavClick(e, item.path)}>
                    {item.name === "Reserve Now" ? (
                      <Button variant="gold" size="xl">
                        {item.name}
                      </Button>
                    ) : (
                      <span
                        className={`text-2xl font-display font-light transition-colors ${
                          location.pathname === item.path
                            ? "text-gold"
                            : "text-foreground hover:text-gold"
                        }`}
                      >
                        {item.name}
                      </span>
                    )}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
