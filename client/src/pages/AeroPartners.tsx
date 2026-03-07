import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import {
  Handshake, Building2, Shield, ArrowRight,
  CheckCircle2, DollarSign, Users, Briefcase,
  TrendingUp, Award, Lock, Clock, FileCheck,
  Camera, Package, Plane, Globe, Layers,
} from "lucide-react";
import { fadeUp } from '@/lib/animations';


const partnershipModels = [
  {
    icon: Handshake,
    title: "Referral Partnership",
    description:
      "Refer your aviation clients to Provenarc Aero Solutions and receive referral fees for every completed engagement. We handle all service delivery — from on-site 3D scanning and drone documentation to museum-grade archival production. You earn compensation for introducing professional documentation services that accelerate aircraft transactions and enhance your reputation as a full-service brokerage.",
    highlights: [
      "Referral fees structured as percentage of base service fees",
      "Paid upon project completion — no overhead or equipment investment",
      "We handle all client communication and service delivery",
      "Ideal for independent aviation brokers and boutique firms",
    ],
  },
  {
    icon: Briefcase,
    title: "White-Label Partnership",
    description:
      "Offer aircraft documentation services under your brokerage brand. We provide the FAA Part 107 certified drone pilots, museum-grade scanning equipment, and expert technicians — you present deliverables to your clients as proprietary value-added services included in your representation. This model enables boutique aviation firms to compete with larger operations that maintain in-house documentation capabilities.",
    highlights: [
      "All documentation delivered under your aviation brand",
      "Revenue sharing provisions included in partnership agreement",
      "Marketing support materials with your branding",
      "Compete with larger firms without building internal capability",
    ],
  },
  {
    icon: Award,
    title: "Co-Branded Premium Package",
    description:
      "Market comprehensive aircraft documentation as a premium listing enhancement. Provenarc Aero Solutions and your brokerage appear as co-providers on all deliverables and marketing materials. This approach differentiates high-value aircraft listings, justifies premium representation fees, and creates a memorable impression with prospective buyers evaluating multiple aircraft.",
    highlights: [
      "Both brands on deliverables, marketing materials, and archival volumes",
      "Museum-grade archival volumes with custom covers featuring both brands",
      "Differentiates high-value aircraft listings in competitive markets",
      "Supports premium commission structures for top-tier aircraft",
    ],
  },
];

const brokerDeliverables = [
  {
    icon: FileCheck,
    title: "Transaction-Ready Documentation",
    description:
      "Pre-formatted deliverables designed for buyer due diligence teams. Includes executive summary of aircraft history, compliance status dashboard, searchable maintenance database, and highlighted items requiring buyer attention. Enables brokers to proactively address documentation questions before buyers identify them as concerns.",
  },
  {
    icon: Camera,
    title: "Aviation Marketing Asset Library",
    description:
      "High-resolution 3D renderings, virtual tour links, and presentation-ready drone footage suitable for listing materials and buyer presentations. Interactive 3D models for remote preliminary inspections. Assets that differentiate your aircraft marketing from static photography and standard walk-around videos.",
  },
  {
    icon: Package,
    title: "Pre-Buy Support Package",
    description:
      "Coordination with buyer inspection teams to provide documentation access and technical clarification. Our senior aviation technicians answer inspector questions about record organization, AD compliance status, and historical maintenance patterns. Reduces inspection friction and demonstrates seller transparency.",
  },
];

const roiMetrics = [
  {
    icon: Clock,
    title: "Transaction Velocity",
    value: "30\u201360 days",
    description: "Average timeline reduction when professional documentation is provided at listing. Fewer questions, faster due diligence, reduced negotiation friction on aircraft sales.",
  },
  {
    icon: TrendingUp,
    title: "Price Erosion Prevention",
    value: "5\u201315%",
    description: "Premium retention compared to comparable aircraft with amateur documentation. Comprehensive records demonstrate meticulous ownership and eliminate buyer uncertainty.",
  },
  {
    icon: DollarSign,
    title: "Holding Cost Savings",
    value: "Substantial",
    description: "On business jets with significant monthly ownership costs, timeline compression through professional documentation saves sellers substantial holding costs during the sales process.",
  },
  {
    icon: Award,
    title: "Brand Elevation",
    value: "Premium",
    description: "Professional documentation offering attracts high-value aircraft owners and supports premium commission structures. Sellers select representation based on perceived capability and marketing sophistication.",
  },
];

