import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  X, Calendar, MapPin, Clock, Users, Shield, AlertTriangle, 
  FileText, ChevronRight, CheckCircle, Rocket 
} from "lucide-react";
import LaunchSequence from "./LaunchSequence";
import SlideToLaunch from "./SlideToLaunch";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UNSTOP_URL = "https://unstop.com/p/origin-2026-simats-engineering-1634517";

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
    id: "round1",
    title: "Round 1 — Open Innovation",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-foreground/5 border border-border text-center">
          <p className="text-xs text-foreground/50 tracking-widest mb-2">ROUND 1</p>
          <p className="text-lg font-display font-bold text-foreground">Open Innovation</p>
          <p className="text-sm text-foreground/60 mt-1">Conducted through Unstop</p>
        </div>
        <div className="p-3 rounded-lg bg-foreground/5 border border-border">
          <p className="font-semibold text-foreground flex items-center gap-2">
            🎉 Completely FREE to register!
          </p>
          <p className="text-sm text-foreground/60 mt-1">No registration fee for Round 1 participation.</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-foreground text-sm">Submission Requirements:</p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
              Use the official PPT template provided by us for your submission
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
              GitHub repository link (if prototype exists)
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-foreground/60 mt-0.5 shrink-0" />
              Working demo video with original voice explanation
            </li>
          </ul>
        </div>
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
          <p className="text-foreground/80 mt-3 px-4 py-2 rounded-lg bg-foreground/5 border border-border text-sm">
            🎉 <span className="font-semibold text-foreground">Round 1 (Open Innovation)</span> participation is <span className="font-bold text-foreground">completely free!</span>
          </p>
          <p className="text-foreground font-semibold mt-4">Prepare for launch.</p>
        </div>
      </div>
    ),
  },
];

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showLaunchSequence, setShowLaunchSequence] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const isLastStep = currentStep === STEPS.length - 1;
  const currentStepData = STEPS[currentStep];
  const StepIcon = currentStepData.icon;

  const handleNext = () => {
    if (isLastStep) {
      setShowLaunchSequence(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleLaunchComplete = () => {
    setIsExiting(true);
    // Same-tab redirect with zero async gap - safe from popup blockers
    setTimeout(() => {
      window.location.href = UNSTOP_URL;
    }, 500);
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
                className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="relative w-full sm:max-w-lg max-h-[90vh] sm:max-h-none overflow-y-auto sm:overflow-hidden rounded-t-2xl sm:rounded-2xl bg-card border border-border shadow-2xl"
                  initial={{ scale: 0.9, y: 40 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 40 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={e => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border">
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
                  <div className="px-4 sm:px-6 py-4 sm:py-6 min-h-[200px] sm:min-h-[280px] overflow-y-auto">
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
                  <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-t border-border bg-card/50">
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
                    {!isLastStep && (
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
                          Continue
                          <ChevronRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    )}
                  </div>

                  {/* Slide to Launch on last step */}
                  {isLastStep && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                      <SlideToLaunch onLaunch={handleNext} />
                      <button
                        onClick={() => setCurrentStep(prev => prev - 1)}
                        className="w-full mt-3 text-center text-sm font-semibold text-foreground/40 hover:text-foreground/60 transition-colors"
                      >
                        Go back
                      </button>
                    </div>
                  )}
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
