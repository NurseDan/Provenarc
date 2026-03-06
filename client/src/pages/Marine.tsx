import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Anchor, Globe, Shield, Scan, Lock, FileCheck,
  ArrowRight, CheckCircle2, ShieldCheck, DollarSign,
  Camera, BookOpen, Ship, Compass, Waves,
  Users, MapPin, Zap, ClipboardCheck,
  BarChart3, Wrench, Crown, Sparkles, Handshake,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const differentiators = [
  {
    icon: Waves,
    title: "Environmental Complexity",
    description:
      "Maritime assets face relentless saltwater corrosion, UV degradation, and mechanical stress that land-based vehicles never encounter. Our documentation protocols account for the unique deterioration patterns of marine environments, capturing conditions that standard photography cannot reveal.",
  },
  {
    icon: Compass,
    title: "International Registry Navigation",
    description:
      "We navigate the documentation requirements of seventeen flag state jurisdictions — from the Cayman Islands Maritime Authority to the Marshall Islands Registry. Each flag state demands specific documentation formats, certification standards, and regulatory compliance packages.",
  },
  {
    icon: Shield,
    title: "Survey and Insurance Integration",
    description:
      "Our deliverables are engineered to integrate seamlessly with marine survey reports, hull and machinery insurance requirements, and P&I club documentation standards. Every scan, every measurement, every archival entry meets insurance-grade verification thresholds.",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Logbook and Maintenance Record Digitization",
    platform: "VesselVault",
    description:
      "Museum-quality digitization of every maintenance log, survey report, and classification document. Professional OCR converts handwritten entries into fully searchable digital records. Hosted on our VesselVault platform with redundant encrypted backups and role-based access for owners, captains, and management companies.",
  },
  {
    icon: Camera,
    title: "Drone-Based Hull and Superstructure Documentation",
    platform: "No haul-out required",
    description:
      "FAA Part 107 certified drone operators capture comprehensive exterior documentation without costly haul-out. LiDAR-enhanced scanning produces millimeter-accurate 3D models of hull condition, waterline profiles, running gear, and superstructure details — from bow thruster tunnels to radar arches.",
  },
  {
    icon: Scan,
    title: "Interior and Mechanical Systems Scanning",
    platform: "3D virtual tours",
    description:
      "High-resolution interior documentation captures every cabin, salon, bridge, and engine room in precise 3D detail. Mechanical systems documentation includes main engines, generators, HVAC, watermakers, and navigation electronics — creating a complete digital twin of your vessel.",
  },
  {
    icon: FileCheck,
    title: "Museum-Grade Archival Volumes",
    platform: "Vessel name embossing",
    description:
      "Hand-crafted archival volumes featuring acid-free paper with a century-plus lifespan, Smyth-sewn binding, and custom embossing with vessel name and port of registry. Premium options include hand-tooled leather covers with gold leaf, custom title pages, and protective slipcase presentation.",
  },
  {
    icon: Ship,
    title: "Historic and Classic Vessel Preservation",
    platform: "Maritime museum standards",
    description:
      "Specialized documentation protocols for classic yachts, historic workboats, and museum vessels. Our archival process preserves original construction details, restoration documentation, and provenance records that establish historical significance and protect legacy value.",
  },
  {
    icon: Anchor,
    title: "Maritime Drone Technology",
    platform: "FAA Part 107 certified",
    description:
      "Purpose-built drone systems for maritime documentation: hull condition assessment without haul-out, superstructure and rigging detail capture, mast-top inspection, and waterline profiling. 20+ megapixel imaging with mechanical shutters, LiDAR dimensional accuracy, and GPS-inertial positioning.",
  },
];

