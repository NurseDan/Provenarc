import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Wrench, DollarSign, Calendar, Clock,
  BarChart3, Plane, LogOut, ArrowRight,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function MRODashboard() {
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/mro/login");
    }
    if (!isLoading && isAuthenticated && user?.role !== "mro") {
      setLocation("/");
    }
  }, [isLoading, isAuthenticated, user, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  const handleLogout = async () => {
    await logout();
    setLocation("/mro/login");
  };

  return (
    <div>
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-2">
                MRO Partner Portal
              </p>
              <h1 className="font-serif text-3xl text-[#faf6f1]" data-testid="text-mro-welcome">
                Welcome, {user?.contactName || user?.username}
              </h1>
              {user?.companyName && (
                <p className="text-[#b8b0a4] text-sm mt-1">{user.companyName}</p>
              )}
            </div>
            <Button
              variant="outline"
              className="bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]"
              onClick={handleLogout}
              data-testid="button-mro-logout"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Plane, label: "Active Services", value: "0", color: "text-primary" },
                { icon: Calendar, label: "Scheduled Visits", value: "0", color: "text-blue-500" },
                { icon: Clock, label: "Completed This Year", value: "0", color: "text-emerald-500" },
                { icon: DollarSign, label: "Revenue Share YTD", value: "$0", color: "text-primary" },
              ].map((stat, i) => (
                <Card key={i} className="p-6" data-testid={`card-mro-stat-${i}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <p className="font-mono text-2xl font-bold">{stat.value}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="font-medium">Upcoming Scheduled Services</h2>
                </div>
                <div className="py-12 text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    No services currently scheduled at your facility. Refer a client to schedule
                    documentation during their next maintenance event.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" data-testid="button-mro-schedule">
                      Schedule Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h2 className="font-medium">Revenue Summary</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-1 text-sm">
                    <span className="text-muted-foreground">Revenue Share Model</span>
                    <span className="font-mono font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-sm">
                    <span className="text-muted-foreground">This Quarter</span>
                    <span className="font-mono font-medium">$0</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-sm">
                    <span className="text-muted-foreground">Year to Date</span>
                    <span className="font-mono font-medium">$0</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-sm">
                    <span className="text-muted-foreground">Lifetime Revenue</span>
                    <span className="font-mono font-medium">$0</span>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="mt-8">
            <Card className="p-6 bg-primary/5 border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="h-5 w-5 text-primary" />
                <h3 className="font-medium">MRO Integration</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Coordinate documentation services with your scheduled maintenance events. We work
                around your maintenance schedule for seamless integration with minimal disruption.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" data-testid="button-mro-coordination">
                  Schedule Coordination
                </Button>
                <Button variant="outline" size="sm">
                  Co-Branded Materials
                </Button>
                <Button variant="outline" size="sm">
                  Fleet Programs
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
