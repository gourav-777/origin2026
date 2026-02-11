import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, Users, Shield, AlertTriangle, FileText } from "lucide-react";
interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const RulesModal = ({
  isOpen,
  onClose
}: RulesModalProps) => {
  return <AnimatePresence>
      {isOpen && <>
          {/* Backdrop */}
          <motion.div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} />

          {/* Modal */}
          <motion.div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }}>
            <motion.div className="relative w-full sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-card border border-border shadow-2xl" initial={{
          scale: 0.9,
          y: 40
        }} animate={{
          scale: 1,
          y: 0
        }} exit={{
          scale: 0.9,
          y: 40
        }} transition={{
          type: "spring",
          damping: 25,
          stiffness: 300
        }} onClick={e => e.stopPropagation()}>
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-card/95 backdrop-blur-md border-b border-border">
                <h2 className="text-lg font-display font-bold tracking-wider text-foreground">
                  ROUND 1 — RULES & PROCEDURE
                </h2>
                <button onClick={onClose} className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-6 space-y-8 text-foreground/80 text-sm leading-relaxed">
                {/* Round 1 Overview */}
                <div className="space-y-2">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <FileText className="w-4 h-4 text-foreground/60" /> Round 1 — Orbital Innovation (Online)
                  </h3>
                  <p>Round 1 is a completely <span className="font-semibold text-foreground">free-of-cost</span> online round open to all participants. This phase evaluates your problem-solving approach and innovation potential before the grand finale.</p>
                </div>

                {/* How to Participate */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-foreground/60" /> How to Participate
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Form a team of <span className="font-semibold text-foreground">3 to 4 members</span>.</li>
                    <li>Register your team on the <span className="font-semibold text-foreground">Unstop</span> platform.</li>
                    <li>All team members must complete individual registration.</li>
                    <li>Participants must be currently enrolled students in a recognized educational institution.</li>
                  </ol>
                </div>

                {/* Submission Requirements */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-foreground/60" /> Submission Requirements
                  </h3>
                  <p>During registration, each team must submit the following:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-semibold text-foreground">Presentation (PPT)</span> — Explain your understanding of the problem and your proposed solution.</li>
                    <li><span className="font-semibold text-foreground">GitHub Repository Link</span> — If a prototype or working code exists, share the repository.</li>
                    <li><span className="font-semibold text-foreground">Demo Video</span> — A working demonstration with original voice explanation by team members.</li>
                  </ul>
                </div>

                {/* Selection Process */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-foreground/60" /> Selection Process
                  </h3>
                  <p>All selections are made exclusively through Unstop:</p>
                  <div className="pl-4 border-l-2 border-border space-y-2">
                    <p className="font-semibold text-foreground">Unstop Round 1 Evaluation</p>
                    <p><span className="font-semibold text-foreground">70 teams</span> will be shortlisted from Unstop Round 1 submissions based on PPT, GitHub repository, and demo video evaluation.</p>
                  </div>
                  <div className="pl-4 border-l-2 border-foreground/30 space-y-1">
                    <p className="font-semibold text-foreground">Total Teams advancing to Round 2: 70</p>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <Shield className="w-4 h-4 text-foreground/60" /> Important Notes
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Round 1 is <span className="font-semibold text-foreground">completely free</span> — no registration fee required.</li>
                    <li>All participants who complete Round 1 will receive a <span className="font-semibold text-foreground">participation certificate</span>.</li>
                    <li>Any form of plagiarism will lead to immediate disqualification.</li>
                    <li>Valid student ID proof is mandatory during verification.</li>
                    <li>The decision of the organizers is final and binding.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>}
    </AnimatePresence>;
};

// Simple inline icon alias to avoid import conflict
const ScrollTextIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 12h-5" /><path d="M15 8h-5" /><path d="M19 17V5a2 2 0 0 0-2-2H4" />
    <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2" />
  </svg>;
export default RulesModal;