import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Circle } from "lucide-react";

const timelineEvents = [
  {
    date: "DAY 1",
    time: "09:00",
    title: "INITIALIZATION",
    description: "Registration, team formation, and opening ceremony",
  },
  {
    date: "DAY 1",
    time: "11:00",
    title: "HACK_START",
    description: "Let the coding begin! Problem statements released",
  },
  {
    date: "DAY 1",
    time: "14:00",
    title: "WORKSHOP_01",
    description: "Technical workshops and mentorship sessions",
  },
  {
    date: "DAY 1",
    time: "22:00",
    title: "MIDNIGHT_FUEL",
    description: "Late night snacks and energy boosters",
  },
  {
    date: "DAY 2",
    time: "06:00",
    title: "CHECKPOINT",
    description: "First evaluation round",
  },
  {
    date: "DAY 2",
    time: "09:00",
    title: "FINAL_PUSH",
    description: "Last stretch of development",
  },
  {
    date: "DAY 2",
    time: "15:00",
    title: "SUBMISSIONS",
    description: "Final project submissions and demos",
  },
  {
    date: "DAY 2",
    time: "18:00",
    title: "TERMINATION",
    description: "Judging, results, and closing ceremony",
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-primary mb-2">
            {"///"} EVENT_SEQUENCE
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            TIME<span className="text-primary text-glow">LINE</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 z-10 animate-pulse-glow" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="p-4 border border-border bg-card/50 backdrop-blur-sm hover:border-primary transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-primary">
                      {event.date}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {event.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
