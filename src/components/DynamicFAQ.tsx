import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is ORIGIN?",
    answer: "ORIGIN is a 24-hour National AI Hackathon organized by the Hackathon Club of SIMATS Engineering. It's a high-intensity innovation experience where students build production-ready AI solutions to real-world problems."
  },
  {
    question: "Who can participate?",
    answer: "Students from any recognized institution across India can participate. Teams of 2-4 members are required. Both undergraduate and postgraduate students are welcome."
  },
  {
    question: "Is there a registration fee?",
    answer: "Yes, there's a nominal registration fee to confirm your participation. Early bird registrations get discounted rates. Details will be shared upon registration."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, any hardware you might need for your project, and lots of enthusiasm! Food, snacks, and beverages will be provided throughout the 24 hours."
  },
  {
    question: "Do I need prior hackathon experience?",
    answer: "Not at all! ORIGIN welcomes first-timers. We have a special prize category for first-time hackers and provide mentorship throughout the event."
  },
  {
    question: "What kind of projects can we build?",
    answer: "Any AI/ML-focused solution addressing real industry or societal challenges. Projects should be original and built during the hackathon. Pre-built projects are not allowed."
  }
];

const DynamicFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs font-sans text-primary tracking-[0.2em]">GOT QUESTIONS?</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">FAQ</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border/50 rounded-xl overflow-hidden bg-card/30 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.05)' }}
              >
                <span className="font-sans font-medium text-foreground pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicFAQ;
