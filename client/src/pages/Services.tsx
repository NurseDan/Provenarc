import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Plane, Clock, MapPin, FileText } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const tiers = [
  {
    number: 1,
    name: "Essential Documentation",
    subtitle: "Records Digitization Only",
    aircraft: "Piston Aircraft",
    description:
      "Professional on-site digitization of all aircraft logbooks and maintenance records. Our technician travels to your location with portable scanning equipment, digitizes every page on-site, and returns your originals before departing. Zero shipping risk.",
    turnaround: "10\u201315 business days",
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
    subtitle: "Records + Exterior & Interior 3D Scanning",
    aircraft: "Turboprop Aircraft",
    description:
      "Everything in Tier 1, plus comprehensive 3D scanning of your aircraft\u2019s exterior and interior. Creates baseline condition documentation for insurance claims, enables remote buyer inspections, and preserves your aircraft\u2019s physical state digitally.",
    turnaround: "15\u201320 business days",
    scope: [
      "Everything in Tier 1",
      "Full exterior 3D scan (fuselage, wings, empennage, landing gear)",
      "Complete interior 3D scan (cabin, cockpit, cargo areas)",
      "Baseline condition documentation",
      "3D model viewer access",
      "Insurance-grade documentation package",
    ],
  },
  {
    number: 3,
    name: "Premium Comprehensive",
    subtitle: "Complete Documentation + Mechanical 3D Scanning",
    aircraft: "Light Jets",
    description:
      "Our most comprehensive standard package. Includes everything in Tier 2, plus detailed 3D scanning of mechanical systems including engine components, critical systems, and modifications. Ideal for pre-sale documentation and insurance baseline.",
    turnaround: "20\u201325 business days",
    scope: [
      "Everything in Tier 2",
      "Mechanical systems 3D scanning (engine, critical components)",
      "Modification verification documentation",
      "STC/337 compliance visual verification",
      "Advanced damage assessment capabilities",
      "Premium deliverable package",
    ],
  },
  {
    number: 4,
    name: "Executive Documentation Package",
    subtitle: "For Large Cabin Jets",
    aircraft: "G550, Global 6000, Large Cabin Jets",
    description:
      "Ultra-premium service with a senior two-person technician team, extended on-site presence, and executive-grade deliverables. Designed for large cabin jets where comprehensive documentation directly protects significant investments.",
    turnaround: "25\u201330 business days",
    scope: [
      "Complete records digitization (all logbooks, all maintenance records)",
      "Full exterior 3D scanning (aircraft + engines)",
      "Complete interior 3D scanning (all zones, galleys, lavatories, cargo)",
      "Mechanical systems 3D scanning (APU, landing gear, major components)",
      "Custom executive presentation deliverable",
      "Lifetime RecordVault hosting with priority support",
      "Insurance-grade certification letter",
    ],
  },
  {
    number: 5,
    name: "Flagship Comprehensive",
    subtitle: "For Ultra-Premium Jets",
    aircraft: "G650, Global 7500, BBJ",
    description:
      "The pinnacle of aircraft documentation. Multi-day concierge service for the world\u2019s finest jets, including historical research, ownership transition support, concierge coordination, and in-person executive presentation delivery.",
    turnaround: "30\u201340 business days",
    scope: [
      "Everything in Tier 4",
      "Multi-day on-site service (aircraft availability flexibility)",
      "Complete systems documentation (avionics, interior details, custom features)",
      "Historical documentation research (prior owners, major events)",
      "Custom ownership transition package",
      "Concierge coordination with maintenance shops, brokers, insurers",
      "Executive presentation in-person delivery",
      "10-year RecordVault platinum hosting",
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
      "Priority scheduling for aviation sales professionals with transaction deadlines. Same quality standards, compressed timeline through dedicated resources.",
    turnaround: "50\u201367% faster turnaround",
  },
];

const investmentFactors = [
  { icon: Plane, label: "Aircraft type and documentation volume" },
  { icon: MapPin, label: "Number of scan locations" },
  { icon: Clock, label: "Timeline requirements" },
  { icon: FileText, label: "Deliverable specifications" },
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
              From piston aircraft to ultra-premium jets, we offer five tiers of documentation
              service&mdash;all delivered on-site at your aircraft&rsquo;s location, anywhere in the world.
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
                <p className="text-muted-foreground mt-1">{tier.subtitle}</p>
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
                <p className="text-sm text-muted-foreground mt-3">
                  Turnaround: {tier.turnaround}
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
                You'll receive a detailed, fixed-price proposal after your discovery session &mdash; before any commitment.
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
              Ready to Preserve Your Aircraft?
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
