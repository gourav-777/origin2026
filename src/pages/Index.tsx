import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CosmicLoader from "@/components/CosmicLoader";
import CosmicBackground from "@/components/CosmicBackground";
import CosmicNavbar from "@/components/CosmicNavbar";
import CosmicHero from "@/components/CosmicHero";
import CosmicMarquee from "@/components/CosmicMarquee";
import CosmicAbout from "@/components/CosmicAbout";
import CosmicJourney from "@/components/CosmicJourney";
import CosmicPrizes from "@/components/CosmicPrizes";
import CosmicFAQ from "@/components/CosmicFAQ";
import CosmicTeam from "@/components/CosmicTeam";
import CosmicRegister from "@/components/CosmicRegister";
import CosmicFooter from "@/components/CosmicFooter";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <CosmicLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
          <CosmicBackground />
          
          <CosmicNavbar />
          <CosmicHero />
          <CosmicMarquee />
          <CosmicAbout />
          <CosmicMarquee />
          <CosmicJourney />
          <CosmicPrizes />
          <CosmicFAQ />
          <CosmicTeam />
          <CosmicRegister />
          <CosmicFooter />
        </div>
      )}
    </>
  );
};

export default Index;