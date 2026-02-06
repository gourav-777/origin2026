import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, Users, Shield, AlertTriangle, FileText } from "lucide-react";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RulesModal = ({ isOpen, onClose }: RulesModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-card/95 backdrop-blur-md border-b border-border">
                <h2 className="text-lg font-display font-bold tracking-wider text-foreground">
                  ORIGIN — RULES & GUIDELINES
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-6 space-y-8 text-foreground/80 text-sm leading-relaxed">
                {/* Event Info */}
                <div className="space-y-2">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-foreground/60" /> Event Overview
                  </h3>
                  <p className="font-semibold text-foreground">ORIGIN – 24 Hour National Hackathon</p>
                  <p className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Date: March 30 – 31</p>
                  <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Venue: SIMATS Engineering, Chennai</p>
                </div>

                {/* Timeline */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-foreground/60" /> Event Timeline
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-1">March 30</p>
                      <ul className="space-y-1 list-none">
                        <li>9:00 AM – Registration and Verification</li>
                        <li>10:30 AM – 11:00 AM – Opening Ceremony and Hackathon Kickoff</li>
                        <li>1:00 PM – 2:00 PM – Lunch Break</li>
                        <li>3:00 PM – Round 1 Evaluation</li>
                        <li>5:00 PM – Snacks Break</li>
                        <li>8:00 PM – 9:00 PM – Dinner</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">March 31</p>
                      <ul className="space-y-1 list-none">
                        <li>12:00 AM – Round 2 Evaluation</li>
                        <li>1:00 AM – Tea and Energy Snacks</li>
                        <li>2:00 AM – Engagement Activity</li>
                        <li>7:00 AM – 8:00 AM – Breakfast</li>
                        <li>11:00 AM – Hackathon Ends (Final Code Freeze)</li>
                        <li>12:00 PM – Final Evaluation</li>
                        <li>1:00 PM – Award Ceremony and Closing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Registration */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <FileText className="w-4 h-4 text-foreground/60" /> Registration and Selection Process
                  </h3>
                  <p>ORIGIN follows a dual selection model consisting of Internal College Hackathons and Open Registration.</p>

                  <div className="pl-4 border-l-2 border-border space-y-2">
                    <p className="font-semibold text-foreground">Internal College Hackathons</p>
                    <p>Partner colleges will conduct internal hackathons. Selected teams from each institution will qualify for the ORIGIN Grand Finale. A total of 35 teams will be shortlisted through this model.</p>
                  </div>

                  <div className="pl-4 border-l-2 border-border space-y-2">
                    <p className="font-semibold text-foreground">Open Registration</p>
                    <p>Students may register through Devfolio or Unstop. During registration, teams must submit:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>A presentation (PPT) explaining the problem understanding and proposed solution</li>
                      <li>GitHub repository link (if a prototype exists)</li>
                      <li>A working demo video with original voice explanation by team members</li>
                    </ul>
                    <p>Based on evaluation, 35 teams will be shortlisted from open registrations.</p>
                  </div>

                  <div className="pl-4 border-l-2 border-foreground/30 space-y-1">
                    <p className="font-semibold text-foreground">Total Finalist Teams: 70</p>
                    <p>35 Teams – Internal Hackathons</p>
                    <p>35 Teams – Open Registration</p>
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-foreground/60" /> Problem Statement Guidelines
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Problem statements will be provided by partner companies.</li>
                    <li>Each problem statement will have a separate cash prize decided by the respective company.</li>
                    <li>Teams may select only one problem statement.</li>
                    <li>Problem statements will be announced on March 28 at 8:00 AM.</li>
                    <li>The problem selection portal will open on March 28 at 6:00 PM.</li>
                    <li>Selection will be on a first come, first serve basis.</li>
                    <li>Login credentials will be shared with shortlisted teams.</li>
                    <li>Once a problem statement is selected, it cannot be changed.</li>
                    <li>The decision of the organizers is final and binding.</li>
                  </ul>
                </div>

                {/* Team Guidelines */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-foreground/60" /> Team Guidelines
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Each team must consist of 3 to 4 members.</li>
                    <li>All members must complete individual registration.</li>
                    <li>Participants must be currently enrolled students in a recognized educational institution.</li>
                    <li>Valid student ID proof is mandatory during verification.</li>
                  </ul>
                </div>

                {/* Hackathon Rules */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <ScrollTextIcon className="w-4 h-4 text-foreground/60" /> Hackathon Rules
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Development must begin only after the official hackathon start.</li>
                    <li>Teams must work only on the selected problem statement.</li>
                    <li>Each team can choose only one problem statement.</li>
                    <li>All deliverables must be submitted before the final code freeze at 11:00 AM on March 31.</li>
                    <li>Final submission must include: GitHub Repository, Final Presentation, Working Demonstration.</li>
                    <li>Internet usage is permitted.</li>
                    <li>Any form of plagiarism will lead to immediate disqualification.</li>
                    <li>Judges' decisions will be final and binding.</li>
                    <li>The organizers reserve the right to modify rules if required for smooth execution of the event.</li>
                  </ul>
                </div>

                {/* Code of Conduct */}
                <div className="space-y-3">
                  <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2">
                    <Shield className="w-4 h-4 text-foreground/60" /> Code of Conduct
                  </h3>
                  <p>By registering for ORIGIN, participants agree to comply with the following:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Treat all participants, organizers, sponsors, and volunteers with respect.</li>
                    <li>Do not engage in harassment, discrimination, or inappropriate behavior.</li>
                    <li>Follow all venue rules and safety regulations.</li>
                    <li>Respect intellectual property rights.</li>
                    <li>Do not disrupt other teams or event activities.</li>
                    <li>Do not consume alcohol or illegal substances during the event.</li>
                    <li>Violation of the code of conduct may result in immediate disqualification and removal from the event without refund.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Simple inline icon alias to avoid import conflict
const ScrollTextIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 12h-5" /><path d="M15 8h-5" /><path d="M19 17V5a2 2 0 0 0-2-2H4" />
    <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2" />
  </svg>
);

export default RulesModal;
