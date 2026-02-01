import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Rocket, Radio, Navigation, Orbit, Sparkles, 
  Zap, Send, Target 
} from "lucide-react";

const phases = [
  {
    id: "origin",
    icon: Sparkles,
    title: "ORIGIN",
    subtitle: "THE BIG BANG",
    time: "MARCH 30 • 09:00",
    description: "The birth of an idea. Cosmic ignition, stars forming, energy gathering. Opening ceremony and team formation.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "initiate",
    icon: Radio,
    title: "INITIATE",
    subtitle: "SIGNAL TRANSMISSION",
    time: "MARCH 30 • 10:00",
    description: "Signals sent across space. Problem statements released, selection of explorers begins.",
    color: "from-blue-500 to-violet-500",
  },
  {
    id: "ascent",
    icon: Rocket,
    title: "ASCENT",
    subtitle: "SYSTEMS ONLINE",
    time: "MARCH 30 • 11:00",
    description: "Spacecraft systems powering up. Orientation, mentorship, and the 24-hour countdown begins.",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "wormhole",
    icon: Orbit,
    title: "WORMHOLE",
    subtitle: "TIME DILATION",
    time: "MARCH 30-31",
    description: "24 hours of nonstop creation. Time bends as innovation accelerates. Build, iterate, evolve.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "evolution",
    icon: Zap,
    title: "EVOLUTION",
    subtitle: "INTELLIGENCE EVOLVING",
    time: "MARCH 31 • 06:00",
    description: "Mentorship checkpoints, refinement phases. Your solution gains cosmic intelligence.",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "transmission",
    icon: Send,
    title: "TRANSMISSION",
    subtitle: "SIGNAL RETURN",
    time: "MARCH 31 • 09:00",
    description: "Final presentations. Signals sent back with discoveries. Demo your innovation to the universe.",
    color: "from-rose-500 to-orange-500",
  },
  {
    id: "arrival",
    icon: Target,
    title: "ARRIVAL",
    subtitle: "DESTINATION REACHED",
    time: "MARCH 31 • 12:00",
    description: "Results and closing ceremony. Return with knowledge, connections, and the start of something cosmic.",
    color: "from-orange-500 to-amber-500",
  },
];

const CosmicJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background effect */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, hsl(190 80% 20% / 0.1) 0%, transparent 50%)'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6"
          >
            <Navigation className="w-4 h-4 text-accent" />
            <span className="text-xs font-sans text-accent tracking-widest">YOUR COSMIC PATH</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-wide">
            THE{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))'
              }}
            >
              JOURNEY
            </span>
          </h2>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            From ignition to arrival—experience the complete cosmic voyage of ORIGIN
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div 
              className="h-full"
              style={{
                background: 'linear-gradient(180deg, hsl(190 100% 50%), hsl(270 80% 60%), hsl(330 80% 60%), transparent)'
              }}
            />
          </div>

          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`relative flex items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className="w-4 h-4 rounded-full bg-gradient-to-br"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${phase.color.replace('from-', '').replace(' to-', ', ')})`.replace('cyan-500', '#06b6d4').replace('blue-500', '#3b82f6').replace('violet-500', '#8b5cf6').replace('purple-500', '#a855f7').replace('pink-500', '#ec4899').replace('rose-500', '#f43f5e').replace('orange-500', '#f97316').replace('amber-500', '#f59e0b')
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </div>

              {/* Content card */}
              <div 
                className={`ml-20 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <motion.div
                  className="group relative p-6 rounded-xl glass-cosmic overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient accent */}
                  <div 
                    className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b ${phase.color}`}
                  />
                  
                  {/* Icon and header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className={`p-3 rounded-lg bg-gradient-to-br ${phase.color} bg-opacity-20`}
                      style={{ background: `linear-gradient(135deg, hsl(190 100% 50% / 0.2), hsl(270 80% 60% / 0.2))` }}
                    >
                      <phase.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                        {phase.title}
                      </h3>
                      <p className="text-xs font-sans text-primary tracking-widest">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-sans text-accent">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    {phase.time}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmicJourney;