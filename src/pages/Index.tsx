import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import DynamicLoader from "@/components/DynamicLoader";
import DynamicNavbar from "@/components/DynamicNavbar";
import DynamicHero from "@/components/DynamicHero";
import DynamicMarquee from "@/components/DynamicMarquee";
import DynamicAbout from "@/components/DynamicAbout";
import DynamicJourney from "@/components/DynamicJourney";
import DynamicPrizes from "@/components/DynamicPrizes";

import DynamicTeam from "@/components/DynamicTeam";
import DynamicRegister from "@/components/DynamicRegister";
import DynamicVenue from "@/components/DynamicVenue";
import DynamicFooter from "@/components/DynamicFooter";
import MouseParticles from "@/components/MouseParticles";
import SpaceElements3D from "@/components/SpaceElements3D";
import heroBgVideo from "@/assets/hero-bg.mp4";

const Index = () => {
  const [loading, setLoading] = useState(true);

  // Preload hero video during loader
  useEffect(() => {
    const video = document.createElement("video");
    video.src = heroBgVideo;
    video.preload = "auto";
    video.muted = true;
    video.load();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <DynamicLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
          {/* 3D Space Elements - Deep Background */}
          <SpaceElements3D />
          
          {/* Mouse-reactive particles */}
          <MouseParticles />
          
          {/* Navigation */}
          <DynamicNavbar />
          
          {/* Main sections */}
          <DynamicHero />
          <DynamicMarquee />
          <DynamicAbout />
          <DynamicMarquee />
          <DynamicJourney />
          <DynamicPrizes />
          
          <DynamicTeam />
          
          <DynamicRegister />
          <DynamicVenue />
          <DynamicFooter />
        </div>
      )}
    </>
  );
};

export default Index;
