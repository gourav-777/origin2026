import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "ALEX CHEN",
    role: "LEAD_ORGANIZER",
    avatar: "AC",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "PRIYA SHARMA",
    role: "TECH_HEAD",
    avatar: "PS",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "RYAN PATEL",
    role: "DESIGN_LEAD",
    avatar: "RP",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "MAYA JOHNSON",
    role: "SPONSORSHIP",
    avatar: "MJ",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "ARJUN REDDY",
    role: "LOGISTICS",
    avatar: "AR",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "SARA KIM",
    role: "MARKETING",
    avatar: "SK",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-10 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-primary mb-2">
            {"///"} SYSTEM_OPERATORS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold">
            THE <span className="text-primary text-glow">TEAM</span>
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group p-3 md:p-4 border border-border bg-card/50 backdrop-blur-sm text-center hover:border-primary transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Avatar */}
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 border-2 border-primary bg-secondary flex items-center justify-center text-primary font-display font-bold text-base md:text-xl group-hover:animate-pulse-glow">
                {member.avatar}
              </div>

              <h3 className="text-xs md:text-sm font-display font-bold text-foreground mb-1 truncate">
                {member.name}
              </h3>
              <p className="text-[10px] md:text-xs font-mono text-primary mb-2 md:mb-3 truncate">
                {member.role}
              </p>

              {/* Social links */}
              <div className="flex justify-center gap-1 md:gap-2">
                <a
                  href={member.socials.github}
                  className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-3 h-3 md:w-4 md:h-4" />
                </a>
                <a
                  href={member.socials.linkedin}
                  className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                </a>
                <a
                  href={member.socials.twitter}
                  className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
