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
              Worldwide.
            </p>
            <p className="text-xs text-[#6a6259]">A division of Provenarc Group LLC</p>
          </div>

          <div>
            <h4 className="text-[#faf6f1] text-sm font-medium tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Essential Documentation",
                "Complete Documentation",
                "Premium Comprehensive",
                "Executive Package",
                "Flagship Comprehensive",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services">
                    <span className="text-sm cursor-pointer transition-colors" data-testid={`footer-link-${s.split(" ")[0].toLowerCase()}`}>
                      {s}
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
                { label: "Pricing", href: "/pricing" },
                { label: "Partners", href: "/about" },
                { label: "Contact", href: "/contact" },
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
              Get in Touch
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm">Texas, United States</li>
              <li className="text-sm">Global Service Coverage</li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-[#c9a96e] cursor-pointer transition-colors" data-testid="footer-link-quote">
                    Request a Quote
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-[#c9a96e] cursor-pointer transition-colors" data-testid="footer-link-discovery">
                    Schedule Discovery Call
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2e2a25] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6a6259]">
            &copy; {new Date().getFullYear()} Provenarc Group LLC. All rights reserved.
          </p>
          <p className="text-xs text-[#6a6259]">
            Provenarc Aero Solutions &mdash; A division of Provenarc Group LLC, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
