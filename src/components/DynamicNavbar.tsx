import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import originLogo from "@/assets/origin-logo.png";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#journey", label: "TIMELINE" },
  { href: "#prizes", label: "PRIZES" },
  { href: "#faq", label: "FAQ" },
  { href: "#team", label: "TEAM" },
];

const DynamicNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a 
              href="#home"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <img src={originLogo} alt="ORIGIN" className="h-16 md:h-20" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-sans tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Register Button */}
            <motion.a
              href="#register"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg font-sans text-xs font-semibold bg-foreground text-background"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              REGISTER
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 bg-background md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-2xl font-display tracking-wider text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#register"
            className="mt-4 px-8 py-3 rounded-lg font-sans font-semibold bg-foreground text-background"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              y: isMobileMenuOpen ? 0 : 20 
            }}
            transition={{ delay: 0.6 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            REGISTER NOW
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default DynamicNavbar;
