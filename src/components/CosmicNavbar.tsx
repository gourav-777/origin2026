import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import originLogo from "@/assets/origin-logo.png";

const navItems = [
  { label: "HOME", href: "/#home" },
  { label: "ABOUT", href: "/#about" },
  { label: "JOURNEY", href: "/#journey" },
  { label: "PRIZES", href: "/#prizes" },
  { label: "FAQ", href: "/#faq" },
  { label: "TEAM", href: "/#team" },
];

const CosmicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile sticky menu button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-lg glass-cosmic text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <motion.nav
        className="relative md:fixed md:top-0 md:left-0 md:right-0 z-40 glass-cosmic md:border-b md:border-border/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/#home" className="flex items-center gap-3">
              <img 
                src={originLogo} 
                alt="ORIGIN" 
                className="h-12 md:h-14 w-auto"
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors relative group tracking-wide"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Register button */}
            <a
              href="#register"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans text-sm font-semibold text-background transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))',
              }}
            >
              <Rocket className="w-4 h-4" />
              REGISTER
            </a>

            {/* Hidden on mobile - menu button is now separate and sticky */}
            <div className="md:hidden w-10" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <motion.div
          className="md:hidden fixed inset-0 z-40 pt-20"
          style={{
            background: 'hsl(240 20% 3% / 0.98)',
            backdropFilter: 'blur(20px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="container mx-auto px-4 py-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block py-4 text-xl font-display text-foreground hover:text-primary transition-colors border-b border-border/30"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#register"
              className="flex items-center justify-center gap-2 mt-8 px-6 py-4 rounded-lg font-sans text-lg font-semibold text-background"
              style={{
                background: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))',
              }}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Rocket className="w-5 h-5" />
              REGISTER NOW
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CosmicNavbar;