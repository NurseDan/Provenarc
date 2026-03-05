import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Car, ArrowRight, CheckCircle2, Shield, Lock,
  Award, Camera, BookOpen, Globe, FileCheck,
  Scan, Search, Wrench, Trophy, DollarSign,
  Users, TrendingUp, Clock, Star,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const differentiators = [
  {
    icon: Search,
    title: "Provenance Authentication",
    description:
      "Verified provenance documentation can increase a collector vehicle's value by 30\u201350%. Our forensic-level research traces ownership chains, service histories, and competition records to establish irrefutable authenticity.",
  },
  {
    icon: Trophy,
    title: "Restoration Documentation Standards",
    description:
      "Concours-level documentation captures every stage of restoration with museum-grade precision. From bare-metal photography to final assembly, every bolt turn is recorded for judging panels and future owners.",
  },
  {
    icon: Shield,
    title: "Matching Numbers Verification",
    description:
      "Matching-numbers verification can represent seven-figure premiums on significant marques. Our process documents engine stamps, chassis plates, body tags, and component date codes with forensic accuracy.",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Build Sheet and Service Record Digitization",
    platform: "VaultClassic",
    description:
      "Museum-quality digitization of every build sheet, service record, and ownership document. Professional OCR makes handwritten entries fully searchable. VaultClassic cloud platform provides secure lifetime hosting with redundant backups and instant retrieval.",
  },
  {
    icon: Camera,
    title: "Drone-Based Exterior and Chassis Documentation",
    description:
      "Advanced drone technology captures body panel gaps at sub-millimeter precision, suspension geometry, undercarriage condition, and exterior finish quality from angles impossible with traditional photography. Ideal for pre-purchase verification and concours preparation.",
  },
  {
    icon: Scan,
    title: "Interior and Mechanical Systems Scanning",
    description:
      "High-resolution 3D scanning of interior appointments, dashboard instrumentation, engine compartments, and mechanical assemblies. Creates interactive digital models for remote inspection, insurance documentation, and restoration reference.",
  },
  {
    icon: Award,
    title: "Museum-Grade Archival Volumes",
    description:
      "Heirloom-quality physical archives featuring acid-free paper with a century-plus lifespan, Smyth-sewn binding, and hardcover presentation. Premium options include marque emblem embossing, VIN stamping, hand-tooled leather with gold leaf, and protective slipcases.",
  },
  {
    icon: Trophy,
    title: "Concours d'Elegance and Show Documentation",
    description:
      "Comprehensive documentation packages designed for Pebble Beach, Amelia Island, Goodwood, and premier concours events worldwide. Captures restoration narratives, provenance chains, and presentation-quality imagery that satisfies the most demanding judging panels.",
  },
  {
    icon: FileCheck,
    title: "Historic Racing and Competition Documentation",
    description:
      "Period photography authentication, race entry verification, competition history compilation, and FIA/FIVA documentation support. Traces competition provenance through archival research with racing organizations, prior owners, and period publications.",
  },
];

const tiers = [
  {
    number: 1,
    name: "Essential Vehicle Documentation",
    subtitle: "Professional Records Preservation",
    vehicle: "Collector Vehicles",
    timeline: "20\u201325 days",
    archival: "Optional add-on",
    features: [
      "Museum-quality digitization of build sheets and service records",
      "Professional OCR for handwritten entries",
      "Metadata tagging for instant retrieval",
      "VaultClassic cloud hosting with redundant backups",
      "Provenance chain documentation",
    ],
  },
  {
    number: 2,
    name: "Complete Vehicle Documentation",
    subtitle: "Records Plus Comprehensive 3D Baseline",
    vehicle: "Premium Collectors",
    timeline: "25\u201330 days",
    archival: "Standard",
    features: [
      "Everything in Essential Vehicle Documentation",
      "Drone-based exterior documentation from optimal angles",
      "Interior scanning at millimeter precision",
      "Interactive 3D models for remote inspection",
      "Insurance-grade baseline condition documentation",
      "Museum-grade archival volume included",
    ],
  },
  {
    number: 3,
    name: "Premium Comprehensive",
    subtitle: "Complete Documentation Plus Mechanical Systems",
    vehicle: "Significant Marques",
    timeline: "30\u201335 days",
    archival: "Multi-volume sets",
    features: [
      "Everything in Complete Vehicle Documentation",
      "Engine and drivetrain component documentation",
      "Matching numbers verification and recording",
      "Suspension geometry and chassis documentation",
      "Restoration-stage photography compilation",
      "Comprehensive multi-volume archival sets",
    ],
  },
  {
    number: 4,
    name: "Concours Executive Documentation",
    subtitle: "For Concours-Level Vehicles \u2014 White-Glove Delivery",
    vehicle: "Concours Entrants",
    timeline: "35\u201345 days",
    archival: "Hand-crafted with marque embossing",
    features: [
      "Senior technician teams for multi-day engagements",
      "Concours judging documentation packages",
      "Custom presentation deliverables for show panels",
      "Hand-crafted archival volumes with marque emblems",
      "Lifetime platinum VaultClassic hosting",
      "Provenance authentication certificate",
    ],
  },
  {
    number: 5,
    name: "Heritage Collection Documentation",
    subtitle: "The Definitive Automotive Heritage Archive",
    vehicle: "Museum-Quality Collections",
    timeline: "Custom timeline",
    archival: "Hand-tooled leather with gold leaf",
    features: [
      "Multi-vehicle collection documentation",
      "Historical research with prior owners and marque registries",
      "Competition history compilation and authentication",
      "Multi-volume sets with hand-tooled leather and gold leaf",
      "In-person executive presentation delivery",
      "10-year platinum VaultClassic with concierge support",
    ],
  },
];

