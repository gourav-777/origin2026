import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Sparkles, 
  Satellite, 
  Globe, 
  Waypoints, 
  MapPin, 
  Flame, 
  Rocket, 
  Brain, 
  Radio, 
  Flag,
  Award,
  Utensils,
  Gift,
  Ticket
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Phase {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  round: 'online' | 'transition' | 'offline';
  badge?: string;
  details?: {
    fee?: string;
    mode?: string;
    includes?: string[];
    recognition?: string;
  };
}

const phases: Phase[] = [
  {
    id: "origin",
    icon: Sparkles,
    title: "ORIGIN",
    subtitle: "Mission Announcement",
    description: "The birth of an idea — ignition, energy gathering, the moment before creation",
    date: "FEB 2026",
    round: "online",
    badge: "PRE-MISSION"
  },
  {
    id: "orbital-entry",
    icon: Satellite,
    title: "ORBITAL ENTRY",
    subtitle: "Phase I Opens",
    description: "Enter the orbit freely — registration opens for all explorers across the nation",
    date: "FEB 2026",
    round: "online",
    badge: "ORBITAL"
  },
  {
    id: "orbital-innovation",
    icon: Globe,
    title: "ORBITAL INNOVATION",
    subtitle: "Open Innovation Sprint",
    description: "Test ideas in zero gravity, prove your trajectory before landing on the main launch site",
    date: "FEB-MAR 2026",
    round: "online",
    badge: "ORBITAL"
  },
  {
    id: "selection-gate",
    icon: Waypoints,
    title: "SELECTION GATE",
    subtitle: "Crew Finalization",
    description: "35 Internal + 35 Open teams selected for the deep space mission",
    date: "MAR 28, 2026",
    round: "transition"
  },
  {
    id: "landing-prep",
    icon: MapPin,
    title: "LANDING PREP",
    subtitle: "Pre-Launch Briefing",
    description: "Systems powering up, pre-launch briefings, calibrating instruments for the mission",
    date: "MAR 29, 2026",
    round: "offline",
    badge: "DEEP SPACE"
  },
  {
    id: "ignition",
    icon: Flame,
    title: "IGNITION",
    subtitle: "Mission Begins",
    description: "The clock starts — 24 hours of intensive building and innovation begins",
    date: "MAR 30, 09:00",
    round: "offline",
    badge: "DEEP SPACE"
  },
  {
    id: "deep-space",
    icon: Rocket,
    title: "DEEP SPACE",
    subtitle: "24-Hour Build",
    description: "Nonstop creation, traversing through dimensions of innovation and problem-solving",
    date: "MAR 30-31",
    round: "offline",
    badge: "DEEP SPACE"
  },
  {
    id: "evolution",
    icon: Brain,
    title: "EVOLUTION",
    subtitle: "Mentorship & Refinement",
    description: "Checkpoints passed, prototypes transforming into solutions with expert guidance",
    date: "DURING EVENT",
    round: "offline",
    badge: "DEEP SPACE"
  },
  {
    id: "transmission",
    icon: Radio,
    title: "TRANSMISSION",
    subtitle: "Final Presentations",
    description: "Showcasing innovations and discoveries to the judging panel",
    date: "MAR 31",
    round: "offline",
    badge: "DEEP SPACE"
  },
  {
    id: "arrival",
    icon: Flag,
    title: "ARRIVAL",
    subtitle: "Results & Celebration",
    description: "Celebration of achievements, prizes awarded, new connections forged",
    date: "MAR 31, 2026",
    round: "offline",
    badge: "DEEP SPACE"
  }
];

const PhaseHeaderCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      {/* Phase I - Online */}
      <motion.div
        className="relative p-6 rounded-2xl border border-dashed border-foreground/20 bg-background/50 backdrop-blur-sm"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ borderColor: 'hsl(var(--foreground) / 0.4)' }}
      >
        <div className="absolute -top-3 left-6">
          <Badge variant="outline" className="bg-background border-foreground/30 text-foreground/70 text-xs tracking-widest">
            PHASE I
          </Badge>
        </div>
        
        <div className="flex items-start gap-4 mt-2">
          <div className="w-12 h-12 rounded-full border border-dashed border-foreground/30 flex items-center justify-center">
            <Satellite className="w-5 h-5 text-foreground/70" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-display font-bold text-foreground">ORBITAL INNOVATION</h3>
            <p className="text-sm text-foreground/50 mt-1">Enter the orbit freely</p>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-foreground/50" />
            <span className="text-sm text-foreground/70">Online Mode</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-foreground">FREE</span>
            <span className="text-sm text-foreground/50">Entry</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-4 h-4 text-foreground/50" />
            <span className="text-sm text-foreground/70">Participation Certificate</span>
          </div>
        </div>
      </motion.div>

      {/* Phase II - Offline */}
      <motion.div
        className="relative p-6 rounded-2xl border border-foreground/30 bg-foreground/5 backdrop-blur-sm"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ 
          borderColor: 'hsl(var(--foreground) / 0.5)',
          boxShadow: '0 0 30px hsl(var(--foreground) / 0.1)'
        }}
      >
        <div className="absolute -top-3 left-6">
          <Badge className="bg-foreground text-background text-xs tracking-widest">
            PHASE II
          </Badge>
        </div>
        
        <div className="flex items-start gap-4 mt-2">
          <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
            <Rocket className="w-5 h-5 text-background" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-display font-bold text-foreground">DEEP SPACE MISSION</h3>
            <p className="text-sm text-foreground/50 mt-1">Land at the launch facility</p>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-foreground/50" />
            <span className="text-sm text-foreground/70">Offline • March 30-31, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-foreground">₹150</span>
            <span className="text-sm text-foreground/50">per person</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-foreground/50" />
              <span className="text-xs text-foreground/60">F&B</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-foreground/50" />
              <span className="text-xs text-foreground/60">Goodies</span>
            </div>
            <div className="flex items-center gap-2">
              <Ticket className="w-4 h-4 text-foreground/50" />
              <span className="text-xs text-foreground/60">Event Pass</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SelectionGateDivider = () => {
  return (
    <motion.div
      className="relative py-8 my-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Horizontal line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
      
      {/* Center node */}
      <div className="relative flex justify-center">
        <motion.div
          className="px-6 py-3 bg-background border border-foreground/30 rounded-full flex items-center gap-3"
          animate={{ 
            boxShadow: [
              '0 0 20px hsl(var(--foreground) / 0.1)',
              '0 0 40px hsl(var(--foreground) / 0.2)',
              '0 0 20px hsl(var(--foreground) / 0.1)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Waypoints className="w-5 h-5 text-foreground" />
          <span className="text-sm font-display font-bold tracking-widest text-foreground">
            ENTERING DEEP SPACE
          </span>
        </motion.div>
      </div>
      
      {/* Subtitle */}
      <p className="text-center text-xs text-foreground/40 mt-4 tracking-widest">
        35 INTERNAL + 35 OPEN TEAMS SELECTED
      </p>
    </motion.div>
  );
};

const DynamicJourney = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Separate phases by round type for proper rendering
  const onlinePhases = phases.filter(p => p.round === 'online');
  const transitionPhase = phases.find(p => p.round === 'transition');
  const offlinePhases = phases.filter(p => p.round === 'offline');

  // Track alternation index separately for each phase group
  let alternationIndex = 0;

  return (
    <section 
      ref={containerRef}
      id="journey" 
      className="relative py-32 overflow-hidden bg-card/30"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-xs font-sans text-foreground/60 tracking-[0.2em]">MISSION PHASES</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            THE TIMELINE
          </h2>
          
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
            Your mission through innovation — from orbital exploration to deep space execution
          </p>
        </motion.div>

        {/* Phase Header Cards - Section Block, Full Width, Centered */}
        <PhaseHeaderCards />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Spine - Fixed, Centered */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-foreground"
              style={{ height: lineHeight }}
            />
          </div>

          {/* PHASE I: Online Events */}
          {onlinePhases.map((phase) => {
            const currentIndex = alternationIndex++;
            const isEven = currentIndex % 2 === 0;
            
            return (
              <TimelineEvent 
                key={phase.id} 
                phase={phase} 
                isEven={isEven}
                index={currentIndex}
              />
            );
          })}

          {/* Transition Phase - Selection Gate (Centered, Full Width) */}
          {transitionPhase && (
            <TimelineEvent 
              key={transitionPhase.id} 
              phase={transitionPhase} 
              isEven={true}
              index={alternationIndex++}
              isTransitionPhase
            />
          )}

          {/* Selection Gate Divider - Section Block */}
          <SelectionGateDivider />

          {/* PHASE II: Offline Events */}
          {offlinePhases.map((phase) => {
            const currentIndex = alternationIndex++;
            const isEven = currentIndex % 2 === 0;
            
            return (
              <TimelineEvent 
                key={phase.id} 
                phase={phase} 
                isEven={isEven}
                index={currentIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Extracted TimelineEvent Component for cleaner code
const TimelineEvent = ({ 
  phase, 
  isEven, 
  index,
  isTransitionPhase = false 
}: { 
  phase: Phase; 
  isEven: boolean; 
  index: number;
  isTransitionPhase?: boolean;
}) => {
  const isOnline = phase.round === 'online';
  const isTransition = phase.round === 'transition';
  const isOffline = phase.round === 'offline';

  // isEven = true → card on RIGHT side of spine
  // isEven = false → card on LEFT side of spine
  const cardOnRight = isEven;

  return (
    <motion.div
      className="relative flex items-start md:items-center gap-4 md:gap-8 mb-12 md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
    >
      {/* LEFT side of spine (desktop only) */}
      <div className="flex-1 hidden md:block">
        {!cardOnRight && <EventCard phase={phase} alignRight={true} />}
      </div>

      {/* Center Node - Anchored to Spine */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${
            isTransition 
              ? 'bg-foreground/20 border-2 border-foreground' 
              : isOffline 
                ? 'bg-foreground' 
                : 'border-2 border-dashed border-foreground/50 bg-background'
          }`}
        >
          <phase.icon className={`w-5 h-5 md:w-6 md:h-6 ${
            isTransition ? 'text-foreground' : isOffline ? 'text-background' : 'text-foreground/70'
          }`} />
        </motion.div>
      </motion.div>

      {/* RIGHT side of spine / Mobile content */}
      <div className="flex-1">
        {/* Mobile: Always show card here (left-aligned layout) */}
        <div className="md:hidden">
          <EventCard phase={phase} alignRight={false} />
        </div>
        {/* Desktop: Show only when card should be on right */}
        <div className="hidden md:block">
          {cardOnRight && <EventCard phase={phase} alignRight={false} />}
        </div>
      </div>
    </motion.div>
  );
};

// Extracted EventCard Component
const EventCard = ({ phase, alignRight }: { phase: Phase; alignRight: boolean }) => {
  const isOnline = phase.round === 'online';
  const isTransition = phase.round === 'transition';
  const isOffline = phase.round === 'offline';

  return (
    <motion.div
      className={`p-4 md:p-6 rounded-2xl ${
        isTransition 
          ? 'border-2 border-foreground/40 bg-foreground/10' 
          : isOffline 
            ? 'border border-foreground/30 bg-foreground/5' 
            : 'border border-dashed border-foreground/20 bg-background/50'
      } ${alignRight ? 'text-right' : 'text-left'}`}
      whileHover={{ 
        scale: 1.02,
        borderColor: isTransition ? 'hsl(var(--foreground) / 0.6)' : 'hsl(var(--foreground) / 0.3)'
      }}
    >
      <div className={`flex items-center gap-2 ${alignRight ? 'justify-end' : 'justify-start'}`}>
        <span className="text-xs font-sans text-foreground/40 tracking-widest">
          {phase.date}
        </span>
        {phase.badge && (
          <Badge 
            variant="outline" 
            className={`text-[10px] tracking-wider ${
              isOffline 
                ? 'border-foreground/40 text-foreground/70' 
                : 'border-foreground/20 text-foreground/50'
            }`}
          >
            {phase.badge}
          </Badge>
        )}
      </div>
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
  );
};

export default DynamicJourney;
