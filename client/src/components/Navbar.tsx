import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 cursor-pointer">
            <Plane className="h-5 w-5 text-primary" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-lg tracking-[0.15em] font-bold">PROVENARC</span>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:inline">
                Aero Solutions
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase()}`}>
              <span
                className={`text-sm tracking-wide transition-colors cursor-pointer ${
                  location === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" data-testid="link-request-quote-nav">
            <Button size="sm">Request Quote</Button>
          </Link>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/50 px-6 py-4 space-y-1 bg-background/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
              <div
                className={`block py-2.5 text-sm cursor-pointer ${
                  location === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/contact">
              <Button className="w-full" onClick={() => setIsOpen(false)} data-testid="button-mobile-quote">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
