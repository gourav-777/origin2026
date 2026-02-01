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
    <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="relative group">
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, hsl(190 100% 50% / 0.2), hsl(270 80% 60% / 0.2))',
                filter: 'blur(10px)',
              }}
            />
            
            {/* Main container */}
            <div 
              className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-28 md:h-32 flex items-center justify-center rounded-lg"
              style={{
                background: 'linear-gradient(145deg, hsl(240 15% 8%) 0%, hsl(240 20% 5%) 100%)',
                border: '1px solid hsl(190 100% 50% / 0.3)',
              }}
            >
              <motion.span 
                key={unit.value}
                className="text-3xl sm:text-4xl md:text-6xl font-display font-bold"
                style={{
                  backgroundImage: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(190 100% 70%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-primary/50 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-accent/50 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-accent/50 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-primary/50 rounded-br-lg" />
            </div>
          </div>
          
          <span className="mt-2 md:mt-3 text-[10px] sm:text-xs font-sans text-muted-foreground tracking-[0.2em]">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;