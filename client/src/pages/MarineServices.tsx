import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Anchor, Clock, MapPin, FileText, BookOpen, Award, Ship, Waves } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const tiers = [
  {
    number: 1,
    name: "Essential Vessel Documentation",
    subtitle: "Professional Maritime Records Preservation",
    vessel: "Coastal Cruisers & Day Boats",
    description:
      "Your vessel's history begins with its records. Our Essential service provides museum-quality digitization of every maintenance log, survey report, and classification document. Professional OCR converts handwritten entries into fully searchable digital records. Metadata tagging enables instant retrieval by date, system, or maintenance type. Deliverables include permanent cloud hosting through our VesselVault platform, complete with redundant backup systems and unlimited access.",
    turnaround: "25–30 days",
    archival: "Optional museum-grade archival volumes",
    bestFor: "Owners focused on compliance, survey preparation, and insurance requirements",
    scope: [
      "Complete maintenance log and survey report scanning",
      "Classification society document organization",
      "High-resolution OCR and metadata tagging",
      "Cloud hosting via VesselVault platform",
      "Flag state compliance documentation package",
    ],
  },
  {
    number: 2,
    name: "Complete Vessel Documentation",
    subtitle: "Records Plus Comprehensive 3D Baseline",
    vessel: "Motor Yachts & Sailing Vessels",
    description:
      "Complete Vessel Documentation integrates records preservation with dimensional capture of your vessel itself. Drone-based hull and superstructure scanning documents every surface without costly haul-out. Interior scanning preserves cabin configuration, bridge systems, and engine room layouts with millimeter precision. This service creates comprehensive baseline evidence for marine insurers, establishes pre-sale condition documentation for buyer confidence, and enables remote virtual inspections that accelerate transaction timelines.",
    turnaround: "30–35 days",
    archival: "Museum-grade archival volume standard",
    bestFor: "Owners seeking insurance baseline, pre-sale documentation, and remote inspection capability",
    scope: [
      "Everything in Essential Vessel Documentation",
      "Drone-based hull and superstructure 3D scan",
      "Complete interior 3D scan (cabins, salon, bridge, engine room)",
      "Interactive virtual tour and 3D model viewer access",
      "Insurance-grade baseline documentation package",
      "Museum-grade archival volume included",
    ],
  },
  {
    number: 3,
    name: "Premium Comprehensive",
    subtitle: "Complete Documentation Plus Mechanical Systems Baseline",
    vessel: "Performance Yachts & Trawlers",
    description:
      "Premium Comprehensive extends documentation into critical mechanical systems. Main engines, generators, navigation electronics, and auxiliary systems receive the same meticulous attention as hull surfaces and interior spaces. Clients pursuing this tier typically face specific classification requirements, marine insurance mandates, or transaction due diligence demands that exceed standard documentation scope. Management companies use mechanical baseline scans to track system condition evolution across maintenance cycles.",
    turnaround: "35–40 days",
    archival: "Comprehensive multi-volume archival sets",
    bestFor: "Management companies, regulatory compliance, major refit documentation",
    scope: [
      "Everything in Complete Vessel Documentation",
      "Main engine and generator 3D documentation",
      "Navigation, communication, and safety systems",
      "HVAC, watermaker, and auxiliary systems scanning",
      "Regulatory submission-ready documentation packages",
      "Premium multi-volume archival sets",
    ],
  },
  {
    number: 4,
    name: "Superyacht Executive Documentation",
    subtitle: "For Large Yachts — White-Glove Service with Comprehensive Preservation",
    vessel: "Superyachts 80ft+",
    description:
      "Superyacht Executive Documentation represents our complete preservation capability applied to high-value vessels where documentation quality directly impacts transaction outcomes and insurance positioning. This service tier deploys senior technician teams for multi-week on-site engagements, capturing every aspect of your vessel with forensic thoroughness. Beyond technical documentation, Executive service includes concierge coordination with captains, crew, management companies, and classification societies.",
    turnaround: "40–50 days",
    archival: "Hand-crafted archival volumes with vessel name embossing",
    bestFor: "Superyacht owners, management companies, pre-sale preparation",
    scope: [
      "Complete records digitization (all logs, surveys, classification docs)",
      "Full hull, superstructure, and interior 3D scanning",
      "Mechanical systems 3D scanning (engines, generators, major components)",
      "Custom presentation deliverables for ownership review",
      "Coordination with captain, crew, and management company",
      "Lifetime platinum VesselVault hosting with priority support",
      "Hand-crafted archival volumes with vessel name embossing",
    ],
  },
  {
    number: 5,
    name: "Flagship Heritage Preservation",
    subtitle: "For Megayachts & Historic Vessels — The Definitive Maritime Heritage Archive",
    vessel: "Megayachts & Historic Vessels",
    description:
      "Flagship Heritage Preservation is reserved for the world's finest vessels and the owners who demand documentation that reflects their investment. Multi-week engagements capture not only current condition but historical evolution through archival research with shipyards, prior owners, and maritime registries. The resulting documentation becomes the definitive record of your vessel's complete provenance. This service tier includes elements unavailable at any other level: historical documentation research, custom ownership transition packages, and in-person executive presentation delivery.",
    turnaround: "Custom timeline",
    archival: "Multi-volume sets with hand-tooled leather and gold leaf embossing",
    bestFor: "Megayacht owners, historic vessel preservation, ownership transitions",
    scope: [
      "Everything in Superyacht Executive Documentation",
      "Multi-week on-site service with vessel availability flexibility",
      "Historical documentation research (shipyards, prior owners, registries)",
      "Custom ownership transition and provenance package",
      "In-person executive presentation delivery at your chosen location",
      "Multi-volume archival sets with hand-tooled leather and gold leaf",
      "10-year platinum VesselVault hosting with dedicated concierge support",
    ],
  },
];

