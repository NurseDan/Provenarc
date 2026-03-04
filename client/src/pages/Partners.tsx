import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Handshake, Building2, Shield, ArrowRight,
  CheckCircle2, DollarSign, Users, Briefcase,
  TrendingUp, Award, Lock,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function Partners() {
  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Partnerships
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              Grow Your Business With Provenarc
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              We partner with aviation brokers, MRO facilities, and insurance carriers to deliver
              comprehensive documentation services to their clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" id="broker">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
                    Broker Program
                  </p>
                  <h2 className="font-serif text-3xl">Close Deals Faster</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional documentation eliminates buyer objections, accelerates due diligence,
                and differentiates your listings in a competitive market. Our broker referral program
                rewards you for every client you refer.
              </p>

              <h3 className="font-medium text-sm mb-3">Program Benefits</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "10\u201315% referral commission on all referred projects",
                  "White-label documentation available under your brand",
                  "Expedited service for transaction deadlines",
                  "Competitive advantage \u2014 differentiate your listings",
                  "Pre-sale documentation increases buyer confidence",
                  "Dedicated account manager for your brokerage",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button data-testid="button-broker-apply">
                    Apply for Partner Access <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/broker/login">
                  <Button variant="outline" data-testid="button-broker-login-link">
                    <Lock className="mr-2 h-4 w-4" />
                    Partner Login
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="p-6 lg:p-8 border-primary/20">
              <h3 className="font-serif text-xl mb-6">Commission Structure</h3>
              <div className="space-y-4">
                {[
                  { tier: "Tier 1\u20133", range: "$17,700\u2013$53,100", commission: "10%", example: "$1,770\u2013$5,310" },
                  { tier: "Tier 4", range: "$150,000", commission: "12%", example: "$18,000" },
                  { tier: "Tier 5", range: "$210,000", commission: "15%", example: "$31,500" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 p-3 rounded-md bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">{row.tier}</p>
                      <p className="text-xs text-muted-foreground">Base: {row.range}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm font-bold text-primary">{row.commission}</p>
                      <p className="text-xs text-muted-foreground">{row.example} per referral</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Commissions paid within 30 days of project completion. Volume bonuses available
                for 5+ referrals per quarter.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50" id="mro">
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
                    title: "Customer Upsell",
                    desc: "Offer documentation as a premium add-on during scheduled maintenance events. Increase per-customer revenue.",
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
                  <h2 className="font-serif text-3xl">Add Six-Figure Revenue</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Offer documentation services to your maintenance customers as a premium value-add.
                We coordinate around your maintenance schedule for seamless integration with minimal
                disruption to your operations.
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
                <Link href="/contact">
                  <Button data-testid="button-mro-apply">
                    Explore MRO Partnership <ArrowRight className="ml-2 h-4 w-4" />
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

      <section className="py-24" id="insurance">
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
              policyholders. Faster claims processing, reduced loss adjustment expenses, and
              fewer disputes.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Baseline Documentation",
                  desc: "Pre-existing condition 3D scans establish clear baselines before any incident occurs.",
                },
                {
                  title: "Faster Claims Processing",
                  desc: "Digital documentation accelerates claims review and reduces adjustment time significantly.",
                },
                {
                  title: "Reduced Disputes",
                  desc: "Objective 3D evidence eliminates disagreements about pre-existing vs. incident damage.",
                },
                {
                  title: "Post-Incident Response",
                  desc: "48\u201372 hour rapid deployment for post-incident documentation and pre/post comparison analysis.",
                },
                {
                  title: "Policyholder Programs",
                  desc: "Offer premium discounts to policyholders who maintain current documentation baselines.",
                },
                {
                  title: "Pre-Approved Vendor",
                  desc: "Streamline your vendor approval process with our insurance-grade documentation standards.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-5" data-testid={`card-insurance-${i}`}>
                  <h3 className="font-medium text-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" data-testid="button-insurance-contact">
                  Contact Us About Insurance Partnerships <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf6f1]">
              Let&rsquo;s Build Something Together
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Every partnership is customized. Contact us to discuss how we can create value
              for your business and your clients.
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-8" data-testid="button-partners-cta">
                Schedule Partnership Discussion <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
