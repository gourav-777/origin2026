import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import originLogo from "@/assets/origin-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center mb-4">
              <img 
                src={originLogo} 
                alt="ORIGIN - Place to Start" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-sm text-muted-foreground font-mono mb-4 max-w-md">
              The ultimate 48-hour hackathon experience. Build, innovate, and
              create the future with the brightest minds.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-display font-bold text-foreground mb-4">
              QUICK_LINKS
            </h4>
            <ul className="space-y-2">
              {["About", "Timeline", "Prizes", "FAQ", "Team"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    {">"} {link.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-display font-bold text-foreground mb-4">
              CONTACT
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                hello@origin.dev
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            © 2026 ORIGIN. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            BUILT WITH{" "}
            <span className="text-primary animate-pulse">{"<3"}</span> BY THE
            ORIGIN TEAM
          </p>
        </div>
      </div>

      {/* Scanlines effect */}
      <div className="scanlines" />
    </footer>
  );
};

export default Footer;
