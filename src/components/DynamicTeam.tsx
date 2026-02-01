import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Team Lead",
    role: "Organizer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    name: "Tech Lead",
    role: "Technical Head",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "Design Lead",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    gradient: "from-orange-500 to-red-600"
  },
  {
    name: "Marketing Lead",
    role: "Outreach Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    gradient: "from-green-500 to-teal-600"
  }
];

const DynamicTeam = () => {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs font-sans text-accent tracking-[0.2em]">MISSION CONTROL</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-foreground">THE </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500">CREW</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds orchestrating your cosmic innovation experience
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative p-4 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md text-center overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary) / 0.5)' }}
              >
                {/* Glow */}
                <motion.div
                  className={`absolute -inset-2 bg-gradient-to-r ${member.gradient} rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-20`} />
                  </motion.div>
                  
                  <h3 className="font-display font-bold text-foreground text-sm">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                  
                  <div className="flex justify-center gap-3 mt-4">
                    <motion.a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicTeam;
