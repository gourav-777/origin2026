import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Gift } from "lucide-react";

const prizes = [
  {
    position: "1ST",
    icon: Trophy,
    prize: "₹2,00,000",
    perks: ["Internship Opportunities", "Mentorship Program", "Premium Swag"],
    color: "from-yellow-500 to-amber-600",
  },
  {
    position: "2ND",
    icon: Medal,
    prize: "₹1,00,000",
    perks: ["Internship Opportunities", "Tech Gadgets", "Premium Swag"],
    color: "from-gray-300 to-gray-500",
  },
  {
    position: "3RD",
    icon: Award,
    prize: "₹50,000",
    perks: ["Mentorship Sessions", "Tech Gadgets", "Premium Swag"],
    color: "from-orange-400 to-orange-600",
  },
];

const trackPrizes = [
  { track: "BEST_AI/ML", prize: "₹25,000" },
  { track: "BEST_WEB3", prize: "₹25,000" },
  { track: "BEST_UI/UX", prize: "₹15,000" },
  { track: "BEST_SUSTAINABILITY", prize: "₹25,000" },
  { track: "BEST_FRESHERS", prize: "₹15,000" },
];

const Prizes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" className="py-16 md:py-24 relative bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-10 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-primary mb-2">
            {"///"} REWARD_PROTOCOL
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold">
            PRIZE <span className="text-primary text-glow">POOL</span>
          </h2>
          <p className="mt-4 text-base md:text-lg font-mono text-muted-foreground">
            TOTAL PRIZES WORTH{" "}
            <span className="text-primary text-glow text-xl md:text-2xl">₹5,00,000+</span>
          </p>
        </motion.div>

        {/* Main prizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              className={`relative p-4 md:p-6 border border-border bg-card/50 backdrop-blur-sm ${
                index === 0 ? "sm:col-span-2 md:col-span-1 md:-mt-8" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Position badge */}
              <div
                className={`absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 bg-gradient-to-r ${prize.color} text-background font-mono font-bold text-xs md:text-sm`}
              >
                {prize.position} PLACE
              </div>

              <div className="pt-4 md:pt-6 text-center">
                <prize.icon className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
                <p className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3 md:mb-4">
                  {prize.prize}
                </p>
                <div className="space-y-1 md:space-y-2">
                  {prize.perks.map((perk) => (
                    <p
                      key={perk}
                      className="text-xs md:text-sm text-muted-foreground font-mono"
                    >
                      + {perk}
                    </p>
                  ))}
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-3 md:w-4 h-3 md:h-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-0 right-0 w-3 md:w-4 h-3 md:h-4 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-3 md:w-4 h-3 md:h-4 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-3 md:w-4 h-3 md:h-4 border-r-2 border-b-2 border-primary" />
            </motion.div>
          ))}
        </div>

        {/* Track prizes */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-lg md:text-xl font-display font-bold text-center mb-4 md:mb-6">
            <Gift className="inline w-4 h-4 md:w-5 md:h-5 text-primary mr-2" />
            TRACK PRIZES
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
            {trackPrizes.map((track) => (
              <div
                key={track.track}
                className="p-3 md:p-4 border border-border bg-card/30 text-center hover:border-primary transition-colors"
              >
                <p className="text-[10px] md:text-xs font-mono text-primary mb-1 md:mb-2 truncate">
                  {track.track}
                </p>
                <p className="text-sm md:text-lg font-display font-bold text-foreground">
                  {track.prize}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
