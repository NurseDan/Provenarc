import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import {
  Anchor, Ship, Compass, Waves, Globe, Shield,
  Scan, Lock, FileCheck, Camera, BookOpen,
  CheckCircle2, Clock, ArrowRight,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const plannedServices = [
  {
    icon: Scan,
    title: "Drone Hull & Superstructure Scanning",
    description:
      "FAA Part 107 certified drone operators capture comprehensive exterior documentation — from keel to masthead — using LiDAR and 20+ megapixel imaging. No scaffolding, no dry-dock required.",
  },
  {
    icon: FileCheck,
    title: "Flag State Registry Packages",
    description:
      "Complete documentation packages engineered to satisfy seventeen flag state jurisdictions, from the Cayman Islands Maritime Authority to the Marshall Islands Registry.",
  },
  {
    icon: BookOpen,
    title: "Museum-Grade Archival Volumes",
    description:
      "Hand-tooled leather covers, gold leaf embossing, acid-free paper rated for 100+ year lifespan. Every vessel deserves a record as exceptional as the asset itself.",
  },
  {
    icon: Lock,
    title: "VesselVault Cloud Platform",
    description:
      "Secure, private cloud hosting for all digital documentation. Instant access from any device. Cryptographically authenticated records for survey, insurance, and resale.",
  },
  {
    icon: Camera,
    title: "Marine Survey Integration",
    description:
      "Deliverables engineered to integrate with hull and machinery insurance, P&I club documentation, and pre-purchase survey reports to insurance-grade verification standards.",
  },
  {
    icon: Globe,
    title: "Worldwide White-Glove Deployment",
    description:
      "From the Mediterranean to the Pacific, we travel to your vessel — any marina, any anchorage on five continents. Your original documents never leave your custody.",
  },
];

const vesselTypes = [
  "Sailing Yacht (under 40ft)",
  "Sailing Yacht (40–80ft)",
  "Sailing Yacht (Superyacht 80ft+)",
  "Motor Yacht (under 50ft)",
  "Motor Yacht (50–100ft)",
  "Motor Yacht (Superyacht 100ft+)",
  "Classic / Heritage Vessel",
  "Commercial Vessel",
  "Other",
];

const interestSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  vesselType: z.string().optional(),
});

type InterestFormValues = z.infer<typeof interestSchema>;

export default function MarineTeaser() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InterestFormValues>({
    resolver: zodResolver(interestSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: InterestFormValues) =>
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: "Marine Division — Early Interest Registration",
          message: data.vesselType
            ? `Vessel type: ${data.vesselType}`
            : "No vessel type specified.",
        }),
      }).then((r) => {
        if (!r.ok) throw new Error("Submission failed");
        return r.json();
      }),
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Registration received",
        description:
          "We'll be in touch as the Marine division launches. Thank you for your interest.",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InterestFormValues) => mutation.mutate(data);

  return (
    <div>
      <SEO
        title="Provenarc Marine | Coming Soon — Premium Vessel Documentation"
        description="Provenarc Marine is launching soon. Register your interest to be among the first to access museum-grade vessel documentation, drone hull scanning, and VesselVault cloud hosting."
        canonical="https://provenarc.com/marine"
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c12] via-[#0d1219] to-[#111820]" />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-[#c9a96e]/30 rounded-full px-5 py-1.5 mb-10"
          >
            <Clock className="h-3.5 w-3.5 text-[#c9a96e]" />
            <span className="text-[#c9a96e] font-mono text-xs tracking-[0.25em] uppercase">
              Launching Soon
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#faf6f1] tracking-[0.08em]">
                PROVENARC
              </span>
              <div className="w-px h-12 bg-[#c9a96e]/40 hidden sm:block" />
              <div className="flex flex-col items-start hidden sm:flex">
                <Anchor className="h-8 w-8 text-[#c9a96e]" />
              </div>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#c9a96e] tracking-wide">
              Marine Division
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="w-24 h-px bg-[#c9a96e]/40 mx-auto my-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-[#b8b0a4] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            The same museum-grade documentation standards that define Provenarc Aero — now
            coming to superyachts, classic vessels, and the world's finest maritime assets.
            Register your interest to be among the first to know when we launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-3 text-[#b8b0a4]/60 text-sm"
          >
            <Ship className="h-4 w-4 text-[#c9a96e]/60" />
            <span>Superyachts · Classic Vessels · Coastal Cruisers · Commercial Fleet</span>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Planned Services */}
      <section className="py-32" data-testid="section-marine-services">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              What's Coming
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              The Full Provenarc Standard, At Sea
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              Every capability we've refined over three decades of aviation documentation —
              re-engineered for the unique demands of the marine environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              >
                <Card
                  className="p-7 h-full border-border/50 hover:border-primary/20 transition-colors duration-500"
                  data-testid={`card-marine-service-${i}`}
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
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
        </div>
      </section>

      {/* Why Marine section */}
      <section className="py-32 bg-card/30" data-testid="section-marine-why">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              The Marine Imperative
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Why Maritime Documentation Demands a Specialist
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Waves,
                title: "Environmental Complexity",
                description:
                  "Saltwater corrosion, UV degradation, and the relentless mechanical stress of open-ocean operation create documentation challenges no land-based protocol was designed to address.",
              },
              {
                icon: Compass,
                title: "International Registry Navigation",
                description:
                  "Seventeen flag state jurisdictions. Each demands specific documentation formats, certification standards, and regulatory compliance packages we're purpose-built to deliver.",
              },
              {
                icon: Shield,
                title: "Insurance & Survey Integration",
                description:
                  "Every scan, measurement, and archival entry is engineered to meet hull and machinery insurance requirements, P&I club standards, and pre-purchase survey thresholds.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Registration */}
      <section className="py-32" data-testid="section-marine-interest">
        <div className="max-w-xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c9a96e]/40 mx-auto mb-10" />
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Register Your Interest
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">
              Be Among the First to Know
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Leave your details and we'll notify you the moment Provenarc Marine is ready to
              take engagements. We'll also reach out personally if your vessel type is a strong
              fit for our early-access programme.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <Card className="p-10 text-center border-primary/20">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-5" />
                <h3 className="font-serif text-2xl mb-3">You're on the list</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We've received your registration. When Provenarc Marine launches, you'll be
                  among the first to hear from us. Thank you for your interest.
                </p>
              </Card>
            ) : (
              <Card className="p-8 border-border/50">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Vessel Type <span className="text-muted-foreground/60 text-xs">(optional)</span></Label>
                    <Select onValueChange={(val) => setValue("vesselType", val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vessel category" />
                      </SelectTrigger>
                      <SelectContent>
                        {vesselTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Registering…" : (
                      <span className="flex items-center gap-2">
                        Register Interest <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground/60 text-center leading-relaxed">
                    We respect your privacy. Your details will only be used to notify you about
                    the Provenarc Marine launch. No spam, no third parties.
                  </p>
                </form>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA back to Aero */}
      <section className="relative py-24 bg-card/30" data-testid="section-marine-aero-cta">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.3em] uppercase mb-5">
              Available Now
            </p>
            <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-5">
              Our Aviation Division is Open for Engagements
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              While we prepare the Marine launch, Provenarc Aero is actively serving aircraft
              owners worldwide — piston aircraft through ultra-premium jets.
            </p>
            <a href="/aero">
              <Button size="lg" variant="outline">
                <span className="flex items-center gap-2">
                  Explore Aero Solutions <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
