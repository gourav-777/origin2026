import { motion } from "framer-motion";
import { ChevronRight, Eye } from "lucide-react";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-primary/20 rotate-12 animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 text-center z-10">
        {/* Protocol version */}
        <motion.div
          className="inline-block mb-6 px-4 py-1 border border-primary/50 text-primary text-xs font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          /// PROTOCOL_v1.0.0 ///
        </motion.div>

        {/* Event label */}
        <motion.p
          className="text-sm md:text-base font-mono text-muted-foreground mb-4 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          PRESENTS
        </motion.p>

        {/* Main title */}
        <motion.h1
          className="text-7xl md:text-9xl font-display font-bold mb-6 tracking-wider glitch-effect"
          data-text="ORIGIN"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="text-foreground">ORI</span>
          <span className="text-primary text-glow">GIN</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl font-mono text-muted-foreground mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          THE ULTIMATE HACKATHON EXPERIENCE
        </motion.p>

        <motion.p
          className="text-sm font-mono text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          48 HOURS • UNLIMITED POSSIBILITIES
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Countdown targetDate={new Date("2026-03-15T09:00:00")} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#register"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-all animate-pulse-glow"
          >
            ESTABLISH_CONNECTION
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="group flex items-center justify-center gap-2 px-8 py-4 border border-foreground/50 text-foreground font-mono text-sm hover:border-primary hover:text-primary transition-all"
          >
            <Eye className="w-4 h-4" />
            VIEW_PROTOCOL
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, y: { repeat: Infinity, duration: 1.5 } }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 text-xs font-mono text-muted-foreground">
        <p>{">"} LOCATION: TBD</p>
        <p>{">"} STATUS: ACTIVE</p>
      </div>
      <div className="absolute top-20 right-4 text-xs font-mono text-muted-foreground text-right">
        <p>LAT: 28.6139° N</p>
        <p>LONG: 77.2090° E</p>
      </div>
    </section>
  );
};

export default Hero;
