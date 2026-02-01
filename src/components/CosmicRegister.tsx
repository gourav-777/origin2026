import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Rocket, Sparkles } from "lucide-react";

const CosmicRegister = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    teamSize: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => setFormState("success"), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="register" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background effect */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, hsl(270 60% 20% / 0.2) 0%, transparent 50%)'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6"
          >
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-xs font-sans text-accent tracking-widest">BEGIN YOUR JOURNEY</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-wide">
            REGISTER{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))'
              }}
            >
              NOW
            </span>
          </h2>
          
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Secure your spot in the cosmic hackathon experience. Limited seats available.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {formState === "success" ? (
            <motion.div 
              className="p-8 md:p-12 rounded-2xl glass-cosmic text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                SIGNAL RECEIVED
              </h3>
              <p className="text-muted-foreground">
                Your cosmic coordinates have been logged. Check your email for confirmation details.
                <br />
                <span className="text-primary">See you at ORIGIN!</span>
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl glass-cosmic space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-sans text-muted-foreground mb-2 tracking-wide">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary outline-none font-sans text-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans text-muted-foreground mb-2 tracking-wide">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary outline-none font-sans text-foreground transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-sans text-muted-foreground mb-2 tracking-wide">
                    PHONE *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary outline-none font-sans text-foreground transition-colors"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans text-muted-foreground mb-2 tracking-wide">
                    TEAM SIZE
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary outline-none font-sans text-foreground transition-colors"
                  >
                    <option value="1">Solo Explorer</option>
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-sans text-muted-foreground mb-2 tracking-wide">
                  COLLEGE/ORGANIZATION *
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary outline-none font-sans text-foreground transition-colors"
                  placeholder="Your institution"
                />
              </div>

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full py-4 rounded-lg font-sans font-semibold text-background flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))',
                }}
              >
                {formState === "loading" ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    LAUNCH APPLICATION
                  </>
                )}
              </button>

              <p className="text-xs text-center text-muted-foreground">
                By registering, you agree to our terms and join the ORIGIN universe.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CosmicRegister;