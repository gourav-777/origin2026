import { motion } from "framer-motion";
import { Trophy, Medal, Award, Gift, Star } from "lucide-react";

const prizes = [
  {
    position: "1ST",
    title: "GRAND CHAMPION",
    prize: "₹1,00,000",
    icon: Trophy,
    gradient: "from-yellow-400 via-orange-500 to-yellow-600",
    benefits: ["Cash Prize", "Internship Opportunities", "Exclusive Swag", "Certificate of Excellence"],
    scale: 1.1
  },
  {
    position: "2ND",
    title: "FIRST RUNNER-UP",
    prize: "₹60,000",
    icon: Medal,
    gradient: "from-slate-300 via-slate-400 to-slate-500",
    benefits: ["Cash Prize", "Mentorship Sessions", "Swag Kit", "Certificate"],
    scale: 1
  },
  {
    position: "3RD",
    title: "SECOND RUNNER-UP",
    prize: "₹40,000",
    icon: Award,
    gradient: "from-amber-600 via-amber-700 to-amber-800",
    benefits: ["Cash Prize", "Swag Kit", "Certificate"],
    scale: 1
  }
];

const specialPrizes = [
  { title: "Best AI Innovation", prize: "₹10,000", icon: Star },
  { title: "Best First-Timers", prize: "₹10,000", icon: Gift },
  { title: "People's Choice", prize: "₹10,000", icon: Trophy },
];

const DynamicPrizes = () => {
  return (
    <section id="prizes" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--accent)) 0%, transparent 50%)`
        }}
      />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-xs font-sans text-yellow-500 tracking-[0.2em]">REWARDS</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-foreground">PRIZE </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600">CONSTELLATION</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over <span className="text-primary font-bold">₹2,00,000+</span> in prizes awaiting the brightest innovators
          </p>
        </motion.div>

        {/* Main prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              className={`relative ${index === 0 ? 'md:-mt-8' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="relative h-full p-8 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-md overflow-hidden text-center"
                whileHover={{ 
                  scale: 1.03,
                  borderColor: 'hsl(var(--primary) / 0.5)'
                }}
                style={{ transform: `scale(${prize.scale})` }}
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-2 bg-gradient-to-r ${prize.gradient} rounded-3xl opacity-0 blur-xl transition-opacity duration-500`}
                  whileHover={{ opacity: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${prize.gradient} mb-4`}
                    animate={{
                      boxShadow: [
                        `0 0 20px rgba(255, 200, 100, 0.3)`,
                        `0 0 40px rgba(255, 200, 100, 0.5)`,
                        `0 0 20px rgba(255, 200, 100, 0.3)`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <prize.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <span className={`text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r ${prize.gradient}`}>
                    {prize.position}
                  </span>
                  
                  <h3 className="text-lg font-display font-bold text-foreground mt-2">
                    {prize.title}
                  </h3>
                  
                  <p className={`text-3xl font-display font-black mt-4 text-transparent bg-clip-text bg-gradient-to-r ${prize.gradient}`}>
                    {prize.prize}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {prize.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Special prizes */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-8">
            SPECIAL CATEGORIES
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {specialPrizes.map((prize, index) => (
            <motion.div
              key={prize.title}
              className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'hsl(var(--primary) / 0.5)'
              }}
            >
              <prize.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="text-sm font-display font-bold text-foreground">{prize.title}</h4>
              <p className="text-xl font-display font-bold text-primary mt-2">{prize.prize}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicPrizes;
