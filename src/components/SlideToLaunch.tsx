import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Rocket } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface SlideToLaunchProps {
  onLaunch: () => void;
}

const SlideToLaunch = ({ onLaunch }: SlideToLaunchProps) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [launched, setLaunched] = useState(false);
  const x = useMotionValue(0);

  const threshold = trackWidth - 56;
  const progress = useTransform(x, [0, threshold || 1], [0, 1]);
  const textOpacity = useTransform(x, [0, threshold * 0.4], [1, 0]);
  const bgGradient = useTransform(
    progress,
    [0, 1],
    ["hsl(var(--foreground) / 0.08)", "hsl(var(--foreground) / 0.2)"]
  );
  const glowOpacity = useTransform(progress, [0.6, 1], [0, 0.6]);

  useEffect(() => {
    if (constraintsRef.current) {
      setTrackWidth(constraintsRef.current.offsetWidth);
    }
  }, []);

  const triggerHapticFeedback = () => {
    const el = wrapperRef.current;
    if (!el) return;

    // Device vibration (mobile)
    if (navigator.vibrate) {
      navigator.vibrate([30, 50, 60]);
    }

    // Screen shake
    el.style.transition = "none";
    const shakes = [
      { x: -6, y: 3 }, { x: 6, y: -3 }, { x: -4, y: -2 },
      { x: 4, y: 2 }, { x: -2, y: 1 }, { x: 2, y: -1 }, { x: 0, y: 0 }
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i >= shakes.length) {
        clearInterval(interval);
        el.style.transform = "";
        return;
      }
      el.style.transform = `translate(${shakes[i].x}px, ${shakes[i].y}px)`;
      i++;
    }, 40);

    // Pulse ring
    const ring = document.createElement("div");
    ring.style.cssText = `
      position: fixed; inset: 0; z-index: 100; pointer-events: none;
      border: 3px solid hsl(var(--foreground) / 0.3);
      border-radius: 1rem;
      animation: haptic-pulse 0.5s ease-out forwards;
    `;
    el.appendChild(ring);
    setTimeout(() => ring.remove(), 600);
  };

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX >= threshold * 0.85) {
      animate(x, threshold, { duration: 0.2 });
      setLaunched(true);
      triggerHapticFeedback();
      setTimeout(onLaunch, 700);
    } else {
      animate(x, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  };

  return (
    <div ref={wrapperRef} className="w-full relative">
      <style>{`
        @keyframes haptic-pulse {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.04); }
        }
      `}</style>
      <motion.div
        ref={constraintsRef}
        className="relative h-14 rounded-full border border-border overflow-hidden"
        style={{ backgroundColor: bgGradient }}
        animate={launched ? { 
          boxShadow: [
            "0 0 0px hsl(var(--foreground) / 0)",
            "0 0 30px hsl(var(--foreground) / 0.4)",
            "0 0 0px hsl(var(--foreground) / 0)"
          ]
        } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Label */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: textOpacity }}
        >
          <span className="text-sm font-semibold text-foreground/50 tracking-wider">
            SLIDE TO LAUNCH
          </span>
        </motion.div>

        {/* Glow at end */}
        <motion.div
          className="absolute right-1 top-1 bottom-1 w-12 rounded-full pointer-events-none"
          style={{ 
            opacity: glowOpacity,
            background: "radial-gradient(circle, hsl(var(--foreground) / 0.3) 0%, transparent 70%)"
          }}
        />

        {/* Draggable Rocket Thumb */}
        <motion.div
          className="absolute top-1 left-1 bottom-1 w-12 rounded-full bg-foreground text-background flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
          drag="x"
          dragConstraints={{ left: 0, right: Math.max(trackWidth - 56, 0) }}
          dragElastic={0}
          dragMomentum={false}
          style={{ x }}
          onDragEnd={handleDragEnd}
          whileTap={{ scale: 1.05 }}
        >
          <motion.div
            animate={launched ? { rotate: 45, scale: [1.2, 1.5, 1.2] } : { x: [0, 4, 0] }}
            transition={launched ? { duration: 0.5 } : { duration: 1.5, repeat: Infinity }}
          >
            <Rocket className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Trail effect */}
        <motion.div
          className="absolute top-1 left-1 bottom-1 rounded-full bg-foreground/10"
          style={{ width: x }}
        />
      </motion.div>
    </div>
  );
};

export default SlideToLaunch;
