import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, Shield, Clock, CheckCircle2,
  Globe, Scan, Lock, FileCheck, Anchor,
  Waves, Users, Ship, Compass, Camera,
  BookOpen, CloudCog, CreditCard,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const workflowSteps = [
  {
    number: 1,
    title: "Initial Consultation",
    icon: Users,
    content: "We begin with a detailed discussion of your vessel, documentation needs, and timeline. During this consultation we identify your vessel type, current documentation status, specific concerns such as upcoming surveys or pending sales, and desired service tier including underwater scanning requirements.",
    detail: "You receive a detailed proposal with transparent pricing, estimated timeline, and scope of work. All questions are answered before you commit.",
  },
  {
    number: 2,
    title: "Service Booking and Deposit",
    icon: CreditCard,
    content: "Once you approve the proposal, we reserve your field service date with a fifty percent deposit. This deposit covers initial logistics, travel procurement, and equipment preparation.",
    detail: "Most clients book thirty to sixty days in advance for optimal scheduling, though expedited service is available for urgent needs through our broker and dealer partner program.",
  },
  {
    number: 3,
    title: "Pre-Service Coordination",
    icon: Compass,
    content: "Before field service, we confirm vessel location and accessibility, verify adequate workspace near the vessel or in the marina office, coordinate with marina management for dock access and dive operations if underwater scanning is included, arrange power availability for scanning equipment, and schedule owner or representative availability for document handover and return.",
    detail: "For underwater scanning engagements, we coordinate with marina operations to ensure safe dive conditions and proper surface support.",
  },
  {
    number: 4,
    title: "Field Service Mobilization",
    icon: Globe,
    content: "Our technician travels to your vessel location worldwide. We arrive with portable scanning equipment, 3D scanning systems for above-water documentation, underwater 3D scanning equipment and dive gear for hull documentation, protective document handling supplies, and secure data storage for immediate backup.",
    detail: "Travel expenses are billed at actual cost with no markup. You receive itemized receipts for transparency.",
  },
  {
    number: 5,
    title: "On-Site Documentation",
    icon: Camera,
    content: "All work is performed at your vessel location. You maintain physical custody of original documents throughout the entire process.",
    subcategories: [
      {
        label: "Logbook and Records Digitization",
        items: "Vessel logbooks covering all operational hours, maintenance and repair records, survey reports and compliance documentation, modification records and equipment upgrades, registration and title documentation.",
      },
      {
        label: "Above-Water 3D Scanning",
        items: "Exterior documentation of hull, superstructure, and deck equipment. Interior documentation of cabins, galley, and systems. Mechanical systems documentation of engines, generators, and critical equipment.",
      },
      {
        label: "Underwater 3D Scanning",
        items: "Hull condition scans, running gear documentation including propellers and shafts, through-hull fittings and transducers, rudder and steering systems, and any underwater damage or anomalies. All underwater operations follow safety protocols with proper surface support.",
      },
    ],
  },
  {
    number: 6,
    title: "Immediate Document Return",
    icon: Lock,
    content: "All original documents are returned to you before our technician departs your location. You sign a completion checklist confirming all originals have been returned and accounted for. Digital files are uploaded to secure cloud storage as backup.",
    detail: "Your vessel's documentation never leaves your property. Zero shipping risk, ever.",
  },
  {
    number: 7,
    title: "Post-Production Processing",
    icon: Scan,
    content: "After field service, our team performs comprehensive post-production work. This includes optical character recognition processing and verification for all scanned documents, metadata tagging and organization for comprehensive searchability, point cloud processing and optimization for 3D scans, quality control review and verification at multiple stages, and client deliverable preparation in multiple formats.",
    detail: "We maintain a three-to-one post-production ratio — three days of processing for every one day of field service. This methodical approach ensures insurance-grade deliverables.",
  },
  {
    number: 8,
    title: "Deliverable Preparation",
    icon: FileCheck,
    content: "Your final deliverables are prepared in professional, accessible formats: complete digital archives organized by document type and date, searchable PDF files with OCR-enabled text, 3D model files in industry-standard formats, web-based 3D viewer access for remote sharing, and comprehensive documentation reports suitable for surveys and insurance.",
  },
  {
    number: 9,
    title: "Cloud Hosting and Delivery",
    icon: CloudCog,
    content: "All documentation is uploaded to our secure VesselVault platform with lifetime cloud hosting included, redundant backup across multiple data centers, granular access controls for sharing with buyers, surveyors, or insurance carriers, and mobile-friendly access from any device worldwide.",
    detail: "Physical deliverables are also provided via USB drive and optional hard drive for local backup.",
  },
  {
    number: 10,
    title: "Final Invoice and Support",
    icon: CreditCard,
    content: "The remaining fifty percent balance is due upon delivery of final deliverables. Invoice includes itemized travel expense reconciliation with receipts.",
    detail: "Ongoing support is available for questions, additional access provisioning, or future documentation updates.",
  },
];

