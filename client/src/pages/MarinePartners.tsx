import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Handshake, Shield, ArrowRight, CheckCircle2, DollarSign,
  Users, Briefcase, TrendingUp, Award, Lock, Clock,
  Globe, Anchor, Ship, Building2, FileCheck,
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
      "Refer vessel owners to Provenarc Marine and receive competitive referral fees for every completed engagement. We handle all service delivery — from initial vessel assessment through final archival presentation. Your clients receive white-glove service, and you receive compensation for introducing documentation services that accelerate transactions and enhance your professional reputation.",
    highlights: [
      "Referral fees structured as percentage of base engagement value",
      "Paid upon project completion — no operational involvement required",
      "Dedicated partner liaison for seamless client handoff",
      "Co-branded status reports throughout engagement",
    ],
  },
  {
    icon: Briefcase,
    title: "White-Label Partnership",
    description:
      "Offer comprehensive vessel documentation under your brokerage brand. Our maritime expertise, specialized equipment, and operational execution — your client relationship and brand identity. Ideal for established yacht brokerages seeking to differentiate their service offering without building internal documentation capability.",
    highlights: [
      "All deliverables branded with your brokerage identity",
      "Revenue sharing model designed for high-volume brokerages",
      "Dedicated project manager for your account portfolio",
      "Priority scheduling for your clients worldwide",
    ],
  },
  {
    icon: Award,
    title: "Co-Branded Premium Package",
    description:
      "Both brands featured on museum-grade archival volumes, VesselVault digital platforms, and presentation deliverables. Ideal for prestigious yacht brokerages that want to elevate their transaction packages with world-class documentation while maintaining prominent brand visibility alongside Provenarc Marine.",
    highlights: [
      "Dual branding on archival volumes and digital platforms",
      "Joint marketing materials and transaction case studies",
      "Preferred pricing across all five maritime service tiers",
      "Quarterly partnership reviews and portfolio optimization",
    ],
  },
];

const managementPartnership = [
  {
    icon: Ship,
    title: "Fleet Documentation Programs",
    desc: "Coordinate documentation across entire managed fleets. Scheduled annual cycles, consistent standards across every vessel regardless of location.",
  },
  {
    icon: DollarSign,
    title: "Revenue Share",
    desc: "Earn revenue share on documentation services for vessels under your management. No overhead, no equipment needed — we deploy worldwide.",
  },
  {
    icon: Users,
    title: "Owner Enhancement",
    desc: "Offer documentation as a premium value-add to vessel owners in your portfolio. Increase per-vessel management value and owner satisfaction.",
  },
  {
    icon: Award,
    title: "Co-Branded Deliverables",
    desc: "Documentation packages carrying both Provenarc Marine and your management company branding. Strengthen your market position with ultra-premium deliverables.",
  },
];

const insuranceCards = [
  {
    title: "Baseline Documentation",
    desc: "Pre-existing condition 3D scans establish clear baselines before any incident occurs. Eliminates dispute over pre-existing damage versus incident-related changes in hull, superstructure, and interior condition.",
  },
  {
    title: "Accelerated Claims Processing",
    desc: "Compare current vessel condition against baseline scans to document exactly what changed. Leading marine insurers and P&I clubs now recognize baseline 3D documentation as preferred evidence for claims adjudication.",
  },
  {
    title: "Reduced Disputes",
    desc: "Objective 3D evidence eliminates disagreements about pre-existing versus incident damage. Claims approved in thirty days versus industry average of ninety to one hundred eighty for complex maritime claims.",
  },
  {
    title: "Post-Incident Response",
    desc: "Emergency 48–72 hour worldwide rapid deployment for post-incident documentation and pre/post comparison analysis against baseline scans. Available at any port worldwide.",
  },
  {
    title: "P&I Club Integration",
    desc: "Documentation packages engineered to meet the specific requirements of major P&I clubs. Pre-approved vendor status streamlines the approval process for club members seeking documentation services.",
  },
  {
    title: "Premium Discount Programs",
    desc: "Partner with Provenarc Marine to offer premium reductions to policyholders who maintain current documentation baselines. Several carriers already offer hull premium reductions for vessels with comprehensive scanning on file.",
  },
];

