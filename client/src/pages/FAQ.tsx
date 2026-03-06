import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from '@/lib/animations';


const faqCategories = [
  {
    title: "Fit & Scope",
    items: [
      {
        q: "What types of aircraft and documentation do you handle?",
        a: "All aircraft classes from piston singles to ultra-premium jets. Five service tiers tailored to different aircraft and documentation needs. We handle logbooks, maintenance records, STCs, 337s, AD compliance, and more.",
      },
      {
        q: "Do you work with individual owners, fleet operators, or both?",
        a: "Both. Individual owners, fleet operators, brokerages, MRO facilities, and insurance carriers.",
      },
      {
        q: "What geographic regions do you serve?",
        a: "Worldwide. We\u2019ve documented aircraft across North America, Europe, Middle East, and Asia. Our team travels to any location.",
      },
    ],
  },
  {
    title: "Process & Timeline",
    items: [
      {
        q: "How does an engagement typically work?",
        a: "Four steps: Confidential Consultation \u2192 On-Site Mobilization \u2192 Precision Digitization & 3D Capture \u2192 Secure Delivery. Every engagement begins under mutual NDA.",
      },
      {
        q: "How long does on-site digitization take?",
        a: "Varies by tier and aircraft complexity. Typically 1\u20137 days on-site, followed by post-production processing. We coordinate to your schedule.",
      },
      {
        q: "What\u2019s required from our team during the process?",
        a: "Hangar access and someone to provide our team access to the aircraft and records. We handle everything else.",
      },
    ],
  },
  {
    title: "Investment & Value",
    items: [
      {
        q: "How is pricing structured?",
        a: "Your investment is shaped by four factors: aircraft type, documentation volume, timeline requirements, and deliverable specifications. You receive a detailed, fixed-price proposal after your discovery session \u2014 before any commitment. No surprise charges.",
      },
      {
        q: "What ROI should we expect?",
        a: "Aircraft with incomplete logbooks may lose 20\u201350% of their market value. Professional documentation protects your investment, accelerates sales, and provides insurance-grade baselines. The value typically far exceeds the investment.",
      },
      {
        q: "Is there a minimum engagement size?",
        a: "We offer five tiers to serve different aircraft classes. Schedule a discovery session and we\u2019ll recommend the right scope for your needs.",
      },
    ],
  },
  {
    title: "Security & Confidentiality",
    items: [
      {
        q: "How do you protect our data?",
        a: "AES-256 encryption at rest and in transit, role-based access control, geographic redundancy, full audit trail. Enterprise-grade security standards.",
      },
      {
        q: "Why don\u2019t you list your clients?",
        a: "By policy, we maintain strict confidentiality for all client relationships. Aviation records contain sensitive financial, operational, and ownership information. Our clients value our discretion as much as our technical expertise \u2014 and many chose us specifically because of it.",
      },
      {
        q: "What happens to our original documents during the process?",
        a: "Your original documents never leave your property. We scan everything on-site and return originals before our team departs. Zero days out of your custody.",
      },
    ],
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <div>
      <SEO
        title="Frequently Asked Questions | Provenarc Group"
        description="Answers to common questions about aircraft and vessel documentation services, pricing, timelines, technology, and the engagement process."
        canonical="https://provenarc.com/faq"
        jsonLd={faqJsonLd}
      />
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              FAQ
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our services, process, security, and how we
              protect your aviation records.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          {faqCategories.map((category, ci) => (
            <motion.div
              key={ci}
              {...fadeUp}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className={ci > 0 ? "mt-12" : ""}
            >
              <h2 className="font-serif text-2xl mb-6" data-testid={`faq-category-${ci}`}>
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${ci}-${i}`}
                    className="border rounded-md px-4"
                    data-testid={`faq-item-${ci}-${i}`}
                  >
                    <AccordionTrigger className="text-sm text-left hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf6f1]">
              Ready to protect your records? Book your session.
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              No commitment required. 30-minute confidential call. We&rsquo;ll share a preliminary scope assessment regardless.
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-8" data-testid="button-faq-cta">
                Schedule a Discovery Session <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
