import { motion } from "framer-motion";
import { ArrowRight, Mail, Users, Globe, Trophy, Zap, Target, Building2, Lightbulb, Rocket, Crown, Award, Shield, Check } from "lucide-react";
import { Link } from "react-router-dom";
import originLogo from "@/assets/origin-logo.png";

const stats = [
{ value: "70+", label: "Competing Teams" },
{ value: "24h", label: "Non-Stop Building" },
{ value: "500+", label: "Participants" },
{ value: "National", label: "Level Event" }];


const whyOrigin = [
{
  icon: Target,
  title: "Real-World Problem Statements",
  description:
  "Unlike typical hackathons with generic themes, ORIGIN sources its problem statements directly from industry partners. Your company's real challenges become the innovation playground for 500+ brilliant minds."
},
{
  icon: Building2,
  title: "Direct Industry Integration",
  description:
  "Sponsors don't just fund — they set the agenda. Your real operational challenges are presented as problem statements, giving you direct access to innovative solutions built by India's brightest engineering talent."
},
{
  icon: Lightbulb,
  title: "Solutions You Can Actually Use",
  description:
  "Because participants solve YOUR problems, the prototypes built during ORIGIN have real commercial potential. You're not just sponsoring an event — you're crowdsourcing R&D from hundreds of developers."
},
{
  icon: Users,
  title: "Talent Pipeline Access",
  description:
  "Get first-look access to top-tier developers, designers, and problem-solvers. Evaluate talent in action — under pressure, in teams, solving real problems. Better than any resume."
}];


const sponsorBenefits = [
"Your brand featured across all event materials & digital channels",
"Custom problem statement presented to 70+ competing teams",
"First access to prototypes & solutions built for your challenges",
"Direct interaction with 500+ participants during the event",
"Recruitment opportunities with top-performing teams",
"Social media coverage & post-event highlight features",
"Logo placement on the ORIGIN website & promotional content",
"Judging panel representation for your problem statement track"];


interface TierFeature {
  text: string;
  included: boolean;
}

interface SponsorTier {
  name: string;
  icon: typeof Crown;
  price: string;
  tagline: string;
  featured?: boolean;
  features: TierFeature[];
}

const sponsorTiers: SponsorTier[] = [
{
  name: "SILVER",
  icon: Shield,
  price: "₹15,000",
  tagline: "Supporting Partner",
  features: [
  { text: "Logo on website & event banners", included: true },
  { text: "Social media shoutouts (2 posts)", included: true },
  { text: "Certificate of Partnership", included: true },
  { text: "Distribute branded merchandise at venue", included: true },
  { text: "Custom problem statement track", included: false },
  { text: "Judging panel seat", included: false },
  { text: "Keynote / workshop slot", included: false },
  { text: "Exclusive talent access & recruitment booth", included: false },
  { text: "Title naming rights", included: false }]

},
{
  name: "GOLD",
  icon: Award,
  price: "₹35,000",
  tagline: "Associate Partner",
  featured: true,
  features: [
  { text: "Logo on website & event banners", included: true },
  { text: "Social media campaign (5+ posts & stories)", included: true },
  { text: "Certificate of Partnership", included: true },
  { text: "Distribute branded merchandise at venue", included: true },
  { text: "Custom problem statement track", included: true },
  { text: "Judging panel seat", included: true },
  { text: "Keynote / workshop slot (15 min)", included: true },
  { text: "Exclusive talent access & recruitment booth", included: false },
  { text: "Title naming rights", included: false }]

},
{
  name: "PLATINUM",
  icon: Crown,
  price: "₹75,000",
  tagline: "Title Partner",
  features: [
  { text: "Logo on website & event banners", included: true },
  { text: "Full social media campaign with dedicated content", included: true },
  { text: "Certificate of Partnership", included: true },
  { text: "Distribute branded merchandise at venue", included: true },
  { text: "Custom problem statement track (priority)", included: true },
  { text: "Judging panel seat (Chief Judge)", included: true },
  { text: "Keynote / workshop slot (30 min)", included: true },
  { text: "Exclusive talent access & recruitment booth", included: true },
  { text: "Title naming rights — 'ORIGIN powered by [You]'", included: true }]

}];


const SponsorsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={originLogo} alt="ORIGIN" className="h-10 w-auto" />
          </Link>
          <a
            href="mailto:Hackathonclub.simats@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-background text-sm font-semibold tracking-wide transition-all hover:bg-foreground/90 hover:scale-105">

            <Mail className="w-4 h-4" />
            GET IN TOUCH
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}>

              <Rocket className="w-4 h-4 text-foreground/60" />
              <span className="text-xs tracking-[0.2em] text-foreground/60 font-sans">PARTNERSHIP OPPORTUNITIES</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              FUEL THE FUTURE
              <br />
              <span className="text-foreground/40">OF INNOVATION</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
              ORIGIN isn't just a hackathon — it's where your real-world business challenges 
              meet India's brightest engineering minds. Get solutions, not just sponsorship receipts.
            </p>

            <motion.a
              href="mailto:Hackathonclub.simats@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-display font-bold tracking-wider text-lg transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}>

              <Mail className="w-5 h-5" />
              BECOME A PARTNER
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/30 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) =>
            <motion.div
              key={stat.label}
              className="py-8 md:py-10 text-center border-b md:border-b-0 border-r border-border/20 last:border-r-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}>

                <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-xs tracking-[0.15em] text-foreground/40 mt-2 font-sans">{stat.label}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Why ORIGIN is Different */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              WHY ORIGIN IS <span className="text-foreground/40">DIFFERENT</span>
            </h2>
            <p className="text-foreground/50 max-w-xl mx-auto font-sans">
              We don't do generic hackathons. ORIGIN is built around solving real industry problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyOrigin.map((item, i) =>
            <motion.div
              key={item.title}
              className="group p-8 rounded-2xl border border-border/30 bg-card/20 hover:bg-card/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}>

                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border/30 flex items-center justify-center mb-5 group-hover:bg-foreground/10 transition-colors">
                  <item.icon className="w-6 h-6 text-foreground/60" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/50 font-sans leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* The Industry Problem Statement Model */}
      <section className="py-24 md:py-32 border-y border-border/20 bg-card/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 mb-6">
                <Zap className="w-3.5 h-3.5 text-foreground/60" />
                <span className="text-[10px] tracking-[0.2em] text-foreground/60">THE MODEL</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                YOUR CHALLENGES.
                <br />
                <span className="text-foreground/40">THEIR SOLUTIONS.</span>
              </h2>
              <p className="text-foreground/50 font-sans leading-relaxed mb-6">
                At ORIGIN, sponsors provide the actual problem statements that participants solve during the 24-hour hackathon. 
                These aren't theoretical exercises — they're real challenges from your business that need innovative solutions.
              </p>
              <p className="text-foreground/50 font-sans leading-relaxed">
                Imagine 70+ teams, each with 4-5 members, dedicating 24 hours of focused effort to solving your company's 
                most pressing technical challenges. That's the power of ORIGIN's industry-driven model.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>

              {[
              { step: "01", title: "You Share the Problem", desc: "Define your real business challenge as a problem statement for participants." },
              { step: "02", title: "Teams Build Solutions", desc: "70+ teams spend 24 hours building working prototypes to solve your problem." },
              { step: "03", title: "You Get the Results", desc: "Review solutions, meet the builders, and potentially adopt or develop the best ideas." }].
              map((item, i) =>
              <motion.div
                key={item.step}
                className="flex gap-5 p-5 rounded-xl border border-border/20 bg-card/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}>

                  <span className="text-3xl font-display font-bold text-foreground/15 shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-foreground/50 font-sans">{item.desc}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              WHAT YOU <span className="text-foreground/40">GET</span>
            </h2>
            <p className="text-foreground/50 max-w-lg mx-auto font-sans">
              Beyond logo placement — tangible returns on your partnership.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {sponsorBenefits.map((benefit, i) =>
            <motion.div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border border-border/20 bg-card/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}>

                <div className="w-6 h-6 rounded-full bg-foreground/5 border border-border/30 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-foreground/40" />
                </div>
                <p className="text-sm text-foreground/70 font-sans">{benefit}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-24 md:py-32 border-t border-border/20 bg-card/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
              <Trophy className="w-4 h-4 text-foreground/60" />
              <span className="text-xs tracking-[0.2em] text-foreground/60 font-sans">PARTNERSHIP TIERS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              CHOOSE YOUR <span className="text-foreground/40">TIER</span>
            </h2>
            <p className="text-foreground/50 max-w-lg mx-auto font-sans">
              Flexible packages designed for maximum impact at every level. Custom packages also available.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {sponsorTiers.map((tier, i) =>
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
              tier.featured ?
              "border-foreground/30 bg-card/40 scale-[1.02] md:scale-105 shadow-2xl shadow-foreground/5" :
              "border-border/20 bg-card/20 hover:border-border/40"}`
              }
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}>

                {tier.featured &&
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-foreground text-background text-[10px] font-display font-bold tracking-[0.2em]">
                    MOST POPULAR
                  </div>
              }

                <div className="text-center mb-8">
                  <tier.icon className={`w-8 h-8 mx-auto mb-4 ${tier.featured ? "text-foreground" : "text-foreground/40"}`} />
                  <h3 className="text-sm font-sans tracking-[0.2em] text-foreground/50 mb-2">{tier.name}</h3>
                  <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{tier.price}</p>
                  <p className="text-xs text-foreground/40 mt-1 font-sans">{tier.tagline}</p>
                </div>

                <div className="space-y-3 flex-1">
                  {tier.features.map((feature, fi) =>
                <div key={fi} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  feature.included ? "bg-foreground/10" : "bg-foreground/5"}`
                  }>
                        {feature.included ?
                    <Check className="w-3 h-3 text-foreground/70" /> :

                    <div className="w-2 h-[1.5px] bg-foreground/20 rounded-full" />
                    }
                      </div>
                      <span className={`text-sm font-sans ${feature.included ? "text-foreground/70" : "text-foreground/25"}`}>
                        {feature.text}
                      </span>
                    </div>
                )}
                </div>

                <motion.a
                href={`mailto:Hackathonclub.simats@gmail.com?subject=${tier.name} Partnership — ORIGIN 2K26`}
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display font-bold tracking-wider text-sm transition-all ${
                tier.featured ?
                "bg-foreground text-background hover:bg-foreground/90" :
                "border border-border/30 text-foreground/70 hover:bg-foreground/5 hover:border-foreground/40"}`
                }
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}>

                  <Mail className="w-4 h-4" />
                  GET IN TOUCH
                </motion.a>
              </motion.div>
            )}
          </div>

          <motion.p
            className="text-center text-foreground/30 text-sm font-sans mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>

            Need a custom package? <a href="mailto:Hackathonclub.simats@gmail.com?subject=Custom Partnership — ORIGIN 2K26" className="underline text-foreground/50 hover:text-foreground/70 transition-colors">Let's talk →</a>
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <Globe className="w-10 h-10 text-foreground/20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              LET'S BUILD
              <br />
              <span className="text-foreground/40">TOGETHER</span>
            </h2>
            <p className="text-foreground/50 font-sans mb-10 max-w-lg mx-auto">
              Partner with ORIGIN and put your toughest challenges in front of India's most ambitious builders. 
              Let's talk about how we can create value together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:Hackathonclub.simats@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-display font-bold tracking-wider transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>

                <Mail className="w-5 h-5" />
                REACH OUT NOW
              </motion.a>

              <a
                href="tel:+918610873714"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-border/30 text-foreground/60 font-sans text-sm hover:border-foreground/40 transition-colors">
                Or call: +91 89396 43229

              </a>
            </div>

            <p className="text-xs text-foreground/30 mt-8 font-sans">
              Hackathonclub.simats@gmail.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={originLogo} alt="ORIGIN" className="h-8 w-auto opacity-60" />
          </Link>
          <p className="text-xs text-foreground/30 font-sans">
            © 2026 ORIGIN — Hackathon Club, SIMATS Engineering
          </p>
        </div>
      </footer>
    </div>);

};

export default SponsorsPage;