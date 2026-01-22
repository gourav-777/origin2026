import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const Register = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
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
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="register" className="py-24 relative bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-primary mb-2">
            {"///"} INITIATE_CONNECTION
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            REGISTER <span className="text-primary text-glow">NOW</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-mono max-w-lg mx-auto">
            Secure your spot in the ultimate hackathon experience. Limited seats available.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {formState === "success" ? (
            <div className="p-8 border border-primary bg-card/50 text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                CONNECTION ESTABLISHED
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                Check your email for confirmation details. See you at ORIGIN!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    FULL_NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none font-mono text-sm transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none font-mono text-sm transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    PHONE *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none font-mono text-sm transition-colors"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    TEAM_SIZE
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none font-mono text-sm transition-colors"
                  >
                    <option value="1">Solo Hacker</option>
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-2">
                  COLLEGE/ORGANIZATION *
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary outline-none font-mono text-sm transition-colors"
                  placeholder="Your institution"
                />
              </div>

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full py-4 bg-primary text-primary-foreground font-mono text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors animate-pulse-glow disabled:opacity-50"
              >
                {formState === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    PROCESSING...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    SUBMIT_APPLICATION
                  </>
                )}
              </button>

              <p className="text-xs text-center text-muted-foreground font-mono">
                By registering, you agree to our terms and conditions.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Register;
