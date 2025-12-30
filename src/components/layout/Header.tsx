import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Dining", href: "#dining" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-forest text-cream py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
            <a href="mailto:info@grandoakhotel.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              info@grandoakhotel.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon - Sun: 24/7 Front Desk</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-cream/95 backdrop-blur-md shadow-elegant top-0" 
            : "bg-transparent top-0 md:top-10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a 
              href="#home"
              className="flex flex-col items-center"
              whileHover={{ scale: 1.02 }}
            >
              <span className={`font-heading text-2xl tracking-wider ${isScrolled ? "text-forest" : "text-cream"}`}>
                GRAND OAK
              </span>
              <span className={`text-xs tracking-[0.3em] uppercase ${isScrolled ? "text-gold" : "text-gold"}`}>
                Hotel & Restaurant
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                    isScrolled ? "text-forest" : "text-cream"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Book Now Button */}
            <div className="hidden lg:block">
              <Button 
                variant={isScrolled ? "gold" : "hero"} 
                size="lg"
                onClick={() => scrollToSection("#rooms")}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-forest" : "text-cream"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-forest" : "text-cream"}`} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream pt-32 px-6 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-heading text-forest hover:text-gold transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                variant="gold" 
                size="xl"
                onClick={() => scrollToSection("#rooms")}
                className="mt-6"
              >
                Book Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
