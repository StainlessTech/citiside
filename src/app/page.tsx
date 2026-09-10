import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceRecord from "@/components/ServiceRecord";
import Constituency from "@/components/Constituency";
import LegislativeWork from "@/components/LegislativeWork";
import Gallery from "@/components/Gallery";
import Updates from "@/components/Updates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <About />
      <ServiceRecord />
      <Constituency />
      <LegislativeWork />
      <Gallery /> 
      <Updates />
      <Contact />
      <Footer />

    </main>
  );
}