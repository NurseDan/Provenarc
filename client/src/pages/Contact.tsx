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
import { Phone, MapPin, Clock, Send, Calendar, Shield } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

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

function QuoteRequestForm() {
  const { toast } = useToast();
  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      aircraftType: "",
      serviceTier: "",
      location: "",
      timeline: "",
      message: "",
    },
  });

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
                  <Input placeholder="+1 (555) 000-0000" {...field} data-testid="input-quote-phone" />
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
                <FormLabel>Company / Brokerage</FormLabel>
                <FormControl>
                  <Input placeholder="Company name" {...field} data-testid="input-quote-company" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="aircraftType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aircraft Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger data-testid="select-quote-aircraft">
                      <SelectValue placeholder="Select aircraft type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
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
                    <SelectItem value="other">Other / Multiple Aircraft</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceTier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Tier Interest</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger data-testid="select-quote-tier">
                      <SelectValue placeholder="Select tier" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="tier-1">Tier 1 &ndash; Heritage Foundation</SelectItem>
                    <SelectItem value="tier-2">Tier 2 &ndash; Complete Documentation</SelectItem>
                    <SelectItem value="tier-3">Tier 3 &ndash; Premium Comprehensive</SelectItem>
                    <SelectItem value="tier-4">Tier 4 &ndash; Executive Documentation</SelectItem>
                    <SelectItem value="tier-5">Tier 5 &ndash; Flagship Comprehensive</SelectItem>
                    <SelectItem value="unsure">Not Sure &ndash; Help Me Choose</SelectItem>
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
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aircraft Location</FormLabel>
                <FormControl>
                  <Input placeholder="City, State/Country" {...field} data-testid="input-quote-location" />
                </FormControl>
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
                    <SelectItem value="standard">Standard (30\u201360 days)</SelectItem>
                    <SelectItem value="urgent">Urgent (15\u201330 days)</SelectItem>
                    <SelectItem value="critical">Transaction Deadline (&lt;15 days)</SelectItem>
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your aircraft, timeline, and documentation goals..."
                  className="min-h-[100px]"
                  {...field}
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
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });

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
                  <Input placeholder="Your name" {...field} data-testid="input-contact-name" />
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
                  <Input type="email" placeholder="you@example.com" {...field} data-testid="input-contact-email" />
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
                  <Input placeholder="+1 (555) 000-0000" {...field} data-testid="input-contact-phone" />
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
                    <SelectItem value="general">General Question</SelectItem>
                    <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                    <SelectItem value="broker">Broker Program</SelectItem>
                    <SelectItem value="mro">MRO Partnership</SelectItem>
                    <SelectItem value="insurance">Insurance Carrier</SelectItem>
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
  return (
    <div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div {...fadeUp}>
                <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4">
                  Begin Your Consultation
                </p>
                <h2 className="font-serif text-3xl mb-2">Tell Us About Your Aircraft</h2>
                <p className="text-muted-foreground mb-8">
                  Share your aircraft details and documentation goals. We&rsquo;ll prepare a preliminary scope assessment and schedule a confidential discussion.
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
                      { icon: GlobeIcon, label: "Service Area", value: "Worldwide" },
                      { icon: Clock, label: "Office Hours", value: "Mon\u2013Fri, 8:00 AM \u2013 6:00 PM CST" },
                      { icon: Phone, label: "Scheduling", value: "30\u201360 days in advance" },
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
                    Schedule a 30-minute call to discuss your aircraft, timeline, and documentation
                    goals. Submit a quote request and we&rsquo;ll coordinate a convenient time.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    No commitment required.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <h3 className="font-medium text-sm">Confidentiality</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All inquiries are handled with strict confidentiality. Your aircraft details
                    and personal information are never shared with third parties.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/10">
                  <h3 className="font-medium text-sm mb-2">Aviation Sales Professionals</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Managing a transaction with a deadline? We offer expedited service for brokers
                    and agents. Mention your timeline in the quote request or{" "}
                    <a href="/broker/login" className="text-primary underline underline-offset-2">
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
              For partnership inquiries, press requests, or general questions.
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
