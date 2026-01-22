import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import BinaryBackground from "@/components/BinaryBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
          <BinaryBackground />
          <div className="scanlines" />
          
          <Navbar />
          <Hero />
          <Marquee />
          <About />
          <Timeline />
          <Marquee />
          <Prizes />
          <FAQ />
          <Team />
          <Register />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
