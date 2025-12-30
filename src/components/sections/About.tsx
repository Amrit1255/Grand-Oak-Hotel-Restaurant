import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Users, Star } from "lucide-react";
import restaurantImage from "@/assets/restaurant.jpg";

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Star, value: "4.9", label: "Guest Rating" },
  { icon: Users, value: "50K+", label: "Happy Guests" },
  { icon: Clock, value: "24/7", label: "Concierge Service" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={restaurantImage}
                alt="Grand Oak Restaurant"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold rounded-lg z-0" />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-forest text-cream p-6 rounded-lg shadow-lg z-20"
            >
              <div className="text-center">
                <span className="block text-4xl font-heading text-gold">★★★★★</span>
                <span className="text-sm mt-2 block">Forbes Travel Guide</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Our Story</span>
            <h2 className="font-heading text-4xl md:text-5xl text-forest mt-4 mb-6">
              A Legacy of <span className="italic">Elegance</span>
            </h2>
            <div className="w-20 h-1 bg-gold mb-8" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Since 1998, Grand Oak Hotel & Restaurant has been the epitome of luxury hospitality 
              in the heart of the city. Our historic building, with its timeless architecture, 
              has welcomed discerning travelers from around the world.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every detail at Grand Oak speaks of refinement – from our meticulously appointed 
              rooms to our award-winning restaurant. We believe in creating experiences that 
              linger in memory long after departure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="text-3xl font-heading text-forest">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
