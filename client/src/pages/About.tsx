import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Globe, Shield, Scan, FileCheck, Users, Handshake,
  Building2, ArrowRight, CheckCircle2, BookOpen, Award,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const pillars = [
  {
    icon: BookOpen,
    title: "Deep Aviation Knowledge",
    description:
      "We do not simply scan pages. We understand what those pages mean. When we digitize an airworthiness directive compliance log, we recognize critical entries that impact aircraft value. When we document a major modification, we know which supporting documentation must accompany it. Our technicians can identify gaps in records before they become transaction obstacles because we have three decades of experience navigating these exact challenges.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality Standards",
    description:
      "Our proprietary digitization process has been refined over thousands of hours of field operations. We never compress timelines at the expense of quality because precision demands time. Every scanned page undergoes OCR verification. Every 3D scan is processed through multiple quality checkpoints. Every deliverable is reviewed by senior team members before release.",
  },
  {
    icon: Globe,
    title: "Global Concierge Capability",
    description:
      "We have documented aircraft in hangars across five continents. Whether your aircraft resides in Texas or Tokyo, we bring the same equipment, the same expertise, and the same white-glove service. Your irreplaceable logbooks never touch a carrier — we scan on-site, return originals before we leave, and upload digital files to secure cloud storage.",
  },
];

const partnerships = [
  {
    icon: Handshake,
    title: "Broker & Agent Partnerships",
    description:
      "Referral compensation, white-label documentation under your brand, co-branded premium packages, and expedited service for transaction deadlines.",
    benefits: [
      "Three partnership models to match your business",
      "Expedited service for active transactions",
      "Marketing assets for differentiated listings",
      "Transaction-ready documentation packages",
    ],
  },
  {
    icon: Building2,
    title: "MRO Partnerships",
    description:
      "Offer documentation services to your maintenance customers as a premium value-add. We coordinate around your maintenance schedule for seamless integration.",
    benefits: [
      "Revenue share on referred clients",
      "Documentation during scheduled maintenance",
      "Fleet program coordination",
      "Co-branded deliverables",
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
      "Premium discount programs",
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
              Three decades of aviation expertise. Museum-grade preservation standards. White-glove
              global service. We are building the world's premier documentation and preservation
              company for high-value transportation assets.
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
                  Three Decades of Aviation Excellence
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Provenarc Aero Solutions was founded on a singular conviction: aircraft documentation
                  should reflect the same precision and permanence as the aircraft themselves.
                </p>
                <p>
                  Our co-founders bring more than thirty years of combined experience across aviation
                  maintenance, aerospace engineering, and records management. This is not a technology
                  startup experimenting with aviation — this is aviation professionals bringing proven
                  methodologies into the digital age.
                </p>
                <p>
                  Every member of our team has worked directly with aircraft, maintenance logs, and
                  regulatory compliance. We understand FAA Part 43 requirements not from reading manuals
                  but from years of practical application. When we digitize an airworthiness directive
                  compliance log, we recognize critical entries that impact aircraft value.
                </p>
                <p>
                  We integrated 3D scanning and drone-based exterior documentation to create baseline
                  condition records of the aircraft itself — exterior, interior, and mechanical systems.
                  Combined with museum-grade archival volumes, we created a new category: complete
                  aircraft documentation and permanent heritage preservation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-16">
            <Card className="p-6 lg:p-8 border-primary/20 max-w-2xl mx-auto">
              <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">
                Why "Provenarc"
              </p>
              <h3 className="font-serif text-2xl mb-3">
                <span className="text-primary">Proven</span>ance + <span className="text-primary">Arc</span>hive
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Provenance</strong> — the origin, history,
                and authenticity of an asset.{" "}
                <strong className="text-foreground">Archive</strong> — permanent preservation
                for future reference. Every aircraft has a story. We preserve it with museum-grade
                precision.
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
                bio: "Decades of practical aviation maintenance and engineering expertise. Deep knowledge of aircraft documentation requirements, records compliance, and owner/operator needs across all aircraft classes — from piston singles to ultra-premium business jets.",
              },
              {
                name: "Daniel Wiglesworth",
                role: "Co-Managing Member",
                bio: "Strategic operations leadership with experience in premium service delivery, technology integration, and building scalable concierge-model businesses for high-value clients. Drives the company's expansion into marine and collector vehicle documentation.",
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
            <h2 className="font-serif text-3xl md:text-4xl">Three Pillars of Excellence</h2>
          </motion.div>

          <div className="space-y-6">
            {pillars.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 lg:p-8" data-testid={`card-pillar-${i}`}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
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
                description: "Every scan, every page, every data point handled with methodical accuracy. Our 3:1 quality ratio ensures nothing is missed. Three days of processing for every day in the field.",
              },
              {
                title: "Integrity",
                description: "Independence from OEMs, brokerages, and insurers means our only priority is accurate documentation. No conflicts. No agenda. We serve the asset and the owner.",
              },
              {
                title: "Discretion",
                description: "Every engagement operates under mutual NDA. We protect your information with the same standards applied by private banks and family offices. Client identities never disclosed.",
              },
              {
                title: "Permanence",
                description: "Museum-grade archival materials with century-plus lifespans. Digital archives on enterprise-grade infrastructure. We create documentation designed to outlast generations.",
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
              A Texas Limited Liability Company with three operating divisions serving distinct
              high-value asset markets worldwide.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 max-w-lg mx-auto">
            <div className="border rounded-md p-6">
              <p className="font-serif text-lg text-center mb-6">Provenarc Group LLC</p>
              <div className="space-y-3">
                {[
                  { name: "Provenarc Aero Solutions", status: "Active", desc: "Aviation Documentation & Preservation", href: "/aero" },
                  { name: "Provenarc Marine", status: "Active", desc: "Maritime Vessel Documentation", href: "/marine" },
                  { name: "Provenarc Autos & Classics", status: "Active", desc: "Collector Vehicle Provenance", href: "/autos-classics" },
                ].map((sub, i) => (
                  <Link key={i} href={sub.href}>
                    <div
                      className="flex items-center justify-between gap-4 p-3 rounded-md bg-muted/50 cursor-pointer hover:bg-muted/80 transition-colors"
                      data-testid={`link-division-${i}`}
                    >
                      <div>
                        <p className="text-sm font-medium">{sub.name}</p>
                        <p className="text-xs text-muted-foreground">{sub.desc}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
                          {sub.status}
                        </span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      </div>
                    </div>
                  </Link>
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
              Let's Discuss How We Can Help
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Whether you own an aircraft, a vessel, or a collector vehicle — we would be honored to
              discuss your documentation requirements.
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
