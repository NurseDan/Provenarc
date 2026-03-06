import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import {
  Calendar, Plane, Scan, FileCheck, MonitorCheck,
  ArrowRight, CheckCircle2, Shield, Eye,
  Database, Lock, Search, Cloud, Download,
  Clock, Camera, Compass, Target,
} from "lucide-react";
import { fadeUp } from '@/lib/animations';


const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Confidential Consultation",
    description: "Every engagement begins with a secure conversation to understand your aircraft, documentation requirements, and timeline. We execute a mutual NDA before any substantive discussion.",
    details: [
      "Mutual NDA execution before substantive discussion",
      "30-minute introductory call with a documentation specialist",
      "Custom scope assessment based on your aircraft",
      "Timeline coordination and logistics planning",
      "Deliverable: Scope Assessment & Custom Engagement Plan",
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
    description: "Meticulous records scanning, drone-based exterior capture, and comprehensive 3D documentation at your hangar.",
    details: [
      "High-resolution logbook and records scanning",
      "Drone-based exterior documentation (FAA Part 107 certified)",
      "3D interior scanning (cabin, cockpit, cargo areas)",
      "Mechanical systems scanning (engine, APU, critical components)",
      "Originals never leave your property \u2014 returned before departure",
      "Real-time cloud backup during on-site operations",
    ],
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Post-Production",
    description: "Methodical processing with our 3:1 quality ratio. Three days of meticulous quality control for every day in the field.",
    details: [
      "OCR processing and intelligent metadata tagging",
      "Point cloud optimization and 3D model generation",
      "Multi-stage quality control review by senior technicians",
      "Museum-grade archival volume coordination with bookbinders",
      "Executive deliverable preparation",
      "Three days of QC for every day in the field",
    ],
  },
  {
    number: "05",
    icon: MonitorCheck,
    title: "Delivery & Permanent Archive",
    description: "Secure access to your complete digital documentation package and museum-grade physical deliverables.",
    details: [
      "RecordVault platform access with secure login",
      "Interactive 3D model viewer for aircraft visualization",
      "Museum-grade archival volumes delivered",
      "Cloud hosting with redundant backups",
      "Training on platform access and ongoing support",
    ],
  },
];

const processPhases = [
  {
    phase: "Phase 1",
    name: "Pre-Service Coordination",
    days: "Days 1\u20133",
    icon: Calendar,
    details: [
      "Service planning and logistics coordination",
      "Hangar access arrangements and scheduling",
      "Document inventory and scope confirmation",
      "International equipment customs clearance",
      "Safety briefings and facility coordination",
    ],
  },
  {
    phase: "Phase 2",
    name: "On-Site Documentation",
    days: "Days 4\u201310",
    icon: Scan,
    details: [
      "Portable scanning equipment deployment",
      "Drone-based exterior documentation",
      "Interior and mechanical systems scanning",
      "Originals never leave your property",
      "Real-time cloud backup of all captured data",
    ],
  },
  {
    phase: "Phase 3",
    name: "Processing & Quality Control",
    days: "Days 11\u201325",
    icon: FileCheck,
    details: [
      "OCR verification and metadata tagging",
      "Point cloud processing and 3D model generation",
      "Multi-stage review by senior technicians",
      "Museum-grade volume coordination with bookbinders",
      "Every deliverable reviewed before release",
    ],
  },
  {
    phase: "Phase 4",
    name: "Delivery & Integration",
    days: "Days 26\u201330",
    icon: MonitorCheck,
    details: [
      "RecordVault platform upload and configuration",
      "Museum-grade archival volumes delivered",
      "Client training on platform access",
      "Documentation handover and acceptance",
      "Indefinite support and platform access",
    ],
  },
];

const droneCoverage = [
  {
    icon: Target,
    title: "Complete Top-of-Wing Coverage",
    description: "Traditional documentation methods struggle with upper wing surfaces, especially on high-wing aircraft or T-tail configurations. Our drones capture comprehensive documentation from angles that ground-based systems cannot achieve.",
  },
  {
    icon: Compass,
    title: "Vertical Stabilizer & Empennage",
    description: "Complete documentation of vertical stabilizer, horizontal stabilizer, and empennage surfaces without facility disruption or technician safety concerns.",
  },
  {
    icon: Camera,
    title: "Engine & Nacelle Detail",
    description: "Millimeter-level documentation from multiple angles for pre-purchase verification and insurance baseline. Captures condition details invisible from ground level.",
  },
  {
    icon: Plane,
    title: "Fuselage & General Exterior",
    description: "Complete fuselage curvature documentation without scaffolding or lifts. Paint condition, previous repairs, and surface anomalies documented with forensic clarity.",
  },
];

