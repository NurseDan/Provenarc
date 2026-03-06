import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AlertTriangle, Shield, CheckCircle2, ArrowRight,
  Globe, Scan, Clock, Lock, Anchor, Waves,
  FileCheck, TrendingUp, Users, Ship,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const risks = [
  { stat: "Thousands", desc: "of packages lost by major carriers annually" },
  { stat: "Months", desc: "to reconstruct lost survey reports and logs" },
  { stat: "Survey Failures", desc: "from incomplete vessel documentation" },
  { stat: "Disputes", desc: "insurance claims denied over missing records" },
];

const differentiators = [
  {
    icon: Waves,
    title: "Underwater 3D Scanning",
    desc: "Our owner-operator Daniel Wiglesworth is scuba certified, enabling underwater hull and running gear documentation without costly haul-outs. We capture baseline condition documentation for insurance, refit planning, and damage assessment while your vessel remains in the water.",
  },
  {
    icon: Lock,
    title: "Zero Shipping Risk",
    desc: "Your original logbooks, survey reports, and compliance documentation never touch a shipping carrier. We scan on-site, return originals immediately, and eliminate the catastrophic risk of documents lost in transit.",
  },
  {
    icon: Globe,
    title: "Global Concierge Service",
    desc: "From Texas marinas to Mediterranean ports to Caribbean islands, we travel to your vessel. One provider, one visit, complete documentation package delivered worldwide.",
  },
  {
    icon: FileCheck,
    title: "Insurance-Grade Deliverables",
    desc: "Our documentation packages meet surveyor standards and insurance carrier requirements. Professional OCR, metadata tagging, and organized deliverables that stand up to scrutiny during claims or transactions.",
  },
  {
    icon: Scan,
    title: "3D Documentation Integration",
    desc: "Combine logbook digitization with exterior, interior, and underwater 3D scanning in a single engagement. No coordinating multiple vendors or scheduling separate site visits.",
  },
  {
    icon: TrendingUp,
    title: "Transaction Acceleration",
    desc: "Professional documentation enables remote due diligence for buyers, shortens sales cycles, and commands premium pricing. Vessels with complete digital records sell with greater confidence and at higher values.",
  },
];

const comparisonData = [
  {
    feature: "On-Site Service",
    provenarc: "Worldwide",
    shipIt: "Ship documents",
    local: "Limited areas",
  },
  {
    feature: "Zero Shipping Risk",
    provenarc: "Always",
    shipIt: "High risk",
    local: "If local",
  },
  {
    feature: "3D Scanning",
    provenarc: "Integrated",
    shipIt: "None",
    local: "Separate vendor",
  },
  {
    feature: "Underwater Scanning",
    provenarc: "Certified diver",
    shipIt: "None",
    local: "None",
  },
  {
    feature: "Marine Expertise",
    provenarc: "Industry-specific",
    shipIt: "Generic service",
    local: "Varies",
  },
  {
    feature: "International Service",
    provenarc: "Yes",
    shipIt: "Limited",
    local: "Local only",
  },
];

const underwaterCapabilities = [
  {
    title: "Eliminate Costly Haul-Outs",
    desc: "Traditional hull inspections and condition surveys require expensive haul-outs that can cost thousands and require scheduling dry dock facilities. Our underwater scanning captures complete hull, running gear, and through-hull documentation while your vessel remains operational in the water.",
  },
  {
    title: "Baseline Condition Documentation",
    desc: "Underwater 3D scans create time-stamped digital records of hull condition, propeller status, rudder condition, and through-hull fittings. This baseline documentation is invaluable for insurance claims, refit planning, and demonstrating proper maintenance to buyers.",
  },
  {
    title: "Pre-Purchase and Survey Support",
    desc: "Buyers can review comprehensive underwater documentation remotely before committing to in-person surveys. Insurance carriers can verify hull condition without immediate haul-out requirements. Surveyors can reference baseline scans during periodic inspections.",
  },
  {
    title: "Damage Assessment and Claims",
    desc: "In the event of grounding, propeller strike, or underwater damage, our rapid-deployment underwater scanning provides irrefutable documentation for insurance claims. Pre-incident baseline scans enable precise before-and-after comparison analysis.",
  },
];

const whoTrustsUs = [
  {
    icon: Ship,
    title: "Yacht Owners and Operators",
    desc: "From forty-foot cruisers to superyachts, owners trust us to preserve their vessel's complete operational history and baseline condition documentation.",
  },
  {
    icon: TrendingUp,
    title: "Marine Brokers and Dealers",
    desc: "Accelerate sales cycles with professional documentation packages that enable remote due diligence and differentiate listings in competitive markets.",
  },
  {
    icon: Anchor,
    title: "Fleet Managers",
    desc: "Commercial operators and charter fleets rely on our documentation for compliance verification, insurance renewals, and annual baseline updates.",
  },
  {
    icon: Shield,
    title: "Insurance Carriers",
    desc: "Underwriters value our baseline documentation for risk assessment and our rapid-deployment capability for post-incident damage documentation.",
  },
];

