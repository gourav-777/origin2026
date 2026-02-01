import { motion } from "framer-motion";

const phrases = [
  "INNOVATE",
  "★",
  "24 HOURS",
  "★", 
  "AI POWERED",
  "★",
  "BUILD",
  "★",
  "CREATE",
  "★",
  "LAUNCH",
  "★",
  "MARCH 2026",
  "★",
  "ORIGIN",
  "★",
];

const DynamicMarquee = () => {
  return (
    <div className="relative py-4 overflow-hidden border-y border-primary/20 bg-primary/5">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1920] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, index) => (
          <span
            key={index}
            className={`mx-8 text-sm md:text-base font-display tracking-[0.3em] ${
              phrase === "★" 
                ? "text-primary" 
                : "text-muted-foreground"
            }`}
          >
            {phrase}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default DynamicMarquee;
