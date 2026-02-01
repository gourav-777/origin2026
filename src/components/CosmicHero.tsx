import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Rocket, ArrowDown } from "lucide-react";
import Countdown from "./Countdown";
import originLogo from "@/assets/origin-logo.png";

const CosmicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax content wrapper */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y, opacity, scale }}
      >
        {/* Event presenter */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-xs md:text-sm font-sans text-muted-foreground tracking-[0.4em] uppercase">
            Hackathon Club of SIMATS Engineering
          </p>
          <p className="text-sm md:text-base font-sans text-primary/80 tracking-[0.3em] mt-2">
            PRESENTS
          </p>
        </motion.div>

        {/* Logo and title */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Glow behind title */}
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(190 100% 50% / 0.2) 0%, transparent 60%)',
              filter: 'blur(40px)',
              transform: 'scale(1.5)'
            }}
          />
          
          <motion.img 
            src={originLogo}
            alt="ORIGIN"
            className="h-24 md:h-32 mx-auto mb-4"
            animate={{ 
              filter: ['drop-shadow(0 0 20px hsl(190 100% 50% / 0.5))', 'drop-shadow(0 0 40px hsl(190 100% 50% / 0.8))', 'drop-shadow(0 0 20px hsl(190 100% 50% / 0.5))']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <h1 className="text-6xl md:text-9xl font-display font-bold tracking-[0.15em] mb-2">
            <span className="text-foreground">ORI</span>
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))'
              }}
            >
              GIN
            </span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-2xl font-sans tracking-[0.2em] text-foreground/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            PLACE TO START
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-base md:text-lg font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A 24-hour National AI Hackathon where 
            <span className="text-primary"> innovation </span> 
            is a cosmic force and 
            <span className="text-accent"> ideas </span> 
            are born like stars.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6 text-sm font-sans text-muted-foreground">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              24 HOURS
            </span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>MARCH 30-31, 2026</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>CHENNAI</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Countdown targetDate={new Date("2026-03-30T09:00:00")} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a 
            href="#register" 
            className="group relative px-8 py-4 font-sans text-sm font-semibold overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-background">
              <Rocket className="w-4 h-4" />
              BEGIN YOUR JOURNEY
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </a>
          
          <a 
            href="#about" 
            className="group px-8 py-4 font-sans text-sm font-semibold border border-primary/50 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            EXPLORE THE COSMOS
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-sans tracking-widest">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-2 h-2 bg-primary rounded-full"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-[15%] w-3 h-3 bg-accent rounded-full"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 bg-primary rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
    </section>
  );
};

export default CosmicHero;