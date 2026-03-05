import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Globe, Shield, Scan, FileCheck, Users, Handshake,
  Building2, ArrowRight, CheckCircle2,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const differentiators = [
  {
    icon: Globe,
    title: "Global Concierge Model",
    description:
      "We travel to your aircraft\u2019s location\u2014anywhere in the world. No shipping carriers, no risk to original documents, and no coordinating multiple vendors.",
  },
  {
    icon: Scan,
    title: "Integrated 3D Scanning",
    description:
      "The only aviation records service offering integrated 3D documentation. From logbook pages to point clouds\u2014complete provenance preservation in a single visit.",
  },
  {
    icon: FileCheck,
    title: "3:1 Quality Ratio",
    description:
      "Three days of post-production quality control for every day in the field. OCR verification, metadata tagging, and multi-stage review ensure insurance-grade deliverables.",
  },
  {
    icon: Shield,
    title: "Zero Shipping Risk",
    description:
      "Your irreplaceable logbooks never touch a carrier. We scan on-site, return originals before we leave, and upload digital files to secure cloud storage.",
  },
];

const partnerships = [
  {
    icon: Handshake,
    title: "Broker Referral Program",
    description:
      "Partnership compensation, white-label services, or co-branded packages. Differentiate your listings and close deals faster with professional documentation.",
    benefits: [
      "Partnership compensation for qualified leads",
      "White-label documentation under your brand",
      "Expedited service for transaction deadlines",
      "Competitive advantage for your listings",
    ],
  },
  {
    icon: Building2,
    title: "MRO Partnerships",
    description:
      "Offer documentation services to your maintenance customers as a value-add. We coordinate around your maintenance schedule for seamless integration.",
    benefits: [
      "Revenue share on referred clients",
      "Documentation during scheduled maintenance",
      "Fleet program coordination",
      "Custom integration with your workflow",
    ],
  },
  {
    icon: Shield,
    title: "Insurance Carriers",
    description:
      "Baseline 3D scans reduce claims disputes and accelerate resolution. Partner with us to offer documentation programs to your policyholders.",
    benefits: [
      "Baseline documentation for hull policies",
      "Post-incident rapid deployment",
      "Claims support and expert testimony",
      "Premium discount programs for insured aircraft",
    ],
  },
];

export default function About() {
  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              About Provenarc
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              Provenance. Precision. Permanence.
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Founded by aviation professionals who understand irreplaceable value. We&rsquo;re
              building the world&rsquo;s premier aircraft documentation and preservation company.
              On-site. Worldwide. No compromises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
                  Our Story
                </p>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                  Born from a Simple Question
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Why would anyone ship irreplaceable aircraft logbooks through a carrier that loses
                  thousands of packages annually? The aviation industry&rsquo;s approach to records
                  digitization was fundamentally broken: ship your most valuable documents across the
                  country and hope for the best.
                </p>
                <p>
                  Provenarc Aero Solutions was founded to solve this problem. We bring
                  professional-grade scanning equipment to the aircraft&rsquo;s location, digitize
                  everything on-site, and return your originals before we leave. Zero shipping risk.
                  Zero days out of your custody.
                </p>
                <p>
                  Then we went further. We integrated 3D scanning to create baseline documentation of
                  the aircraft itself\u2014exterior, interior, and mechanical systems. No other
                  company in aviation offers this combination. We created a new category: complete
                  aircraft documentation and preservation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-16">
            <Card className="p-6 lg:p-8 border-primary/20 max-w-2xl mx-auto">
              <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">
                Why &ldquo;Provenarc&rdquo;
              </p>
              <h3 className="font-serif text-2xl mb-3">
                <span className="text-primary">Proven</span>ance + <span className="text-primary">Arc</span>hive
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Provenance</strong> &mdash; the origin, history,
                and authenticity of an asset.{" "}
                <strong className="text-foreground">Archive</strong> &mdash; permanent preservation
                for future reference. Every aircraft has a story. We preserve it.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Leadership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Co-Managing Members</h2>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Dalton Montes",
                role: "Co-Managing Member",
                bio: "Aviation industry expertise with deep knowledge of aircraft documentation requirements, maintenance records compliance, and owner/operator needs across all aircraft classes.",
              },
              {
                name: "Daniel Wiglesworth",
                role: "Co-Managing Member",
                bio: "Strategic operations leadership with experience in premium service delivery, technology integration, and building scalable concierge-model businesses for high-value clients.",
              },
            ].map((member, i) => (
              <Card key={i} className="p-6" data-testid={`card-team-${i}`}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl">{member.name}</h3>
                <p className="text-sm text-primary font-mono tracking-wider uppercase mt-1">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              What Sets Us Apart
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Our Competitive Advantage</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-diff-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Core Values
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Our Principles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Precision",
                description: "Every scan, every page, every data point handled with methodical accuracy. Our 3:1 quality ratio ensures nothing is missed.",
              },
              {
                title: "Integrity",
                description: "Independence from OEMs, brokerages, and insurers means our only priority is accurate documentation. No conflicts. No agenda.",
              },
              {
                title: "Discretion",
                description: "Every engagement operates under mutual NDA. We protect your information with the same standards applied by private banks and family offices.",
              },
              {
                title: "Innovation",
                description: "Integrated 3D scanning and records digitization in a single concierge visit. We created a new category in aviation documentation.",
              },
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-principle-${i}`}>
                  <h3 className="font-serif text-2xl mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-4">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Corporate Structure
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Provenarc Group LLC</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A Texas Limited Liability Company with three operating subsidiaries serving distinct
              high-value asset markets.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 max-w-lg mx-auto">
            <div className="border rounded-md p-6">
              <p className="font-serif text-lg text-center mb-6">Provenarc Group LLC</p>
              <div className="space-y-3">
                {[
                  { name: "Provenarc Aero Solutions", status: "Active", desc: "Aviation Documentation" },
                  { name: "Provenarc Marine", status: "Future", desc: "Marine Vessel Documentation" },
                  { name: "Provenarc Autos & Classics", status: "Future", desc: "Collector Vehicle Provenance" },
                ].map((sub, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 p-3 rounded-md bg-muted/50"
                  >
                    <div>
                      <p className="text-sm font-medium">{sub.name}</p>
                      <p className="text-xs text-muted-foreground">{sub.desc}</p>
                    </div>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded ${
                        sub.status === "Active"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Partnerships
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Work With Us</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              We partner with brokers, MRO facilities, and insurance carriers to deliver
              comprehensive documentation to their clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col" data-testid={`card-partner-${i}`}>
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <partner.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{partner.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {partner.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
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
              Let&rsquo;s Discuss a Partnership
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Whether you&rsquo;re a broker, MRO, or insurance carrier, we&rsquo;d love to explore
              how we can work together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-8" data-testid="button-about-cta">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-[#b8b0a4] text-sm mt-4">
              No commitment required. 30-minute confidential call.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
