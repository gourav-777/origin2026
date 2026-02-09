import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Rocket } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface SlideToLaunchProps {
  onLaunch: () => void;
}

const SlideToLaunch = ({ onLaunch }: SlideToLaunchProps) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [launched, setLaunched] = useState(false);
  const x = useMotionValue(0);

  const threshold = trackWidth - 56; // thumb width ~56px
  const progress = useTransform(x, [0, threshold || 1], [0, 1]);
  const textOpacity = useTransform(x, [0, threshold * 0.4], [1, 0]);
  const bgGradient = useTransform(
    progress,
    [0, 1],
    ["hsl(var(--foreground) / 0.08)", "hsl(var(--foreground) / 0.2)"]
  );

  useEffect(() => {
    if (constraintsRef.current) {
      setTrackWidth(constraintsRef.current.offsetWidth);
    }
  }, []);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX >= threshold * 0.85) {
      // Snap to end and trigger launch
      animate(x, threshold, { duration: 0.2 });
      setLaunched(true);
      setTimeout(onLaunch, 400);
    } else {
      // Snap back
      animate(x, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  };

  return (
    <div className="w-full">
      <motion.div
        ref={constraintsRef}
        className="relative h-14 rounded-full border border-border overflow-hidden"
        style={{ backgroundColor: bgGradient }}
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
            animate={launched ? { rotate: 45, scale: 1.2 } : { x: [0, 4, 0] }}
            transition={launched ? { duration: 0.3 } : { duration: 1.5, repeat: Infinity }}
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
