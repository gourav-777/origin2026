import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { 
  X, Calendar, MapPin, Clock, Users, Shield, AlertTriangle, 
  FileText, ChevronRight, CheckCircle, Rocket 
} from "lucide-react";
import LaunchSequence from "./LaunchSequence";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UNSTOP_URL = "https://unstop.com/o/rQSeLnc?lb=q2EvrVJC&utm_medium=Share&utm_source=simatclu32597&utm_campaign=Online_coding_challenge";

const STEPS = [
  {
    id: "overview",
    title: "Event Overview",
    icon: Calendar,
    content: (
      <div className="space-y-3">
        <p className="font-semibold text-foreground">ORIGIN – 24 Hour National Hackathon</p>
        <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-foreground/60" /> Date: March 30 – 31, 2026</p>
        <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-foreground/60" /> Venue: SIMATS Engineering, Chennai</p>
        <p className="text-foreground/60 mt-4">Join 70 elite teams for an intense 24-hour innovation sprint. Build groundbreaking solutions to real-world problems.</p>
      </div>
    ),
  },
  {
    id: "timeline",
    title: "Event Timeline",
    icon: Clock,
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-foreground mb-2">March 30</p>
          <ul className="space-y-1 text-sm text-foreground/80">
            <li>9:00 AM – Registration & Verification</li>
            <li>10:30 AM – Opening Ceremony & Kickoff</li>
            <li>3:00 PM – Round 1 Evaluation</li>
            <li>8:00 PM – Dinner</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-2">March 31</p>
          <ul className="space-y-1 text-sm text-foreground/80">
            <li>12:00 AM – Round 2 Evaluation</li>
            <li>11:00 AM – Final Code Freeze</li>
            <li>12:00 PM – Final Evaluation</li>
            <li>1:00 PM – Award Ceremony</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "registration",
    title: "Selection Process",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <p className="text-foreground/80">ORIGIN follows a dual selection model:</p>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-foreground/5 border border-border">
            <p className="font-semibold text-foreground">Internal Hackathons</p>
            <p className="text-sm text-foreground/60">35 teams from partner college hackathons</p>
          </div>
          <div className="p-3 rounded-lg bg-foreground/5 border border-border">
            <p className="font-semibold text-foreground">Open Registration</p>
            <p className="text-sm text-foreground/60">35 teams via Unstop (PPT + Demo required)</p>
          </div>
        </div>
        <p className="text-center font-semibold text-foreground">Total: 70 Finalist Teams</p>
      </div>
    ),
  },
  {
    id: "problem",
    title: "Problem Statements",
    icon: AlertTriangle,
    content: (
      <div className="space-y-3">
        <ul className="space-y-2 text-sm text-foreground/80">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Problem statements provided by partner companies
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Announced on March 28 at 8:00 AM
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Selection portal opens March 28 at 6:00 PM
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            First come, first serve basis
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Once selected, cannot be changed
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "team",
    title: "Team Requirements",
    icon: Users,
    content: (
      <div className="space-y-3">
        <ul className="space-y-2 text-sm text-foreground/80">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Team size: 3-4 members
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            All members must register individually
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Currently enrolled students only
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Valid student ID required
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "rules",
    title: "Hackathon Rules",
    icon: FileText,
    content: (
      <div className="space-y-3">
        <ul className="space-y-2 text-sm text-foreground/80">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Development starts only after official kickoff
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            One problem statement per team
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Submit before 11:00 AM code freeze
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            No plagiarism (immediate disqualification)
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Judges' decisions are final
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "conduct",
    title: "Code of Conduct",
    icon: Shield,
    content: (
      <div className="space-y-3">
        <p className="text-foreground/80 text-sm">By registering, you agree to:</p>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Treat everyone with respect
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            No harassment or discrimination
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            Follow venue safety rules
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
            No alcohol or illegal substances
          </li>
        </ul>
        <p className="text-xs text-foreground/50 mt-2">Violations may result in disqualification.</p>
      </div>
    ),
  },
  {
    id: "launch",
    title: "Mission Ready",
    icon: Rocket,
    content: (
      <div className="text-center space-y-4">
        <motion.div
          className="inline-flex p-4 rounded-full bg-foreground/10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Rocket className="w-12 h-12 text-foreground" />
        </motion.div>
        <div className="space-y-2">
          <p className="text-foreground font-semibold">All systems are verified.</p>
          <p className="text-foreground/80">Crew is onboard.</p>
          <p className="text-foreground/80">Problem statement awaits discovery.</p>
          <p className="text-foreground font-semibold mt-4">Prepare for launch.</p>
        </div>
      </div>
    ),
  },
];

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showLaunchSequence, setShowLaunchSequence] = useState(false);
  const preOpenedWindowRef = useRef<Window | null>(null);

  const isLastStep = currentStep === STEPS.length - 1;
  const currentStepData = STEPS[currentStep];
  const StepIcon = currentStepData.icon;

  const handleNext = () => {
    if (isLastStep) {
      // Pre-open window immediately on user click (bypasses popup blockers)
      preOpenedWindowRef.current = window.open("about:blank", "_blank");
      setShowLaunchSequence(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleLaunchComplete = () => {
    // Navigate the pre-opened window to Unstop
    if (preOpenedWindowRef.current) {
      preOpenedWindowRef.current.location.href = UNSTOP_URL;
    }
    // Reset modal state and close
    setShowLaunchSequence(false);
    setCurrentStep(0);
    onClose();
  };

  const handleClose = () => {
    if (!showLaunchSequence) {
      setCurrentStep(0);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {showLaunchSequence ? (
            <motion.div
              key="launch"
              exit={{ opacity: 0, scale: 1.5, filter: "blur(30px)" }}
              transition={{ duration: 0.5 }}
            >
              <LaunchSequence onComplete={handleLaunchComplete} />
            </motion.div>
          ) : (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
              />

              {/* Modal */}
              <motion.div
                className="fixed inset-0 z-[70] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card border border-border shadow-2xl"
                  initial={{ scale: 0.9, y: 40 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 40 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={e => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-foreground/10">
                        <StepIcon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 tracking-widest">
                          STEP {currentStep + 1} OF {STEPS.length}
                        </p>
                        <h2 className="text-lg font-display font-bold text-foreground">
                          {currentStepData.title}
                        </h2>
                      </div>
                    </div>
                    <button
                      onClick={handleClose}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1 bg-border">
                    <motion.div
                      className="h-full bg-foreground"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-6 py-6 min-h-[280px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentStepData.content}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-card/50">
                    {/* Step indicators */}
                    <div className="flex gap-1.5">
                      {STEPS.map((_, index) => (
                        <motion.div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index <= currentStep ? "bg-foreground" : "bg-border"
                          }`}
                          animate={index === currentStep ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.5 }}
                        />
                      ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-3">
                      {currentStep > 0 && (
                        <button
                          onClick={() => setCurrentStep(prev => prev - 1)}
                          className="px-4 py-2 text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors"
                        >
                          Back
                        </button>
                      )}
                      <motion.button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-foreground text-background font-semibold text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isLastStep ? (
                          <>
                            <Rocket className="w-4 h-4" />
                            Launch Mission
                          </>
                        ) : (
                          <>
                            Continue
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;