const tiers = [
  {
    number: 1,
    name: "Essential Vessel Documentation",
    subtitle: "Professional Maritime Records Preservation",
    vessel: "Coastal Cruisers & Day Boats",
    timeline: "25\u201330 days",
    archival: "Optional add-on",
    features: [
      "Museum-quality digitization of all maintenance logs and survey reports",
      "Professional OCR for handwritten entries and annotations",
      "Classification society document organization",
      "VesselVault cloud hosting with encrypted backups",
      "Flag state compliance documentation package",
    ],
  },
  {
    number: 2,
    name: "Complete Vessel Documentation",
    subtitle: "Records Plus Comprehensive 3D Baseline",
    vessel: "Motor Yachts & Sailing Vessels",
    timeline: "30\u201335 days",
    archival: "Standard",
    features: [
      "Everything in Essential Vessel Documentation",
      "Drone-based hull and superstructure scanning",
      "Interior 3D documentation of all living spaces",
      "Interactive virtual tour for remote inspections",
      "Insurance-grade baseline condition report",
      "Museum-grade archival volume included",
    ],
  },
  {
    number: 3,
    name: "Premium Comprehensive",
    subtitle: "Complete Documentation Plus Mechanical Systems",
    vessel: "Performance Yachts & Trawlers",
    timeline: "35\u201340 days",
    archival: "Multi-volume sets",
    features: [
      "Everything in Complete Vessel Documentation",
      "Main engine and generator documentation",
      "Navigation, communication, and safety systems",
      "HVAC, watermaker, and auxiliary systems",
      "Regulatory submission-ready packages",
      "Comprehensive multi-volume archival sets",
    ],
  },
  {
    number: 4,
    name: "Superyacht Executive Documentation",
    subtitle: "For Large Yachts \u2014 White-Glove Service",
    vessel: "Superyachts 80ft+",
    timeline: "40\u201350 days",
    archival: "Hand-crafted with vessel name embossing",
    features: [
      "Senior technician teams for multi-week engagements",
      "Coordination with captain, crew, and management company",
      "Custom presentation deliverables for ownership review",
      "Hand-crafted archival volumes with vessel name embossing",
      "Lifetime platinum VesselVault hosting",
      "Insurance and classification integration package",
    ],
  },
  {
    number: 5,
    name: "Flagship Heritage Preservation",
    subtitle: "The Definitive Maritime Heritage Archive",
    vessel: "Megayachts & Historic Vessels",
    timeline: "Custom timeline",
    archival: "Hand-tooled leather with gold leaf",
    features: [
      "Multi-week engagements capturing complete vessel history",
      "Archival research with shipyards, prior owners, and registries",
      "Custom ownership transition and provenance packages",
      "Multi-volume sets with hand-tooled leather and gold leaf",
      "In-person executive presentation delivery",
      "10-year platinum VesselVault with concierge support",
    ],
  },
];

const additionalServices = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "48\u201372 hour worldwide emergency mobilization for insurance events, pre-sale deadlines, regulatory inspections, or any time-sensitive maritime need.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Claims",
    description:
      "Pre-incident baseline capture and before/after/restored comparison packages for marine insurers, P&I clubs, and hull & machinery claims.",
  },
  {
    icon: BarChart3,
    title: "Pre-Sale Support",
    description:
      "Expedited documentation packages that accelerate vessel transactions, giving buyers and surveyors immediate confidence in vessel condition and history.",
  },
  {
    icon: ClipboardCheck,
    title: "Maritime Regulatory",
    description:
      "On-demand documentation for USCG, IMO, classification society, and flag state requirements — any regulatory or survey need, worldwide.",
  },
  {
    icon: Wrench,
    title: "Document Restoration",
    description:
      "Professional conservation of water-damaged logs, faded entries, mold remediation, and ink recovery for saltwater-exposed maritime records.",
  },
];

const globalRegions = [
  { region: "Mediterranean", detail: "France, Italy, Greece, Croatia, Turkey, Spain" },
  { region: "Caribbean", detail: "BVI, USVI, Bahamas, St. Martin, Antigua" },
  { region: "Pacific Northwest", detail: "Seattle, Vancouver, Alaska Inside Passage" },
  { region: "Asian Waters", detail: "Hong Kong, Singapore, Thailand, Japan" },
];

const testimonialFramework = [
  {
    role: "Superyacht Owner",
    vessel: "52m Motor Yacht",
    quote:
      "The archival volumes Provenarc produced for our vessel are extraordinary — museum-quality preservation that captures thirty years of maritime history in permanent form.",
    context: "Mediterranean-based, multi-flag jurisdiction documentation",
  },
  {
    role: "Yacht Broker",
    vessel: "International Brokerage",
    quote:
      "Having Provenarc documentation in our listing packages has transformed our pre-sale preparation. Buyers see the quality immediately, and it accelerates every transaction.",
    context: "High-volume brokerage partnership, 40-90 day timeline reduction",
  },
  {
    role: "Classic Vessel Owner",
    vessel: "1962 Restored Motor Yacht",
    quote:
      "Our vessel has been in the family for three generations. Provenarc preserved not just the maintenance records but the entire heritage — original build specifications, restoration documentation, and provenance chain.",
    context: "Historic vessel with multi-generational ownership history",
  },
];

