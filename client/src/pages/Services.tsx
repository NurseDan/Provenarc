import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Plane, Clock, MapPin, FileText, BookOpen, Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const tiers = [
  {
    number: 1,
    name: "Heritage Foundation",
    subtitle: "Professional Records Preservation",
    aircraft: "Piston Aircraft",
    description:
      "Your aircraft's history begins with its records. Our Heritage Foundation service provides museum-quality digitization of every logbook, maintenance entry, and compliance document. High-resolution scanning captures fine details that smartphone cameras miss. Professional OCR technology makes decades of handwritten entries fully searchable. Metadata tagging enables instant retrieval by date, component, or maintenance type. Deliverables include permanent cloud hosting through our RecordVault platform, complete with redundant backup systems and unlimited access.",
    turnaround: "15 business days",
    archival: "Optional museum-grade archival volumes",
    bestFor: "Owners focused on compliance, transaction preparation, and insurance requirements",
    scope: [
      "Complete logbook scanning (all volumes)",
      "Maintenance records, 337s, STCs, AD compliance",
      "High-resolution OCR and metadata tagging",
      "Cloud hosting via RecordVault platform",
      "Secure client access portal",
    ],
  },
  {
    number: 2,
    name: "Complete Documentation",
    subtitle: "Records Plus Comprehensive 3D Baseline",
    aircraft: "Turboprop Aircraft",
    description:
      "Complete Documentation integrates records preservation with dimensional capture of your aircraft itself. Drone-based exterior scanning documents every surface from optimal angles impossible to achieve with ground-based systems. Interior scanning preserves cabin configuration, avionics installations, and custom modifications with millimeter precision. This service creates comprehensive baseline evidence for insurance carriers, establishes pre-sale condition documentation for buyer confidence, and enables remote virtual inspections that accelerate transaction timelines.",
    turnaround: "20 business days",
    archival: "Museum-grade archival volume standard",
    bestFor: "Owners seeking insurance baseline, pre-sale documentation, and remote inspection capability",
    scope: [
      "Everything in Heritage Foundation",
      "Full exterior 3D scan via drone (fuselage, wings, empennage)",
      "Complete interior 3D scan (cabin, cockpit, cargo areas)",
      "Interactive 3D model viewer access",
      "Insurance-grade baseline documentation package",
      "Museum-grade archival volume included",
    ],
  },
  {
    number: 3,
    name: "Premium Comprehensive",
    subtitle: "Complete Documentation Plus Mechanical Systems Baseline",
    aircraft: "Light Jets",
    description:
      "Premium Comprehensive extends documentation into critical mechanical systems. Engine components, accessory installations, and major subsystems receive the same meticulous attention as exterior surfaces and interior spaces. Clients pursuing this tier typically face specific regulatory requirements, insurance carrier mandates, or transaction due diligence demands that exceed standard documentation scope. Corporate flight departments use mechanical baseline scans to track component condition evolution across maintenance cycles.",
    turnaround: "25 business days",
    archival: "Comprehensive multi-volume archival sets",
    bestFor: "Corporate flight departments, regulatory compliance, major modification documentation",
    scope: [
      "Everything in Complete Documentation",
      "Mechanical systems 3D scanning (engine, critical components)",
      "STC/337 compliance visual verification",
      "Specialized technical documentation for regulatory submission",
      "Detailed comparison reports for post-maintenance analysis",
      "Premium multi-volume archival sets",
    ],
  },
  {
    number: 4,
    name: "Executive Documentation",
    subtitle: "For Large Cabin Jets \u2014 Comprehensive Preservation with White-Glove Delivery",
    aircraft: "G550, Global 6000, Large Cabin Jets",
    description:
      "Executive Documentation represents our complete preservation capability applied to high-value aircraft where documentation quality directly impacts transaction outcomes and insurance positioning. This service tier deploys senior technician teams for multi-day on-site engagements, capturing every aspect of your aircraft with forensic thoroughness. Beyond technical documentation, Executive service includes concierge coordination with maintenance facilities, insurance carriers, and transaction stakeholders.",
    turnaround: "25\u201330 business days",
    archival: "Hand-crafted museum-grade volumes with custom embossing",
    bestFor: "Large cabin jet owners, corporate flight departments, pre-sale preparation",
    scope: [
      "Complete records digitization (all logbooks, all maintenance records)",
      "Full exterior and interior 3D scanning",
      "Mechanical systems 3D scanning (APU, landing gear, major components)",
      "Custom executive presentation deliverable for board-level review",
      "Concierge coordination with maintenance facilities and insurers",
      "Lifetime RecordVault hosting with priority support",
      "Hand-crafted museum-grade archival volumes with custom embossing",
    ],
  },
  {
    number: 5,
    name: "Flagship Comprehensive",
    subtitle: "For Ultra-Premium Jets \u2014 The Definitive Aviation Heritage Archive",
    aircraft: "G650, Global 7500, BBJ, ACJ",
    description:
      "Flagship Comprehensive is reserved for the world's finest aircraft and the owners who demand documentation that reflects their investment. Multi-week engagements capture not only current condition but historical evolution through archival research and prior ownership coordination. The resulting documentation becomes the definitive record of your aircraft's complete provenance. This service tier includes elements unavailable at any other level: historical documentation research engaging with prior owners and maintenance facilities, custom ownership transition packages, and in-person executive presentation delivery.",
    turnaround: "30\u201340 business days",
    archival: "Multi-volume sets with hand-tooled leather and gold leaf embossing",
    bestFor: "Ultra-premium jet owners, legacy preservation, ownership transitions",
    scope: [
      "Everything in Executive Documentation",
      "Multi-day on-site service with aircraft availability flexibility",
      "Historical documentation research (prior owners, major events)",
      "Custom ownership transition package",
      "In-person executive presentation delivery at your chosen location",
      "Multi-volume archival sets with hand-tooled leather and gold leaf",
      "10-year RecordVault platinum hosting with dedicated concierge support",
    ],
  },
];

