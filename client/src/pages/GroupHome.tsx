import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Plane, Anchor, Car, ArrowRight, Award,
  Globe, BookOpen, Cpu, Shield,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const divisions = [
  {
    icon: Plane,
    name: "Aero Solutions",
    tagline: "Preserving Aviation Heritage with Three Decades of Precision",
    description:
      "Complete aircraft documentation and 3D preservation for piston aircraft through ultra-premium jets. On-site logbook digitization, drone-based exterior scanning, museum-grade archival volumes, and lifetime RecordVault cloud hosting.",
    href: "/aero",
    platform: "RecordVault",
  },
  {
    icon: Anchor,
    name: "Marine",
    tagline: "Preserving Maritime Heritage with Three Decades of Precision",
    description:
      "Professional vessel documentation combining maritime expertise, drone-based hull and superstructure scanning, and museum-grade archival volumes. From coastal cruisers to superyachts across four continents and seventeen flag jurisdictions.",
    href: "/marine",
    platform: "VesselVault",
  },
  {
    icon: Car,
    name: "Autos & Classics",
    tagline: "Where Automotive Heritage Meets Museum-Grade Preservation",
    description:
      "Collector vehicle documentation combining automotive expertise, drone-based exterior and chassis scanning, and museum-grade archival volumes. From pre-war classics to modern supercars, concours preparation to racing heritage authentication.",
    href: "/autos-classics",
    platform: "VaultClassic",
  },
];

const trustPillars = [
  {
    icon: Award,
    title: "Three Decades of Combined Expertise",
    description:
      "Our founders bring more than thirty years of experience across aviation maintenance, marine surveying, automotive restoration, and documentation compliance.",
  },
  {
    icon: BookOpen,
    title: "Museum-Grade Archival Standards",
    description:
      "Acid-free paper with a century-plus lifespan. Smyth-sewn binding. Hand-tooled leather covers with gold leaf embossing. Preservation-quality deliverables designed to outlast generations.",
  },
  {
    icon: Globe,
    title: "Global White-Glove Service",
    description:
      "We travel to your asset — any hangar, any marina, any collection facility on five continents. Your original documents never leave your custody.",
  },
  {
    icon: Cpu,
    title: "Proprietary Technology",
    description:
      "FAA Part 107 certified drone scanning, LiDAR dimensional accuracy, 20+ megapixel imaging, professional OCR, and secure cloud platforms purpose-built for each division.",
  },
];

export default function GroupHome() {
  return (
    <div>
      <section className="relative min-h-[95vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-[#141210] to-[#1a1714]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-[#c9a96e] mx-auto mb-12" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#faf6f1] tracking-[0.08em] leading-[1.05]"
            data-testid="text-group-headline"
          >
            PROVENARC
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-24 h-px bg-[#c9a96e]/50 mx-auto my-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#c9a96e] leading-relaxed tracking-wide"
            data-testid="text-group-tagline"
          >
            Preserving the Heritage of the World's Finest Assets
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="text-[#b8b0a4] text-base sm:text-lg mt-8 max-w-2xl mx-auto leading-relaxed"
            data-testid="text-group-subtitle"
          >
            Three decades of precision documentation. Museum-grade archival standards.
            White-glove global service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            className="mt-12"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="px-10"
                data-testid="button-group-consultation"
              >
                Schedule a Consultation
              </Button>
            </Link>
            <p className="text-[#b8b0a4]/50 text-sm mt-5">
              No commitment required. Confidential discovery session.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-32" data-testid="section-divisions">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.4em] uppercase mb-4">
              Our Divisions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Three Practices, One Standard of Excellence
            </h2>
          </motion.div>

          <div className="space-y-8">
            {divisions.map((division, i) => (
              <motion.div
                key={division.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              >
                <Link href={division.href}>
                  <Card
                    className="p-8 lg:p-12 group cursor-pointer border-border/50 hover:border-primary/30 transition-all duration-500"
                    data-testid={`card-division-${division.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                          <division.icon className="h-7 w-7 text-primary" />
                        </div>
                        <div className="lg:hidden">
                          <p className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-1">
                            Provenarc
                          </p>
                          <h3 className="font-serif text-2xl">{division.name}</h3>
                        </div>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-1 hidden lg:block">
                          Provenarc
                        </p>
                        <h3 className="font-serif text-2xl mb-2 hidden lg:block">
                          {division.name}
                        </h3>
                        <p className="text-sm text-primary/80 italic mb-3">
                          {division.tagline}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                          {division.description}
                        </p>
                        <p className="text-xs text-muted-foreground/60 mt-3 font-mono tracking-wider">
                          Platform: {division.platform}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-sm font-medium hidden sm:inline">Explore</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-card/30" data-testid="section-trust-pillars">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.4em] uppercase mb-4">
              The Provenarc Standard
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              What Unites Every Engagement
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-8 h-full" data-testid={`card-pillar-${i}`}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg mb-3">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32" data-testid="section-philosophy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c9a96e]/40 mx-auto mb-10" />
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.4em] uppercase mb-6">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
              Permanent Preservation at Museum Standards
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Every aircraft, every vessel, every collector vehicle represents decades of engineering
              excellence, careful stewardship, and personal investment. At Provenarc Group, we believe
              the documentation of these extraordinary assets should reflect the same precision and
              permanence as the assets themselves.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We never compromise on quality. We offer permanent preservation executed at museum
              standards. Our proprietary process has been refined over thousands of hours of field
              operations — every document receives individual attention, every 3D scan is processed
              through multiple quality checkpoints, every deliverable is reviewed by senior team
              members before release.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-4 w-4 text-primary" />
              <p className="text-sm text-primary italic">
                "This is not a commodity service. This is permanent preservation of heritage."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "30+", label: "Years Combined Experience" },
                { value: "5", label: "Continents Served" },
                { value: "3:1", label: "Post-Production Quality Ratio" },
                { value: "100+", label: "Year Archival Material Lifespan" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                  data-testid={`stat-group-${i}`}
                >
                  <p className="font-serif text-3xl md:text-4xl text-primary mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-32" data-testid="section-group-cta">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-[#141210] to-[#1a1714]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c9a96e]/40 mx-auto mb-10" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#faf6f1] leading-tight">
              Begin Your Documentation Journey
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Whether you own an aircraft, a vessel, or a collector vehicle, every engagement begins
              with a confidential discovery session.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="px-10" data-testid="button-group-cta-consultation">
                  Schedule a Discovery Session
                </Button>
              </Link>
            </div>
            <p className="text-[#b8b0a4]/50 text-sm mt-6">
              No commitment required. Thirty-minute confidential consultation.
              We will prepare a preliminary scope assessment regardless.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
