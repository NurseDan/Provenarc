import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import {
  Handshake, Building2, Shield, ArrowRight,
  CheckCircle2, DollarSign, Users, Briefcase,
  TrendingUp, Award, Lock, Clock, FileCheck,
  Camera, Package,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const partnershipModels = [
  {
    icon: Handshake,
    title: "Referral Partnership",
    description:
      "Refer your clients to Provenarc and receive referral fees for every completed engagement. We handle all service delivery, client communication, and documentation production. You receive compensation for introducing professional documentation services that accelerate your transactions and enhance your reputation.",
    highlights: [
      "Referral fees structured as percentage of base service fees",
      "Paid upon project completion",
      "We handle all service delivery and client communication",
      "No overhead or equipment investment required",
    ],
  },
  {
    icon: Briefcase,
    title: "White-Label Partnership",
    description:
      "Offer documentation services under your brokerage brand. We provide the expertise, equipment, and execution. You present deliverables to clients as value-added services included in your representation. This model enables boutique brokerages to compete with larger firms that maintain in-house documentation capabilities.",
    highlights: [
      "Documentation delivered under your brand",
      "Revenue sharing provisions included",
      "Marketing support materials provided",
      "Compete with larger firms without building internal capability",
    ],
  },
  {
    icon: Award,
    title: "Co-Branded Premium Package",
    description:
      "Market comprehensive documentation as premium listing enhancement. Provenarc and your brokerage appear as co-providers on deliverables and marketing materials. This approach differentiates high-value listings, justifies premium representation fees, and creates memorable impression with prospective buyers.",
    highlights: [
      "Both brands on deliverables and marketing materials",
      "Museum-grade archival volumes with custom covers featuring both brands",
      "Differentiates high-value listings",
      "Supports premium commission structures",
    ],
  },
];

const brokerDeliverables = [
  {
    icon: FileCheck,
    title: "Transaction-Ready Documentation Package",
    description:
      "Pre-formatted deliverables designed specifically for buyer due diligence teams. Includes executive summary of aircraft history, compliance status dashboard, searchable maintenance database, and highlighted items requiring buyer attention. Enables brokers to proactively address documentation questions before buyers identify them as concerns.",
  },
  {
    icon: Camera,
    title: "Marketing Asset Library",
    description:
      "High-resolution 3D renderings, virtual tour links, and presentation-ready images suitable for listing materials and buyer presentations. Drone footage edited into professional marketing videos. Interactive 3D models embedded in listing websites. Assets that differentiate your marketing from static photography.",
  },
  {
    icon: Package,
    title: "Pre-Buy Support Package",
    description:
      "Coordination with buyer inspection teams to provide documentation access and technical clarification. Our senior technicians are available to answer inspector questions about record organization, compliance status, and historical maintenance patterns. Reduces inspection friction and demonstrates seller transparency.",
  },
];

const roiMetrics = [
  {
    icon: Clock,
    title: "Transaction Velocity",
    value: "30\u201360 days",
    description: "Average timeline reduction when professional documentation provided at listing. Fewer questions, faster due diligence, reduced negotiation friction.",
  },
  {
    icon: TrendingUp,
    title: "Price Erosion Prevention",
    value: "5\u201315%",
    description: "Premium retention compared to comparable aircraft with amateur documentation. Documentation demonstrates meticulous ownership and eliminates buyer uncertainty.",
  },
  {
    icon: DollarSign,
    title: "Holding Cost Savings",
    value: "Substantial",
    description: "On business jets with substantial monthly ownership costs, timeline compression through professional documentation saves sellers significant holding costs.",
  },
  {
    icon: Award,
    title: "Brand Elevation",
    value: "Premium",
    description: "Professional documentation offering attracts high-value clients and supports premium commission structures. Sellers select representation based on perceived capability.",
  },
];

export default function Partners() {
  return (
    <div>
      <SEO
        title="Partnership Programs | Provenarc Group"
        description="Broker, MRO, and insurance carrier partnership models with competitive referral fees, white-label options, and co-branded premium packages."
      />
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Partnerships
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              Your Transaction Partner
            </h1>
            <p className="text-[#c9a96e]/80 font-serif text-lg mt-4 italic">
              Services for Aviation Sales Professionals
            </p>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Aviation brokers and sales agents operate in an environment where documentation quality
              directly impacts transaction velocity and commission realization. Incomplete records
              trigger buyer skepticism. Poorly organized files delay due diligence and extend
              time-to-close. Our broker-specific programs address these requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-partnership-models">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Partnership Models
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Three Ways to Partner
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Choose the partnership structure that best matches your brokerage model and client base.
            </p>
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
                <Card className="p-6 lg:p-8" data-testid={`card-partnership-${i}`}>
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
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-expedited">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Broker-Exclusive
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Expedited Service for Transaction Deadlines
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              We recognize that brokers manage transaction timelines that are non-negotiable.
              Expedited service protocols are available exclusively to licensed aviation sales
              professionals managing active transactions.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6" data-testid="card-expedited-standard">
                <p className="text-primary font-mono text-xs tracking-wider mb-2">STANDARD EXPEDITED</p>
                <p className="font-serif text-3xl text-primary mb-2">50%</p>
                <p className="text-sm font-medium mb-3">Turnaround Reduction</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated processing resources, extended work hours, and priority scheduling
                  compress timelines by fifty percent.
                </p>
              </Card>
              <Card className="p-6 border-primary/20" data-testid="card-expedited-priority">
                <p className="text-primary font-mono text-xs tracking-wider mb-2">PRIORITY EXPEDITED</p>
                <p className="font-serif text-3xl text-primary mb-2">67%</p>
                <p className="text-sm font-medium mb-3">Turnaround Reduction</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our maximum compression capability without compromising quality standards.
                  Resource intensity at its highest level.
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

      <section className="py-24" data-testid="section-broker-deliverables">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Broker-Specific
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Deliverables for Sales Professionals
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
                <Card className="p-6 h-full" data-testid={`card-deliverable-${i}`}>
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

      <section className="py-24 bg-card/50" data-testid="section-roi">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Return on Investment
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              The Business Case for Professional Documentation
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
                <Card className="p-6 h-full" data-testid={`card-roi-${i}`}>
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

      <section className="py-24" id="mro">
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
                    desc: "Offer documentation as a premium addition during scheduled maintenance events. Increase per-customer value.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Fleet Programs",
                    desc: "Annual documentation programs for fleet operators that service with you. Recurring revenue stream.",
                  },
                  {
                    icon: Award,
                    title: "Co-Branded Deliverables",
                    desc: "Documentation packages carrying both Provenarc and your facility branding. Strengthen your market position.",
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
                Offer documentation services to your maintenance customers as a premium value-add.
                We coordinate around your maintenance schedule for seamless integration with minimal
                disruption to your operations. Quality standards remain identical regardless of
                facility or timeline.
              </p>

              <h3 className="font-medium text-sm mb-3">Partnership Advantages</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Revenue share on all referred documentation clients",
                  "On-site coordination during scheduled maintenance events",
                  "Minimal overhead \u2014 no equipment or staff investment",
                  "Co-branded documentation packages under your brand",
                  "Fleet program coordination for recurring customers",
                  "Dedicated partnership coordinator",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact?type=partnership">
                  <Button data-testid="button-mro-apply">
                    Discuss Partnership <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/mro/login">
                  <Button variant="outline" data-testid="button-mro-login-link">
                    <Lock className="mr-2 h-4 w-4" />
                    Facility Login
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" id="insurance">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Insurance Carriers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Baseline Documentation Reduces Claims Disputes
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Partner with Provenarc to offer baseline 3D documentation programs to your
              policyholders. Comprehensive pre-loss condition evidence protects both owners and
              insurers.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Baseline Documentation",
                  desc: "Pre-existing condition 3D scans establish clear baselines before any incident occurs. Eliminates dispute over pre-existing damage.",
                },
                {
                  title: "Accelerated Claims Processing",
                  desc: "Compare current condition against baseline scans to document exactly what changed. Several major carriers now recognize baseline 3D documentation as preferred evidence.",
                },
                {
                  title: "Reduced Disputes",
                  desc: "Objective 3D evidence eliminates disagreements about pre-existing vs. incident damage. Claims approved in thirty days versus industry average of ninety to one hundred eighty.",
                },
                {
                  title: "Post-Incident Response",
                  desc: "Emergency 48\u201372 hour rapid deployment for post-incident documentation and pre/post comparison analysis against baseline scans.",
                },
                {
                  title: "Premium Discount Programs",
                  desc: "Offer premium discounts to policyholders who maintain current documentation baselines. Some carriers already offer premium reductions for aircraft with comprehensive scanning on file.",
                },
                {
                  title: "Insurance-Grade Standards",
                  desc: "Every deliverable meets the highest standards for claims support. Pre-approved vendor status streamlines your approval process.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-5" data-testid={`card-insurance-${i}`}>
                  <h3 className="font-medium text-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact?type=insurance">
                <Button size="lg" data-testid="button-insurance-contact">
                  Discuss Insurance Partnership <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-testimonial-framework">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              What Our Partners Say
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Partner Testimonials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Professional documentation has become our competitive advantage. Provenarc provides what buyers expect but rarely see \u2014 comprehensive records organized for instant access, 3D scans that enable remote preliminary inspections, and presentation-quality deliverables that elevate seller credibility.",
                attribution: "Senior Broker, Aviation Sales",
              },
              {
                quote: "Managing documentation across a multi-aircraft fleet was consuming staff resources we did not have. Provenarc's Executive Documentation service handled everything. Our insurance carrier acknowledged the baseline 3D scans by reducing our hull premium. The service produced measurable returns in year one.",
                attribution: "Director of Aviation, Corporate Flight Department",
              },
              {
                quote: "We recommend Provenarc to customers who need professional documentation. Their technicians understand aviation maintenance \u2014 they speak our language and recognize what matters in records. Customer feedback has been universally positive.",
                attribution: "Service Manager, MRO Facility",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col" data-testid={`card-testimonial-${i}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs text-primary font-mono tracking-wider mt-4 pt-4 border-t border-border/50">
                    {testimonial.attribution}
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
              Let's Build Something Together
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Every partnership is customized. Contact us to discuss how we can create value
              for your business and your clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/contact?type=partnership">
                <Button size="lg" data-testid="button-partners-cta">
                  Schedule Partnership Discussion <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/broker/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-broker-login-cta"
                >
                  <Lock className="mr-2 h-4 w-4" /> Partner Login
                </Button>
              </Link>
            </div>
            <p className="text-[#9b9590] text-sm mt-4">
              No commitment required. Confidential partnership discussions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
