import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram } from "lucide-react";

const teamLeads = [
  {
    name: "Harsh Limkar N",
    role: "Lead Organiser",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398333/harsh.jpg_owdpgy.jpg",
    linkedin: "https://www.linkedin.com/in/harsh-limkar",
    email: "harshlimkar23@gmail.com",
    instagram: "https://www.instagram.com/hxrsh.lmkr?igsh=ZG5mNnZlczhmOHVs",
  },
  {
    name: "Gourav Sharma",
    role: "Event Director",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398042/gouravsharma.jpg_t7zrey.jpg",
    linkedin: "https://www.linkedin.com/in/gouravsharmaxyz/",
    email: "gouravsharma000147@gmail.com",
    instagram: "https://www.instagram.com/gouravsharma.xyz/",
  },
  {
    name: "Raihan Hussain",
    role: "Event Director",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398227/raihanhussain.jpg_vjjaeq.jpg",
    linkedin: "https://www.linkedin.com/in/raihan-hussain-036b15282",
    email: "hussainraihan15@gmail.com",
    instagram: "https://www.instagram.com/raihann__08?igsh=d3Z4NjB2bThtNW9v",
  },

  {
    name: "Aswath S",
    role: "Secretary",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398243/aswath.jpg_qrdz4l.jpg",
    linkedin: "https://www.linkedin.com/in/aswath-s-a37475336/",
    email: "aswath10102006@gmail.com",
    instagram: "",
  },
];

const supportingCrew = [
  {
    name: "Sri Sayee",
    role: "Joint Secretary",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398255/srisai.jpg_ikmg1k.jpg",
    linkedin: "https://www.linkedin.com/in/sri-sayee-kathiravan-85aba632a/",
    email: "ksrisayee@gmail.com",
    instagram: "https://github.com/ksrisayee12/",
  },
  {
    name: "Veera Vaishnavi",
    role: "Lead Organiser",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398056/VeeraVaishnavi_bo0ms9.jpg",
    linkedin: "https://www.linkedin.com/in/veera-vaishnavi/",
    email: "vaishureddy26096@gmail.com",
    instagram: "https://www.instagram.com/__vaishu.26_?utm_source=qr&igsh=cnoxNnZkcnZ6Mmcy",
  },
  {
    name: "Vinnarasu",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    linkedin:
      "https://www.linkedin.com/in/vinnarasu-r-50439b328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "r.vinnarasu2006@gmail.com",
    instagram: "https://www.instagram.com/vinn___03?igsh=ZnhpeDE0Y2M1bnlk",
  },
  {
    name: "Aravind Muthiah",
    role: "Content",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398075/arvinth_vnc8fz.jpg",
    linkedin:
      "https://www.linkedin.com/in/aravind-muthiah-m?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "aravindmuthiah23@gmail.com",
    instagram: "https://www.instagram.com/aravindmuthiah23?igsh=MWttd2VpNnJ4ZmViZg==",
  },
  {
    name: "Neha B",
    role: "PR Head",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    linkedin:
      "https://www.linkedin.com/in/neha-b-3b2306373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "nehabalathamil@gmail.com",
    instagram: "https://www.instagram.com/neha.mag_?igsh=dDBhM3lmb2plcGFu",
  },
  {
    name: "Pradeep",
    role: "Media Head",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398216/Pradeep_G.jpg_wvhunz.jpg",
    linkedin:
      "https://www.linkedin.com/in/pradp27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "pradeepgovindarajre@gmail.com",
    instagram: "https://www.instagram.com/_pradp27___?igsh=MTF6MjJ2dGF1aG5uNg==",
  },
  {
    name: "K Vinay",
    role: "Media Team",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398081/vinay_epkpeq.jpg",
    linkedin:
      ":https://www.linkedin.com/in/k-vinay-84b32b361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "kj5837453@gmail.com",
    instagram: "https://www.instagram.com/vetakaram_vinay_?igsh=emc0bXV0bmYzYm0y",
  },
  {
    name: "Sasvanthu",
    role: "Registration Head",
    image: "https://res.cloudinary.com/duoigqhsw/image/upload/v1770398045/sasvanthu_towxyz.jpg",
    linkedin: "https://www.linkedin.com/in/sasvanthu-g",
    email: "https://www.instagram.com/sasvanthu06/",
    instagram: "sasvanthu.g.2006@gmail.com",
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