const droneSpecs = [
  "Professional-grade drones with obstacle avoidance and precision hover",
  "20+ megapixel cameras with mechanical shutters",
  "LiDAR sensors for dimensional accuracy",
  "GPS + inertial navigation for precise positioning",
  "Automated flight planning for repeatable scan patterns",
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
      <SEO
        title="The Provenarc Method | How Aircraft Documentation Works"
        description="Five-step documentation process from discovery session to final delivery. Drone LiDAR scanning, nondestructive document digitization, and museum-grade archival production."
        canonical="https://provenarc.com/how-it-works"
      />
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              How It Works
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              The Provenarc Method
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Five methodical steps. Zero days out of your custody. Complete documentation and 3D
              preservation delivered with concierge precision and museum-grade standards.
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
            <h2 className="font-serif text-3xl md:text-4xl">Five Steps to Permanent Preservation</h2>
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

      <section className="py-24 bg-card/50" data-testid="section-precision-without-rush">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Precision Without Rush
            </h2>
            <p className="font-serif text-lg text-primary/80 italic mt-2">
              Our Proprietary Process
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-16">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Quality documentation cannot be compressed without compromising integrity. Our
                proprietary technology process has been developed over years of field operations and
                incorporates lessons learned from thousands of aircraft.
              </p>
              <p>
                Every document receives individual attention. High-resolution scanning captures fine
                print that inferior systems miss. OCR verification ensures searchable text accurately
                reflects original content. Metadata tagging enables rapid retrieval years after
                digitization. 3D scanning requires precise calibration and optimal lighting conditions
                that cannot be expedited.
              </p>
              <Card className="p-6 border-primary/20 bg-primary/5">
                <p className="text-foreground font-medium italic">
                  "When competitors promise five-day turnaround, they are skipping steps. When we
                  quote twenty-five to thirty days, we are accounting for every quality checkpoint
                  our process requires. The difference shows in the deliverable."
                </p>
              </Card>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {processPhases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-phase-${i}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <phase.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-primary tracking-wider">{phase.phase}</p>
                      <h3 className="font-medium text-sm">{phase.name}</h3>
                    </div>
                    <span className="ml-auto text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {phase.days}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center">
            <Card className="p-8 bg-primary/5 border-primary/10 inline-block" data-testid="card-3-1-ratio">
              <div className="flex items-center gap-4">
                <Clock className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="font-serif text-2xl text-primary">3:1</p>
                  <p className="text-sm font-medium">Post-Production Ratio</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Three days of meticulous processing for every one day of field service
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-drone-technology">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Aerial Documentation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Advanced Drone Technology
            </h2>
            <p className="font-serif text-lg text-primary/80 italic mt-2">
              Precision from Every Angle
            </p>
            <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Exterior aircraft documentation presents unique challenges. Fuselage curvature, wing
              leading edges, empennage surfaces, engine nacelles — comprehensive coverage requires
              perspectives impossible to achieve with ground-based systems alone.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-12">
            <Card className="p-6 bg-primary/5 border-primary/10 max-w-2xl mx-auto text-center">
              <Camera className="h-6 w-6 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium">FAA Part 107 Certified Operations</p>
              <p className="text-xs text-muted-foreground mt-2">
                All drone operations conducted by FAA Part 107 certified Remote Pilot in Command
                operators with specific training in aviation facility operations.
              </p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {droneCoverage.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-drone-coverage-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp}>
            <Card className="p-6 lg:p-8">
              <h3 className="font-serif text-xl mb-4">Technology Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {droneSpecs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {spec}
                  </div>
                ))}
              </div>
              <div className="border-t border-border/50 pt-4 mt-4">
                <h4 className="text-sm font-medium mb-3">Operational Standards</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Coordination with airport operations and air traffic control",
                    "Weather monitoring and delay protocols",
                    "Liability insurance specific to aerial operations",
                    "Safety briefings and coordination with facility personnel",
                  ].map((standard, i) => (
                    <p key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <Shield className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                      {standard}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border-t border-border/50 pt-4 mt-4">
                <p className="text-sm text-muted-foreground italic">
                  Drone-captured data integrates seamlessly with interior scanning and records
                  digitization in comprehensive documentation packages.
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
              insurance-grade digital documentation of your aircraft's physical condition.
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
              <h3 className="font-serif text-xl mb-4">Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Pre-Purchase Inspections", desc: "Comprehensive exterior documentation before scheduling in-person inspections. Hidden damage on upper surfaces becomes immediately visible." },
                  { title: "Insurance Baseline", desc: "Pre-loss condition evidence protects both owners and insurers. Compare current condition against baseline scans to document changes." },
                  { title: "Modification Verification", desc: "Before and after scanning preserves evidence of major modifications, paint schemes, and refurbishment work." },
                  { title: "Provenance Preservation", desc: "Permanent digital record of aircraft condition. For show aircraft and classic aviation, these scans become invaluable historical artifacts." },
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
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
              Ready to Preserve Your Aircraft's Heritage?
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Schedule a discovery call to discuss your aircraft and documentation goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" data-testid="button-hiw-cta-quote">
                  Schedule a Discovery Session
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-hiw-cta-services"
                >
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="text-[#b8b0a4] text-sm mt-6">
              No commitment required. 30-minute confidential call. We will share a preliminary scope assessment regardless.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
