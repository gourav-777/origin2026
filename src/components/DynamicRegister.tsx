import { motion } from "framer-motion";
import { Rocket, CheckCircle, Users, Calendar } from "lucide-react";

const DynamicRegister = () => {
  return (
    <section id="register" className="relative py-32 overflow-hidden bg-card/30">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Rocket className="w-4 h-4 text-foreground/60" />
            <span className="text-xs font-sans text-foreground/60 tracking-[0.2em]">JOIN THE MISSION</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            READY FOR LIFTOFF?
          </h2>
          
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto mb-10">
            Secure your spot in India's most innovative AI hackathon. Limited seats available — 
            register now before the countdown ends.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Users, text: "Form teams of 3-4 members" },
              { icon: Calendar, text: "March 30-31, 2026" },
              { icon: CheckCircle, text: "Free food & swag included" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-border bg-background"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ borderColor: 'hsl(var(--foreground) / 0.2)' }}
              >
                <item.icon className="w-5 h-5 text-foreground/60" />
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://unstop.com/o/rQSeLnc?lb=q2EvrVJC&utm_medium=Share&utm_source=simatclu32597&utm_campaign=Online_coding_challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 font-sans text-lg font-bold overflow-hidden rounded-xl bg-foreground text-background"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Rocket className="w-6 h-6" />
            <span>REGISTER NOW</span>
          </motion.a>

          <p className="text-sm text-foreground/40 mt-6">
            Registration closes on <span className="text-foreground font-semibold">March 15, 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicRegister;