const brokerModels = [
  {
    icon: Users,
    title: "Referral Partnership",
    description:
      "Refer your clients to Provenarc and earn referral fees on every completed engagement. We handle everything \u2014 consultation, documentation, delivery. You maintain the client relationship while we provide the expertise.",
    features: [
      "Percentage of base engagement fees",
      "No involvement required beyond introduction",
      "Client receives full white-glove experience",
      "Quarterly performance reporting",
    ],
  },
  {
    icon: Star,
    title: "White-Label Partnership",
    description:
      "Documentation delivered under your brand. Our expertise, equipment, and execution \u2014 your name on every deliverable. Ideal for dealerships and auction houses seeking comprehensive documentation capabilities.",
    features: [
      "Your branding on all deliverables",
      "Revenue sharing model",
      "Dedicated account management",
      "Scalable to collection-level engagements",
    ],
  },
  {
    icon: Award,
    title: "Co-Branded Premium Package",
    description:
      "Both brands featured on museum-grade archival volumes and digital deliverables. Elevates both reputations while providing the collector with the most comprehensive documentation available.",
    features: [
      "Dual branding on archival volumes",
      "Joint marketing opportunities",
      "Shared client testimonial framework",
      "Premium positioning for both parties",
    ],
  },
];

const testimonialFramework = [
  {
    role: "Collector Owner",
    context: "Ferrari 250 GTE Documentation",
    quote:
      "The provenance documentation Provenarc compiled for my 250 GTE uncovered service records I didn't know existed. The archival volumes are extraordinary \u2014 they belong in a museum alongside the car itself.",
  },
  {
    role: "Dealer Principal",
    context: "Pre-Sale Documentation Program",
    quote:
      "Since implementing Provenarc documentation as standard for our consignment vehicles, we've seen measurable increases in buyer confidence and faster transaction timelines. The ROI is undeniable.",
  },
  {
    role: "Concours Participant",
    context: "Pebble Beach Concours d'Elegance",
    quote:
      "The documentation package Provenarc prepared for my Pebble Beach entry was meticulous beyond anything I've experienced. The judging panel specifically commented on the quality of the provenance presentation.",
  },
];

