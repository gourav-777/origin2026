import { motion } from "framer-motion";
import { Trophy, Gift, Briefcase, GraduationCap, Globe } from "lucide-react";

const perks = [
  { title: "Free Domains", description: "Get free custom domains to launch your winning projects online", icon: Globe },
  { title: "Free Goodies", description: "Exclusive swag and merchandise for all participants", icon: Gift },
  { title: "Internship Opportunity", description: "Direct internship opportunities with top companies", icon: Briefcase },
  { title: "Abroad Study Opportunity", description: "Chance to study abroad with partner universities", icon: GraduationCap },
];

const DynamicPrizes = () => {
  return (
    <section id="prizes" className="relative py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Trophy className="w-4 h-4 text-foreground/60" />
            <span className="text-xs font-sans text-foreground/60 tracking-[0.2em]">REWARDS</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            PRIZES
          </h2>
        </motion.div>

        {/* Main Prize Pool */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative p-12 rounded-2xl border border-foreground/20 bg-card/50 backdrop-blur-sm overflow-hidden text-center"
            whileHover={{ 
              scale: 1.02,
              borderColor: 'hsl(var(--foreground) / 0.3)'
            }}
          >
            <motion.div
              className="inline-flex p-6 rounded-2xl bg-foreground mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Trophy className="w-12 h-12 text-background" />
            </motion.div>

            <h3 className="text-2xl font-display font-bold text-foreground/70 mb-4">
              PRIZE POOL
            </h3>
            
            <p className="text-5xl md:text-7xl font-display font-black text-foreground">
              ₹50,000+
            </p>
            
            <p className="text-lg text-foreground/50 mt-4">
              Cash prizes for winners
            </p>
          </motion.div>
        </motion.div>

        {/* Perks */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-8">
            WHAT YOU GET
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              className="p-5 sm:p-8 rounded-xl border border-border bg-card/30 backdrop-blur-sm flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'hsl(var(--foreground) / 0.2)'
              }}
            >
              <motion.div
                className="inline-flex p-3 sm:p-4 rounded-xl bg-foreground/10 mb-3 sm:mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <perk.icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground/80" />
              </motion.div>
              <h4 className="text-sm sm:text-lg font-display font-bold text-foreground mb-2 text-center min-h-[40px] sm:min-h-0 flex items-center">{perk.title}</h4>
              <p className="text-xs sm:text-sm text-foreground/50 text-justify leading-relaxed">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicPrizes;
