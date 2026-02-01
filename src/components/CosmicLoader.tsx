import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CosmicLoaderProps {
  onComplete: () => void;
}

const CosmicLoader = ({ onComplete }: CosmicLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("INITIALIZING");

  const phases = [
    "INITIALIZING COSMIC GATEWAY...",
    "MAPPING STELLAR COORDINATES...",
    "CALIBRATING WARP DRIVE...",
    "ESTABLISHING NEURAL LINK...",
    "ENTERING ORIGIN DIMENSION...",
    "SYSTEM READY"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const phaseIndex = Math.min(
      Math.floor(progress / 17),
      phases.length - 1
    );
    setPhase(phases[phaseIndex]);
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, hsl(270 60% 10%) 0%, hsl(240 20% 3%) 70%)'
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Orbiting rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-[400px] h-[400px] border border-primary/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] border border-accent/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] border border-primary/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Central portal */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glowing orb */}
        <motion.div
          className="w-32 h-32 rounded-full relative"
          style={{
            background: 'radial-gradient(circle, hsl(190 100% 50%) 0%, hsl(270 80% 60%) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, white 0%, transparent 50%)',
            }}
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Energy pulses */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-primary/50"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>

      {/* Title */}
      <motion.div
        className="relative z-10 mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-[0.2em] mb-4">
          <span className="text-foreground">ORI</span>
          <span className="text-primary text-glow">GIN</span>
        </h1>
        <p className="text-sm font-sans text-muted-foreground tracking-[0.3em]">
          PLACE TO START
        </p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="relative z-10 mt-12 w-64 md:w-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex justify-between text-xs text-muted-foreground mb-2 font-sans">
          <span>LOADING</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1 bg-secondary/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, hsl(190 100% 50%), hsl(270 80% 60%))',
              width: `${progress}%`,
              boxShadow: '0 0 20px hsl(190 100% 50% / 0.5)',
            }}
          />
        </div>
      </motion.div>

      {/* Phase text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={phase}
          className="relative z-10 mt-6 text-xs font-sans text-primary tracking-widest"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {phase}
        </motion.p>
      </AnimatePresence>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
      <div className="absolute top-8 right-8 w-20 h-20">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-accent/50 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 left-8 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-accent/50 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-accent/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-20">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-primary/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-primary/50 to-transparent" />
      </div>
    </motion.div>
  );
};

export default CosmicLoader;