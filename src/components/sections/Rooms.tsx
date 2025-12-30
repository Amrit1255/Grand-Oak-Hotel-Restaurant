import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Wifi, Tv, Coffee, Bath, Maximize, Users } from "lucide-react";
import { toast } from "sonner";
import roomSuite from "@/assets/room-suite.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomStandard from "@/assets/room-standard.jpg";

const rooms = [
  {
    id: 1,
    name: "Royal Suite",
    description: "Indulge in ultimate luxury with panoramic city views, separate living area, and butler service.",
    price: 850,
    image: roomSuite,
    size: "120 m²",
    capacity: "4 Guests",
    amenities: ["King Bed", "Living Room", "Jacuzzi", "Butler Service", "City View"],
    featured: true,
  },
  {
    id: 2,
    name: "Deluxe Room",
    description: "Elegant comfort with premium furnishings and modern amenities for a refined stay.",
    price: 450,
    image: roomDeluxe,
    size: "65 m²",
    capacity: "2 Guests",
    amenities: ["Queen Bed", "Work Desk", "Rain Shower", "Mini Bar"],
  },
  {
    id: 3,
    name: "Classic Room",
    description: "Cozy elegance perfect for couples or solo travelers seeking comfort and style.",
    price: 280,
    image: roomStandard,
    size: "40 m²",
    capacity: "2 Guests",
    amenities: ["Queen Bed", "City View", "Premium Linens", "Coffee Maker"],
  },
];

export const Rooms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const handleBookRoom = (roomName: string, price: number) => {
    toast.success(`Booking ${roomName}`, {
      description: `Room reserved at $${price}/night. Our concierge will contact you shortly.`,
    });
    setSelectedRoom(null);
  };

  return (
    <section id="rooms" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Accommodations</span>
          <h2 className="font-heading text-4xl md:text-5xl text-forest mt-4 mb-6">
            Exquisite <span className="italic">Rooms & Suites</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Each room is a sanctuary of comfort, designed to offer the perfect blend of 
            luxury and tranquility for your stay.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 group ${
                room.featured ? "lg:row-span-1" : ""
              }`}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {room.featured && (
                  <div className="absolute top-4 left-4 bg-gold text-forest-dark text-xs font-semibold px-3 py-1 rounded">
                    FEATURED
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-forest/90 text-cream px-4 py-2 rounded">
                  <span className="text-gold font-heading text-xl">${room.price}</span>
                  <span className="text-sm"> / night</span>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="font-heading text-2xl text-forest mb-2">{room.name}</h3>
                <p className="text-muted-foreground mb-4">{room.description}</p>

                {/* Room Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Maximize className="w-4 h-4 text-gold" />
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gold" />
                    {room.capacity}
                  </span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 4).map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Booking Button */}
                <Button
                  variant="forest"
                  className="w-full"
                  onClick={() => handleBookRoom(room.name, room.price)}
                >
                  Book This Room
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Common Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="font-heading text-2xl text-forest mb-8">All Rooms Include</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Wifi, label: "Free WiFi" },
              { icon: Tv, label: "Smart TV" },
              { icon: Coffee, label: "Nespresso" },
              { icon: Bath, label: "Luxury Bath" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5 text-gold" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
