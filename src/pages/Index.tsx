import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Dining } from "@/components/sections/Dining";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Grand Oak Hotel & Restaurant | Luxury Accommodation & Fine Dining</title>
        <meta 
          name="description" 
          content="Experience unparalleled luxury at Grand Oak Hotel & Restaurant. Award-winning accommodations, Michelin-starred dining, world-class spa, and exceptional service in the heart of the city." 
        />
        <meta name="keywords" content="luxury hotel, fine dining, hotel restaurant, spa hotel, boutique hotel, city hotel, gourmet restaurant" />
        <link rel="canonical" href="https://grandoakhotel.com" />
      </Helmet>

      <Header />
      
      <main>
        <Hero />
        <About />
        <Rooms />
        <Dining />
        <Amenities />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
