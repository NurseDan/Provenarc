import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Provenarc Group website and services (collectively, "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services. These Terms apply to all visitors, users, broker partners, MRO partners, and others who access the Services.`,
  },
  {
    title: "2. Description of Services",
    content: `Provenarc Group provides professional documentation, 3D preservation, and archival services for aircraft and marine vessels through two divisions: Provenarc Aero Solutions and Provenarc Marine. Services include on-site logbook digitization, drone-based exterior scanning, museum-grade archival volumes, and cloud-hosted record storage (RecordVault / VesselVault). Specific deliverables, timelines, and pricing are defined in individual service agreements.`,
  },
  {
    title: "3. Partner Portals",
    content: `Access to broker and MRO partner portals is provided exclusively to authorized partners under a signed partnership agreement. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Unauthorized access attempts are strictly prohibited. Provenarc reserves the right to suspend or terminate accounts that violate these Terms or the applicable partnership agreement.`,
  },
  {
    title: "4. Quote Requests and Inquiries",
    content: `Submitting a quote request or contact inquiry does not constitute a binding agreement or guarantee of service. All service engagements require a formal written agreement signed by both parties. Information submitted through our web forms is used solely to evaluate your request and contact you about our services.`,
  },
  {
    title: "5. Intellectual Property",
    content: `All content on the Provenarc website — including text, graphics, logos, images, and software — is the property of Provenarc Group LLC or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent. Deliverables produced under a service agreement are governed by the intellectual property provisions of that agreement.`,
  },
  {
    title: "6. Privacy",
    content: `Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to the data practices described in the Privacy Policy.`,
  },
  {
    title: "7. Disclaimer of Warranties",
    content: `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. Provenarc does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, PROVENARC GROUP LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO PROVENARC IN THE TWELVE MONTHS PRECEDING THE CLAIM.`,
  },
  {
    title: "9. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Texas.`,
  },
  {
    title: "10. Changes to Terms",
    content: `Provenarc reserves the right to modify these Terms at any time. We will post the updated Terms on this page with a revised effective date. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.`,
  },
  {
    title: "11. Contact",
    content: `If you have any questions about these Terms, please contact us at legal@provenarc.com or through our contact page.`,
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Provenarc Group — governing the use of our website, partner portals, and documentation services."
        canonical="https://provenarc.com/terms"
        noindex={false}
      />

      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-4">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#faf6f1] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#b8b0a4] text-sm">
            Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: March 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="prose prose-neutral max-w-none">
            <p className="text-muted-foreground mb-10">
              Please read these Terms of Service carefully before using the Provenarc Group
              website or services. These Terms constitute a legally binding agreement between
              you and Provenarc Group LLC.
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <h2 className="font-serif text-xl mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
