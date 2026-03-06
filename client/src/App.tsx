import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import GroupHome from "@/pages/GroupHome";
import AeroHome from "@/pages/AeroHome";
import Services from "@/pages/Services";
import HowItWorks from "@/pages/HowItWorks";
import WhyProvenarc from "@/pages/WhyProvenarc";
import About from "@/pages/About";
import Partners from "@/pages/Partners";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import BlogAdmin from "@/pages/BlogAdmin";
import BrokerLogin from "@/pages/BrokerLogin";
import MROLogin from "@/pages/MROLogin";
import BrokerDashboard from "@/pages/BrokerDashboard";
import MRODashboard from "@/pages/MRODashboard";
import Marine from "@/pages/Marine";
import MarineWhyUs from "@/pages/MarineWhyUs";
import MarineProcess from "@/pages/MarineProcess";
import MarineServices from "@/pages/MarineServices";
import MarinePartners from "@/pages/MarinePartners";
import AeroPartners from "@/pages/AeroPartners";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={GroupHome} />
      <Route path="/aero" component={AeroHome} />
      <Route path="/services" component={Services} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/why-provenarc" component={WhyProvenarc} />
      <Route path="/about" component={About} />
      <Route path="/partners" component={Partners} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/insights" component={Blog} />
      <Route path="/insights/:slug" component={BlogPost} />
      <Route path="/admin/blog" component={BlogAdmin} />
      <Route path="/broker/login" component={BrokerLogin} />
      <Route path="/mro/login" component={MROLogin} />
      <Route path="/broker/dashboard" component={BrokerDashboard} />
      <Route path="/mro/dashboard" component={MRODashboard} />
      <Route path="/marine" component={Marine} />
      <Route path="/marine/services" component={MarineServices} />
      <Route path="/marine/why-us" component={MarineWhyUs} />
      <Route path="/marine/process" component={MarineProcess} />
      <Route path="/marine/partners" component={MarinePartners} />
      <Route path="/aero/services" component={Services} />
      <Route path="/aero/how-it-works" component={HowItWorks} />
      <Route path="/aero/why-provenarc" component={WhyProvenarc} />
      <Route path="/aero/partners" component={AeroPartners} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
