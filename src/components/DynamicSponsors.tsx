import { motion } from "framer-motion";
import { Rocket, Satellite } from "lucide-react";

interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

const titlePartners: Sponsor[] = [
  { name: "Title Partner", logo: "https://ui-avatars.com/api/?name=Title+Partner&background=1a1a2e&color=fff&size=256&font-size=0.33", url: "#" },
];

const associatePartners: Sponsor[] = [
  { name: "Associate 1", logo: "https://ui-avatars.com/api/?name=A1&background=1a1a2e&color=fff&size=200&font-size=0.4", url: "#" },
  { name: "Associate 2", logo: "https://ui-avatars.com/api/?name=A2&background=1a1a2e&color=fff&size=200&font-size=0.4", url: "#" },
  { name: "Associate 3", logo: "https://ui-avatars.com/api/?name=A3&background=1a1a2e&color=fff&size=200&font-size=0.4", url: "#" },
];

const supportingPartners: Sponsor[] = [
  { name: "Support 1", logo: "https://ui-avatars.com/api/?name=S1&background=1a1a2e&color=fff&size=150&font-size=0.4", url: "#" },
  { name: "Support 2", logo: "https://ui-avatars.com/api/?name=S2&background=1a1a2e&color=fff&size=150&font-size=0.4", url: "#" },
  { name: "Support 3", logo: "https://ui-avatars.com/api/?name=S3&background=1a1a2e&color=fff&size=150&font-size=0.4", url: "#" },
  { name: "Support 4", logo: "https://ui-avatars.com/api/?name=S4&background=1a1a2e&color=fff&size=150&font-size=0.4", url: "#" },
];

const SponsorCard = ({ 
  sponsor, 
  size = "medium",
  index 
}: { 
  sponsor: Sponsor; 
  size?: "large" | "medium" | "small";
  index: number;
}) => {
  const sizeClasses = {
    large: "p-8 md:p-12",
    medium: "p-6 md:p-8",
    small: "p-4 md:p-6",
  };

  const logoSizes = {
    large: "w-32 h-32 md:w-40 md:h-40",
    medium: "w-20 h-20 md:w-28 md:h-28",
    small: "w-14 h-14 md:w-20 md:h-20",
  };

  return (
    <motion.a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative rounded-2xl border border-foreground/10 bg-card/30 backdrop-blur-sm overflow-hidden flex items-center justify-center ${sizeClasses[size]} transition-all duration-300 hover:border-foreground/20`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Soft glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5" />
      </div>

      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className={`${logoSizes[size]} object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}
      />
    </motion.a>
  );
};

const DynamicSponsors = () => {
  return (
    <section id="sponsors" className="relative py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Satellite className="w-4 h-4 text-foreground/60" />
            <span className="text-xs font-sans text-foreground/60 tracking-[0.2em]">FUELING THE MISSION</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-foreground">
            MISSION PARTNERS
          </h2>
          
          <p className="text-foreground/50 font-sans max-w-md mx-auto">
            Organizations fueling the journey beyond innovation
          </p>
        </motion.div>

        {/* Title Partner */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Rocket className="w-5 h-5 text-foreground/40" />
            <h3 className="text-sm font-sans text-foreground/40 tracking-[0.2em]">TITLE PARTNER</h3>
          </div>
          
          <div className="flex justify-center">
            {titlePartners.map((sponsor, index) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} size="large" index={index} />
            ))}
          </div>
        </motion.div>

        {/* Associate Partners */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-5 h-5 rounded-full border border-foreground/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-foreground/40" />
            </div>
            <h3 className="text-sm font-sans text-foreground/40 tracking-[0.2em]">ASSOCIATE PARTNERS</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {associatePartners.map((sponsor, index) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} size="medium" index={index} />
            ))}
          </div>
        </motion.div>

        {/* Supporting Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-4 h-4 rounded-full border border-foreground/20" />
            <h3 className="text-xs font-sans text-foreground/30 tracking-[0.2em]">SUPPORTING PARTNERS</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
            {supportingPartners.map((sponsor, index) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} size="small" index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicSponsors;
