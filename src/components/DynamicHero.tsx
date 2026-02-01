import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Rocket, ArrowDown, Users, Trophy, Zap } from "lucide-react";
import Countdown from "./Countdown";
import originLogo from "@/assets/origin-logo.png";
import rocketHero from "@/assets/rocket-launch-hero.jpg";

const DynamicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const rocketScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 30 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const stats = [
    { icon: Users, value: "500+", label: "PARTICIPANTS" },
    { icon: Trophy, value: "₹2L+", label: "PRIZE POOL" },
    { icon: Zap, value: "24H", label: "NON-STOP" },
  ];

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: rocketY, 
          scale: rocketScale,
          x: mouseXSpring,
        }}
      >
        <img 
          src={rocketHero}
          alt="Rocket Launch"
          className="w-full h-full object-cover object-center"
        />
        {/* Clean white gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Presenter badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/10 bg-background/80 backdrop-blur-md"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-xs font-sans text-foreground/70 tracking-[0.2em] uppercase">
              Hackathon Club of SIMATS Engineering
            </span>
          </motion.div>
        </motion.div>

        {/* Logo */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ x: mouseXSpring, y: mouseYSpring }}
        >
          <motion.img 
            src={originLogo}
            alt="ORIGIN"
            className="h-20 md:h-28 mx-auto"
          />
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-[0.1em] mb-2">
            <span className="text-foreground">ORIGIN</span>
          </h1>
          <motion.p 
            className="text-lg md:text-2xl font-sans tracking-[0.3em] text-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            PLACE TO START
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-sm md:text-base font-sans text-foreground/50 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          A 24-hour National AI Hackathon where innovation ignites 
          and ideas launch into the future
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-foreground/10 bg-background/80 backdrop-blur-md"
              whileHover={{ 
                scale: 1.02,
                borderColor: 'hsl(var(--foreground) / 0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <stat.icon className="w-5 h-5 text-foreground/70" />
              <div className="text-left">
                <p className="text-lg md:text-xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] font-sans tracking-wider text-foreground/50">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-10"
        >
          <Countdown targetDate={new Date("2026-03-30T09:00:00")} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a 
            href="#register" 
            className="group relative px-10 py-4 font-sans text-sm font-bold bg-foreground text-background rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              LAUNCH YOUR IDEAS
            </span>
          </motion.a>
          
          <motion.a 
            href="#about" 
            className="group px-10 py-4 font-sans text-sm font-bold border border-foreground/20 text-foreground rounded-lg backdrop-blur-md"
            whileHover={{ 
              borderColor: 'hsl(var(--foreground) / 0.4)',
              backgroundColor: 'hsl(var(--foreground) / 0.05)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              EXPLORE MISSION
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-foreground/40"
        >
          <span className="text-xs font-sans tracking-widest">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DynamicHero;