export default function AutosClassics() {
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
            Provenarc Autos &amp; Classics
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#faf6f1] leading-[1.1] tracking-tight"
            data-testid="text-autos-headline"
          >
            Where Automotive Heritage
            <br className="hidden sm:block" />
            {" "}Meets Museum-Grade Preservation
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="text-[#c9a96e]/80 font-serif text-lg sm:text-xl mt-6 italic"
          >
            From pre-war classics to modern supercars — concours preparation to racing heritage authentication
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[#b8b0a4] text-base sm:text-lg mt-8 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-autos-subheadline"
          >
            Provenarc Autos &amp; Classics brings three decades of documentation expertise to the world of
            collector vehicles. From matching-numbers verification that protects seven-figure investments to
            concours preparation packages that satisfy the most demanding judging panels, we understand that
            every collector vehicle represents not just financial value but cultural heritage. Our proprietary
            process combines forensic-level provenance research, advanced drone and 3D scanning technology,
            and museum-grade archival materials to create documentation worthy of the vehicles themselves.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Link href="/contact">
              <Button size="lg" data-testid="button-autos-discovery">
                Schedule a Discovery Session
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                data-testid="button-autos-services"
              >
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-[#b8b0a4]/60 text-sm mt-6"
          >
            No commitment required. 30-minute confidential consultation.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24" data-testid="section-automotive-heritage">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Automotive Heritage
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Three Decades of Collector Vehicle Expertise
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              Our team brings deep experience in automotive restoration, collector appraisal, and historic
              racing documentation. We understand the significance of matching numbers, the demands of
              concours judging, and the complexities of provenance disputes that can make or break
              seven-figure transactions.
            </p>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
              From pre-war European grand tourers to American muscle, from racing legends to coachbuilt
              one-offs, we have documented vehicles across every category of the collector market. Our
              expertise extends beyond conventional record-keeping to forensic-level authentication that
              protects investments and preserves automotive history.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-differentiators">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              What Sets Us Apart
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Why Collectors Trust Provenarc
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, i) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-8 h-full" data-testid={`card-differentiator-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <diff.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg mb-3">{diff.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {diff.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-services">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Documentation Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Comprehensive Collector Vehicle Documentation
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
              Six specialized services designed for the unique demands of collector vehicle preservation,
              authentication, and presentation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="p-6 h-full" data-testid={`card-service-${i}`}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-medium text-base mb-2">{service.title}</h3>
                  {"platform" in service && service.platform && (
                    <p className="text-xs text-primary/60 font-mono tracking-wider mb-2">
                      Platform: {service.platform}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-service-tiers">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
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
                <Card className="p-6 h-full flex flex-col" data-testid={`card-tier-${tier.number}`}>
                  <span className="text-xs font-mono text-primary tracking-wider">
                    TIER {tier.number}
                  </span>
                  <h3 className="font-serif text-xl mt-2">{tier.name}</h3>
                  <p className="text-xs text-muted-foreground italic">{tier.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-1">{tier.vehicle}</p>
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
                <Card className="p-6 h-full flex flex-col border-primary/20" data-testid={`card-tier-${tier.number}`}>
                  <span className="text-xs font-mono text-primary tracking-wider">
                    TIER {tier.number}
                  </span>
                  <h3 className="font-serif text-xl mt-2">{tier.name}</h3>
                  <p className="text-xs text-muted-foreground italic">{tier.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-1">{tier.vehicle}</p>
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

      <section className="py-20" data-testid="section-investment">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Investment Framework
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Fixed-Price Proposal After Discovery Session
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Every engagement begins with a confidential discovery session where we assess the vehicle,
              its documentation history, and your preservation objectives. We then deliver a fixed-price
              proposal with no scope creep and no surprise charges. What we quote is what you pay.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-dealer-services">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Dealer &amp; Broker Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Partnership Programs for Automotive Professionals
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
              Three partnership models designed for dealerships, auction houses, and collector vehicle brokers
              seeking comprehensive documentation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {brokerModels.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-8 h-full" data-testid={`card-partner-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <model.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg mb-3">{model.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {model.description}
                  </p>
                  <ul className="space-y-2">
                    {model.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp}>
            <Card className="p-8 max-w-4xl mx-auto" data-testid="card-expedited">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Expedited Service for Auction Deadlines</h3>
                <p className="text-sm text-muted-foreground">
                  When auction timelines or transaction deadlines require accelerated delivery
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="font-medium text-sm mb-1">Standard Expedited</p>
                  <p className="text-2xl font-serif text-primary">50%</p>
                  <p className="text-xs text-muted-foreground">turnaround reduction</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm mb-1">Priority Expedited</p>
                  <p className="text-2xl font-serif text-primary">67%</p>
                  <p className="text-xs text-muted-foreground">maximum compression</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6 italic">
                Quality standards remain identical — we compress through resource intensity, not skipping steps.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12">
            <Card className="p-8 max-w-4xl mx-auto" data-testid="card-roi">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Return on Documentation Investment</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "10\u201325%", label: "Price Erosion Prevention" },
                  { value: "30\u201350%", label: "Provenance Value Increase" },
                  { value: "Faster", label: "Transaction Timelines" },
                  { value: "Premium", label: "Brand Elevation" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl font-serif text-primary mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-drone-technology">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Automotive Drone Technology
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Precision Documentation from Every Angle
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
              FAA Part 107 certified drone technology adapted for the unique demands of collector vehicle
              documentation — capturing details impossible with traditional photography.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Confined Space Documentation",
                description: "Engine compartments, wheel wells, and undercarriage areas captured with precision in spaces too tight for traditional equipment.",
              },
              {
                title: "Body Panel Gap Analysis",
                description: "Sub-millimeter precision measurements of panel gaps, shut lines, and alignment — critical for concours preparation and restoration verification.",
              },
              {
                title: "Chassis and Undercarriage",
                description: "Complete documentation of frame condition, suspension components, and underside details without requiring a lift or invasive access.",
              },
              {
                title: "Engine Compartment Mapping",
                description: "Detailed 3D documentation of engine bay components, wiring, and ancillary systems for matching-numbers verification and restoration reference.",
              },
            ].map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-drone-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Camera className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-2">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-global">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Global Capability
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Four Continents, Seventeen Countries
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              From Pebble Beach to Goodwood, from private collections in Monaco to restoration facilities
              in Modena — we travel to your vehicle with the same equipment, expertise, and white-glove
              service regardless of location. Your original documents never leave your custody.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-testimonials">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Client Perspectives
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialFramework.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-8 h-full" data-testid={`card-testimonial-${i}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-medium text-sm">{testimonial.role}</p>
                    <p className="text-xs text-primary/60">{testimonial.context}</p>
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
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Confidentiality
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Discretion by Design
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Every Provenarc engagement operates under a comprehensive mutual non-disclosure agreement.
              We do not publish client lists, display collection details, or share engagement specifics — ever.
              Your collection, your privacy, our commitment.
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
              Schedule Your Collector Vehicle Documentation Consultation
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Every engagement begins with a confidential discovery session where we assess your vehicle,
              its documentation history, and your preservation objectives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" data-testid="button-cta-consultation">
                  Schedule a Discovery Session
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-cta-group"
                >
                  Explore All Divisions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="text-[#b8b0a4]/60 text-sm mt-6 max-w-lg mx-auto">
              No commitment required. 30-minute confidential call. We will share a preliminary scope assessment regardless.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