export default function MarineWhyUs() {
  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6" data-testid="text-marine-why-label">
              Why Provenarc Marine
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight" data-testid="heading-marine-why-hero">
              Why Would You Ever Ship Irreplaceable Vessel Records?
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              The only vessel documentation service that comes to you, protects your originals,
              and includes underwater 3D scanning.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-irreplaceable">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <p className="text-destructive font-mono text-xs tracking-[0.3em] uppercase mb-4">
              The Industry Problem
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Your Vessel's History Is Irreplaceable</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Every documented hour of operation, every repair, every survey report contributes to
              your vessel's value and insurability. Traditional services ask you to ship these
              irreplaceable originals via common carriers.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {risks.map((risk, i) => (
              <Card key={i} className="p-6 text-center border-destructive/10" data-testid={`card-risk-${i}`}>
                <p className="font-mono text-2xl font-bold text-destructive mb-2">{risk.stat}</p>
                <p className="text-sm text-muted-foreground">{risk.desc}</p>
              </Card>
            ))}
          </motion.div>

          <motion.div {...fadeUp}>
            <Card className="p-6 lg:p-8 border-primary/10" data-testid="card-hidden-cost">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">The Hidden Cost of Incomplete Marine Documentation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lost or incomplete vessel documentation can result in survey failures, insurance
                    disputes, reduced resale value, and regulatory compliance issues. Professional
                    documentation protects your investment and accelerates transactions when you
                    decide to sell.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-differentiators">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              What Makes Us Different
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Six Reasons to Choose Provenarc Marine
            </h2>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item, i) => (
                <Card key={i} className="p-6" data-testid={`card-differentiator-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-underwater">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Waves className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Exclusive Capability
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Underwater 3D Scanning</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Provenarc Marine is the only vessel documentation company offering certified
              scuba diver-conducted underwater 3D scanning. This unique capability delivers
              significant operational and financial benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {underwaterCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-underwater-${i}`}>
                  <h3 className="font-serif text-lg mb-3">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-comparison">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Comparison
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">How We Compare to Alternatives</h2>
          </motion.div>

          <motion.div {...fadeUp}>
            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-muted/50 border-b text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <div>Feature</div>
                <div className="text-center text-primary">Provenarc Marine</div>
                <div className="text-center">Ship-It-In Services</div>
                <div className="text-center">Local Scanning</div>
              </div>
              {comparisonData.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 gap-4 p-4 text-sm items-center ${
                    i < comparisonData.length - 1 ? "border-b" : ""
                  }`}
                  data-testid={`comparison-row-${i}`}
                >
                  <div className="font-medium">{row.feature}</div>
                  <div className="text-center text-sm font-medium flex items-center justify-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {row.provenarc}
                  </div>
                  <div className="text-center text-muted-foreground text-xs">{row.shipIt}</div>
                  <div className="text-center text-muted-foreground text-xs">{row.local}</div>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-commitment">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Our Standards
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Our Commitment to Excellence</h2>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: "Methodical, Not Rushed",
                desc: "We operate on a quality-first timeline with comprehensive post-production processing. Professional OCR verification, metadata tagging, and multi-stage quality control cannot be compressed without compromising deliverables. Our reputation is built on flawless execution.",
              },
              {
                icon: FileCheck,
                title: "Insurance-Grade Standards",
                desc: "Our deliverables meet surveyor requirements and insurance carrier standards. Documentation that withstands scrutiny during claims, surveys, and transaction due diligence.",
              },
              {
                icon: Users,
                title: "White-Glove Service",
                desc: "From initial consultation through final delivery, you work with experienced professionals who understand marine operations, documentation requirements, and the unique challenges of vessel ownership.",
              },
              {
                icon: Lock,
                title: "Transparent Pricing",
                desc: "Travel expenses billed at actual cost with no markup. You receive itemized receipts for all expenses. What you pay is what we pay, plus our service fee for expertise and execution.",
              },
            ].map((item, i) => (
              <Card key={i} className="p-6" data-testid={`card-commitment-${i}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-who-trusts">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Our Clients
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Who Trusts Provenarc Marine</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whoTrustsUs.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-trust-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <client.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">{client.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{client.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24" data-testid="section-marine-why-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf6f1]">
              Ready to Protect Your Vessel's Documentation?
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Schedule a consultation to discuss your documentation needs.
              We serve vessels worldwide with the same white-glove standard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" data-testid="button-marine-why-cta-discovery">
                  Schedule a Discovery Session
                </Button>
              </Link>
              <Link href="/marine/process">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-marine-why-cta-process"
                >
                  See Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="text-[#b8b0a4]/70 text-sm mt-4">
              No commitment required. Thirty-minute confidential consultation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
