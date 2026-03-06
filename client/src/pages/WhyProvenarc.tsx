import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import {
  AlertTriangle, Shield, CheckCircle2, ArrowRight,
  Globe, Scan, Clock, Quote, Lock, MapPin, Timer, BadgeCheck,
} from "lucide-react";
import { fadeUp } from '@/lib/animations';


const risks = [
  { stat: "Thousands", desc: "of packages lost by major carriers annually" },
  { stat: "Months", desc: "to reconstruct lost original logbooks" },
  { stat: "15\u201330%", desc: "resale value lost from missing records" },
  { stat: "Grounded", desc: "aircraft with incomplete FAA documentation" },
];

const comparisonData = [
  {
    feature: "Service Model",
    competitor: "Ship logbooks to facility",
    provenarc: "We travel to your aircraft",
  },
  {
    feature: "Shipping Risk",
    competitor: "HIGH (FedEx/UPS loss)",
    provenarc: "ZERO (no shipping)",
  },
  {
    feature: "Time Out of Custody",
    competitor: "7\u201314 days",
    provenarc: "0 days (scanned on-site)",
  },
  {
    feature: "3D Scanning",
    competitor: "Not offered",
    provenarc: "Integrated service",
  },
  {
    feature: "Global Service",
    competitor: "Limited/none",
    provenarc: "Worldwide",
  },
  {
    feature: "Service Scope",
    competitor: "Records only",
    provenarc: "Records + 3D + Preservation",
  },
];

const protocolPillars = [
  {
    icon: Lock,
    title: "NDA-First Engagement",
    desc: "Every conversation begins under mutual non-disclosure. Your aircraft details are protected from the first call.",
  },
  {
    icon: MapPin,
    title: "On-Site Only",
    desc: "We never require shipping of original documents. Your records never leave your sight.",
  },
  {
    icon: Timer,
    title: "3:1 Quality Standard",
    desc: "Three days of post-production for every day in the field. Methodical, not rushed.",
  },
  {
    icon: BadgeCheck,
    title: "Fixed-Price Guarantee",
    desc: "Your engagement price is fixed at proposal. No scope creep. No surprise charges.",
  },
];

const caseStudies = [
  {
    quote:
      "Professional documentation shortened our sales cycle by 45 days and eliminated every buyer objection about records.",
    attribution: "Aviation Sales Professional",
    context: "Broker Partnership",
  },
  {
    quote:
      "I wouldn't trust my G550 logbooks to FedEx. Provenarc came to London, scanned everything on-site, and I never lost custody.",
    attribution: "European Aircraft Owner",
    context: "International Service",
  },
  {
    quote:
      "White-label partnership added significant additional revenue to our MRO services without any additional overhead.",
    attribution: "MRO Facility Director",
    context: "MRO Partnership",
  },
];

