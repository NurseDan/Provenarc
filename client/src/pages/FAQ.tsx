import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const faqCategories = [
  {
    title: "Service & Process",
    items: [
      {
        q: "How does the on-site process work?",
        a: "Our technician team travels to your aircraft\u2019s location with professional scanning equipment. We digitize all logbooks and records on-site, perform 3D scanning of the aircraft, verify quality, and return your originals before departing. Your documents never leave your custody.",
      },
      {
        q: "How far in advance should I book?",
        a: "Most clients book 30\u201360 days in advance. For expedited service or transaction deadlines, we can sometimes accommodate shorter timelines with an expedited service premium of 25\u201340%.",
      },
      {
        q: "What aircraft types do you service?",
        a: "We service all aircraft classes from piston singles to ultra-premium jets like the G650, Global 7500, and BBJ. Our five service tiers are tailored to different aircraft classes and documentation needs.",
      },
      {
        q: "Do you travel internationally?",
        a: "Yes. We provide global concierge service and have documented aircraft across North America, Europe, the Middle East, and Asia. Travel costs are billed at cost with receipts provided.",
      },
      {
        q: "What\u2019s the 3:1 quality ratio?",
        a: "For every day our technicians spend in the field scanning, we dedicate three days to post-production quality control. This includes OCR verification, metadata tagging, point cloud optimization, and multi-stage review to ensure insurance-grade deliverables.",
      },
      {
        q: "What happens if bad weather delays my service?",
        a: "Weather or mechanical delays are rescheduled at no penalty to you. We build flexibility into our scheduling specifically for aviation\u2019s unpredictable nature.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    items: [
      {
        q: "Why is Provenarc more expensive than ship-it-in services?",
        a: "We\u2019re not competing on price \u2014 we\u2019re competing on value, convenience, and security. Our pricing reflects global concierge travel, zero shipping risk, integrated 3D scanning, and insurance-grade quality control. The risk of losing irreplaceable logbooks in transit is eliminated entirely.",
      },
      {
        q: "What are the payment terms?",
        a: "50% deposit upon booking (reserves your field service date) and 50% balance due upon delivery of final deliverables. Travel expenses are reconciled at completion with receipts provided.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Wire transfer (preferred for international), ACH/bank transfer, corporate check, and credit card. A 3% processing fee applies to credit card payments over $10,000.",
      },
      {
        q: "What\u2019s included in travel costs?",
        a: "Travel costs include portal-to-portal travel time ($2,400/day) plus actual expenses (airfare, hotel, ground transport, meals) billed at cost with no markup. We provide receipts for all expenses.",
      },
      {
        q: "What\u2019s your cancellation policy?",
        a: "30+ days notice: full refund minus $1,000 administrative fee. 15\u201329 days: 50% refund (resources committed). 14 days or less: no refund (travel booked, schedule blocked). Weather/mechanical delays: reschedule at no penalty.",
      },
    ],
  },
  {
    title: "Security & Custody",
    items: [
      {
        q: "Do my logbooks ever leave my property?",
        a: "Never. All scanning is performed at your aircraft\u2019s location. Your original documents are returned to you before our technician team departs. Zero days out of your custody.",
      },
      {
        q: "How is my data secured?",
        a: "AES-256 encryption at rest and in transit, role-based access control, geographic data redundancy across multiple data centers, and full audit trail for all access. Enterprise-grade security standards.",
      },
      {
        q: "Who has access to my documentation?",
        a: "Only you and anyone you explicitly authorize through the RecordVault platform. We do not share, sell, or grant access to your documentation to any third party without your written consent.",
      },
      {
        q: "How long is my documentation hosted?",
        a: "Hosting terms vary by tier. Standard tiers include 5-year RecordVault hosting. Tier 4 includes lifetime hosting and Tier 5 includes 10-year platinum hosting. Extensions are available.",
      },
    ],
  },
  {
    title: "Partnerships",
    items: [
      {
        q: "How does the broker referral program work?",
        a: "Refer qualified aircraft owner clients to Provenarc. When the referred client completes a documentation project, you earn a 10\u201315% commission based on the service tier. Commissions are paid within 30 days of project completion.",
      },
      {
        q: "Can MRO facilities partner with Provenarc?",
        a: "Yes. We offer revenue-share partnerships where documentation services are performed at your facility during scheduled maintenance events. This creates an additional revenue stream with zero overhead for your operation.",
      },
      {
        q: "Is white-label service available?",
        a: "Yes. Broker partners can offer documentation services under their own brand with co-branded or white-label deliverables. This is particularly valuable for brokerages that want to differentiate their listings.",
      },
      {
        q: "How do I apply for partnership?",
        a: "Visit our Partners page and submit an inquiry, or contact us directly. We\u2019ll schedule a partnership discussion to explore the best program structure for your business.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div>
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
              Everything you need to know about our services, pricing, security, and partnership
              programs.
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
              Still Have Questions?
            </h2>
            <p className="text-[#b8b0a4] text-lg mt-4">
              Schedule a 30-minute discovery call and we&rsquo;ll answer everything.
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-8" data-testid="button-faq-cta">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
