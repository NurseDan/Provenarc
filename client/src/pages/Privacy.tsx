import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { fadeUp } from '@/lib/animations';


export default function Privacy() {
  return (
    <div>
      <SEO
        title="Privacy Policy | Provenarc Group"
        description="Provenarc Group LLC privacy policy covering data collection, usage, and protection practices."
        canonical="https://provenarc.com/privacy"
        noindex={true}
      />
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-[#faf6f1]">Privacy Policy</h1>
            <p className="text-[#b8b0a4] mt-4">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="prose prose-sm max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="font-serif text-xl text-foreground mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed">
                Provenarc Aero Solutions, a division of Provenarc Group LLC, collects information
                you provide directly through our website forms, including your name, email address,
                phone number, company name, aircraft type, and service preferences. We also collect
                standard web analytics data such as IP address, browser type, and pages visited.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-foreground mb-3">2. How We Use Your Information</h2>
              <p className="leading-relaxed">We use collected information to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to quote requests and service inquiries</li>
                <li>Schedule discovery calls and service appointments</li>
                <li>Provide and improve our documentation services</li>
                <li>Communicate service updates and relevant information</li>
                <li>Maintain and improve our website functionality</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl text-foreground mb-3">3. Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your personal
                information. All data transmission is encrypted using TLS/SSL protocols. Stored data
                is protected with AES-256 encryption. Access to personal information is restricted
                to authorized personnel only.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-foreground mb-3">4. Client Documentation Security</h2>
              <p className="leading-relaxed">
                Aircraft documentation created through our services is stored separately from
                website data and is subject to our Client Documentation Agreement. Documentation
                data is encrypted at rest, stored with geographic redundancy, and accessible only
                to authorized users through our RecordVault platform.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-foreground mb-3">5. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, rent, or share your personal information with third parties for
                marketing purposes. We may share information with service providers who assist in
                operating our website and conducting our business, subject to confidentiality
                agreements.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-foreground mb-3">6. Cookies & Analytics</h2>
              <p className="leading-relaxed">
                Our website may use cookies and similar technologies for analytics and functionality
                purposes. You can control cookie settings through your browser preferences. We use
                privacy-focused analytics that do not track individual users across websites.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-foreground mb-3">7. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may
                also opt out of non-essential communications at any time. To exercise these rights,
                contact us at the information provided below.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-foreground mb-3">8. Contact</h2>
              <p className="leading-relaxed">
                For privacy-related inquiries, contact Provenarc Group LLC, Texas, United States.
                Visit our <a href="/contact" className="text-primary underline underline-offset-2">Contact page</a> to
                reach us directly.
              </p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Provenarc Group LLC. All rights reserved.
                Provenarc Aero Solutions is a division of Provenarc Group LLC, a Texas Limited
                Liability Company.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
