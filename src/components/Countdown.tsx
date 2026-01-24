import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="relative">
            <div className="w-14 h-16 sm:w-16 sm:h-20 md:w-28 md:h-32 border border-foreground/50 bg-secondary/50 backdrop-blur-sm flex items-center justify-center box-glow">
              <span className="text-2xl sm:text-3xl md:text-6xl font-display font-bold text-foreground">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-1 -left-1 w-2 md:w-3 h-2 md:h-3 border-l-2 border-t-2 border-primary" />
            <div className="absolute -top-1 -right-1 w-2 md:w-3 h-2 md:h-3 border-r-2 border-t-2 border-primary" />
            <div className="absolute -bottom-1 -left-1 w-2 md:w-3 h-2 md:h-3 border-l-2 border-b-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 w-2 md:w-3 h-2 md:h-3 border-r-2 border-b-2 border-primary" />
          </div>
          <span className="mt-2 md:mt-3 text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
