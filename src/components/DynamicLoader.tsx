import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

interface DynamicLoaderProps {
  onComplete: () => void;
}

const DynamicLoader = ({ onComplete }: DynamicLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    "IGNITING ENGINES",
    "CALIBRATING SYSTEMS",
    "PLOTTING TRAJECTORY",
    "READY FOR LAUNCH"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    setPhase(Math.min(Math.floor(progress / 25), 3));
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      {/* Rocket icon */}
      <motion.div
        className="relative mb-8"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div className="p-6 rounded-full bg-foreground">
          <Rocket className="w-10 h-10 text-background" />
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h1 
        className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ORIGIN
      </motion.h1>

      {/* Phase text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={phase}
          className="text-sm font-sans tracking-[0.3em] text-foreground/60 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {phases[phase]}
        </motion.p>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-foreground rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <p className="text-xs text-foreground/40 mt-4 font-mono">
        {progress}%
      </p>
    </motion.div>
  );
};

export default DynamicLoader;