const fleetPartnerBenefits = [
  {
    icon: Layers,
    title: "Multi-Aircraft Programs",
    description: "Coordinated documentation across entire fleets — from regional charter operators to corporate flight departments managing a dozen aircraft.",
  },
  {
    icon: DollarSign,
    title: "Volume Pricing Structures",
    description: "Preferred rates for partners who refer multiple aircraft annually. The more aircraft documented through your referrals, the more favorable your revenue share.",
  },
  {
    icon: Globe,
    title: "Worldwide Coordination",
    description: "Fleet aircraft positioned across multiple locations? We coordinate mobilization schedules to document entire fleets efficiently, regardless of where each aircraft is based.",
  },
  {
    icon: Clock,
    title: "Scheduled Documentation Cycles",
    description: "Annual documentation programs aligned with maintenance schedules, insurance renewals, or fiscal planning. Predictable scheduling for recurring fleet documentation needs.",
  },
];

export default function AeroPartners() {
  return (
    <div>
      <SEO
        title="Aviation Partnership Programs | Provenarc Aero Solutions"
        description="Broker referral, white-label, and co-branded partnership models for aircraft brokers, MRO facilities, insurance carriers, and fleet operators. Expedited service and dedicated account management."
        canonical="https://provenarc.com/aero/partners"
      />
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Aero Partnerships
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight" data-testid="text-aero-partners-headline">
              Your Aviation Transaction Partner
            </h1>
            <p className="text-[#c9a96e]/80 font-serif text-lg mt-4 italic">
              Services for Aviation Sales Professionals
            </p>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed" data-testid="text-aero-partners-description">
              Aviation brokers, MRO facilities, and insurance carriers operate in an environment where
              documentation quality directly impacts transaction velocity, commission realization, and
              claims resolution. Our aviation-specific partnership programs address these requirements
              with the precision and discretion the industry demands.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24" data-testid="section-aero-partnership-models">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Broker Partnership Models
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Three Ways to Partner
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Choose the partnership structure that best matches your aviation brokerage model and client base.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-10">
            <Card className="p-6 lg:p-8 border-primary/20 bg-primary/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                  { stat: "15–30%", label: "Asking price lost when records are incomplete or missing" },
                  { stat: "30–60 days", label: "Faster transaction timeline with professional documentation on file" },
                  { stat: "Zero", label: "Buyer objections about records when provenance protection is complete" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="font-serif text-2xl text-primary mb-1">{item.stat}</p>
                    <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <div className="space-y-6">
            {partnershipModels.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 lg:p-8" data-testid={`card-aero-partnership-${i}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <model.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl mb-3">{model.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{model.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {model.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link href="/contact?type=partnership&division=aero">
              <Button size="lg" data-testid="button-aero-broker-apply">
                Discuss Broker Partnership <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/broker/login">
              <Button variant="outline" size="lg" data-testid="button-aero-broker-login">
                <Lock className="mr-2 h-4 w-4" />
                Broker Login
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-aero-expedited">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Broker-Exclusive
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Expedited Service for Aviation Transaction Deadlines
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              We recognize that aviation brokers manage transaction timelines that are non-negotiable.
              Expedited service protocols are available exclusively to licensed aviation sales
              professionals managing active aircraft transactions.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6" data-testid="card-aero-expedited-standard">
                <p className="text-primary font-mono text-xs tracking-wider mb-2">STANDARD EXPEDITED</p>
                <p className="font-serif text-3xl text-primary mb-2">50%</p>
                <p className="text-sm font-medium mb-3">Turnaround Reduction</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated processing resources, extended work hours, and priority scheduling
                  compress aircraft documentation timelines by fifty percent.
                </p>
              </Card>
              <Card className="p-6 border-primary/20" data-testid="card-aero-expedited-priority">
                <p className="text-primary font-mono text-xs tracking-wider mb-2">PRIORITY EXPEDITED</p>
                <p className="font-serif text-3xl text-primary mb-2">67%</p>
                <p className="text-sm font-medium mb-3">Turnaround Reduction</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our maximum compression capability without compromising quality standards.
                  Resource intensity at its highest level for time-critical aviation transactions.
                </p>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/10">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Quality standards remain identical</span> — we
                  compress timelines through resource intensity, not by skipping steps. Every expedited
                  deliverable undergoes the same multi-stage quality control as standard engagements.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-aero-broker-deliverables">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Aviation-Specific Deliverables
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Deliverables for Aviation Sales Professionals
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brokerDeliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-aero-deliverable-${i}`}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-aero-roi">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Aviation ROI
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              The Business Case for Professional Aircraft Documentation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roiMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-aero-roi-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <metric.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-primary mb-1">{metric.value}</p>
                      <h3 className="font-medium text-sm mb-2">{metric.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" id="mro" data-testid="section-aero-mro">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Card className="p-6 lg:p-8 border-primary/20 order-2 lg:order-1">
              <h3 className="font-serif text-xl mb-6">Revenue Opportunity</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: DollarSign,
                    title: "Revenue Share",
                    desc: "Earn revenue share on documentation services performed at your facility. No overhead, no equipment needed.",
                  },
                  {
                    icon: Users,
                    title: "Customer Enhancement",
                    desc: "Offer documentation as a premium addition during scheduled maintenance events. Increase per-customer value for aircraft owners.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Fleet Programs",
                    desc: "Annual documentation programs for fleet operators that service with you. Recurring revenue stream across multiple aircraft.",
                  },
                  {
                    icon: Award,
                    title: "Co-Branded Deliverables",
                    desc: "Documentation packages carrying both Provenarc and your facility branding. Strengthen your market position in the aviation MRO space.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-md bg-muted/50">
                    <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
                    MRO Partnerships
                  </p>
                  <h2 className="font-serif text-3xl">Expand Your Service Offering</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Offer aircraft documentation services to your maintenance customers as a premium value-add.
                We coordinate around your maintenance schedule for seamless integration with minimal
                disruption to your MRO operations. Deliverables are structured for FAA compliance and
                inspection-ready archiving. Quality standards remain identical regardless of facility or timeline.
              </p>

              <h3 className="font-medium text-sm mb-3">Partnership Advantages</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Revenue share on all referred aircraft documentation clients",
                  "On-site coordination during scheduled maintenance events",
                  "Minimal overhead \u2014 no equipment or staff investment",
                  "Co-branded documentation packages under your MRO brand",
                  "Fleet program coordination for recurring aircraft customers",
                  "Dedicated aviation partnership coordinator",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact?type=partnership&division=aero">
                  <Button data-testid="button-aero-mro-apply">
                    Discuss MRO Partnership <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/mro/login">
                  <Button variant="outline" data-testid="button-aero-mro-login">
                    <Lock className="mr-2 h-4 w-4" />
                    Facility Login
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" id="insurance" data-testid="section-aero-insurance">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Aviation Insurance Carriers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Baseline Documentation Reduces Aviation Claims Disputes
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Partner with Provenarc Aero Solutions to offer baseline 3D documentation programs to your
              aviation policyholders. Comprehensive pre-loss condition evidence protects both aircraft owners and
              insurers while streamlining claims resolution.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Aircraft Baseline Documentation",
                  desc: "Pre-existing condition 3D scans establish clear baselines before any incident occurs. Eliminates dispute over pre-existing damage on airframes, engines, and interiors.",
                },
                {
                  title: "Accelerated Aviation Claims",
                  desc: "Compare current condition against baseline scans to document exactly what changed. Several major aviation insurance carriers now recognize baseline 3D documentation as preferred evidence.",
                },
                {
                  title: "Reduced Disputes",
                  desc: "Objective 3D evidence eliminates disagreements about pre-existing vs. incident damage. Claims approved in thirty days versus industry average of ninety to one hundred eighty.",
                },
                {
                  title: "Post-Incident Response",
                  desc: "Emergency 48\u201372 hour rapid deployment for post-incident aircraft documentation and pre/post comparison analysis against baseline scans.",
                },
                {
                  title: "Hull Premium Discount Programs",
                  desc: "Offer hull premium discounts to policyholders who maintain current documentation baselines. Some aviation carriers already offer premium reductions for aircraft with comprehensive scanning on file.",
                },
                {
                  title: "Insurance-Grade Standards",
                  desc: "Every deliverable meets the highest standards for aviation claims support. Pre-approved vendor status streamlines your approval process for aircraft documentation services.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-5" data-testid={`card-aero-insurance-${i}`}>
                  <h3 className="font-medium text-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact?type=insurance&division=aero">
                <Button size="lg" data-testid="button-aero-insurance-contact">
                  Discuss Aviation Insurance Partnership <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-aero-fleet-partners">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Fleet Partner Programs
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              For FBOs, Charter Operators & Corporate Flight Departments
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Partners who refer multiple aircraft benefit from preferred pricing structures,
              dedicated account management, and coordinated documentation schedules across entire fleets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {fleetPartnerBenefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-aero-fleet-partner-${i}`}>
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

          <motion.div {...fadeUp} className="text-center">
            <Link href="/contact?type=fleet&division=aero">
              <Button size="lg" data-testid="button-aero-fleet-partner-contact">
                Discuss Fleet Partner Program <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-muted-foreground/60 text-sm mt-4">
              Volume pricing available for partners referring three or more aircraft annually.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-aero-partner-testimonials">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              What Our Aviation Partners Say
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Partner Testimonials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Professional aircraft documentation has become our competitive advantage. Provenarc provides what buyers expect but rarely see \u2014 comprehensive records organized for instant access, 3D scans that enable remote preliminary inspections, and presentation-quality deliverables that elevate seller credibility.",
                attribution: "Senior Broker, Business Aviation Sales",
              },
              {
                quote: "Offering documentation services during scheduled maintenance events has increased our per-customer value significantly. Aircraft owners appreciate the convenience of having records professionally digitized while their aircraft is already at our facility for inspection.",
                attribution: "VP Operations, Part 145 MRO Facility",
              },
              {
                quote: "Baseline 3D documentation has measurably reduced claims disputes for our aviation policyholders. Pre-incident evidence eliminates the back-and-forth that traditionally delays claims resolution on high-value aircraft.",
                attribution: "Claims Director, Aviation Insurance Carrier",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col" data-testid={`card-aero-testimonial-${i}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs font-medium text-primary mt-4">
                    {testimonial.attribution}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24" data-testid="section-aero-partners-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Next Step
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#faf6f1] leading-tight">
              Ready to Partner with Provenarc Aero?
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Whether you are an aviation broker, MRO facility, insurance carrier, or fleet operator,
              we have a partnership structure designed to complement your business model and enhance
              your client relationships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/contact?type=partnership&division=aero">
                <Button size="lg" data-testid="button-aero-partners-cta-contact">
                  Schedule a Partnership Discussion
                </Button>
              </Link>
              <Link href="/broker/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-aero-partners-cta-login"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Partner Login
                </Button>
              </Link>
            </div>
            <p className="text-[#b8b0a4]/60 text-sm mt-6">
              No commitment required. 30-minute confidential call.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
