import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Utensils, Wine, Calendar } from "lucide-react";
import { toast } from "sonner";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSeafood from "@/assets/dish-seafood.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import restaurantImage from "@/assets/restaurant.jpg";

const menuCategories = [
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Course" },
  { id: "desserts", name: "Desserts" },
  { id: "wines", name: "Wine Selection" },
];

const menuItems = {
  starters: [
    { name: "Truffle Soup", description: "Black truffle, wild mushrooms, cream", price: 28 },
    { name: "Foie Gras Terrine", description: "Fig compote, brioche toast", price: 38 },
    { name: "Oysters Rockefeller", description: "Spinach, pernod, parmesan", price: 32 },
  ],
  mains: [
    { name: "Wagyu Ribeye", description: "A5 Japanese wagyu, bone marrow butter, truffle jus", price: 125, image: dishSteak },
    { name: "Butter Poached Lobster", description: "Maine lobster, champagne beurre blanc", price: 95, image: dishSeafood },
    { name: "Duck Confit", description: "Cherry reduction, roasted vegetables", price: 58 },
  ],
  desserts: [
    { name: "Chocolate Fondant", description: "Molten center, raspberry coulis, gold leaf", price: 22, image: dishDessert },
    { name: "Crème Brûlée", description: "Tahitian vanilla, caramelized sugar", price: 18 },
    { name: "Cheese Selection", description: "Artisanal cheeses, honeycomb, walnuts", price: 28 },
  ],
  wines: [
    { name: "Dom Pérignon 2012", description: "Champagne, France", price: 350 },
    { name: "Opus One 2019", description: "Napa Valley, California", price: 495 },
    { name: "Château Margaux 2015", description: "Bordeaux, France", price: 850 },
  ],
};

export const Dining = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("mains");
  const [reservationForm, setReservationForm] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
  });

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation Confirmed!", {
      description: `Table for ${reservationForm.guests} on ${reservationForm.date} at ${reservationForm.time}`,
    });
    setReservationForm({ date: "", time: "", guests: "2", name: "", email: "" });
  };

  return (
    <section id="dining" className="py-24 bg-forest" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Culinary Excellence</span>
          <h2 className="font-heading text-4xl md:text-5xl text-cream mt-4 mb-6">
            The Oak <span className="italic text-gold">Restaurant</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-cream/80 text-lg">
            Experience world-class cuisine crafted by our Michelin-starred chef. 
            Every dish tells a story of passion and perfection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Menu Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-gold text-forest-dark font-semibold"
                      : "text-cream/70 hover:text-gold border border-cream/30"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="space-y-6">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 items-start p-4 rounded-lg hover:bg-forest-light/50 transition-colors"
                >
                  {"image" in item && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading text-xl text-cream">{item.name}</h4>
                      <span className="text-gold font-heading text-lg">${item.price}</span>
                    </div>
                    <p className="text-cream/60 text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Restaurant Info */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3 text-cream/80">
                <Clock className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-sm text-cream/60">Hours</div>
                  <div>6:00 PM - 11:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <Utensils className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-sm text-cream/60">Dress Code</div>
                  <div>Smart Casual</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-cream rounded-lg p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-gold" />
                <h3 className="font-heading text-2xl text-forest">Reserve a Table</h3>
              </div>

              <form onSubmit={handleReservation} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-forest text-sm font-medium block mb-2">Date</label>
                    <input
                      type="date"
                      required
                      value={reservationForm.date}
                      onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
                      className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest"
                    />
                  </div>
                  <div>
                    <label className="text-forest text-sm font-medium block mb-2">Time</label>
                    <select
                      required
                      value={reservationForm.time}
                      onChange={(e) => setReservationForm({ ...reservationForm, time: e.target.value })}
                      className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest"
                    >
                      <option value="">Select time</option>
                      {["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"].map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-forest text-sm font-medium block mb-2">Number of Guests</label>
                  <select
                    value={reservationForm.guests}
                    onChange={(e) => setReservationForm({ ...reservationForm, guests: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-forest text-sm font-medium block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={reservationForm.name}
                    onChange={(e) => setReservationForm({ ...reservationForm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label className="text-forest text-sm font-medium block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={reservationForm.email}
                    onChange={(e) => setReservationForm({ ...reservationForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest placeholder:text-muted-foreground"
                  />
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full mt-4">
                  Confirm Reservation
                </Button>
              </form>

              {/* Restaurant Image */}
              <img
                src={restaurantImage}
                alt="The Oak Restaurant"
                className="w-full h-48 object-cover rounded-lg mt-6"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
