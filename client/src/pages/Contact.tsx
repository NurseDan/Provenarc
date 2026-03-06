import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  insertQuoteRequestSchema,
  insertContactInquirySchema,
  type InsertQuoteRequest,
  type InsertContactInquiry,
} from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, MapPin, Clock, Send, Calendar, Shield, Crown, Zap, Users, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { fadeUp } from '@/lib/animations';


const inquiryTypeLabels: Record<string, { label: string; icon: typeof Crown; description: string }> = {
  bespoke: { label: "Bespoke Services Inquiry", icon: Crown, description: "Our team will arrange a private consultation to discuss your unique requirements." },
  fleet: { label: "Fleet Documentation Inquiry", icon: Users, description: "Tell us about your fleet and we will prepare a custom fleet documentation proposal." },
  insurance: { label: "Insurance & Claims Inquiry", icon: ShieldCheck, description: "Baseline documentation, post-incident scanning, and claims support services." },
  "rapid-deployment": { label: "Rapid Deployment Request", icon: Zap, description: "48\u201372 hour worldwide emergency mobilization. Share your timeline and location." },
  partnership: { label: "Partnership Inquiry", icon: Users, description: "Explore broker, MRO, management company, or insurance partnership programs." },
  restoration: { label: "Document Restoration Inquiry", icon: Shield, description: "Conservation and recovery services for damaged or deteriorating records." },
};

