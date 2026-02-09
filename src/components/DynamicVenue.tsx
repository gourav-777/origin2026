import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const DynamicVenue = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MapPin className="w-4 h-4 text-foreground/60" />
            <span className="text-xs font-medium tracking-widest text-foreground/60 uppercase">
              Event Location
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Find Us Here
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto text-sm md:text-base">
            SIMATS Engineering Campus, Thandalam, Chennai - Where innovation takes flight
          </p>
        </motion.div>

        {/* Map container with premium styling */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 rounded-2xl blur-xl opacity-50" />
          
          {/* Main card container */}
          <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/20">
            {/* Top bar with venue info */}
            <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-border/30 bg-card/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-foreground/70" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">SIMATS Engineering</p>
                  <p className="text-xs text-foreground/50">Thandalam, Chennai, Tamil Nadu</p>
                </div>
              </div>
              
              <motion.a
                href="https://www.google.com/maps/dir//13.026047,80.016503"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm text-foreground/70 hover:text-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </motion.a>
            </div>
            
            {/* Map iframe with overlay effects */}
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              {/* Subtle vignette overlay */}
              <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-card/20 via-transparent to-card/10" />
              <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-card/10 via-transparent to-card/10" />
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.016503!3d13.026047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzMzLjgiTiA4MMKwMDAnNTkuNCJF!5e0!3m2!1sen!2sin!4v1706520000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ 
                  border: 0,
                  filter: "grayscale(100%) contrast(1.1) brightness(0.9)"
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SIMATS Engineering Location"
                className="w-full h-full"
              />
            </div>
            
            {/* Bottom info bar - mobile directions */}
            <div className="sm:hidden px-4 py-3 border-t border-border/30 bg-card/50">
              <motion.a
                href="https://www.google.com/maps/dir//13.026047,80.016503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-border/50 bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm text-foreground/70"
                whileTap={{ scale: 0.98 }}
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </motion.a>
            </div>
          </div>
          
          {/* Decorative corner accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-foreground/20 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-foreground/20 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-foreground/20 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-foreground/20 rounded-br-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicVenue;
