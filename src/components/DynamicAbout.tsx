import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Rocket, Users, Zap, Target, Clock } from "lucide-react";

const DynamicAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Brain,
      title: "AI-FOCUSED",
      description: "Build intelligent solutions using cutting-edge AI/ML technologies",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "24 HOURS",
      description: "Non-stop innovation marathon pushing limits of creativity",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "500+ HACKERS",
      description: "Join brilliant minds from across India's top institutions",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Target,
      title: "REAL PROBLEMS",
      description: "Solve industry and societal challenges with working prototypes",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Rocket,
      title: "PRODUCTION-READY",
      description: "Build deployable solutions, not just presentations",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "MENTORSHIP",
      description: "Guidance from industry experts and tech leaders",
      gradient: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y, opacity }}
      >
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs font-sans text-primary tracking-[0.2em]">ABOUT THE MISSION</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-foreground">WHAT IS </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-accent">ORIGIN</span>
            <span className="text-foreground">?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ORIGIN is the <span className="text-primary font-semibold">flagship AI hackathon</span> of SIMATS Engineering's 
            Hackathon Club — a high-intensity, 24-hour innovation experience where 
            <span className="text-accent font-semibold"> ideas transform into reality</span>.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative h-full p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'hsl(var(--primary) / 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient glow on hover */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className={`absolute top-3 right-[-30px] w-20 h-6 bg-gradient-to-r ${feature.gradient} rotate-45 opacity-20`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <blockquote className="text-2xl md:text-3xl font-display font-light text-foreground/80 italic">
            "Where <span className="text-primary font-semibold not-italic">ideas</span> meet 
            <span className="text-accent font-semibold not-italic"> intelligence</span>"
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4 tracking-widest">— MARCH 30-31, 2026 • CHENNAI</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DynamicAbout;
