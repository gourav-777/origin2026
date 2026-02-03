import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const teamLeads = [
  {
    name: "Team Lead",
    role: "Organizer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
  },
  {
    name: "Tech Lead",
    role: "Technical Head",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
  },
  {
    name: "Design Lead",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
  },
  {
    name: "Marketing Lead",
    role: "Outreach Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
  }
];

const supportingCrew = [
  { name: "Alex", role: "Volunteer", initials: "AX" },
  { name: "Priya", role: "Coordinator", initials: "PR" },
  { name: "Ryan", role: "Operations", initials: "RY" },
  { name: "Maya", role: "Content", initials: "MA" },
  { name: "Arjun", role: "Social Media", initials: "AR" },
  { name: "Sara", role: "Logistics", initials: "SA" },
  { name: "Kiran", role: "Support", initials: "KI" },
  { name: "Dev", role: "Assistant", initials: "DV" },
];

const DynamicTeam = () => {
  return (
    <section id="team" className="relative py-32 overflow-hidden bg-background">
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
            <span className="text-xs font-sans text-foreground/60 tracking-[0.2em]">MISSION CONTROL</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            THE CREW
          </h2>
          
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
            The brilliant minds orchestrating your innovation experience
          </p>
        </motion.div>

        {/* Main Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamLeads.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative p-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm text-center overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: 'hsl(var(--foreground) / 0.2)' }}
              >
                <div className="relative z-10">
                  <motion.div
                    className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border border-border"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </motion.div>
                  
                  <h3 className="font-display font-bold text-foreground text-sm">{member.name}</h3>
                  <p className="text-xs text-foreground/50 mt-1">{member.role}</p>
                  
                  <div className="flex justify-center gap-3 mt-4">
                    <motion.a 
                      href="#" 
                      className="text-foreground/40 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-foreground/40 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-foreground/40 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Crew */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-sans text-foreground/40 tracking-[0.2em] mb-6">SUPPORTING CREW</p>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-3xl mx-auto">
            {supportingCrew.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.div
                  className="p-2 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center"
                  whileHover={{ scale: 1.05, borderColor: 'hsl(var(--foreground) / 0.2)' }}
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-foreground/5 border border-border/50 flex items-center justify-center">
                    <span className="text-xs font-display font-bold text-foreground/60">{member.initials}</span>
                  </div>
                  <p className="text-[10px] font-medium text-foreground/70 truncate">{member.name}</p>
                  <p className="text-[8px] text-foreground/40 truncate">{member.role}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicTeam;
