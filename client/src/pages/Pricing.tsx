import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const regions = [
  { name: "Texas (Local)", travelDays: 0, expenses: 0 },
  { name: "Regional (OK, LA, AR, NM)", travelDays: 1, expenses: 700 },
  { name: "Southwest (AZ, CA)", travelDays: 1, expenses: 1500 },
  { name: "East Coast (FL, GA, NC)", travelDays: 1.5, expenses: 2000 },
  { name: "West Coast / Remote US", travelDays: 2, expenses: 2500 },
  { name: "Canada", travelDays: 1.5, expenses: 2500 },
  { name: "Caribbean / Central America", travelDays: 2, expenses: 3500 },
  { name: "Europe (UK, France, Germany)", travelDays: 3, expenses: 8000 },
  { name: "Middle East / Asia", travelDays: 4.5, expenses: 12000 },
];

const tierOptions = [
  { tier: 1, name: "Tier 1 \u2013 Essential", base: 17700 },
  { tier: 2, name: "Tier 2 \u2013 Complete", base: 35400 },
  { tier: 3, name: "Tier 3 \u2013 Premium", base: 53100 },
  { tier: 4, name: "Tier 4 \u2013 Executive", base: 150000 },
  { tier: 5, name: "Tier 5 \u2013 Flagship", base: 210000 },
];

