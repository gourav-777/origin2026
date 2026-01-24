import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import originLogo from "@/assets/origin-logo.png";

const navItems = [
  { label: "HOME", href: "/#home" },
  { label: "ABOUT", href: "/#about" },
  { label: "TIMELINE", href: "/timeline", isPage: true },
  { label: "PRIZES", href: "/#prizes" },
  { label: "FAQ", href: "/#faq" },
  { label: "TEAM", href: "/#team" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile sticky menu button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-background/90 backdrop-blur-md border border-border rounded-lg text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <motion.nav
        className="relative md:fixed md:top-0 md:left-0 md:right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/#home" className="flex items-center">
              <img 
                src={originLogo} 
                alt="ORIGIN - Place to Start" 
                className="h-12 md:h-16 w-auto"
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                item.isPage ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </a>
                )
              ))}
            </div>

            {/* Register button */}
            <a
              href="#register"
              className="hidden md:block px-4 py-2 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors animate-pulse-glow"
            >
              REGISTER_NOW
            </a>

            {/* Hidden on mobile - menu button is now separate and sticky */}
            <div className="md:hidden w-10" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <motion.div
          className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-4 text-lg font-mono text-muted-foreground hover:text-primary transition-colors border-b border-border"
                  onClick={() => setIsOpen(false)}
                >
                  {">"} {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-4 text-lg font-mono text-muted-foreground hover:text-primary transition-colors border-b border-border"
                  onClick={() => setIsOpen(false)}
                >
                  {">"} {item.label}
                </a>
              )
            ))}
            <a
              href="#register"
              className="block mt-6 px-4 py-3 bg-primary text-primary-foreground font-mono text-center text-lg"
              onClick={() => setIsOpen(false)}
            >
              REGISTER_NOW
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