const serviceTiers = [
  {
    name: "Essential Vessel Documentation",
    scope: "Logbooks and records digitization only",
    fieldService: "One day",
    postProduction: "Three days",
    timeline: "Ten to fifteen business days",
    bestFor: "Smaller vessels, basic compliance documentation",
  },
  {
    name: "Complete Vessel Documentation",
    scope: "Records plus exterior and interior 3D scanning",
    fieldService: "Two days",
    postProduction: "Six days",
    timeline: "Fifteen to twenty business days",
    bestFor: "Yachts and cruisers, pre-sale documentation",
  },
  {
    name: "Premium Comprehensive",
    scope: "Complete documentation plus underwater 3D scanning",
    fieldService: "Three days",
    postProduction: "Nine days",
    timeline: "Twenty to twenty-five business days",
    bestFor: "High-value vessels, insurance baseline requirements",
  },
];

const underwaterProtocol = [
  {
    title: "Pre-Dive Planning",
    desc: "Coordinate with marina operations for safe dive conditions, verify water clarity and visibility requirements, assess current and weather conditions, establish surface support and emergency protocols, and conduct equipment checks for both dive gear and underwater scanning systems.",
  },
  {
    title: "Dive Operations",
    desc: "All underwater scanning follows recreational dive limits with surface support present throughout. We document hull condition systematically from bow to stern, capture running gear with multiple angles for complete documentation, assess through-hulls and fittings for condition and security, and maintain real-time communication with surface support.",
  },
  {
    title: "Post-Dive Processing",
    desc: "Underwater scan data is processed alongside above-water documentation for comprehensive vessel baseline. Point cloud optimization accounts for water refraction and visibility conditions. Final deliverables include annotated underwater condition reports suitable for survey and insurance purposes.",
  },
];

export default function MarineProcess() {
  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6" data-testid="text-marine-process-label">
              Our Process — Provenarc Marine
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight" data-testid="heading-marine-process-hero">
              Precision Without Rush
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              From initial consultation to final delivery, here is how Provenarc Marine preserves
              your vessel's complete documentation and condition baseline.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-workflow">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Ten-Step Workflow
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">The Provenarc Marine Workflow</h2>
          </motion.div>

          <div className="space-y-6">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="p-6 lg:p-8" data-testid={`card-step-${step.number}`}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-sm font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="h-4 w-4 text-primary" />
                        <h3 className="font-serif text-lg">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.content}</p>
                      {step.detail && (
                        <p className="text-sm text-muted-foreground leading-relaxed mt-3 italic">
                          {step.detail}
                        </p>
                      )}
                      {step.subcategories && (
                        <div className="mt-4 space-y-4">
                          {step.subcategories.map((sub, j) => (
                            <div key={j} className="pl-4 border-l-2 border-primary/20">
                              <p className="text-sm font-medium text-primary mb-1">{sub.label}</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">{sub.items}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-tiers">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Service Tiers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Service Tiers and Timelines</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-tier-${i}`}>
                  <h3 className="font-serif text-lg mb-4">{tier.name}</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Scope", value: tier.scope },
                      { label: "Field Service", value: tier.fieldService },
                      { label: "Post-Production", value: tier.postProduction },
                      { label: "Total Timeline", value: tier.timeline },
                      { label: "Best For", value: tier.bestFor },
                    ].map((item, j) => (
                      <div key={j}>
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-why-no-rush">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <Card className="p-8 lg:p-10 border-primary/10" data-testid="card-no-rush">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl mb-4">Why We Don't Rush</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Provenarc Marine operates on a methodical, quality-first timeline. Insurance-grade
                    documentation requires comprehensive quality control that cannot be compressed
                    without compromising deliverables. Our three-to-one post-production ratio ensures
                    proper OCR verification, metadata accuracy, and multi-stage review.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We position ourselves as thorough, not rushed. Your vessel deserves documentation
                    done right. Clients value accuracy over velocity, and our reputation is built on
                    flawless execution.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-expedited">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              For Marine Professionals
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Expedited Service for Marine Brokers</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              While we maintain quality-first standards for all clients, we recognize that marine
              brokers and dealers face non-negotiable transaction deadlines.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <Card className="p-8 lg:p-10 border-primary/10" data-testid="card-expedited">
              <h3 className="font-serif text-xl mb-4">Broker Expedited Service</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Standard Expedited:</span> Fifty percent reduction in turnaround time with dedicated processing resources.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Priority Expedited:</span> Sixty-seven percent reduction in turnaround time with dedicated processing resources and extended work hours.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t">
                  Transaction deadlines are accommodated through resource reallocation while
                  maintaining our quality standards. Individual vessel owners may qualify for
                  expedited service with documented transaction urgency and broker involvement.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-underwater-protocol">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Waves className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Safety and Protocol
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Underwater Operations Protocol</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Safety is paramount in all underwater documentation operations. Our certified scuba
              diver follows strict protocols to ensure safe and effective underwater 3D scanning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {underwaterProtocol.map((protocol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-protocol-${i}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <h3 className="font-serif text-lg">{protocol.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{protocol.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24" data-testid="section-marine-process-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf6f1]">
              Ready to Begin?
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Schedule your consultation to discuss your vessel's documentation needs.
              We serve vessels worldwide with the same professional standard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" data-testid="button-marine-process-cta-discovery">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/marine/why-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-marine-process-cta-why"
                >
                  Why Provenarc Marine <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="text-[#b8b0a4]/70 text-sm mt-4">
              No commitment required. Thirty-minute confidential consultation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
