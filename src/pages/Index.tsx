import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DynamicLoader from "@/components/DynamicLoader";
import DynamicNavbar from "@/components/DynamicNavbar";
import DynamicHero from "@/components/DynamicHero";
import DynamicMarquee from "@/components/DynamicMarquee";
import DynamicAbout from "@/components/DynamicAbout";
import DynamicJourney from "@/components/DynamicJourney";
import DynamicPrizes from "@/components/DynamicPrizes";
import DynamicFAQ from "@/components/DynamicFAQ";
import DynamicTeam from "@/components/DynamicTeam";
import DynamicRegister from "@/components/DynamicRegister";
import DynamicFooter from "@/components/DynamicFooter";
import MouseParticles from "@/components/MouseParticles";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <DynamicLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
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
          <DynamicFAQ />
          <DynamicRegister />
          <DynamicFooter />
        </div>
      )}
    </>
  );
};

export default Index;
