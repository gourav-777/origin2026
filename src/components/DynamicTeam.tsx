import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram } from "lucide-react";

const teamLeads = [
  {
    name: "Harsh Limkar N",
    role: "Lead Organiser",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    linkedin: "https://www.linkedin.com/in/harsh-limkar",
    email: "harshlimkar23@gmail.com",
    instagram: "https://www.instagram.com/hxrsh.lmkr?igsh=ZG5mNnZlczhmOHVs",
  },
  {
    name: "Raihan Hussain",
    role: "Event Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    linkedin: "https://www.linkedin.com/in/raihan-hussain-036b15282",
    email: "hussainraihan15@gmail.com",
    instagram: "https://www.instagram.com/raihann__08?igsh=d3Z4NjB2bThtNW9v",
  },
  {
    name: "Design Lead",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    linkedin: "#",
    email: "#",
    instagram: "#",
  },
  {
    name: "Marketing Lead",
    role: "Outreach Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    linkedin: "#",
    email: "#",
    instagram: "#",
  },
];

const supportingCrew = [
  {
    name: "Raihan Hussain",
    role: "Event Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    linkedin: "https://www.linkedin.com/in/raihan-hussain-036b15282",
    email: "hussainraihan15@gmail.com",
    instagram: "https://www.instagram.com/raihann__08?igsh=d3Z4NjB2bThtNW9v",
  },
  {
    name: "Harsh Limkar N",
    role: "Lead Organiser",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    linkedin: "https://www.linkedin.com/in/harsh-limkar",
    email: "harshlimkar23@gmail.com",
    instagram: "https://www.instagram.com/hxrsh.lmkr?igsh=ZG5mNnZlczhmOHVs",
  },
  {
    name: "Ryan",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    linkedin: "#",
    email: "ryan@example.com",
    instagram: "#",
  },
  {
    name: "Maya",
    role: "Content",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    linkedin: "#",
    email: "maya@example.com",
    instagram: "#",
  },
  {
    name: "Arjun",
    role: "Social Media",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    linkedin: "#",
    email: "arjun@example.com",
    instagram: "#",
  },
  {
    name: "Sara",
    role: "Logistics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    linkedin: "#",
    email: "sara@example.com",
    instagram: "#",
  },
  {
    name: "Kiran",
    role: "Support",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    linkedin: "#",
    email: "kiran@example.com",
    instagram: "#",
  },
  {
    name: "Dev",
    role: "Assistant",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop",
    linkedin: "#",
    email: "dev@example.com",
    instagram: "#",
  },
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

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">THE CREW</h2>

          <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
            The brilliant minds orchestrating your innovation experience
          </p>
        </motion.div>

        {/* Main Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
                className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm text-center overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--foreground) / 0.2)" }}
              >
                <div className="relative z-10">
                  <motion.div
                    className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border border-border"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </motion.div>

                  <h3 className="font-display font-bold text-foreground text-base">{member.name}</h3>
                  <p className="text-sm text-foreground/50 mt-1">{member.role}</p>

                  <div className="flex justify-center gap-4 mt-5">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/40 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/40 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="text-foreground/40 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Mail className="w-5 h-5" />
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
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
                  className="p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center"
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--foreground) / 0.2)" }}
                >
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border border-border/50">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-medium text-foreground/70 truncate">{member.name}</p>
                  <p className="text-xs text-foreground/40 truncate">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/40 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="text-foreground/40 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/40 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                  </div>
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
