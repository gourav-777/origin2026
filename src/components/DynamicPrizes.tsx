import { motion } from "framer-motion";
import { Trophy, Medal, Award, Gift, Star } from "lucide-react";

const prizes = [
  {
    position: "1ST",
    title: "GRAND CHAMPION",
    prize: "₹1,00,000",
    icon: Trophy,
    benefits: ["Cash Prize", "Internship Opportunities", "Exclusive Swag", "Certificate of Excellence"],
    featured: true
  },
  {
    position: "2ND",
    title: "FIRST RUNNER-UP",
    prize: "₹60,000",
    icon: Medal,
    benefits: ["Cash Prize", "Mentorship Sessions", "Swag Kit", "Certificate"],
    featured: false
  },
  {
    position: "3RD",
    title: "SECOND RUNNER-UP",
    prize: "₹40,000",
    icon: Award,
    benefits: ["Cash Prize", "Swag Kit", "Certificate"],
    featured: false
  }
];

const specialPrizes = [
  { title: "Best AI Innovation", prize: "₹10,000", icon: Star },
  { title: "Best First-Timers", prize: "₹10,000", icon: Gift },
  { title: "People's Choice", prize: "₹10,000", icon: Trophy },
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
          
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
            Over <span className="text-foreground font-bold">₹2,00,000+</span> in prizes awaiting the brightest innovators
          </p>
        </motion.div>

        {/* Main prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              className={`relative ${prize.featured ? 'md:-mt-8' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className={`relative h-full p-8 rounded-2xl border bg-card/50 backdrop-blur-sm overflow-hidden text-center ${
                  prize.featured ? 'border-foreground/20' : 'border-border'
                }`}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'hsl(var(--foreground) / 0.3)'
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex p-4 rounded-2xl bg-foreground mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <prize.icon className="w-8 h-8 text-background" />
                  </motion.div>

                  <span className="block text-4xl font-display font-black text-foreground">
                    {prize.position}
                  </span>
                  
                  <h3 className="text-lg font-display font-bold text-foreground/70 mt-2">
                    {prize.title}
                  </h3>
                  
                  <p className="text-3xl font-display font-black mt-4 text-foreground">
                    {prize.prize}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {prize.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-foreground/50 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
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
              className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'hsl(var(--foreground) / 0.2)'
              }}
            >
              <prize.icon className="w-6 h-6 text-foreground/60 mx-auto mb-3" />
              <h4 className="text-sm font-display font-bold text-foreground">{prize.title}</h4>
              <p className="text-xl font-display font-bold text-foreground mt-2">{prize.prize}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicPrizes;
