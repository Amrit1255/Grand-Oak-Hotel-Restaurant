import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message Sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      lines: ["123 Luxury Avenue", "Downtown District", "New York, NY 10001"],
    },
    {
      icon: Phone,
      title: "Phone",
      lines: ["+1 (234) 567-890", "+1 (234) 567-891"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["info@grandoakhotel.com", "reservations@grandoakhotel.com"],
    },
    {
      icon: Clock,
      title: "Front Desk",
      lines: ["24 Hours, 7 Days a Week"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-forest" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Get in Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl text-cream mt-4 mb-6">
            Contact <span className="italic text-gold">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-cream/80 text-lg">
            Have questions or special requests? Our team is here to help make your stay perfect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-forest-light/50 p-6 rounded-lg"
                >
                  <info.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-heading text-xl text-cream mb-3">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-cream/70 text-sm">
                      {line}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 rounded-lg overflow-hidden h-64 bg-forest-light"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Oak Hotel Location"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-cream rounded-lg p-8 shadow-elegant">
              <h3 className="font-heading text-2xl text-forest mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-forest text-sm font-medium block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-forest text-sm font-medium block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-forest text-sm font-medium block mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (234) 567-890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-forest text-sm font-medium block mb-2">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest"
                    >
                      <option value="">Select subject</option>
                      <option value="reservation">Room Reservation</option>
                      <option value="dining">Restaurant Inquiry</option>
                      <option value="events">Events & Weddings</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-forest text-sm font-medium block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-gold focus:outline-none text-forest placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
