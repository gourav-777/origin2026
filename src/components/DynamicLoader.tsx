import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Rocket, Sparkles } from "lucide-react";

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
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Rocket icon */}
      <motion.div
        className="relative mb-8"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="p-6 rounded-full bg-gradient-to-r from-primary to-accent"
          animate={{
            boxShadow: [
              '0 0 20px hsl(var(--primary) / 0.5)',
              '0 0 60px hsl(var(--primary) / 0.8)',
              '0 0 20px hsl(var(--primary) / 0.5)'
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Rocket className="w-10 h-10 text-background" />
        </motion.div>
        
        {/* Fire trail */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-transparent via-orange-500 to-yellow-400 rounded-full blur-sm"
          animate={{ 
            height: [20, 40, 20],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Title */}
      <motion.h1 
        className="text-4xl md:text-5xl font-display font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-foreground">ORI</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">GIN</span>
      </motion.h1>

      {/* Phase text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={phase}
          className="text-sm font-sans tracking-[0.3em] text-primary mb-8 flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <Sparkles className="w-4 h-4" />
          {phases[phase]}
        </motion.p>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-border/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-orange-500 to-accent rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <p className="text-xs text-muted-foreground mt-4 font-mono">
        {progress}%
      </p>
    </motion.div>
  );
};

export default DynamicLoader;
