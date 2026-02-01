import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Users } from "lucide-react";

const teamMembers = [
  { name: "ALEX CHEN", role: "LEAD ORGANIZER", avatar: "AC" },
  { name: "PRIYA SHARMA", role: "TECH HEAD", avatar: "PS" },
  { name: "RYAN PATEL", role: "DESIGN LEAD", avatar: "RP" },
  { name: "MAYA JOHNSON", role: "SPONSORSHIP", avatar: "MJ" },
  { name: "ARJUN REDDY", role: "LOGISTICS", avatar: "AR" },
  { name: "SARA KIM", role: "MARKETING", avatar: "SK" },
];

const CosmicTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-xs font-sans text-primary tracking-widest">MISSION CONTROL</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-wide">
            THE{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))'
              }}
            >
              CREW
            </span>
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-4 md:p-5 rounded-xl glass-cosmic text-center hover:scale-105 transition-transform">
                {/* Avatar */}
                <motion.div 
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-xl md:text-2xl font-display font-bold"
                  style={{
                    background: 'linear-gradient(135deg, hsl(190 100% 50% / 0.2), hsl(270 80% 60% / 0.2))',
                    border: '2px solid hsl(190 100% 50% / 0.3)',
                  }}
                  whileHover={{ 
                    borderColor: 'hsl(190 100% 50%)',
                    boxShadow: '0 0 30px hsl(190 100% 50% / 0.3)'
                  }}
                >
                  <span 
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))'
                    }}
                  >
                    {member.avatar}
                  </span>
                </motion.div>

                <h3 className="text-sm md:text-base font-display font-bold text-foreground mb-1 truncate">
                  {member.name}
                </h3>
                <p className="text-[10px] md:text-xs font-sans text-primary tracking-widest mb-3 truncate">
                  {member.role}
                </p>

                {/* Social links */}
                <div className="flex justify-center gap-2">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmicTeam;