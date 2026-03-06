import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Lock, Plane, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const divisionLinks = [
  { label: "Aero Solutions", href: "/aero", icon: Plane },
  { label: "Marine", href: "/marine", icon: Anchor },
];

const servicesLinks = [
  { label: "Aero Services", href: "/aero/services", icon: Plane },
  { label: "Marine Services", href: "/marine/services", icon: Anchor },
];

const howItWorksLinks = [
  { label: "Aero Process", href: "/aero/how-it-works", icon: Plane },
  { label: "Marine Process", href: "/marine/process", icon: Anchor },
];

const whyProvenarcLinks = [
  { label: "Why Provenarc — Aero", href: "/aero/why-provenarc", icon: Plane },
  { label: "Why Provenarc — Marine", href: "/marine/why-us", icon: Anchor },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActiveIn = (hrefs: string[]) => hrefs.some((h) => location === h);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-lg tracking-[0.15em] font-bold">PROVENARC</span>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:inline">
                Group
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" data-testid="nav-desktop">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${
                  isActiveIn(["/aero", "/marine"])
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
                data-testid="dropdown-divisions"
              >
                Divisions <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {divisionLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>
                    <span className="cursor-pointer w-full flex items-center gap-2" data-testid={`link-division-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <link.icon className="h-3.5 w-3.5 text-primary" />
                      {link.label}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${
                  isActiveIn(servicesLinks.map((l) => l.href).concat(["/services"]))
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
                data-testid="dropdown-services"
              >
                Services <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {servicesLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>
                    <span className="cursor-pointer w-full flex items-center gap-2" data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <link.icon className="h-3.5 w-3.5 text-primary" />
                      {link.label}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${
                  isActiveIn(howItWorksLinks.map((l) => l.href).concat(["/how-it-works"]))
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
                data-testid="dropdown-how-it-works"
              >
                How It Works <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {howItWorksLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>
                    <span className="cursor-pointer w-full flex items-center gap-2" data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <link.icon className="h-3.5 w-3.5 text-primary" />
                      {link.label}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${
                  isActiveIn(whyProvenarcLinks.map((l) => l.href).concat(["/why-provenarc"]))
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
                data-testid="dropdown-why-provenarc"
              >
                Why Provenarc <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {whyProvenarcLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>
                    <span className="cursor-pointer w-full flex items-center gap-2" data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <link.icon className="h-3.5 w-3.5 text-primary" />
                      {link.label}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/insights" data-testid="link-insights">
            <span
              className={`text-sm tracking-wide transition-colors cursor-pointer ${
                location === "/insights"
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              Insights
            </span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${
                  isActiveIn(["/about", "/partners", "/faq"])
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
                data-testid="dropdown-company"
              >
                Company <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {companyLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>
                    <span className="cursor-pointer w-full" data-testid={`link-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {link.label}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="text-sm tracking-wide text-muted-foreground transition-colors flex items-center gap-1"
                data-testid="dropdown-login"
              >
                <Lock className="h-3 w-3" /> Login <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/broker/login">
                  <span className="cursor-pointer w-full" data-testid="link-broker-login">
                    Broker / Agent Portal
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/mro/login">
                  <span className="cursor-pointer w-full" data-testid="link-mro-login">
                    MRO Facility Portal
                  </span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" data-testid="link-schedule-consultation-nav">
            <Button size="sm">Schedule a Consultation</Button>
          </Link>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border/50 px-6 py-4 space-y-1 bg-background/95 backdrop-blur-md">
          <div className="pb-2 mb-2 border-b border-border/50">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">Divisions</p>
            {divisionLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-division-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div
                  className={`block py-2.5 text-sm cursor-pointer flex items-center gap-2 ${
                    location === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="h-3.5 w-3.5 text-primary" />
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          <div className="pb-2 mb-2 border-b border-border/50">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">Services</p>
            {servicesLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div
                  className={`block py-2.5 text-sm cursor-pointer flex items-center gap-2 ${
                    location === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="h-3.5 w-3.5 text-primary" />
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          <div className="pb-2 mb-2 border-b border-border/50">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">How It Works</p>
            {howItWorksLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div
                  className={`block py-2.5 text-sm cursor-pointer flex items-center gap-2 ${
                    location === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="h-3.5 w-3.5 text-primary" />
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          <div className="pb-2 mb-2 border-b border-border/50">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">Why Provenarc</p>
            {whyProvenarcLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div
                  className={`block py-2.5 text-sm cursor-pointer flex items-center gap-2 ${
                    location === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="h-3.5 w-3.5 text-primary" />
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          <Link href="/insights" data-testid="link-mobile-insights">
            <div
              className={`block py-2.5 text-sm cursor-pointer ${
                location === "/insights" ? "text-foreground font-medium" : "text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Insights
            </div>
          </Link>

          <div className="pb-2 mb-2 border-b border-border/50">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2 mt-2">Company</p>
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
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
          </div>

          <div className="pt-2 border-t border-border/50 mt-2 space-y-1">
            <Link href="/broker/login">
              <div className="py-2.5 text-sm text-muted-foreground cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Lock className="h-3 w-3" /> Broker / Agent Login
              </div>
            </Link>
            <Link href="/mro/login">
              <div className="py-2.5 text-sm text-muted-foreground cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Lock className="h-3 w-3" /> MRO Facility Login
              </div>
            </Link>
          </div>
          <div className="pt-2">
            <Link href="/contact">
              <Button className="w-full" onClick={() => setIsOpen(false)} data-testid="button-mobile-consultation">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
