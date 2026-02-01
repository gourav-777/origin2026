import { motion } from "framer-motion";

const phrases = [
  "INNOVATION",
  "✦",
  "AI HACKATHON",
  "✦", 
  "24 HOURS",
  "✦",
  "CREATE",
  "✦",
  "BUILD",
  "✦",
  "EVOLVE",
  "✦",
  "MARCH 2026",
  "✦",
  "ORIGIN",
  "✦",
];

const CosmicMarquee = () => {
  return (
    <div className="relative py-6 overflow-hidden border-y border-border/30">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee">
        {[...phrases, ...phrases].map((phrase, index) => (
          <motion.span
            key={index}
            className={`mx-6 md:mx-10 text-sm md:text-lg font-display tracking-[0.2em] whitespace-nowrap ${
              phrase === "✦" 
                ? "text-primary text-glow" 
                : "text-muted-foreground hover:text-foreground transition-colors"
            }`}
          >
            {phrase}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default CosmicMarquee;