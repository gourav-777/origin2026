import BinaryBackground from "@/components/BinaryBackground";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

const TimelinePage = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <BinaryBackground />
      <div className="scanlines" />
      
      <Navbar />
      <div className="pt-20">
        <Timeline />
      </div>
      <Footer />
    </div>
  );
};

export default TimelinePage;
