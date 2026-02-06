import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, UserPlus, Compass, Zap, Brain, Radio, Flag } from "lucide-react";

const phases = [
  {
    id: "origin",
    icon: Sparkles,
    title: "ORIGIN",
    subtitle: "The Beginning",
    description: "The birth of an idea — ignition, energy gathering, the moment before creation",
    date: "FEB 2026"
  },
  {
    id: "initiate",
    icon: UserPlus,
    title: "INITIATE",
    subtitle: "Registration & Screening",
    description: "Selection of explorers, assembling the crew for the mission",
    date: "FEB-MAR 2026"
  },
  {
    id: "ascent",
    icon: Compass,
    title: "ASCENT",
    subtitle: "Orientation",
    description: "Systems powering up, pre-launch briefings, calibrating instruments",
    date: "MAR 29, 2026"
  },
  {
    id: "wormhole",
    icon: Zap,
    title: "HACKATHON",
    subtitle: "24-Hour Build",
    description: "Nonstop creation, traversing through dimensions of innovation",
    date: "MAR 30-31"
  },
  {
    id: "evolution",
    icon: Brain,
    title: "EVOLUTION",
    subtitle: "Mentorship & Refinement",
    description: "Checkpoints passed, prototypes transforming into solutions",
    date: "DURING EVENT"
  },
  {
    id: "transmission",
    icon: Radio,
    title: "TRANSMISSION",
    subtitle: "Final Presentations",
    description: "Showcasing innovations and discoveries to judges",
    date: "MAR 31"
  },
  {
    id: "arrival",
    icon: Flag,
    title: "ARRIVAL",
    subtitle: "Results & Networking",
    description: "Celebration of achievements, new connections forged",
    date: "MAR 31, 2026"
  }
];

const DynamicJourney = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      id="journey" 
      className="relative py-32 overflow-hidden bg-card/30"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-xs font-sans text-foreground/60 tracking-[0.2em]">EVENT PHASES</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            THE TIMELINE
          </h2>
          
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
            Your mission through innovation — from ignition to arrival
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central line - left-aligned on mobile, centered on desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-foreground"
              style={{ height: lineHeight }}
            />
          </div>

          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`relative flex items-start md:items-center gap-4 md:gap-8 mb-12 md:mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Center icon - left-aligned on mobile */}
              <motion.div
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-foreground flex items-center justify-center"
                >
                  <phase.icon className="w-5 h-5 md:w-6 md:h-6 text-background" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 md:flex-1">
                <motion.div
                  className={`p-4 md:p-6 rounded-2xl border border-border bg-background text-left ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'hsl(var(--foreground) / 0.2)'
                  }}
                >
                  <span className="text-xs font-sans text-foreground/40 tracking-widest">
                    {phase.date}
                  </span>
                  <h3 className="text-lg md:text-2xl font-display font-bold mt-1 md:mt-2 text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-xs md:text-sm font-sans font-medium text-foreground/70 mt-1">
                    {phase.subtitle}
                  </p>
                  <p className="text-xs md:text-sm text-foreground/50 mt-2 md:mt-3 leading-relaxed">
                    {phase.description}
                  </p>
                </motion.div>
              </div>

              {/* Spacer - hidden on mobile */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicJourney;
