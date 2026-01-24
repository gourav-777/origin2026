import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users, Trophy, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "HACKERS" },
  { icon: Code, value: "48", label: "HOURS" },
  { icon: Trophy, value: "₹5L+", label: "PRIZES" },
  { icon: Zap, value: "10+", label: "TRACKS" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-primary mb-2">
            {"///"} SYSTEM_INFO
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold">
            ABOUT <span className="text-primary text-glow">ORIGIN</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-4 md:p-6 border border-border bg-card/50 backdrop-blur-sm">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                <span className="text-primary">ORIGIN</span> is not just another
                hackathon—it's the genesis of innovation. A 48-hour odyssey
                where the brightest minds converge to build, break, and
                revolutionize technology.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                From cutting-edge AI to blockchain solutions, from sustainable
                tech to futuristic interfaces—your ideas become reality here.
              </p>
              <div className="flex items-center gap-2 text-sm font-mono text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                TRANSMISSION ACTIVE
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-4 md:p-6 border border-border bg-card/50 backdrop-blur-sm hover:border-primary transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4 group-hover:animate-pulse" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default About;
