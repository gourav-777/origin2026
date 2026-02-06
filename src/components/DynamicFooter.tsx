import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import originLogo from "@/assets/origin-logo.png";

const DynamicFooter = () => {
  return (
    <footer className="relative py-16 overflow-hidden border-t border-border bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={originLogo} alt="ORIGIN" className="h-16 md:h-20 mb-4" />
            <p className="text-sm text-foreground/50 max-w-sm leading-relaxed">
              A 24-hour National AI Hackathon where innovation ignites and ideas launch into the future.
              Presented by the Hackathon Club of SIMATS Engineering.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Instagram, href: "https://www.instagram.com/origin_simats/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/simats-engineering-hackathon-club" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border bg-card/50 flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
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
                    className="text-sm text-foreground/50 hover:text-foreground transition-colors"
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
              <li className="flex items-start gap-3 text-sm text-foreground/50">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>SIMATS Engineering,<br />Chennai, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/50">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:Hackathonclub.simats@gmail.com" className="hover:text-foreground transition-colors">
                  Hackathonclub.simats@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/40">
            © 2026 ORIGIN. Crafted with 🚀 by the Hackathon Club of SIMATS Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DynamicFooter;
