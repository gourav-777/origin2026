import CosmicBackground from "@/components/CosmicBackground";
import CosmicNavbar from "@/components/CosmicNavbar";
import CosmicJourney from "@/components/CosmicJourney";
import CosmicFooter from "@/components/CosmicFooter";

const TimelinePage = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CosmicBackground />
      
      <CosmicNavbar />
      <div className="pt-20">
        <CosmicJourney />
      </div>
      <CosmicFooter />
    </div>
  );
};

export default TimelinePage;