import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM...");

  const statusMessages = [
    "INITIALIZING SYSTEM...",
    "LOADING CORE MODULES...",
    "ESTABLISHING CONNECTION...",
    "DECRYPTING PROTOCOLS...",
    "VALIDATING ACCESS...",
    "ORIGIN_v1.0.0 READY",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const messageIndex = Math.min(
      Math.floor(progress / 20),
      statusMessages.length - 1
    );
    setStatusText(statusMessages[messageIndex]);
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Binary background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary font-mono text-xs"
            style={{ left: `${i * 5}%` }}
            initial={{ y: "-100%" }}
            animate={{ y: "100vh" }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {[...Array(50)].map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Logo */}
      <motion.div
        className="relative mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-wider">
          <span className="text-foreground">ORI</span>
          <span className="text-primary text-glow">GIN</span>
        </h1>
        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </motion.div>

      {/* Loading bar */}
      <div className="w-64 md:w-96 mb-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-2 font-mono">
          <span>PROGRESS</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            style={{ boxShadow: "0 0 10px hsl(var(--primary))" }}
          />
        </div>
      </div>

      {/* Status text */}
      <motion.p
        key={statusText}
        className="text-sm font-mono text-primary"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {statusText}
        <span className="terminal-cursor ml-1" />
      </motion.p>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary opacity-30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary opacity-30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary opacity-30" />

      <div className="scanlines" />
    </motion.div>
  );
};

export default Loader;