const roiMetrics = [
  {
    icon: Clock,
    title: "Transaction Velocity",
    value: "40–90 days",
    description: "Average timeline reduction when professional documentation is provided at listing. Fewer survey objections, faster due diligence, reduced negotiation friction on vessel transactions.",
  },
  {
    icon: TrendingUp,
    title: "Value Preservation",
    value: "8–20%",
    description: "Premium retention compared to comparable vessels with incomplete documentation. Comprehensive records demonstrate meticulous ownership and eliminate buyer uncertainty during pre-purchase surveys.",
  },
  {
    icon: DollarSign,
    title: "Holding Cost Savings",
    value: "Substantial",
    description: "On superyachts with significant monthly ownership costs — crew, berth fees, insurance, maintenance — timeline compression through professional documentation saves sellers substantial holding costs.",
  },
  {
    icon: Award,
    title: "Brand Elevation",
    value: "Premium",
    description: "Professional documentation offerings attract high-net-worth vessel owners and support premium commission structures. Sellers select representation based on perceived capability and service quality.",
  },
];

const globalRegions = [
  { region: "Mediterranean", ports: "Monaco, Antibes, Palma, Porto Cervo, Athens" },
  { region: "Caribbean", ports: "St. Barths, Antigua, BVI, USVI, Bahamas" },
  { region: "Asia-Pacific", ports: "Hong Kong, Singapore, Phuket, Sydney" },
  { region: "Northern Europe", ports: "London, Amsterdam, Copenhagen, Oslo" },
  { region: "Americas", ports: "Fort Lauderdale, Newport, San Diego, Vancouver" },
  { region: "Middle East", ports: "Dubai, Abu Dhabi, Doha, Jeddah" },
];

