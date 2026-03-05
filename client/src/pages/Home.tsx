import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Globe, Shield, Scan, Lock, Plane, FileCheck,
  ArrowRight, CheckCircle2, ShieldCheck, DollarSign,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const trustStats = [
  { value: "30\u201350%", label: "of aircraft value tied to maintenance records", source: "VREF Aircraft Appraisals" },
  { value: "100%", label: "On-site documentation", source: "Zero shipping risk" },
  { value: "Global", label: "Aircraft served worldwide", source: "Any location, any hangar" },
  { value: "Sub-mm", label: "3D scan resolution", source: "Insurance-grade precision" },
];

const tiers = [
  {
    number: 1,
    name: "Essential Documentation",
    aircraft: "Piston Aircraft",
    features: [
      "Complete logbook scanning",
      "Maintenance records & ADs",
      "OCR & metadata tagging",
      "RecordVault cloud hosting",
    ],
  },
  {
    number: 2,
    name: "Complete Documentation",
    aircraft: "Turboprop Aircraft",
    features: [
      "Everything in Tier 1",
      "Exterior 3D scanning",
      "Interior 3D scanning",
      "Insurance-grade documentation",
    ],
  },
  {
    number: 3,
    name: "Premium Comprehensive",
    aircraft: "Light Jets",
    features: [
      "Everything in Tier 2",
      "Mechanical 3D scanning",
      "Modification verification",
      "Advanced damage assessment",
    ],
  },
  {
    number: 4,
    name: "Executive Package",
    aircraft: "Large Cabin Jets",
    features: [
      "5-day senior technician team",
      "Complete 3D documentation",
      "Custom executive deliverable",
      "Lifetime RecordVault hosting",
      "Insurance-grade certification",
    ],
  },
  {
    number: 5,
    name: "Flagship Comprehensive",
    aircraft: "Ultra-Premium Jets",
    features: [
      "7-day concierge service",
      "4K resolution 3D models",
      "Historical documentation research",
      "Ownership transition package",
      "10-year platinum hosting",
    ],
  },
];

const steps = [
  {
    icon: ShieldCheck,
    title: "Confidential Consultation",
    description: "Every engagement begins with a secure conversation. We execute a mutual NDA before any substantive discussion.",
    deliverable: "Scope Assessment & Custom Engagement Plan",
  },
  {
    icon: Plane,
    title: "On-Site Mobilization",
    description: "Our team travels to your aircraft at any location worldwide.",
    deliverable: "On-site Setup & Documentation Inventory",
  },
  {
    icon: Scan,
    title: "Precision Digitization & 3D Capture",
    description: "Maintenance records scanned, organized, indexed. Simultaneously, 3D scans of aircraft.",
    deliverable: "Complete Digital Archive & 3D Asset Models",
  },
  {
    icon: FileCheck,
    title: "Secure Delivery & Ongoing Access",
    description: "Complete digital records via encrypted transfer with redundant backup.",
    deliverable: "Encrypted Digital Archive, Access Credentials & Documentation Report",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <motion.p
            {...fadeUp}
            className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-8"
          >
            Provenarc Aero
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#faf6f1] leading-[1.1] tracking-tight"
            data-testid="text-hero-headline"
          >
            Aircraft documentation and 3D scanning.
            <br className="hidden sm:block" />
            {" "}On-site. Worldwide.{" "}
            <span className="italic">Under NDA.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[#b8b0a4] text-base sm:text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            We travel to your aircraft &mdash; anywhere in the world &mdash; to digitize maintenance records and capture precision 3D scans. Your documents never leave your hands.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Link href="/contact">
              <Button size="lg" data-testid="button-hero-discovery">
                Schedule a Discovery Session
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                data-testid="button-hero-process"
              >
                See Our Process <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-[#b8b0a4]/60 text-sm mt-6"
            data-testid="text-hero-reassurance"
          >
            No commitment required. 30-minute confidential call.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-16 border-b border-border/50" data-testid="section-trust-bar">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {trustStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
                data-testid={`stat-trust-${i}`}
              >
                <p className="font-serif text-3xl text-primary mb-1">{stat.value}</p>
                <p className="text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-[10px] text-muted-foreground">{stat.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-services-overview">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Services Overview
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Comprehensive Documentation for Every Aircraft Class
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              From piston aircraft to ultra-premium jets, we offer documentation and 3D scanning packages tailored to every class of aircraft.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-service-tiers">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Service Tiers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Five Tiers of Documentation Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {tiers.slice(0, 3).map((tier, i) => (
              <motion.div
                key={tier.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col">
                  <span className="text-xs font-mono text-primary tracking-wider">
                    TIER {tier.number}
                  </span>
                  <h3 className="font-serif text-xl mt-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.aircraft}</p>
                  <ul className="space-y-2 mt-4 mb-6 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full" data-testid={`button-tier-${tier.number}`}>
                      Discuss Your Project
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 mb-4">
            <p className="text-center text-xs font-mono text-primary tracking-[0.3em] uppercase mb-6">
              Ultra-Premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tiers.slice(3).map((tier, i) => (
              <motion.div
                key={tier.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col border-primary/20">
                  <span className="text-xs font-mono text-primary tracking-wider">
                    TIER {tier.number}
                  </span>
                  <h3 className="font-serif text-xl mt-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.aircraft}</p>
                  <ul className="space-y-2 mt-4 mb-6 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full" data-testid={`button-tier-${tier.number}`}>
                      Discuss Your Project
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-process">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Our Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">How It Works</h2>
            <p className="text-muted-foreground text-lg mt-4">
              Four steps from consultation to delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`step-${i}`}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-xs text-primary mb-1">STEP 0{i + 1}</p>
                      <h3 className="font-medium text-base mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.description}</p>
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">Deliverable:</span> {step.deliverable}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-confidentiality">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Confidentiality
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Discretion by Design
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Every Provenarc engagement operates under a comprehensive mutual non-disclosure agreement. We do not publish client lists, display fleet details, or share engagement specifics &mdash; ever. This isn&rsquo;t a gap in our marketing. It&rsquo;s a commitment our clients require and a standard we uphold for every engagement, regardless of size.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-8 max-w-2xl mx-auto">
              All engagements protected by mutual NDA &middot; Client identities never disclosed &middot; Bank-grade encryption on all digital deliverables
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20" data-testid="section-fixed-price">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Pricing Integrity
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Fixed-Price Guarantee
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Your engagement price is fixed at proposal. No scope creep. No surprise charges. What we quote is what you pay.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24" data-testid="section-bottom-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Next Step
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#faf6f1] leading-tight">
              Ready to protect your records?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" data-testid="button-cta-discovery">
                  Schedule a Discovery Session
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-cta-process"
                >
                  See Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p
              className="text-[#b8b0a4]/60 text-sm mt-6 max-w-lg mx-auto"
              data-testid="text-cta-reassurance"
            >
              No commitment required. 30-minute confidential call. We&rsquo;ll share a preliminary scope assessment regardless.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