export default function Marine() {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1219] via-[#111a22] to-[#15202b]" />
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
            Provenarc Marine
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#faf6f1] leading-[1.1] tracking-tight"
            data-testid="text-marine-headline"
          >
            Preserving Maritime Heritage
            <br className="hidden sm:block" />
            {" "}Worldwide, with Three Decades of Precision
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="text-[#c9a96e]/80 font-serif text-lg sm:text-xl mt-6 italic"
          >
            From coastal cruisers to megayachts — global vessel documentation that transcends regulatory compliance
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[#b8b0a4] text-base sm:text-lg mt-8 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-marine-subheadline"
          >
            Provenarc Marine brings three decades of maritime expertise to vessel documentation —
            anywhere in the world. Our globally deployed teams understand that maritime assets face unique
            environmental challenges — corrosive saltwater exposure, complex flag state jurisdictions, and
            classification society requirements that demand meticulous documentation. From the Mediterranean
            to the Caribbean, Asia-Pacific to Northern Europe, we go beyond regulatory compliance to create
            permanent preservation archives that protect your vessel's heritage and enhance its market position
            through proprietary drone scanning, LiDAR-enhanced 3D modeling, and museum-grade archival volumes.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Link href="/contact">
              <Button size="lg" data-testid="button-marine-discovery">
                Schedule a Vessel Consultation
              </Button>
            </Link>
            <Link href="/marine/process">
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                data-testid="button-marine-process"
              >
                See Our Process <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-[#b8b0a4]/60 text-sm mt-6"
            data-testid="text-marine-reassurance"
          >
            No commitment required. 30-minute confidential call.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24" data-testid="section-maritime-heritage">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Maritime Heritage
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Born from the Sea, Built for Permanence
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              Our maritime documentation practice draws from decades of experience in marine surveying,
              yacht operations, and maritime documentation compliance. We understand the unique challenges
              that separate vessel documentation from any other asset class — the relentless assault of
              saltwater corrosion, the complexity of multi-flag jurisdiction compliance, and the
              irreplaceable nature of classic vessel restoration records.
            </p>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
              Every vessel tells a story of engineering ambition, careful stewardship, and maritime
              tradition. Whether preserving the provenance of a classic wooden yacht or creating a
              comprehensive digital twin of a modern superyacht, our proprietary process captures
              details that standard marine surveys never document.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-differentiators">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              What Sets Us Apart
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Maritime Documentation Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-8 h-full" data-testid={`card-differentiator-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-marine-services">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Comprehensive Maritime Documentation
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Six core service categories engineered for the unique demands of maritime assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="p-8 h-full" data-testid={`card-service-${i}`}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg mb-1">{service.title}</h3>
                      <p className="text-xs text-primary/70 font-mono tracking-wider mb-3">
                        {service.platform}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-marine-tiers">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Service Tiers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Five Tiers of Maritime Documentation
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              From coastal cruisers to megayachts, each tier delivers museum-grade preservation
              tailored to your vessel's complexity.
            </p>
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
                  <p className="text-sm text-muted-foreground mt-1">{tier.vessel}</p>
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
                    <Button variant="outline" className="w-full" data-testid={`button-marine-tier-${tier.number}`}>
                      Discuss Your Vessel
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
                  <p className="text-sm text-muted-foreground mt-1">{tier.vessel}</p>
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
                    <Button className="w-full" data-testid={`button-marine-tier-${tier.number}`}>
                      Discuss Your Vessel
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-investment">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Investment Framework
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Fixed-Price Proposal After Discovery Session
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Every vessel is unique, and your investment reflects the specific scope of documentation
              required. After a confidential discovery session, we provide a comprehensive fixed-price
              proposal — no scope creep, no surprise charges, no hourly billing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-additional-services">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Beyond the Standard
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Additional Services
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Specialized capabilities for every maritime scenario — from emergency mobilization to archival restoration, available worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="p-8 h-full" data-testid={`card-addon-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/marine/services">
              <Button variant="outline" data-testid="button-view-all-marine-services">
                View All Marine Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-fleet-services">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <Card className="p-10 md:p-14" data-testid="card-fleet-services">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Ship className="h-6 w-6 text-primary" />
                </div>
                <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
                  Fleet Programs
                </p>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
                  Multi-Vessel Fleet Documentation
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                  Purpose-built documentation programs for yacht management companies, charter fleets,
                  and commercial operators managing multiple vessels worldwide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
                  {[
                    "Volume discount rates for fleet operators",
                    "Scheduled annual documentation cycles",
                    "Dedicated fleet account manager",
                    "Consistent standards across entire fleets",
                    "Global deployment to any port or marina",
                    "Priority scheduling for fleet engagements",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button size="lg" data-testid="button-fleet-pricing">
                    Contact Us for Fleet Pricing
                  </Button>
                </Link>
                <p className="text-muted-foreground/60 text-xs mt-4">
                  Custom pricing for 3+ vessels. Dedicated account team assigned.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24" data-testid="section-bespoke">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1219] via-[#111a22] to-[#15202b]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center">
            <div className="w-14 h-14 rounded-full bg-[#c9a96e]/15 flex items-center justify-center mx-auto mb-6">
              <Crown className="h-6 w-6 text-[#c9a96e]" />
            </div>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-4">
              By Invitation or Inquiry
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#faf6f1] leading-tight mb-4">
              Bespoke Maritime Services
            </h2>
            <p className="text-[#c9a96e]/80 font-serif text-lg italic mb-6">
              For the most discerning vessel owners
            </p>
            <p className="text-[#b8b0a4] text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              A fully custom engagement with no predefined scope — every element tailored to the exact
              requirements of megayacht owners, historic vessel collectors, and royal or state fleets.
              Personal project director, unlimited revisions, custom archival formats, private presentation
              delivery, and worldwide availability on any timeline.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              {[
                { icon: Sparkles, label: "Unlimited Scope", detail: "Every detail tailored to your vision" },
                { icon: Globe, label: "Worldwide", detail: "Any port, any marina, any timeline" },
                { icon: Users, label: "Personal Director", detail: "Dedicated project director assigned" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c9a96e]/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-4 w-4 text-[#c9a96e]" />
                  </div>
                  <p className="text-sm font-medium text-[#faf6f1] mb-1">{item.label}</p>
                  <p className="text-xs text-[#b8b0a4]/70">{item.detail}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <Button size="lg" data-testid="button-bespoke-inquiry">
                Contact Us to Discuss
              </Button>
            </Link>
            <p className="text-[#b8b0a4]/60 text-sm mt-4">
              No commitment required. Completely confidential consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-for-partners">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <Card className="p-10 md:p-14" data-testid="card-for-partners">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
                  For Maritime Professionals
                </p>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
                  Partnership Programs
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                  Yacht brokers, management companies, marine insurers, and P&I clubs — explore
                  partnership models designed to enhance your client offerings and accelerate transactions.
                </p>
                <Link href="/marine/partners">
                  <Button size="lg" data-testid="button-marine-partners-cta">
                    Explore Marine Partnerships <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-global-maritime">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Global Maritime Reach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Six Continents. Seventeen Flag Jurisdictions. One Standard.
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Wherever your vessel is berthed — Mediterranean superyacht marina, Caribbean anchorage,
              Asian shipyard, or remote Pacific atoll — we deploy the same white-glove service,
              professional equipment, and meticulous documentation standards worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalRegions.map((item, i) => (
              <motion.div
                key={item.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-region-${i}`}>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-sm mb-1">{item.region}</h3>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-testimonials">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Client Perspectives
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              What Vessel Owners and Brokers Say
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
                <Card className="p-8 h-full flex flex-col" data-testid={`card-testimonial-${i}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-sm font-medium">{testimonial.role}</p>
                    <p className="text-xs text-primary/70">{testimonial.vessel}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.context}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-confidentiality">
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
              Every Provenarc Marine engagement operates under a comprehensive mutual non-disclosure
              agreement. We do not publish client lists, display vessel details, or share engagement
              specifics — ever. This is not a gap in our marketing. It is a commitment our clients
              require and a standard we uphold for every engagement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-marine-explore">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Explore Further
            </p>
            <h2 className="font-serif text-2xl md:text-3xl">Learn More About Provenarc Marine</h2>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/marine/why-us">
              <Card className="p-6 cursor-pointer hover-elevate" data-testid="link-marine-why-us">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg mb-1">Why Provenarc Marine</h3>
                    <p className="text-sm text-muted-foreground">What sets us apart — underwater scanning, zero shipping risk, and more.</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 ml-4" />
                </div>
              </Card>
            </Link>
            <Link href="/marine/process">
              <Card className="p-6 cursor-pointer hover-elevate" data-testid="link-marine-process">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg mb-1">Our Process</h3>
                    <p className="text-sm text-muted-foreground">Ten-step workflow from consultation to delivery, including underwater protocol.</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 ml-4" />
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24" data-testid="section-marine-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1219] via-[#111a22] to-[#15202b]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Next Step
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#faf6f1] leading-tight">
              Schedule Your Vessel Documentation Consultation
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Every engagement begins with a confidential discovery session. We will assess your
              vessel's documentation needs and provide a comprehensive fixed-price proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" data-testid="button-marine-cta-consultation">
                  Schedule a Discovery Session
                </Button>
              </Link>
              <Link href="/marine/partners">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-marine-cta-broker"
                >
                  Marine Partnerships <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p
              className="text-[#b8b0a4]/60 text-sm mt-6 max-w-lg mx-auto"
              data-testid="text-marine-cta-reassurance"
            >
              No commitment required. 30-minute confidential call. We will prepare a preliminary scope assessment regardless.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
