import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Clock, Trophy, Users, Cpu, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "INNOVATORS", description: "From across India" },
  { icon: Clock, value: "24", label: "HOURS", description: "Non-stop creation" },
  { icon: Trophy, value: "₹5L+", label: "PRIZES", description: "To be won" },
  { icon: Cpu, value: "10+", label: "AI TRACKS", description: "To explore" },
];

const CosmicAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background nebula effect */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, hsl(270 60% 20% / 0.15) 0%, transparent 50%)'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-sans text-primary tracking-widest">THE COSMIC GATEWAY</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-wide">
            WHAT IS{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))'
              }}
            >
              ORIGIN
            </span>
            ?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-6 md:p-8 rounded-2xl glass-cosmic">
              {/* Decorative glow */}
              <div 
                className="absolute -inset-px rounded-2xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, hsl(190 100% 50% / 0.2), hsl(270 80% 60% / 0.2))',
                  filter: 'blur(20px)'
                }}
              />
              
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                <span className="text-primary font-semibold">ORIGIN</span> is not just a hackathon—it's 
                <span className="text-accent font-semibold"> the Big Bang of ideas</span>. 
                A 24-hour odyssey where the brightest minds converge to build real-world, 
                AI-driven solutions that matter.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Think of it as a journey through space-time, where innovation is discovered, 
                intelligence evolves like a cosmic entity, and ideas are born like stars.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Presented by the Hackathon Club of SIMATS Engineering, Chennai—this is your 
                gateway to the future of AI innovation.
              </p>
              
              <div className="flex items-center gap-3 text-sm font-sans">
                <motion.div 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-primary tracking-widest">SIGNAL ACTIVE • MARCH 30-31, 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative p-5 md:p-6 rounded-xl glass-cosmic overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, hsl(190 100% 50% / 0.1) 0%, transparent 70%)'
                  }}
                />
                
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                
                <p 
                  className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(190 100% 70%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                
                <p className="text-xs md:text-sm font-display text-foreground tracking-widest mb-1">
                  {stat.label}
                </p>
                
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision statement */}
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <Zap className="w-5 h-5 text-accent" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          
          <blockquote className="text-xl md:text-2xl font-sans text-foreground/80 italic">
            "A journey through space where innovation is discovered. A cosmic gateway for ideas. 
            <span className="text-primary not-italic font-semibold"> The birthplace of intelligence.</span>"
          </blockquote>
        </motion.div>
      </div>

      {/* Decorative gradient line */}
      <div 
        className="absolute left-0 right-0 bottom-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(190 100% 50% / 0.5), hsl(270 80% 60% / 0.5), transparent)'
        }}
      />
    </section>
  );
};

export default CosmicAbout;