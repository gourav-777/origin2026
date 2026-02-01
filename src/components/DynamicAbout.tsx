import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Rocket, Users, Zap, Target, Clock } from "lucide-react";

const DynamicAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Brain,
      title: "AI-FOCUSED",
      description: "Build intelligent solutions using cutting-edge AI/ML technologies"
    },
    {
      icon: Clock,
      title: "24 HOURS",
      description: "Non-stop innovation marathon pushing limits of creativity"
    },
    {
      icon: Users,
      title: "500+ HACKERS",
      description: "Join brilliant minds from across India's top institutions"
    },
    {
      icon: Target,
      title: "REAL PROBLEMS",
      description: "Solve industry and societal challenges with working prototypes"
    },
    {
      icon: Rocket,
      title: "PRODUCTION-READY",
      description: "Build deployable solutions, not just presentations"
    },
    {
      icon: Zap,
      title: "MENTORSHIP",
      description: "Guidance from industry experts and tech leaders"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 overflow-hidden bg-background"
    >
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-xs font-sans text-foreground/60 tracking-[0.2em]">ABOUT THE MISSION</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            WHAT IS ORIGIN?
          </h2>
          
          <p className="text-lg text-foreground/50 max-w-3xl mx-auto leading-relaxed">
            ORIGIN is the flagship AI hackathon of SIMATS Engineering's 
            Hackathon Club — a high-intensity, 24-hour innovation experience where 
            ideas transform into reality.
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
                className="relative h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'hsl(var(--foreground) / 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex p-3 rounded-xl bg-foreground mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <feature.icon className="w-6 h-6 text-background" />
                  </motion.div>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {feature.description}
                  </p>
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
          <blockquote className="text-2xl md:text-3xl font-display font-light text-foreground/70 italic">
            "Where ideas meet intelligence"
          </blockquote>
          <p className="text-sm text-foreground/40 mt-4 tracking-widest">— MARCH 30-31, 2026 • CHENNAI</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DynamicAbout;
