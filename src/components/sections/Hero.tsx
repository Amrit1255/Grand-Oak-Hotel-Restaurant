import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-hotel.jpg";

export const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);

  const handleCheckAvailability = () => {
    if (checkIn && checkOut) {
      setShowBookingConfirm(true);
      setTimeout(() => setShowBookingConfirm(false), 3000);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Grand Oak Hotel Lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-6">
              Welcome to Luxury
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight"
          >
            Experience the Art of{" "}
            <span className="italic text-gold">Hospitality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Discover unparalleled luxury at Grand Oak Hotel & Restaurant. 
            Where timeless elegance meets modern comfort in the heart of the city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="heroSolid" size="xl" onClick={() => document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" })}>
              Explore Rooms
            </Button>
            <Button variant="hero" size="xl" onClick={() => document.querySelector("#dining")?.scrollIntoView({ behavior: "smooth" })}>
              View Restaurant
            </Button>
          </motion.div>
        </div>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="bg-cream/95 backdrop-blur-md rounded-lg shadow-elegant p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Check In */}
              <div className="space-y-2">
                <label className="text-forest text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest"
                />
              </div>

              {/* Check Out */}
              <div className="space-y-2">
                <label className="text-forest text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-forest text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex items-end">
                <Button
                  variant="gold"
                  size="xl"
                  className="w-full"
                  onClick={handleCheckAvailability}
                >
                  Check Availability
                </Button>
              </div>
            </div>

            {/* Booking Confirmation Toast */}
            {showBookingConfirm && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 bg-forest text-cream rounded-md text-center"
              >
                ✓ Rooms available! Select your preferred room below.
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cream/60"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};