function useSearchParams() {
  const [searchString, setSearchString] = useState(window.location.search);

  useEffect(() => {
    const onPopState = () => setSearchString(window.location.search);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return useMemo(() => {
    const params = new URLSearchParams(searchString);
    return {
      type: params.get("type") || "",
      division: params.get("division") || "",
      tier: params.get("tier") || "",
    };
  }, [searchString]);
}

const quoteSchema = insertQuoteRequestSchema.extend({
  name: insertQuoteRequestSchema.shape.name.min(2, "Name is required"),
  email: insertQuoteRequestSchema.shape.email.email("Valid email is required"),
});

type QuoteFormData = InsertQuoteRequest;

const contactSchema = insertContactInquirySchema.extend({
  name: insertContactInquirySchema.shape.name.min(2, "Name is required"),
  email: insertContactInquirySchema.shape.email.email("Valid email is required"),
  inquiryType: insertContactInquirySchema.shape.inquiryType.min(1, "Please select an inquiry type"),
  message: insertContactInquirySchema.shape.message.min(10, "Please provide some details"),
});

type ContactFormData = InsertContactInquiry;

function ContextBanner({ type }: { type: string }) {
  const info = inquiryTypeLabels[type];
  if (!info) return null;
  const Icon = info.icon;

  return (
    <motion.div {...fadeUp}>
      <Card className="p-6 mb-10 border-primary/20 bg-primary/5" data-testid="context-banner">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-1">{info.label}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{info.description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function QuoteRequestForm() {
  const { toast } = useToast();
  const params = useSearchParams();

  const defaultDivision = params.division === "aero" ? "aero" : params.division === "marine" ? "marine" : "";
  const defaultTier = params.tier || "";

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      assetType: "",
      serviceTier: defaultTier,
      location: "",
      timeline: params.type === "rapid-deployment" ? "critical" : "",
      message: "",
      division: defaultDivision,
    },
  });

  useEffect(() => {
    if (defaultDivision) form.setValue("division", defaultDivision);
    if (defaultTier) form.setValue("serviceTier", defaultTier);
  }, [defaultDivision, defaultTier, form]);

  const watchDivision = form.watch("division");

  const mutation = useMutation({
    mutationFn: async (data: QuoteFormData) => {
      await apiRequest("POST", "/api/quote-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote request submitted",
        description: "We'll be in touch within 24 hours to discuss your project.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} data-testid="input-quote-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} data-testid="input-quote-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 000-0000" {...field} value={field.value ?? ""} data-testid="input-quote-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company / Organization</FormLabel>
                <FormControl>
                  <Input placeholder="Company name" {...field} value={field.value ?? ""} data-testid="input-quote-company" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="division"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Division</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger data-testid="select-quote-division">
                      <SelectValue placeholder="Select division" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="aero">Aero Solutions (Aircraft)</SelectItem>
                    <SelectItem value="marine">Marine (Vessels)</SelectItem>
                    <SelectItem value="both">Both Divisions</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="assetType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{watchDivision === "marine" ? "Vessel Type" : "Asset Type"}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger data-testid="select-quote-aircraft">
                      <SelectValue placeholder={watchDivision === "marine" ? "Select vessel type" : "Select asset type"} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {watchDivision === "marine" ? (
                      <>
                        <SelectItem value="sailing-yacht">Sailing Yacht</SelectItem>
                        <SelectItem value="motor-yacht">Motor Yacht</SelectItem>
                        <SelectItem value="superyacht">Superyacht (24m+)</SelectItem>
                        <SelectItem value="megayacht">Megayacht (50m+)</SelectItem>
                        <SelectItem value="commercial-vessel">Commercial Vessel</SelectItem>
                        <SelectItem value="historic-vessel">Historic / Classic Vessel</SelectItem>
                        <SelectItem value="fleet-vessels">Fleet / Multiple Vessels</SelectItem>
                        <SelectItem value="other-vessel">Other Vessel</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="piston-single">Piston Single Engine</SelectItem>
                        <SelectItem value="piston-twin">Piston Twin Engine</SelectItem>
                        <SelectItem value="turboprop-single">Turboprop Single</SelectItem>
                        <SelectItem value="turboprop-twin">Turboprop Twin</SelectItem>
                        <SelectItem value="light-jet">Light Jet</SelectItem>
                        <SelectItem value="midsize-jet">Midsize Jet</SelectItem>
                        <SelectItem value="super-midsize">Super Midsize Jet</SelectItem>
                        <SelectItem value="large-cabin">Large Cabin Jet</SelectItem>
                        <SelectItem value="ultra-long-range">Ultra Long Range Jet</SelectItem>
                        <SelectItem value="vvip-bbj">VVIP / BBJ / ACJ</SelectItem>
                        <SelectItem value="helicopter">Helicopter</SelectItem>
                        <SelectItem value="fleet-aircraft">Fleet / Multiple Aircraft</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="serviceTier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Interest</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger data-testid="select-quote-tier">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="bespoke">Bespoke Services</SelectItem>
                    <SelectItem value="fleet">Fleet Documentation Program</SelectItem>
                    <SelectItem value="tier-5">Tier 5 &ndash; Flagship Comprehensive</SelectItem>
                    <SelectItem value="tier-4">Tier 4 &ndash; Executive Documentation</SelectItem>
                    <SelectItem value="tier-3">Tier 3 &ndash; Premium Comprehensive</SelectItem>
                    <SelectItem value="tier-2">Tier 2 &ndash; Complete Documentation</SelectItem>
                    <SelectItem value="tier-1">Tier 1 &ndash; Heritage Foundation</SelectItem>
                    <SelectItem value="insurance">Insurance Baseline / Claims</SelectItem>
                    <SelectItem value="rapid-deployment">Rapid Deployment (48-72hr)</SelectItem>
                    <SelectItem value="restoration">Document Restoration</SelectItem>
                    <SelectItem value="unsure">Not Sure &ndash; Help Me Choose</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timeline / Urgency</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger data-testid="select-quote-timeline">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="flexible">Flexible (60+ days)</SelectItem>
                    <SelectItem value="standard">Standard (30&ndash;60 days)</SelectItem>
                    <SelectItem value="urgent">Urgent (15&ndash;30 days)</SelectItem>
                    <SelectItem value="critical">Transaction Deadline (&lt;15 days)</SelectItem>
                    <SelectItem value="emergency">Emergency / Immediate (48&ndash;72 hr)</SelectItem>
                    <SelectItem value="exploring">Just Exploring Options</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{watchDivision === "marine" ? "Vessel Location" : "Asset Location"}</FormLabel>
              <FormControl>
                <Input placeholder="City, State/Country or Marina/Airport" {...field} value={field.value ?? ""} data-testid="input-quote-location" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your asset, timeline, and documentation goals..."
                  className="min-h-[100px]"
                  {...field}
                  value={field.value ?? ""}
                  data-testid="textarea-quote-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={mutation.isPending} data-testid="button-submit-quote">
          {mutation.isPending ? "Submitting..." : "Submit Enquiry"}
          {!mutation.isPending && <Send className="ml-2 h-4 w-4" />}
        </Button>
      </form>
    </Form>
  );
}

function GeneralInquiryForm() {
  const { toast } = useToast();
  const params = useSearchParams();

  const validTypes = ["partnership", "broker", "mro", "insurance", "fleet", "bespoke", "rapid-deployment", "restoration"];
  const defaultType = validTypes.includes(params.type) ? params.type : "";

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: defaultType,
      message: "",
    },
  });

  useEffect(() => {
    if (defaultType) {
      form.setValue("inquiryType", defaultType);
    }
  }, [defaultType, form]);

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: "We'll respond within one business day.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} value={field.value ?? ""} data-testid="input-contact-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} value={field.value ?? ""} data-testid="input-contact-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 000-0000" {...field} value={field.value ?? ""} data-testid="input-contact-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="inquiryType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Inquiry Type *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-inquiry-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="bespoke">Bespoke Services</SelectItem>
                    <SelectItem value="fleet">Fleet Documentation</SelectItem>
                    <SelectItem value="insurance">Insurance & Claims</SelectItem>
                    <SelectItem value="rapid-deployment">Rapid Deployment / Emergency</SelectItem>
                    <SelectItem value="restoration">Document Restoration</SelectItem>
                    <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                    <SelectItem value="broker">Broker Program</SelectItem>
                    <SelectItem value="mro">MRO Partnership</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                    <SelectItem value="media">Media / Press</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help you?"
                  className="min-h-[100px]"
                  {...field}
                  data-testid="textarea-contact-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={mutation.isPending} data-testid="button-submit-contact">
          {mutation.isPending ? "Sending..." : "Send Message"}
          {!mutation.isPending && <Send className="ml-2 h-4 w-4" />}
        </Button>
      </form>
    </Form>
  );
}

