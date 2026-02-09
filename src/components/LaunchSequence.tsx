import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

interface LaunchSequenceProps {
  onComplete: () => void;
}

const COUNTDOWN_MESSAGES = [
  { time: 5, message: "Fueling Innovation Engines" },
  { time: 4, message: "Calibrating Neural Networks" },
  { time: 3, message: "Synchronizing Team Coordinates" },
  { time: 2, message: "Locking Mission Parameters" },
  { time: 1, message: "Ignition Ready" },
  { time: 0, message: "Launch Initiated" },
];

const LaunchSequence = ({ onComplete }: LaunchSequenceProps) => {
  const [countdown, setCountdown] = useState(5);
  const [isLaunching, setIsLaunching] = useState(false);

  const currentMessage = COUNTDOWN_MESSAGES.find(m => m.time === countdown)?.message || "";

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !isLaunching) {
      setIsLaunching(true);
      // Trigger warp effect and redirect after delay
      setTimeout(onComplete, 1500);
    }
  }, [countdown, isLaunching, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.5,
        filter: "blur(20px)",
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Star field background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-foreground/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isLaunching ? {
              y: [0, 500],
              opacity: [1, 0],
            } : {
              opacity: [0.3, 1, 0.3],
            }}
            transition={isLaunching ? {
              duration: 0.5,
              ease: "easeIn",
            } : {
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Warp lines during launch */}
      <AnimatePresence>
        {isLaunching && (
          <>
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`warp-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-foreground to-transparent"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${50 + Math.random() * 150}px`,
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 2],
                  y: [0, 200],
                }}
                transition={{
                  duration: 0.8,
                  delay: Math.random() * 0.3,
                  ease: "easeIn",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Central content */}
      <div className="relative z-10 text-center">
        {/* Rocket icon with glow */}
        <motion.div
          className="relative mx-auto mb-8"
          animate={isLaunching ? {
            y: -500,
            scale: 0.5,
          } : {
            y: [0, -10, 0],
          }}
          transition={isLaunching ? {
            duration: 1,
            ease: "easeIn",
          } : {
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-foreground/20 blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          
          {/* Rocket container */}
          <motion.div 
            className="relative p-6 rounded-full bg-foreground"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 40px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.3)",
              ],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Rocket className="w-12 h-12 text-background" />
          </motion.div>

          {/* Exhaust flames during launch */}
          <AnimatePresence>
            {isLaunching && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 200 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-full bg-gradient-to-b from-foreground via-foreground/50 to-transparent blur-sm" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Countdown number */}
        <AnimatePresence mode="wait">
          {!isLaunching && (
            <motion.div
              key={countdown}
              className="mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-8xl md:text-9xl font-display font-bold text-foreground tabular-nums">
                {countdown}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessage}
            className="text-lg md:text-xl font-sans tracking-[0.2em] text-foreground/80 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentMessage}
          </motion.p>
        </AnimatePresence>

        {/* Progress bar */}
        <motion.div
          className="mt-8 mx-auto w-64 h-1 bg-border/50 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-foreground rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((5 - countdown) / 5) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LaunchSequence;
