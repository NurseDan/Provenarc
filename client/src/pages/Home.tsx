import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Globe, Shield, Scan, Calendar, Plane, FileCheck,
  MonitorCheck, ArrowRight, CheckCircle2,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const features = [
  {
    icon: Globe,
    title: "Global Concierge Service",
    description: "We travel to you\u2014anywhere in the world. No shipping carriers, ever.",
  },
  {
    icon: Shield,
    title: "Zero Shipping Risk",
    description: "Your irreplaceable logbooks never leave your property. Zero risk of loss.",
  },
  {
    icon: Scan,
    title: "Integrated 3D Scanning",
    description: "Records digitization and 3D aircraft preservation in a single visit.",
  },
];

const stats = [
  { value: "30%", label: "of transactions delayed by incomplete documentation" },
  { value: "$500K+", label: "cost to reconstruct lost original logbooks" },
  { value: "15\u201330%", label: "resale value lost from missing records" },
];

const tiers = [
  {
    number: 1,
    name: "Essential Documentation",
    aircraft: "Piston Aircraft",
    price: "$17,700",
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
    price: "$35,400",
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
    price: "$53,100",
    features: [
      "Everything in Tier 2",
      "Mechanical 3D scanning",
      "Modification verification",
      "Advanced damage assessment",
    ],
  },
];

const premiumTiers = [
  {
    number: 4,
    name: "Executive Package",
    aircraft: "Large Cabin Jets ($10M\u2013$30M)",
    price: "$150,000",
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
    aircraft: "Ultra-Premium Jets ($30M+)",
    price: "$210,000",
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
    icon: Calendar,
    title: "Schedule",
    description: "Discovery call to understand your aircraft, timeline, and goals.",
  },
  {
    icon: Plane,
    title: "We Travel",
    description: "Global mobilization to your aircraft with specialized equipment.",
  },
  {
    icon: Scan,
    title: "On-Site Service",
    description: "Records scanning and 3D documentation at your hangar.",
  },
  {
    icon: FileCheck,
    title: "Post-Production",
    description: "OCR processing, point cloud optimization, and quality control.",
  },
  {
    icon: MonitorCheck,
    title: "Digital Delivery",
    description: "RecordVault access, 3D viewer, and downloadable archives.",
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
            Global Aviation Documentation & Preservation
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#faf6f1] leading-[1.1] tracking-tight"
          >
            We Don't Just Preserve
            <br className="hidden sm:block" />
            {" "}Your Records.{" "}
            <span className="italic">
              We Preserve
              <br className="hidden sm:block" />
              {" "}Your Aircraft.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[#b8b0a4] text-base sm:text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            Concierge documentation and 3D preservation for ultra-premium aircraft. On-site.
            Worldwide. Your originals never leave your hangar.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Link href="/contact">
              <Button size="lg" data-testid="button-hero-quote">
                Request Custom Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                data-testid="button-hero-services"
              >
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-16 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm" data-testid={`text-feature-${i}`}>{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              The Industry Problem
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Why Would You Ever Ship Irreplaceable Logbooks?
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              Traditional digitization services require you to ship original logbooks via FedEx or
              UPS. Carriers lose thousands of packages annually. If your logbooks are lost,
              reconstruction costs $50K&ndash;$500K+ and takes months. We eliminate that risk
              entirely.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <p className="font-mono text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Service Tiers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Five Tiers of Documentation Excellence
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              From piston aircraft to ultra-premium jets, we offer documentation packages tailored
              to every class of aircraft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {tiers.map((tier, i) => (
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
                  <p className="font-mono text-2xl font-bold mt-4">
                    {tier.price}
                    <span className="text-sm text-muted-foreground font-normal ml-1">+ travel</span>
                  </p>
                  <ul className="space-y-2 mt-4 mb-6 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services">
                    <Button variant="outline" className="w-full" data-testid={`button-tier-${tier.number}`}>
                      Learn More
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
            {premiumTiers.map((tier, i) => (
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
                  <p className="font-mono text-2xl font-bold mt-4">
                    {tier.price}
                    <span className="text-sm text-muted-foreground font-normal ml-1">+ travel</span>
                  </p>
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
                      Request Custom Quote
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Our Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">How It Works</h2>
            <p className="text-muted-foreground text-lg mt-4">
              Five simple steps from scheduling to delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`text-center ${i === 4 ? "col-span-2 md:col-span-1 mx-auto max-w-[200px] md:max-w-none" : ""}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-mono text-xs text-primary mb-2">0{i + 1}</p>
                <h3 className="font-medium text-sm mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.35em] uppercase mb-4">
              Trusted by Aviation Professionals
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Built for the Standards You Demand
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "On-Site Service", sub: "Zero shipping risk" },
              { value: "48hr", label: "Quote Turnaround", sub: "Custom proposals" },
              { value: "Global", label: "Coverage", sub: "Any location worldwide" },
              { value: "NDA", label: "Confidentiality", sub: "Every engagement" },
            ].map((stat, i) => (
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
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Get Started
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#faf6f1] leading-tight">
              Protect Your Aircraft&rsquo;s Provenance
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Schedule a 30-minute discovery call to discuss your aircraft, timeline, and
              documentation goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" data-testid="button-cta-quote">
                  Request Custom Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-cta-call"
                >
                  Schedule Discovery Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