export default function Contact() {
  const params = useSearchParams();
  const contextType = params.type;
  const divisionLabel = params.division === "marine" ? "Vessel" : params.division === "aero" ? "Aircraft" : "Asset";

  return (
    <div>
      <SEO
        title="Schedule a Consultation | Provenarc Group"
        description="Schedule a confidential discovery session with Provenarc Group. Aircraft documentation, vessel preservation, fleet programs, bespoke services, and insurance baseline inquiries. Worldwide deployment."
        canonical="https://provenarc.com/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Provenarc Group Consultation",
          description: "Schedule a confidential discovery session for aircraft or vessel documentation services.",
          provider: {
            "@type": "Organization",
            name: "Provenarc Group LLC",
          },
        }}
      />

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-6">
              Private Consultation
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf6f1] leading-tight">
              Schedule a Discovery Session
            </h1>
            <p className="text-[#b8b0a4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Every engagement begins with a confidential conversation. Share your requirements below and we&rsquo;ll prepare a preliminary scope assessment within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {contextType && <ContextBanner type={contextType} />}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div {...fadeUp}>
                <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
                  Begin Your Consultation
                </p>
                <h2 className="font-serif text-3xl mb-2">Tell Us About Your {divisionLabel}</h2>
                <p className="text-muted-foreground mb-8">
                  Share your {divisionLabel.toLowerCase()} details and documentation goals. We&rsquo;ll prepare a preliminary scope assessment and schedule a confidential discussion.
                </p>
                <Card className="p-6 lg:p-8">
                  <QuoteRequestForm />
                </Card>
                <p className="text-muted-foreground mt-6 text-center">
                  All enquiries are confidential. You&rsquo;ll receive a preliminary scope assessment within 48 hours &mdash; no commitment required.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.div {...fadeUp} className="space-y-8">
                <div>
                  <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
                    How It Works
                  </p>
                  <h3 className="font-serif text-xl mb-6">What to Expect</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: MapPin, label: "Headquarters", value: "Texas, United States" },
                      { icon: GlobeIcon, label: "Service Area", value: "Worldwide — Six Continents" },
                      { icon: Clock, label: "Office Hours", value: "Mon\u2013Fri, 8:00 AM \u2013 6:00 PM CST" },
                      { icon: Phone, label: "Scheduling", value: "30\u201360 days in advance" },
                      { icon: Zap, label: "Rapid Deployment", value: "48\u201372 hours worldwide" },
                      { icon: Calendar, label: "Weekend/Emergency", value: "By appointment" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-sm font-medium">{item.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className="p-6 bg-primary/5 border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <h3 className="font-medium text-sm">Discovery Call</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Schedule a 30-minute call to discuss your asset, timeline, and documentation
                    goals. Submit a quote request and we&rsquo;ll coordinate a convenient time.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    No commitment required.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <h3 className="font-medium text-sm">Fully Insured & Guaranteed</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive general liability, professional E&O, equipment, bailee,
                    cyber liability, and workers compensation coverage. Certificate of Insurance
                    provided before every engagement.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <h3 className="font-medium text-sm">Confidentiality</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All inquiries are handled with strict confidentiality. Mutual NDA executed
                    before every engagement. Your asset details and personal information are
                    never shared with third parties.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/10">
                  <h3 className="font-medium text-sm mb-2">Aviation & Maritime Sales Professionals</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Managing a transaction with a deadline? We offer expedited service for brokers,
                    agents, and management companies. Mention your timeline or{" "}
                    <a href="/broker/login" className="text-primary underline underline-offset-2" data-testid="link-partner-portal">
                      log in to your partner portal
                    </a>.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
              General Enquiry
            </p>
            <h2 className="font-serif text-3xl mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground mb-8">
              For partnership inquiries, fleet programs, insurance, bespoke services, press requests, or general questions.
            </p>
            <Card className="p-6 lg:p-8">
              <GeneralInquiryForm />
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
