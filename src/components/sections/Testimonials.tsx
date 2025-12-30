import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Grand Oak exceeded every expectation. From the moment we stepped into the marble lobby, we knew this was going to be an unforgettable experience. The attention to detail is remarkable.",
  },
  {
    id: 2,
    name: "James Mitchell",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    text: "I stay at many hotels for business, but Grand Oak stands apart. The service is impeccable, the restaurant is world-class, and the suites are truly exceptional. My new favorite.",
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    role: "Lifestyle Influencer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "The spa at Grand Oak is a sanctuary. I spent three blissful days being pampered with their signature treatments. The rooftop pool at sunset is absolutely magical.",
  },
  {
    id: 4,
    name: "Richard Thompson",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "The Oak Restaurant deserves its Michelin stars. Chef Dubois creates culinary art. The wagyu was perfection, and the wine pairing elevated the entire experience.",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Guest Stories</span>
          <h2 className="font-heading text-4xl md:text-5xl text-forest mt-4 mb-6">
            What Our <span className="italic">Guests Say</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg p-8 md:p-12 shadow-elegant relative"
          >
            <Quote className="absolute top-8 left-8 w-12 h-12 text-gold/20" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Guest Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gold/30"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-heading text-xl text-forest">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-forest/30 text-forest hover:bg-forest hover:text-cream transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold w-6" : "bg-forest/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-forest/30 text-forest hover:bg-forest hover:text-cream transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