const addOns = [
  {
    name: "Ownership Transition Package",
    description:
      "Historical records research, prior owner contact and document recovery, gap analysis, pre-sale documentation audit, and buyer presentation package.",
    turnaround: "+10 business days",
  },
  {
    name: "Annual Documentation Update",
    description:
      "Annual 3D condition baseline scan, records update, compliance verification (ADs, inspections), and insurance renewal documentation.",
    turnaround: "20\u201325 business days per visit",
  },
  {
    name: "Post-Incident Documentation",
    description:
      "Emergency 48\u201372 hour deployment, complete damage documentation via 3D scanning, pre/post comparison analysis, and insurance claim support package.",
    turnaround: "15\u201320 business days",
  },
  {
    name: "Expedited Service",
    description:
      "Priority scheduling for aviation sales professionals with transaction deadlines. Quality standards remain identical \u2014 we compress timelines through resource intensity, not by skipping steps.",
    turnaround: "50\u201367% turnaround reduction",
  },
];

const investmentFactors = [
  { icon: Plane, label: "Aircraft type and documentation volume" },
  { icon: MapPin, label: "Number of scan locations" },
  { icon: Clock, label: "Timeline requirements" },
  { icon: FileText, label: "Deliverable specifications" },
];

const archivalSpecs = [
  "Archival-grade acid-free paper (100+ year lifespan)",
  "600 DPI full-color printing",
  "Smyth-sewn binding (pages never fall out)",
  "Hardcover with leather or linen finish",
  "Custom embossing (aircraft registration, owner name)",
  "Protective slipcase",
  "Certificate of authenticity",
];

const archivalPremium = [
  "Hand-tooled leather with gold leaf embossing",
  "Custom interior title pages with aircraft photography",
  "Multi-volume sets for complex documentation",
  "Climate-controlled archival storage boxes",
  "Additional copies for stakeholders (insurance, buyer, family)",
];

