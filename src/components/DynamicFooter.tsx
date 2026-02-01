import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import originLogo from "@/assets/origin-logo.png";

const DynamicFooter = () => {
  return (
    <footer className="relative py-16 overflow-hidden border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={originLogo} alt="ORIGIN" className="h-12 mb-4" />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              A 24-hour National AI Hackathon where innovation ignites and ideas launch into the future.
              Presented by the Hackathon Club of SIMATS Engineering.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border/50 bg-card/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-foreground mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {["About", "Journey", "Prizes", "FAQ", "Register"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-foreground mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>SIMATS Engineering,<br />Chennai, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:hackathon@simats.edu.in" className="hover:text-primary transition-colors">
                  hackathon@simats.edu.in
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 ORIGIN. Crafted with 🚀 by the Hackathon Club of SIMATS Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DynamicFooter;
