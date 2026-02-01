import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Star, Gift, Sparkles } from "lucide-react";

const mainPrizes = [
  {
    position: "1ST",
    icon: Trophy,
    prize: "₹2,00,000",
    perks: ["Internship Opportunities", "Mentorship Program", "Premium Swag Kit"],
    featured: true,
  },
  {
    position: "2ND",
    icon: Medal,
    prize: "₹1,00,000",
    perks: ["Internship Opportunities", "Tech Gadgets", "Premium Swag Kit"],
    featured: false,
  },
  {
    position: "3RD",
    icon: Award,
    prize: "₹50,000",
    perks: ["Mentorship Sessions", "Tech Gadgets", "Premium Swag Kit"],
    featured: false,
  },
];

const trackPrizes = [
  { track: "BEST AI/ML", prize: "₹25,000", icon: "🤖" },
  { track: "BEST WEB3", prize: "₹25,000", icon: "⛓️" },
  { track: "BEST UI/UX", prize: "₹15,000", icon: "🎨" },
  { track: "SUSTAINABILITY", prize: "₹25,000", icon: "🌱" },
  { track: "BEST FRESHERS", prize: "₹15,000", icon: "⭐" },
];

const CosmicPrizes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background effect */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, hsl(45 90% 50% / 0.05) 0%, transparent 40%)'
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 mb-6"
          >
            <Star className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-sans text-amber-500 tracking-widest">COSMIC REWARDS</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-wide">
            PRIZE{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #fbbf24, #f59e0b)'
              }}
            >
              POOL
            </span>
          </h2>
          
          <motion.p 
            className="mt-6 text-2xl md:text-4xl font-display font-bold"
            style={{
              backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ₹5,00,000+
          </motion.p>
          <p className="text-muted-foreground font-sans">Total prizes to be won</p>
        </motion.div>

        {/* Main prizes */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-5xl mx-auto">
          {mainPrizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              className={`relative ${prize.featured ? 'md:-mt-8 md:mb-8' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div 
                className={`relative p-6 md:p-8 rounded-2xl glass-cosmic overflow-hidden ${
                  prize.featured ? 'border-yellow-500/30' : ''
                }`}
                style={prize.featured ? {
                  boxShadow: '0 0 60px hsl(45 90% 50% / 0.15)'
                } : {}}
              >
                {/* Position badge */}
                <div 
                  className="absolute -top-px left-1/2 -translate-x-1/2 px-6 py-2 rounded-b-xl font-display font-bold text-sm tracking-widest"
                  style={{
                    background: prize.featured 
                      ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
                      : index === 1 
                        ? 'linear-gradient(135deg, #94a3b8, #64748b)'
                        : 'linear-gradient(135deg, #fb923c, #ea580c)',
                    color: '#0a0a0f'
                  }}
                >
                  {prize.position} PLACE
                </div>

                <div className="pt-8 text-center">
                  <motion.div
                    animate={prize.featured ? { 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <prize.icon 
                      className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 ${
                        prize.featured ? 'text-yellow-500' : 'text-primary'
                      }`}
                    />
                  </motion.div>
                  
                  <p 
                    className="text-4xl md:text-5xl font-display font-bold mb-6"
                    style={{
                      backgroundImage: prize.featured 
                        ? 'linear-gradient(180deg, #fef3c7, #fbbf24)'
                        : 'linear-gradient(180deg, #ffffff, hsl(190 100% 70%))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {prize.prize}
                  </p>
                  
                  <div className="space-y-2">
                    {prize.perks.map((perk) => (
                      <p 
                        key={perk} 
                        className="text-sm text-muted-foreground font-sans flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-3 h-3 text-primary" />
                        {perk}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Track prizes */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Gift className="w-5 h-5 text-accent" />
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-wide">
              TRACK PRIZES
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {trackPrizes.map((track, index) => (
              <motion.div
                key={track.track}
                className="group p-4 md:p-5 rounded-xl glass-cosmic text-center hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <span className="text-2xl mb-2 block">{track.icon}</span>
                <p className="text-[10px] md:text-xs font-sans text-primary tracking-widest mb-2">
                  {track.track}
                </p>
                <p className="text-lg md:text-xl font-display font-bold text-foreground">
                  {track.prize}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CosmicPrizes;