export default function Services() {
  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Our Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              Complete Aircraft Documentation & Preservation
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Five tiers of meticulous documentation excellence, each featuring museum-grade archival
              volumes, drone-based 3D scanning, and lifetime cloud hosting. Delivered on-site at your
              aircraft's location, anywhere in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {tiers.map((tier, index) => (
        <section
          key={tier.number}
          className={`py-20 ${index % 2 !== 0 ? "bg-card/50" : ""}`}
          data-testid={`section-tier-${tier.number}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              {...fadeUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div>
                <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
                  Tier {tier.number}
                </span>
                <h2 className="font-serif text-3xl mt-2">{tier.name}</h2>
                <p className="text-muted-foreground mt-1 italic">{tier.subtitle}</p>
                <p className="text-muted-foreground mt-4 leading-relaxed">{tier.description}</p>

                <h3 className="font-medium text-sm mt-8 mb-3">Scope of Service</h3>
                <ul className="space-y-2">
                  {tier.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="p-6 lg:sticky lg:top-24">
                <p className="text-sm font-medium mb-1" data-testid={`text-aircraft-tier-${tier.number}`}>
                  Best for: {tier.aircraft}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Turnaround: {tier.turnaround}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Archival: {tier.archival}
                </p>
                <p className="text-xs text-muted-foreground/80 mt-3 italic">
                  {tier.bestFor}
                </p>

                <Link href="/contact">
                  <Button className="w-full mt-6" data-testid={`button-quote-tier-${tier.number}`}>
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-24" data-testid="section-archival-volumes">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Heirloom-Quality Deliverables
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Museum-Grade Archival Volumes
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed italic">
              When Digital Meets Timeless
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Digital archives provide operational utility. Physical volumes provide permanence and
                presence. These are not office supply store print jobs — these are heirloom-quality
                documents designed to survive generations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each volume is custom-bound using archival-grade materials that meet museum preservation
                standards. Acid-free paper ensures documents will not yellow or degrade over decades.
                Full-color printing reproduces original logbook entries, inspection stamps, and handwritten
                notes with perfect fidelity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For pre-sale presentations, they demonstrate meticulous ownership. For corporate flight
                departments, physical reference independent of technology. For family legacy, beautiful
                artifacts. Some clients commission multiple copies — one operational, one for insurance,
                one for permanent display.
              </p>
              <Card className="p-4 bg-primary/5 border-primary/10">
                <p className="text-sm text-primary font-medium">
                  Standard in Tier 4 & 5 service packages. Optional add-on for Tiers 1-3.
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  These volumes become part of your aircraft's permanent provenance.
                </p>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-medium text-sm mb-4 flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  Standard Specifications
                </h3>
                <ul className="space-y-2">
                  {archivalSpecs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 border-primary/20">
                <h3 className="font-medium text-sm mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Premium Options
                </h3>
                <ul className="space-y-2">
                  {archivalPremium.map((option, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {option}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Enhancements
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Add-On Services</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Enhance any service tier with specialized documentation packages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-addon-${i}`}>
                  <h3 className="font-medium mb-3">{addon.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{addon.description}</p>
                  <p className="text-xs text-muted-foreground mt-3">
                    Turnaround: {addon.turnaround}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-investment-framework">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Tailored to You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Your Investment</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Your investment is shaped by four factors:
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {investmentFactors.map((factor, i) => (
                <Card key={i} className="p-5 flex items-start gap-4" data-testid={`card-factor-${i}`}>
                  <factor.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{factor.label}</span>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-4">
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                You will receive a detailed, fixed-price proposal after your discovery session — before any commitment.
              </p>
              <p className="font-medium">
                Your engagement price is fixed at proposal. No scope creep. No surprise charges.
              </p>
            </div>
          </motion.div>
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
              Contact us for a detailed proposal tailored to your aircraft and requirements.
            </p>
            <p className="text-[#b8b0a4]/70 text-sm mt-2">
              No commitment required. 30-minute confidential call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" data-testid="button-services-cta-quote">
                  Schedule a Discovery Session
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-services-cta-process"
                >
                  See Our Process
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