export default function WhyProvenarc() {
  return (
    <div>
      <SEO
        title="Why Provenarc | Risk Mitigation Through Documentation Excellence"
        description="The Provenarc Protocol: NDA-first engagement, on-site only documentation, 3:1 quality standard, and fixed-price guarantee. Independent, insured, and worldwide."
        canonical="https://provenarc.com/why-provenarc"
      />
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Why Provenarc
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              Why Would You Ever Ship Irreplaceable Logbooks?
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Traditional digitization services require shipping original logbooks via carrier.
              We eliminate that risk entirely. Your originals never leave your hangar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <p className="text-destructive font-mono text-xs tracking-[0.3em] uppercase mb-4">
              The Industry Problem
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">The Shipping Risk Nobody Talks About</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Every day, aircraft owners ship irreplaceable original logbooks through carriers
              that lose thousands of packages annually. The consequences are severe.
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
            <Card className="p-6 lg:p-8">
              <h3 className="font-medium mb-4">Additional Risks of Shipping</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Shipping damage to fragile historical documents",
                  "Delays during time-sensitive aircraft transactions",
                  "Theft of valuable aviation records in transit",
                  "No insurance coverage adequate for irreplaceable originals",
                  "Chain of custody breaks \u2014 who handled your logbooks?",
                  "Multiple handling points increase loss probability",
                ].map((risk, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertTriangle className="h-3.5 w-3.5 text-destructive mt-0.5 flex-shrink-0" />
                    {risk}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Our Solution
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              We Scan On-Site. Originals Never Leave Your Hangar.
            </h2>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Globe,
                  title: "Global Concierge Service",
                  desc: "We mobilize to your aircraft\u2019s location \u2014 whether it\u2019s in Texas, London, Dubai, or Tokyo. Same quality standards worldwide.",
                },
                {
                  icon: Shield,
                  title: "Zero Custody Transfer",
                  desc: "All scanning performed at your aircraft\u2019s location. Original documents never removed from your property. No shipping carriers, ever.",
                },
                {
                  icon: Scan,
                  title: "Integrated 3D + Records",
                  desc: "The only aviation service offering integrated 3D scanning and records digitization in a single concierge visit. No one else does this.",
                },
                {
                  icon: Clock,
                  title: "Insurance-Grade Quality",
                  desc: "Our 3:1 post-production ratio ensures methodical, insurance-grade documentation. Three days of QC for every day in the field.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6" data-testid={`card-solution-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
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

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Our Methodology
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">The Provenarc Protocol</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Our proprietary methodology ensures consistent, insurance-grade results regardless of aircraft type or location.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {protocolPillars.map((pillar, i) => (
              <Card key={i} className="p-6" data-testid={`card-protocol-${i}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          <motion.div {...fadeUp}>
            <Card className="p-6 lg:p-8 border-primary/10" data-testid="card-independence">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Independent & Unconflicted</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our independence from OEMs, brokerages, and insurance carriers means our only priority is accurate, complete documentation of your aircraft. No conflicts. No agenda.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Comparison
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">How We Compare</h2>
          </motion.div>

          <motion.div {...fadeUp}>
            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 border-b text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <div>Feature</div>
                <div className="text-center">Ship-It-In Services</div>
                <div className="text-center text-primary">Provenarc</div>
              </div>
              {comparisonData.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-4 p-4 text-sm items-center ${
                    i < comparisonData.length - 1 ? "border-b" : ""
                  }`}
                  data-testid={`comparison-row-${i}`}
                >
                  <div className="font-medium">{row.feature}</div>
                  <div className="text-center text-muted-foreground text-xs">{row.competitor}</div>
                  <div className="text-center text-sm font-medium">{row.provenarc}</div>
                </div>
              ))}
            </Card>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12">
            <Card className="p-6 lg:p-8">
              <h3 className="font-serif text-xl mb-4">Why Premium Service Is Justified</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Global concierge model (we travel to you, anywhere)",
                  "Zero shipping risk (originals never leave your property)",
                  "Integrated service (records + 3D in one visit)",
                  "Insurance-grade quality (methodical, not rushed)",
                  "Comprehensive documentation (no one else offers this combo)",
                  "Premium equipment and trained technicians on-site",
                ].map((reason, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                    {reason}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">What Our Partners Say</h2>
            <p className="text-muted-foreground text-sm mt-3">
              Representative quotes from our partner network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col" data-testid={`card-testimonial-${i}`}>
                  <Quote className="h-5 w-5 text-primary/30 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm font-medium">{study.attribution}</p>
                    <p className="text-xs text-muted-foreground">{study.context}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf6f1]">
              Stop Shipping. Start Preserving.
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Your logbooks are irreplaceable. Protect them with the only concierge documentation
              service in aviation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" data-testid="button-why-cta-discovery">
                  Schedule a Discovery Session
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-why-cta-process"
                >
                  See Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="text-[#b8b0a4]/70 text-sm mt-4" data-testid="text-cta-reassurance">
              No commitment required. 30-minute confidential call.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
