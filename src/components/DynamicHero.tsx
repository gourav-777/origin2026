import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Rocket, Sparkles, ArrowDown, Zap, Users, Trophy } from "lucide-react";
import Countdown from "./Countdown";
import originLogo from "@/assets/origin-logo.png";
import rocketHero from "@/assets/rocket-launch-hero.jpg";

const DynamicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const rocketScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.9]);

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
      mouseX.set(x * 30);
      mouseY.set(y * 30);
      setMousePosition({ x: clientX, y: clientY });
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
        {/* Animated gradient overlays */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: overlayOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </motion.div>

      {/* Floating light particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md"
            whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-sans text-primary tracking-[0.3em] uppercase">
              Hackathon Club of SIMATS Engineering
            </span>
          </motion.div>
        </motion.div>

        {/* Logo with glow */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ x: mouseXSpring, y: mouseYSpring }}
        >
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(190 100% 50% / 0.3) 0%, transparent 70%)',
              filter: 'blur(60px)',
              transform: 'scale(2)'
            }}
          />
          <motion.img 
            src={originLogo}
            alt="ORIGIN"
            className="h-20 md:h-28 mx-auto"
            animate={{ 
              filter: [
                'drop-shadow(0 0 20px hsl(190 100% 50% / 0.5))',
                'drop-shadow(0 0 40px hsl(190 100% 50% / 0.8))',
                'drop-shadow(0 0 20px hsl(190 100% 50% / 0.5))'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
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
            <motion.span 
              className="inline-block text-foreground"
              whileHover={{ scale: 1.05 }}
            >
              ORI
            </motion.span>
            <motion.span 
              className="inline-block text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(30 100% 50%), hsl(270 80% 60%))'
              }}
              whileHover={{ scale: 1.05 }}
            >
              GIN
            </motion.span>
          </h1>
          <motion.p 
            className="text-lg md:text-2xl font-sans tracking-[0.3em] text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            PLACE TO START
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-sm md:text-base font-sans text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          A <span className="text-primary font-semibold">24-hour National AI Hackathon</span> where 
          innovation ignites like rocket fuel and ideas 
          <span className="text-accent font-semibold"> launch into the future</span>
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-border/50 bg-card/30 backdrop-blur-md"
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'hsl(var(--primary))',
                boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <stat.icon className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-lg md:text-xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] font-sans tracking-wider text-muted-foreground">{stat.label}</p>
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
            className="group relative px-10 py-4 font-sans text-sm font-bold overflow-hidden rounded-lg"
            style={{
              background: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(30 100% 50%))',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-background">
              <Rocket className="w-5 h-5" />
              LAUNCH YOUR IDEAS
            </span>
            <motion.div
              className="absolute inset-0 bg-white/30"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
          
          <motion.a 
            href="#about" 
            className="group px-10 py-4 font-sans text-sm font-bold border-2 border-primary/50 text-foreground rounded-lg backdrop-blur-md"
            whileHover={{ 
              borderColor: 'hsl(var(--primary))',
              backgroundColor: 'hsl(var(--primary) / 0.1)',
              scale: 1.05
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-sans tracking-widest">SCROLL TO LAUNCH</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DynamicHero;
