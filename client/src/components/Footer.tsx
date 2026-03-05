import { Link } from "wouter";
import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1814] text-[#9a9188]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-5 w-5 text-[#c9a96e]" />
              <span className="font-serif text-lg tracking-[0.15em] text-[#faf6f1] font-bold">
                PROVENARC
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Global concierge documentation and 3D preservation for ultra-premium aircraft. On-site.
              Worldwide. Your originals never leave your hangar.
            </p>
            <p className="text-xs text-[#6a6259]">A division of Provenarc Group LLC</p>
            <div className="mt-4 text-xs text-[#6a6259] space-y-1">
              <p>Mon&ndash;Fri: 8:00 AM &ndash; 6:00 PM CST</p>
              <p>Weekend/Emergency: By appointment</p>
            </div>
          </div>

          <div>
            <h4 className="text-[#faf6f1] text-sm font-medium tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Service Tiers", href: "/services" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Why Provenarc", href: "/why-provenarc" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-sm cursor-pointer transition-colors" data-testid={`footer-link-${item.label.split(" ")[0].toLowerCase()}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#faf6f1] text-sm font-medium tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Partners", href: "/partners" },
                { label: "Insights", href: "/insights" },
                { label: "Broker Portal", href: "/broker/login" },
                { label: "MRO Portal", href: "/mro/login" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-sm cursor-pointer transition-colors" data-testid={`footer-link-${item.label.split(" ")[0].toLowerCase()}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#faf6f1] text-sm font-medium tracking-wider uppercase mb-4">
              Let's Discuss Your Aircraft
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm">Texas, United States</li>
              <li className="text-sm">Global Service Coverage</li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-[#c9a96e] cursor-pointer transition-colors" data-testid="footer-link-discovery">
                    Schedule a Discovery Session
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <span className="text-sm text-[#c9a96e] cursor-pointer transition-colors" data-testid="footer-link-partnership">
                    Partnership Inquiries
                  </span>
                </Link>
              </li>
            </ul>
            <p className="text-xs text-[#6a6259] mt-4">
              No commitment required. Confidential consultation.
            </p>
          </div>
        </div>

        <div className="border-t border-[#2e2a25] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6a6259]">
            &copy; {new Date().getFullYear()} Provenarc Group LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy">
              <span className="text-xs text-[#6a6259] cursor-pointer transition-colors">
                Privacy Policy
              </span>
            </Link>
            <p className="text-xs text-[#6a6259]">
              Provenarc Aero Solutions &mdash; A division of Provenarc Group LLC, Texas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
