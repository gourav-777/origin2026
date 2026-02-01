import { Github, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import originLogo from "@/assets/origin-logo.png";

const CosmicFooter = () => {
  return (
    <footer className="relative py-16 border-t border-border/30">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(240 20% 5%) 100%)'
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <img 
                src={originLogo} 
                alt="ORIGIN - Place to Start" 
                className="h-14 w-auto"
              />
            </a>
            <p className="text-sm text-muted-foreground font-sans mb-6 max-w-md leading-relaxed">
              A 24-hour National AI Hackathon presented by the Hackathon Club of SIMATS Engineering. 
              Where innovation is a cosmic force and ideas are born like stars.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-display font-bold text-foreground mb-5 tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {["About", "Journey", "Prizes", "FAQ", "Team", "Register"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-display font-bold text-foreground mb-5 tracking-widest">
              CONTACT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span>hello@origin-hackathon.dev</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>SIMATS Engineering College, Chennai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(190 100% 50% / 0.3), hsl(270 80% 60% / 0.3), transparent)'
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans text-muted-foreground">
            © 2026 ORIGIN. All rights reserved.
          </p>
          <p className="text-xs font-sans text-muted-foreground flex items-center gap-2">
            Built with 
            <span 
              className="text-transparent bg-clip-text font-bold"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))'
              }}
            >
              cosmic energy
            </span>
            by the ORIGIN Crew
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CosmicFooter;