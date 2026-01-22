import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Terminal } from "lucide-react";

const faqs = [
  {
    question: "WHAT IS ORIGIN?",
    answer:
      "ORIGIN is a 48-hour hackathon where developers, designers, and innovators come together to build groundbreaking projects. It's the genesis of your next big idea.",
  },
  {
    question: "WHO CAN PARTICIPATE?",
    answer:
      "Students, professionals, and tech enthusiasts from all backgrounds are welcome. Teams can have 2-4 members. Solo hackers can also participate and find teams at the event.",
  },
  {
    question: "IS THERE A REGISTRATION FEE?",
    answer:
      "No! ORIGIN is completely free to attend. We provide food, swag, mentorship, and an incredible experience at no cost.",
  },
  {
    question: "WHAT SHOULD I BRING?",
    answer:
      "Your laptop, chargers, student ID, and enthusiasm. We'll provide everything else including workspace, WiFi, snacks, and sleeping arrangements.",
  },
  {
    question: "WHAT KIND OF PROJECTS CAN I BUILD?",
    answer:
      "Anything! We have multiple tracks including AI/ML, Web3, Sustainability, FinTech, and Open Innovation. Pick what excites you most.",
  },
  {
    question: "WILL THERE BE MENTORS?",
    answer:
      "Absolutely! We have industry experts and experienced developers as mentors throughout the event to guide you.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-primary mb-2">
            {"///"} QUERY_DATABASE
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            FREQUENT <span className="text-primary text-glow">QUERIES</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full p-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-foreground">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
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
                <p className="px-4 pb-4 text-sm text-muted-foreground font-mono leading-relaxed">
                  {">"} {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