const comparisonRows = [
  {
    feature: "On-site scanning (no shipping)",
    provenarc: true,
    competitor: false,
  },
  {
    feature: "3D aircraft scanning",
    provenarc: true,
    competitor: false,
  },
  {
    feature: "Global service coverage",
    provenarc: true,
    competitor: false,
  },
  {
    feature: "Insurance-grade documentation",
    provenarc: true,
    competitor: false,
  },
  {
    feature: "Original documents never leave custody",
    provenarc: true,
    competitor: false,
  },
  {
    feature: "Integrated records + 3D in one visit",
    provenarc: true,
    competitor: false,
  },
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const tier = tierOptions.find((t) => t.tier.toString() === selectedTier);
  const region = regions.find((r) => r.name === selectedRegion);

  const travelTimeCost = region ? region.travelDays * 2400 : 0;
  const travelExpenses = region ? region.expenses : 0;
  const baseService = tier ? tier.base : 0;
  const totalEstimate = baseService + travelTimeCost + travelExpenses;

  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Pricing
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              Transparent, Premium Pricing
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              We&rsquo;re not competing on price. We&rsquo;re competing on value, convenience, and
              global reach. Travel expenses are billed at cost with no markup.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Rate Card
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Daily Rate Structure</h2>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <p className="text-xs font-mono text-primary tracking-wider uppercase mb-2">
                Field Service
              </p>
              <p className="font-mono text-3xl font-bold">$7,500</p>
              <p className="text-xs text-muted-foreground mt-1">per day (standard)</p>
              <p className="font-mono text-lg font-bold mt-2">$15,000</p>
              <p className="text-xs text-muted-foreground">per day (ultra-premium)</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-xs font-mono text-primary tracking-wider uppercase mb-2">
                Post-Production
              </p>
              <p className="font-mono text-3xl font-bold">$3,400</p>
              <p className="text-xs text-muted-foreground mt-1">per day (standard)</p>
              <p className="font-mono text-lg font-bold mt-2">$5,000</p>
              <p className="text-xs text-muted-foreground">per day (ultra-premium)</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-xs font-mono text-primary tracking-wider uppercase mb-2">
                Travel Time
              </p>
              <p className="font-mono text-3xl font-bold">$2,400</p>
              <p className="text-xs text-muted-foreground mt-1">per day (portal-to-portal)</p>
              <p className="text-sm text-muted-foreground mt-2">+ actual expenses at cost</p>
            </Card>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="border rounded-md">
              <div className="grid grid-cols-6 gap-4 p-4 bg-muted/50 text-xs font-mono uppercase tracking-wider text-muted-foreground border-b">
                <div className="col-span-2">Tier</div>
                <div>Field Days</div>
                <div>Post Days</div>
                <div>Base Price</div>
                <div>Total Range</div>
              </div>
              {[
                { tier: "Tier 1", name: "Essential", field: 1, post: 3, base: "$17,700", range: "$17,700\u2013$32,000" },
                { tier: "Tier 2", name: "Complete", field: 2, post: 6, base: "$35,400", range: "$35,400\u2013$52,000" },
                { tier: "Tier 3", name: "Premium", field: 3, post: 9, base: "$53,100", range: "$53,100\u2013$72,000" },
                { tier: "Tier 4", name: "Executive", field: 5, post: 15, base: "$150,000", range: "$150,000\u2013$185,000" },
                { tier: "Tier 5", name: "Flagship", field: 7, post: 21, base: "$210,000", range: "$210,000\u2013$260,000" },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-6 gap-4 p-4 text-sm items-center ${
                    i % 2 !== 0 ? "bg-muted/20" : ""
                  } ${i < 4 ? "border-b" : ""}`}
                  data-testid={`pricing-row-${i}`}
                >
                  <div className="col-span-2">
                    <span className="font-mono text-primary text-xs">{row.tier}</span>
                    <span className="ml-2 text-muted-foreground">{row.name}</span>
                  </div>
                  <div className="font-mono">{row.field}</div>
                  <div className="font-mono">{row.post}</div>
                  <div className="font-mono font-medium">{row.base}</div>
                  <div className="font-mono text-muted-foreground text-xs">{row.range}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              3:1 post-production ratio &mdash; three days of quality control for every day in the
              field
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Estimate Your Investment
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Travel Cost Estimator</h2>
            <p className="text-muted-foreground mt-4">
              Select your service tier and location for an estimated total investment.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <Card className="p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Tier</label>
                  <Select value={selectedTier} onValueChange={setSelectedTier}>
                    <SelectTrigger data-testid="select-tier">
                      <SelectValue placeholder="Select tier" />
                    </SelectTrigger>
                    <SelectContent>
                      {tierOptions.map((t) => (
                        <SelectItem key={t.tier} value={t.tier.toString()}>
                          {t.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Aircraft Location</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger data-testid="select-region">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((r) => (
                        <SelectItem key={r.name} value={r.name}>
                          {r.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {tier && region && (
                <div className="space-y-3 border-t pt-6">
                  <div className="flex items-center justify-between gap-1 text-sm">
                    <span className="text-muted-foreground">Base service</span>
                    <span className="font-mono">{formatCurrency(baseService)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-sm">
                    <span className="text-muted-foreground">
                      Travel time ({region.travelDays} {region.travelDays === 1 ? "day" : "days"} &times; $2,400)
                    </span>
                    <span className="font-mono">{formatCurrency(travelTimeCost)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-sm">
                    <span className="text-muted-foreground">Estimated travel expenses</span>
                    <span className="font-mono">{formatCurrency(travelExpenses)}</span>
                  </div>
                  <div className="border-t pt-3 flex items-center justify-between gap-1 font-medium">
                    <span>Estimated Total Investment</span>
                    <span className="font-mono text-xl" data-testid="text-estimated-total">
                      {formatCurrency(totalEstimate)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    This is an estimate. Actual travel expenses are billed at cost with receipts
                    provided. Contact us for a detailed, customized quote.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full mt-4" data-testid="button-estimator-quote">
                      Request Detailed Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )}

              {(!tier || !region) && (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Select a service tier and location above to see your estimated investment.
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Why Premium
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              How We Compare
            </h2>
          </motion.div>

          <motion.div {...fadeUp}>
            <Card className="p-0">
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 border-b text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <div>Feature</div>
                <div className="text-center">Provenarc</div>
                <div className="text-center">Ship-It-In Services</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-4 p-4 text-sm items-center ${
                    i < comparisonRows.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="text-muted-foreground">{row.feature}</div>
                  <div className="text-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                  </div>
                  <div className="text-center text-muted-foreground">&mdash;</div>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Terms
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Payment & Cancellation</h2>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4">Payment Schedule</h3>
              <ul className="space-y-3">
                {[
                  "50% deposit upon booking (reserves field service date)",
                  "50% balance due upon delivery of final deliverables",
                  "Travel expenses reconciled at completion with receipts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-medium mb-4 mt-8">Accepted Payment Methods</h3>
              <ul className="space-y-2">
                {[
                  "Wire transfer (preferred for international)",
                  "ACH / bank transfer",
                  "Corporate check",
                  "Credit card (3% processing fee on amounts over $10,000)",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground">&bull; {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Cancellation Policy</h3>
              <ul className="space-y-3">
                {[
                  "30+ days notice: Full refund minus $1,000 administrative fee",
                  "15\u201329 days notice: 50% refund (resources committed)",
                  "14 days or less: No refund (travel booked, schedule blocked)",
                  "Weather/mechanical delays: Reschedule at no penalty",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-mono text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf6f1]">
              Ready for a Detailed Quote?
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Every engagement is customized. Let&rsquo;s discuss your specific aircraft and
              requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-8" data-testid="button-pricing-cta">
                Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
