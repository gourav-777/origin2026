import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, UserPlus, Compass, Zap, Brain, Radio, Flag } from "lucide-react";

const phases = [
  {
    id: "origin",
    icon: Sparkles,
    title: "ORIGIN",
    subtitle: "The Beginning",
    description: "The birth of an idea — cosmic ignition, energy gathering, the moment before creation",
    color: "from-cyan-500 to-blue-600",
    date: "FEB 2026"
  },
  {
    id: "initiate",
    icon: UserPlus,
    title: "INITIATE",
    subtitle: "Registration & Screening",
    description: "Signals sent across space, selection of explorers, assembling the crew for the mission",
    color: "from-purple-500 to-pink-600",
    date: "FEB-MAR 2026"
  },
  {
    id: "ascent",
    icon: Compass,
    title: "ASCENT",
    subtitle: "Orientation",
    description: "Spacecraft systems powering up, pre-launch briefings, calibrating instruments",
    color: "from-orange-500 to-red-600",
    date: "MAR 29, 2026"
  },
  {
    id: "wormhole",
    icon: Zap,
    title: "WORMHOLE",
    subtitle: "24-Hour Hackathon",
    description: "Time dilation begins, nonstop creation, traversing through dimensions of innovation",
    color: "from-yellow-400 to-orange-600",
    date: "MAR 30-31"
  },
  {
    id: "evolution",
    icon: Brain,
    title: "EVOLUTION",
    subtitle: "Mentorship & Refinement",
    description: "Intelligence evolving, checkpoints passed, prototypes transforming into solutions",
    color: "from-green-500 to-teal-600",
    date: "DURING EVENT"
  },
  {
    id: "transmission",
    icon: Radio,
    title: "TRANSMISSION",
    subtitle: "Final Presentations",
    description: "Signals sent back with discoveries, showcasing innovations to the universe",
    color: "from-pink-500 to-purple-600",
    date: "MAR 31"
  },
  {
    id: "arrival",
    icon: Flag,
    title: "ARRIVAL",
    subtitle: "Results & Networking",
    description: "Return with knowledge, celebration of achievements, new connections forged",
    color: "from-cyan-400 to-blue-500",
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
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs font-sans text-accent tracking-[0.2em]">EVENT PHASES</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-foreground">THE </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500">JOURNEY</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your mission through the cosmos of innovation — from ignition to arrival
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/30 -translate-x-1/2">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-accent to-pink-500"
              style={{ height: lineHeight }}
            />
          </div>

          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  className={`p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-md ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'hsl(var(--primary) / 0.5)'
                  }}
                >
                  <span className="text-xs font-sans text-muted-foreground tracking-widest">
                    {phase.date}
                  </span>
                  <h3 className={`text-2xl font-display font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r ${phase.color}`}>
                    {phase.title}
                  </h3>
                  <p className="text-sm font-sans font-medium text-foreground/80 mt-1">
                    {phase.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {phase.description}
                  </p>
                </motion.div>
              </div>

              {/* Center icon */}
              <motion.div
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.2 }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center`}
                  animate={{
                    boxShadow: [
                      `0 0 20px hsl(var(--primary) / 0.3)`,
                      `0 0 40px hsl(var(--primary) / 0.5)`,
                      `0 0 20px hsl(var(--primary) / 0.3)`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <phase.icon className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>

              {/* Spacer */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicJourney;
