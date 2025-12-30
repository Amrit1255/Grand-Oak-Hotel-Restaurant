import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import restaurantImage from "@/assets/restaurant.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import spaImage from "@/assets/spa.jpg";
import poolImage from "@/assets/pool.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSeafood from "@/assets/dish-seafood.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const galleryImages = [
  { src: heroImage, title: "Grand Lobby", category: "Hotel" },
  { src: restaurantImage, title: "The Oak Restaurant", category: "Dining" },
  { src: roomSuite, title: "Royal Suite", category: "Rooms" },
  { src: poolImage, title: "Infinity Pool", category: "Amenities" },
  { src: spaImage, title: "Wellness Spa", category: "Amenities" },
  { src: roomDeluxe, title: "Deluxe Room", category: "Rooms" },
  { src: dishSteak, title: "Wagyu Ribeye", category: "Cuisine" },
  { src: dishSeafood, title: "Maine Lobster", category: "Cuisine" },
  { src: dishDessert, title: "Chocolate Fondant", category: "Cuisine" },
];

const categories = ["All", "Hotel", "Rooms", "Dining", "Cuisine", "Amenities"];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    const newIndex = direction === "next" 
      ? (lightboxIndex + 1) % filteredImages.length
      : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(newIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Visual Journey</span>
          <h2 className="font-heading text-4xl md:text-5xl text-forest mt-4 mb-6">
            Our <span className="italic">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-forest text-cream font-semibold"
                  : "bg-card text-muted-foreground hover:text-forest border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index === 0 ? "h-full min-h-[400px]" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h4 className="font-heading text-xl text-cream">{image.title}</h4>
                  <span className="text-gold text-sm">{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-6 text-cream hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <motion.img
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={filteredImages[lightboxIndex].src}
            alt={filteredImages[lightboxIndex].title}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-6 text-cream hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-8 text-center">
            <h4 className="font-heading text-2xl text-cream">{filteredImages[lightboxIndex].title}</h4>
            <span className="text-gold">{filteredImages[lightboxIndex].category}</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};
