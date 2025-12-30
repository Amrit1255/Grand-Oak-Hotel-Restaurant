import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  hotel: [
    { name: "About Us", href: "#about" },
    { name: "Our Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
  ],
  dining: [
    { name: "The Oak Restaurant", href: "#dining" },
    { name: "Room Service", href: "#dining" },
    { name: "Private Dining", href: "#dining" },
    { name: "Wine Cellar", href: "#dining" },
  ],
  services: [
    { name: "Spa & Wellness", href: "#amenities" },
    { name: "Events & Weddings", href: "#contact" },
    { name: "Concierge", href: "#contact" },
    { name: "Airport Transfer", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-heading text-3xl tracking-wider text-cream">GRAND OAK</span>
              <span className="block text-xs tracking-[0.3em] uppercase text-gold mt-1">
                Hotel & Restaurant
              </span>
            </div>
            <p className="text-cream/70 mb-6 max-w-sm">
              Experience the art of hospitality at Grand Oak. Where timeless elegance 
              meets modern luxury in the heart of the city.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-forest-dark transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Hotel Links */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Hotel</h4>
            <ul className="space-y-3">
              {footerLinks.hotel.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Dining Links */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Dining</h4>
            <ul className="space-y-3">
              {footerLinks.dining.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Grand Oak Hotel & Restaurant. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-cream/50">
              <button className="hover:text-gold transition-colors">Privacy Policy</button>
              <button className="hover:text-gold transition-colors">Terms of Service</button>
              <button className="hover:text-gold transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gold text-forest-dark rounded-full shadow-gold flex items-center justify-center hover:bg-gold-light transition-colors z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};