const addOns = [
  {
    name: "Ownership Transition Package",
    description:
      "Historical records research, prior owner and shipyard contact, gap analysis, pre-sale documentation audit, and buyer presentation package tailored for maritime transactions.",
    turnaround: "+10–15 business days",
  },
  {
    name: "Annual Condition Update",
    description:
      "Annual 3D condition baseline scan, records update, survey compliance verification, and insurance renewal documentation. Tracks condition evolution across seasons.",
    turnaround: "25–30 business days per visit",
  },
  {
    name: "Post-Incident Documentation",
    description:
      "Emergency 48–72 hour deployment, complete damage documentation via 3D scanning, pre/post comparison analysis for hull and systems, and marine insurance claim support package.",
    turnaround: "15–20 business days",
  },
  {
    name: "Expedited Service",
    description:
      "Priority scheduling for yacht brokers and management companies with transaction deadlines. Quality standards remain identical — we compress timelines through resource intensity, not by skipping steps.",
    turnaround: "50–67% turnaround reduction",
  },
];

const investmentFactors = [
  { icon: Ship, label: "Vessel type, size, and documentation volume" },
  { icon: MapPin, label: "Number of scan locations and marina coordination" },
  { icon: Clock, label: "Timeline requirements and seasonal considerations" },
  { icon: FileText, label: "Deliverable specifications and flag state requirements" },
];

const archivalSpecs = [
  "Archival-grade acid-free paper (100+ year lifespan)",
  "600 DPI full-color printing",
  "Smyth-sewn binding (pages never fall out)",
  "Hardcover with leather or linen finish",
  "Custom embossing (vessel name & port of registry)",
  "Protective slipcase",
  "Certificate of authenticity",
];

const archivalPremium = [
  "Hand-tooled leather with gold leaf embossing",
  "Custom interior title pages with vessel photography",
  "Multi-volume sets for complex documentation",
  "Climate-controlled archival storage boxes",
  "Additional copies for stakeholders (insurance, buyer, management)",
];

export default function MarineServices() {
  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1219] via-[#111a22] to-[#15202b]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Marine Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              Complete Vessel Documentation & Preservation
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Five tiers of meticulous maritime documentation excellence, each featuring museum-grade archival
              volumes, drone-based 3D scanning, and lifetime cloud hosting. Delivered dockside at your
              vessel's location, anywhere in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {tiers.map((tier, index) => (
        <section
          key={tier.number}
          className={`py-20 ${index % 2 !== 0 ? "bg-card/50" : ""}`}
          data-testid={`section-marine-tier-${tier.number}`}
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
                <p className="text-sm font-medium mb-1" data-testid={`text-vessel-tier-${tier.number}`}>
                  Best for: {tier.vessel}
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
                  <Button className="w-full mt-6" data-testid={`button-marine-quote-tier-${tier.number}`}>
                    Discuss Your Vessel <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-24" data-testid="section-marine-archival-volumes">
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
                documents designed to survive generations aboard or ashore.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each volume is custom-bound using archival-grade materials that meet museum preservation
                standards. Acid-free paper ensures documents will not yellow or degrade over decades.
                Full-color printing reproduces original logbook entries, survey stamps, and handwritten
                notes with perfect fidelity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For pre-sale presentations, they demonstrate meticulous stewardship. For management companies,
                physical reference independent of technology. For family legacy, beautiful maritime artifacts.
                Some clients commission multiple copies — one operational, one for insurance, one for the
                owner's library.
              </p>
              <Card className="p-4 bg-primary/5 border-primary/10">
                <p className="text-sm text-primary font-medium">
                  Standard in Tier 4 & 5 service packages. Optional add-on for Tiers 1–3.
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  These volumes become part of your vessel's permanent provenance.
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
              Enhance any service tier with specialized maritime documentation packages.
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
                <Card className="p-6 h-full" data-testid={`card-marine-addon-${i}`}>
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

      <section className="py-24" data-testid="section-marine-investment-framework">
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
                <Card key={i} className="p-5 flex items-start gap-4" data-testid={`card-marine-factor-${i}`}>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1219] via-[#111a22] to-[#15202b]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf6f1]">
              Ready to Preserve Your Vessel's Heritage?
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Contact us for a detailed proposal tailored to your vessel and requirements.
            </p>
            <p className="text-[#b8b0a4]/70 text-sm mt-2">
              No commitment required. 30-minute confidential call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" data-testid="button-marine-services-cta-quote">
                  Schedule a Discovery Session
                </Button>
              </Link>
              <Link href="/marine/process">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-marine-services-cta-process"
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