export default function MarinePartners() {
  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1219] via-[#111a22] to-[#15202b]" />
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
              Marine Partnerships
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight" data-testid="text-marine-partners-headline">
              Your Maritime Transaction Partner
            </h1>
            <p className="text-[#c9a96e]/80 font-serif text-lg mt-4 italic">
              Partnership Programs for Maritime Sales Professionals
            </p>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed" data-testid="text-marine-partners-subheadline">
              Yacht brokers, management companies, and marine insurers operate in an environment where
              documentation quality directly impacts transaction velocity, survey outcomes, and commission realization.
              Our maritime-specific partnership programs address these requirements with worldwide deployment capability.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24" data-testid="section-yacht-broker-models">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Yacht Broker Partnerships
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Three Ways to Partner
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Choose the partnership structure that best matches your brokerage model, fleet portfolio, and client base.
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
                <Card className="p-6 lg:p-8" data-testid={`card-marine-partnership-${i}`}>
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
            <Link href="/contact">
              <Button size="lg" data-testid="button-marine-broker-apply">
                Discuss Yacht Broker Partnership <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/broker/login">
              <Button variant="outline" size="lg" data-testid="button-marine-broker-login">
                <Lock className="mr-2 h-4 w-4" />
                Broker Portal Login
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-management-company">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
                    Management Companies
                  </p>
                  <h2 className="font-serif text-3xl">Expand Your Service Offering</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Yacht management companies oversee complex fleets across multiple jurisdictions. Offer
                professional documentation services to vessel owners in your portfolio as a premium value-add.
                We coordinate around your maintenance schedules, survey timelines, and refit programs for
                seamless integration with minimal disruption to vessel operations.
              </p>

              <h3 className="font-medium text-sm mb-3">Partnership Advantages</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Revenue share on all referred documentation clients",
                  "Coordination with captains, crew, and shipyard teams",
                  "No overhead — no equipment or specialized staff required",
                  "Co-branded documentation packages under your management brand",
                  "Fleet documentation programs for recurring vessel portfolios",
                  "Dedicated maritime partnership coordinator",
                  "Worldwide deployment to any port or shipyard",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button data-testid="button-management-apply">
                  Discuss Management Partnership <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <Card className="p-6 lg:p-8 border-primary/20">
              <h3 className="font-serif text-xl mb-6">Revenue Opportunity</h3>
              <div className="space-y-4">
                {managementPartnership.map((item, i) => (
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
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-marine-insurance">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Marine Insurance & P&I Clubs
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Baseline Documentation Reduces Maritime Claims Disputes
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Partner with Provenarc Marine to offer baseline 3D documentation programs to your
              policyholders and club members. Comprehensive pre-loss condition evidence protects
              vessel owners, insurers, and P&I clubs alike.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {insuranceCards.map((item, i) => (
                <Card key={i} className="p-5" data-testid={`card-marine-insurance-${i}`}>
                  <h3 className="font-medium text-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" data-testid="button-marine-insurance-contact">
                  Discuss Insurance Partnership <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-marine-roi">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Return on Investment
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              The Business Case for Maritime Documentation
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
                <Card className="p-6 h-full" data-testid={`card-marine-roi-${i}`}>
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

      <section className="py-24" data-testid="section-fleet-partners">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
                Fleet Partner Programs
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Multi-Vessel Fleet Partnerships
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Management companies overseeing multiple vessels benefit from our fleet partner program.
                Coordinate documentation across your entire managed portfolio with consistent standards,
                volume pricing, and dedicated account management — regardless of where your vessels are stationed worldwide.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Volume discount rates for management companies with multiple vessels",
                  "Scheduled annual documentation cycles across entire managed fleets",
                  "Dedicated fleet account manager and maritime partnership coordinator",
                  "Consistent documentation standards across all flag state jurisdictions",
                  "Priority scheduling and worldwide deployment for fleet clients",
                  "Custom reporting dashboards for fleet documentation status",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button size="lg" data-testid="button-fleet-partner-contact">
                  Discuss Fleet Partnership <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <Card className="p-6 lg:p-8 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Anchor className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl">Ideal Fleet Partners</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Yacht Management Companies", desc: "Companies overseeing fleets of charter, private, or commercial vessels across multiple ports and jurisdictions." },
                  { title: "Charter Fleet Operators", desc: "Charter companies managing fleets of vessels that require consistent documentation for insurance, regulatory, and marketing purposes." },
                  { title: "Commercial Marine Operators", desc: "Workboat, ferry, and commercial vessel operators requiring fleet-wide documentation compliance." },
                  { title: "Shipyard & Refit Facilities", desc: "Shipyards managing multiple vessels in refit or new-build programs requiring documentation at commissioning." },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-md bg-muted/50">
                    <p className="text-sm font-medium mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" data-testid="section-worldwide-coverage">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Worldwide Deployment
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Your Vessels, Any Port, Any Ocean
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Our maritime documentation teams deploy worldwide. Whether your vessel is berthed in Monaco,
              undergoing refit in a Dutch shipyard, or cruising the South Pacific — we come to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {globalRegions.map((region, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Card className="p-5" data-testid={`card-region-${i}`}>
                  <h3 className="font-medium text-sm mb-1">{region.region}</h3>
                  <p className="text-xs text-muted-foreground">{region.ports}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-marine-partner-testimonials">
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
                quote: "Having Provenarc Marine documentation in our listing packages has transformed our pre-sale preparation. Buyers see the quality immediately, and it accelerates every transaction we manage across the Mediterranean fleet.",
                attribution: "Senior Yacht Broker, International Brokerage",
              },
              {
                quote: "Managing documentation across twelve vessels in four jurisdictions was consuming our operations team. Provenarc's fleet program handled everything — consistent standards, on-time delivery, and our hull insurer reduced premiums across the portfolio.",
                attribution: "Director, Yacht Management Company",
              },
              {
                quote: "The baseline 3D documentation program Provenarc developed for our marine policyholders has measurably reduced claims disputes. Pre-incident condition evidence eliminates the most contentious element of maritime claims adjudication.",
                attribution: "Claims Director, Marine Insurance",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col" data-testid={`card-marine-testimonial-${i}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs font-medium text-primary mt-4">
                    — {testimonial.attribution}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1219] via-[#111a22] to-[#15202b]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Begin the Conversation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf6f1]">
              Explore a Marine Partnership
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Whether you represent a single-vessel brokerage or manage a global fleet of superyachts,
              our partnership programs are designed to enhance your service offering, accelerate your
              transactions, and elevate your professional reputation — worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" data-testid="button-marine-partner-cta">
                  Schedule a Partnership Discussion <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/broker/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
                  data-testid="button-marine-partner-login"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Partner Portal Login
                </Button>
              </Link>
            </div>

            <p className="text-[#b8b0a4]/60 text-sm mt-6" data-testid="text-marine-partner-reassurance">
              No commitment required. 30-minute confidential call.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
