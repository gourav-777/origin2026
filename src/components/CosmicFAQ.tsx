import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What is ORIGIN?",
    answer: "ORIGIN is a 24-hour national AI hackathon where innovators from across India come together to build real-world, AI-driven solutions. It's the Big Bang of ideas—where innovation is a cosmic force and breakthrough solutions emerge.",
  },
  {
    question: "Who can participate?",
    answer: "Students, professionals, and tech enthusiasts from all backgrounds are welcome. Teams can have 2-4 members. Solo hackers can also participate and find teams at the event during the team formation phase.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No! ORIGIN is completely free to attend. We provide food, swag, mentorship, workspace, and an incredible cosmic experience at no cost.",
  },
  {
    question: "What should I bring?",
    answer: "Your laptop, chargers, student ID, and your innovative spirit. We'll provide everything else including workspace, WiFi, snacks, and rest areas for the 24-hour journey.",
  },
  {
    question: "What kind of projects can I build?",
    answer: "The focus is on AI/ML solutions, but we have multiple tracks including AI/ML, Web3, Sustainability, FinTech, and Open Innovation. Build something that solves real problems.",
  },
  {
    question: "Will there be mentors?",
    answer: "Absolutely! Industry experts and experienced developers will guide you throughout the 24 hours. The EVOLUTION phase includes dedicated mentorship checkpoints.",
  },
];

const CosmicFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-sans text-primary tracking-widest">KNOWLEDGE BASE</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-wide">
            COSMIC{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(190 100% 50%), hsl(270 80% 60%))'
              }}
            >
              QUERIES
            </span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden glass-cosmic"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full p-5 md:p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <Sparkles className={`w-5 h-5 transition-colors ${
                    openIndex === index ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <span className="font-sans text-base md:text-lg text-foreground">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 pl-14 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmicFAQ;