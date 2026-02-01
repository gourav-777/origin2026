import { motion } from "framer-motion";
import { Rocket, CheckCircle, Users, Calendar } from "lucide-react";

const DynamicRegister = () => {
  return (
    <section id="register" className="relative py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-xs font-sans text-primary tracking-[0.2em]">JOIN THE MISSION</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-foreground">READY FOR </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-accent">LIFTOFF</span>
            <span className="text-foreground">?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Secure your spot in India's most innovative AI hackathon. Limited seats available — 
            <span className="text-primary font-semibold"> register now</span> before the countdown ends.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Users, text: "Form teams of 2-4 members" },
              { icon: Calendar, text: "March 30-31, 2026" },
              { icon: CheckCircle, text: "Free food & swag included" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-border/50 bg-card/30 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.5)' }}
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://forms.google.com" // Replace with actual registration link
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 font-sans text-lg font-bold overflow-hidden rounded-xl"
            style={{
              background: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(30 100% 50%), hsl(270 80% 60%))',
              backgroundSize: '200% 200%',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              backgroundPosition: { duration: 5, repeat: Infinity }
            }}
          >
            <Rocket className="w-6 h-6 text-background" />
            <span className="text-background">REGISTER NOW</span>
            <motion.div
              className="absolute inset-0 bg-white/30"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          <p className="text-sm text-muted-foreground mt-6">
            Registration closes on <span className="text-primary font-semibold">March 15, 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicRegister;
