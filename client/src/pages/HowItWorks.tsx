import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar, Plane, Scan, FileCheck, MonitorCheck,
  ArrowRight, CheckCircle2, Shield, Eye,
  Database, Lock, Search, Cloud, Download,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Schedule Service",
    description: "Discovery call to understand your aircraft, timeline, and documentation goals.",
    details: [
      "30-minute introductory call with a documentation specialist",
      "Select service tier based on aircraft type and needs",
      "Confirm aircraft location and hangar access requirements",
      "Coordinate FBO, MRO, or private hangar logistics",
      "Establish timeline and any transaction deadlines",
    ],
  },
  {
    number: "02",
    icon: Plane,
    title: "We Travel To You",
    description: "Global mobilization to your aircraft with specialized equipment.",
    details: [
      "Portal-to-portal travel coordination (domestic or international)",
      "Professional scanning equipment transport and customs clearance",
      "Coordination with FBO/hangar/MRO facility staff",
      "Equipment setup and calibration at your aircraft location",
      "Pre-scan walkthrough and project scope confirmation",
    ],
  },
  {
    number: "03",
    icon: Scan,
    title: "On-Site Documentation",
    description: "Complete records scanning and 3D documentation at your hangar.",
    details: [
      "High-resolution logbook and records scanning",
      "3D exterior scanning (fuselage, wings, empennage, landing gear)",
      "3D interior scanning (cabin, cockpit, cargo areas)",
      "Mechanical systems scanning (engine, APU, critical components)",
      "Originals never leave your property \u2014 returned before departure",
      "On-site quality verification before our team departs",
    ],
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Post-Production",
    description: "Methodical processing with our 3:1 quality ratio.",
    details: [
      "OCR processing and intelligent metadata tagging",
      "Point cloud optimization and model generation",
      "Multi-stage quality control review",
      "Document organization and indexing",
      "Executive deliverable preparation",
      "Three days of QC for every day in the field",
    ],
  },
  {
    number: "05",
    icon: MonitorCheck,
    title: "Digital Delivery",
    description: "Secure access to your complete digital documentation package.",
    details: [
      "RecordVault platform access with secure login",
      "Interactive 3D model viewer for aircraft visualization",
      "Downloadable high-resolution archives",
      "Cloud hosting with redundant backups",
      "Ongoing access and support",
    ],
  },
];

const scanningCapabilities = [
  {
    title: "Handheld 3D Scanning",
    description:
      "Portable, high-resolution scanners for detailed component documentation. Captures complex geometries and hard-to-reach areas with sub-millimeter accuracy.",
    specs: ["Sub-millimeter accuracy", "Portable deployment", "Complex geometry capture"],
  },
  {
    title: "Tripod-Based Scanning",
    description:
      "Precision tripod-mounted scanners for large-area coverage. Ideal for full-aircraft exterior scans and cabin interiors with consistent point cloud density.",
    specs: ["Large-area coverage", "Consistent density", "Full aircraft exteriors"],
  },
  {
    title: "Point Cloud Processing",
    description:
      "Advanced post-processing transforms raw scan data into navigable 3D models. Insurance-grade documentation meets the highest standards for claims support.",
    specs: ["Insurance-grade quality", "Navigable 3D models", "Measurement tools"],
  },
];

const platformFeatures = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Enterprise-grade hosting with geographic redundancy. Your data is stored across multiple data centers for maximum reliability.",
  },
  {
    icon: Lock,
    title: "Security & Encryption",
    description: "AES-256 encryption at rest and in transit. Role-based access control ensures only authorized personnel view your documentation.",
  },
  {
    icon: Search,
    title: "Search & Retrieval",
    description: "Full-text OCR search across all documents. Find any maintenance record, AD compliance note, or 337 form in seconds.",
  },
  {
    icon: Eye,
    title: "3D Model Viewer",
    description: "Interactive browser-based 3D viewer for your aircraft scans. Rotate, zoom, measure, and annotate from any device.",
  },
  {
    icon: Database,
    title: "Permanent Archive",
    description: "Long-term data retention with versioning. Your documentation is preserved permanently with full audit trail.",
  },
  {
    icon: Download,
    title: "Downloadable Archives",
    description: "Export your complete documentation package at any time. PDF bundles, raw scans, and 3D model files in standard formats.",
  },
];

export default function HowItWorks() {
  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              How It Works
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              From Schedule to Delivery
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Five methodical steps. Zero days out of your custody. Complete documentation and 3D
              preservation delivered with concierge precision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              On-Site Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">The Provenarc Method</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Every engagement follows the same methodical process, ensuring consistent
              insurance-grade results regardless of aircraft type or location.
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-testid={`step-${step.number}`}
              >
                <Card className="p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-start">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:w-20">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-mono text-xs text-primary tracking-wider">
                        STEP {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <Card className="p-6 bg-primary/5 border-primary/10 inline-block">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <p className="text-sm font-medium">
                  0 days out of your custody.{" "}
                  <span className="text-muted-foreground font-normal">
                    Originals scanned on-site and returned before our team departs.
                  </span>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Technology
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">3D Scanning Technology</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Professional-grade 3D scanning equipment deployed on-site, creating
              insurance-grade digital documentation of your aircraft&rsquo;s physical condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scanningCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-scanning-${i}`}>
                  <h3 className="font-medium mb-3">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  <ul className="space-y-2">
                    {cap.specs.map((spec, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12">
            <Card className="p-6 lg:p-8">
              <h3 className="font-serif text-xl mb-4">Use Cases</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Baseline Documentation", desc: "Establish pre-existing condition for insurance policies" },
                  { title: "Damage Assessment", desc: "Post-incident 3D comparison against baseline scans" },
                  { title: "Remote Inspections", desc: "Enable buyers to inspect aircraft digitally from anywhere" },
                  { title: "Provenance Preservation", desc: "Permanent digital record of aircraft condition over time" },
                ].map((use, i) => (
                  <div key={i} className="p-4 rounded-md bg-muted/50">
                    <h4 className="text-sm font-medium mb-1">{use.title}</h4>
                    <p className="text-xs text-muted-foreground">{use.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              RecordVault
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Digital Delivery Platform</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Your complete documentation package, hosted securely and accessible from anywhere.
              Enterprise-grade security meets intuitive design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="p-6 h-full" data-testid={`card-platform-${i}`}>
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Schedule a discovery call to discuss your aircraft and documentation goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" data-testid="button-hiw-cta-quote">
                  Request Custom Quote
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-hiw-cta-pricing"
                >
                  View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
