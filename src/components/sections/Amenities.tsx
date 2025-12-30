import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Dumbbell, Waves, Car, Wifi, Coffee, Utensils, Clock } from "lucide-react";
import spaImage from "@/assets/spa.jpg";
import poolImage from "@/assets/pool.jpg";

const amenities = [
  {
    icon: Sparkles,
    title: "Luxury Spa",
    description: "Rejuvenate with our signature treatments and therapies",
    image: spaImage,
    hours: "9:00 AM - 9:00 PM",
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Rooftop pool with breathtaking city panoramas",
    image: poolImage,
    hours: "6:00 AM - 10:00 PM",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art equipment and personal trainers",
    hours: "24 Hours",
  },
  {
    icon: Utensils,
    title: "Room Service",
    description: "Gourmet dining delivered to your suite",
    hours: "24 Hours",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Complimentary parking with electric charging",
    hours: "24 Hours",
  },
  {
    icon: Coffee,
    title: "Executive Lounge",
    description: "Exclusive access for suite guests",
    hours: "6:00 AM - 11:00 PM",
  },
];

export const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Hotel Services</span>
          <h2 className="font-heading text-4xl md:text-5xl text-forest mt-4 mb-6">
            World-Class <span className="italic">Amenities</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Indulge in our exceptional facilities designed to enhance every moment of your stay.
          </p>
        </motion.div>

        {/* Featured Amenities with Images */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {amenities.slice(0, 2).map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg shadow-elegant"
            >
              <img
                src={amenity.image}
                alt={amenity.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-hero" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <amenity.icon className="w-8 h-8 text-gold" />
                  <h3 className="font-heading text-2xl text-cream">{amenity.title}</h3>
                </div>
                <p className="text-cream/80 mb-2">{amenity.description}</p>
                <div className="flex items-center gap-2 text-gold text-sm">
                  <Clock className="w-4 h-4" />
                  {amenity.hours}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.slice(2).map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <amenity.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-forest mb-2">{amenity.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{amenity.description}</p>
              <div className="flex items-center gap-2 text-gold text-xs">
                <Clock className="w-3 h-3" />
                {amenity.hours}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-forest rounded-lg p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-cream mb-2">
                Need Something Special?
              </h3>
              <p className="text-cream/70">
                Our concierge team is available 24/7 to arrange any request.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-forest-light px-4 py-2 rounded-full text-cream text-sm">
                <Wifi className="w-4 h-4 inline mr-2" />
                Free WiFi
              </div>
              <div className="bg-forest-light px-4 py-2 rounded-full text-cream text-sm">
                <Clock className="w-4 h-4 inline mr-2" />
                24/7 Service
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
