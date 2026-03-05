import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Globe, Shield, Scan, Lock, Plane, FileCheck,
  ArrowRight, CheckCircle2, ShieldCheck, DollarSign,
  Award, Camera, BookOpen,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const trustBadges = [
  {
    icon: Award,
    title: "30+ Years Combined Aviation Experience",
    description: "Our co-founders bring decades of practical aviation maintenance, engineering, and records management expertise.",
  },
  {
    icon: Camera,
    title: "FAA Part 107 Certified Drone Pilots",
    description: "Professional-grade aerial documentation conducted by certified Remote Pilot in Command operators.",
  },
  {
    icon: BookOpen,
    title: "Museum-Grade Archival Materials",
    description: "Preservation-quality deliverables designed to survive generations, not just transactions.",
  },
  {
    icon: Globe,
    title: "Global Service Capability",
    description: "We have documented aircraft on five continents, bringing the same white-glove service worldwide.",
  },
  {
    icon: Shield,
    title: "Zero Shipping Risk Guarantee",
    description: "Your original documents never leave your property. We travel to you, scan on-site, return immediately.",
  },
];

const tiers = [
  {
    number: 1,
    name: "Heritage Foundation",
    subtitle: "Professional Records Preservation",
    aircraft: "Piston Aircraft",
    timeline: "15 days",
    archival: "Optional add-on",
    features: [
      "Museum-quality digitization of every logbook and maintenance entry",
      "High-resolution scanning captures fine details",
      "Professional OCR makes handwritten entries fully searchable",
      "Metadata tagging enables instant retrieval",
      "RecordVault cloud hosting with redundant backups",
    ],
  },
  {
    number: 2,
    name: "Complete Documentation",
    subtitle: "Records Plus Comprehensive 3D Baseline",
    aircraft: "Turboprop Aircraft",
    timeline: "20 days",
    archival: "Standard",
    features: [
      "Everything in Heritage Foundation",
      "Drone-based exterior scanning from optimal angles",
      "Interior scanning at millimeter precision",
      "Interactive 3D models for remote virtual inspections",
      "Insurance-grade baseline condition documentation",
      "Museum-grade archival volume included",
    ],
  },
  {
    number: 3,
    name: "Premium Comprehensive",
    subtitle: "Complete Documentation Plus Mechanical Systems",
    aircraft: "Light Jets",
    timeline: "25 days",
    archival: "Multi-volume sets",
    features: [
      "Everything in Complete Documentation",
      "Engine components and accessory installations",
      "Major subsystems documentation",
      "Regulatory submission-ready packages",
      "Modification verification and STC compliance",
      "Comprehensive multi-volume archival sets",
    ],
  },
  {
    number: 4,
    name: "Executive Documentation",
    subtitle: "For Large Cabin Jets \u2014 White-Glove Delivery",
    aircraft: "Large Cabin Jets",
    timeline: "25\u201330 days",
    archival: "Hand-crafted with custom embossing",
    features: [
      "Senior technician teams for multi-day engagements",
      "Concierge coordination with maintenance facilities and insurers",
      "Custom presentation deliverables for board-level review",
      "Hand-crafted museum-grade archival volumes",
      "Lifetime platinum RecordVault hosting",
      "Insurance-grade certification letter",
    ],
  },
  {
    number: 5,
    name: "Flagship Comprehensive",
    subtitle: "The Definitive Aviation Heritage Archive",
    aircraft: "Ultra-Premium Jets",
    timeline: "30\u201340 days",
    archival: "Hand-tooled leather with gold leaf",
    features: [
      "Multi-week engagements capturing historical evolution",
      "Archival research with prior owners and maintenance facilities",
      "Custom ownership transition packages",
      "Multi-volume sets with hand-tooled leather and gold leaf",
      "In-person executive presentation delivery",
      "10-year platinum RecordVault with concierge support",
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
    description: "Our team travels to your aircraft at any location worldwide with professional scanning and drone equipment.",
    deliverable: "On-site Setup & Documentation Inventory",
  },
  {
    icon: Scan,
    title: "Precision Documentation",
    description: "Meticulous records scanning, drone-based exterior capture, and interior 3D documentation. Originals never leave your custody.",
    deliverable: "Complete Digital Archive & 3D Asset Models",
  },
  {
    icon: FileCheck,
    title: "Delivery & Permanent Archive",
    description: "Museum-grade archival volumes, RecordVault platform access, and comprehensive digital deliverables.",
    deliverable: "Archival Volumes, Encrypted Digital Archive & Access Credentials",
  },
];

export default function AeroHome() {
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
            Provenarc Aero Solutions
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#faf6f1] leading-[1.1] tracking-tight"
            data-testid="text-aero-headline"
          >
            Preserving Aviation Heritage
            <br className="hidden sm:block" />
            {" "}with Three Decades of Precision
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="text-[#c9a96e]/80 font-serif text-lg sm:text-xl mt-6 italic"
          >
            From original logbooks to heirloom-quality archival volumes — your aircraft deserves nothing less
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[#b8b0a4] text-base sm:text-lg mt-8 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-aero-subheadline"
          >
            Provenarc Aero Solutions represents the convergence of three decades of aviation expertise
            and cutting-edge preservation technology. Founded by professionals who have dedicated their
            careers to aerospace excellence, we understand that your aircraft is more than an asset — it
            is a legacy. Our proprietary digitization process cannot be rushed because quality demands
            time. Using advanced drone technology for exterior documentation and museum-grade materials
            for physical archives, we create deliverables that serve dual purposes: immediate operational
            utility and permanent historical record.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Link href="/contact">
              <Button size="lg" data-testid="button-aero-discovery">
                Schedule a Discovery Session
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                data-testid="button-aero-process"
              >
                See Our Process <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-[#b8b0a4]/60 text-sm mt-6"
            data-testid="text-aero-reassurance"
          >
            No commitment required. 30-minute confidential call.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-20 border-b border-border/50" data-testid="section-trust-badges">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Why Clients Trust Provenarc
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
                data-testid={`badge-trust-${i}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <badge.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium mb-2 leading-tight">{badge.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{badge.description}</p>
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
              From piston aircraft to ultra-premium jets, five tiers of documentation excellence —
              each featuring museum-grade archival volumes, drone-based 3D scanning, and lifetime
              cloud hosting through our RecordVault platform.
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
                  <p className="text-xs text-muted-foreground italic">{tier.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-1">{tier.aircraft}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span>{tier.timeline}</span>
                    <span className="text-primary/60">|</span>
                    <span>Archival: {tier.archival}</span>
                  </div>
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
                  <p className="text-xs text-muted-foreground italic">{tier.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-1">{tier.aircraft}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span>{tier.timeline}</span>
                    <span className="text-primary/60">|</span>
                    <span>Archival: {tier.archival}</span>
                  </div>
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
              Four steps from consultation to permanent preservation.
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
              Every Provenarc engagement operates under a comprehensive mutual non-disclosure agreement.
              We do not publish client lists, display fleet details, or share engagement specifics — ever.
              This is not a gap in our marketing. It is a commitment our clients require and a standard we
              uphold for every engagement, regardless of size.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-8 max-w-2xl mx-auto">
              All engagements protected by mutual NDA · Client identities never disclosed · Bank-grade encryption on all digital deliverables
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
              Investment Framework
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
              Ready to Preserve Your Aircraft's Heritage?
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
              No commitment required. 30-minute confidential call. We will share a preliminary scope assessment regardless.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
