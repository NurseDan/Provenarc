import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SEO } from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { KeyRound, CheckCircle } from "lucide-react";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Forgot Password"
        description="Reset your Provenarc partner portal password."
        noindex
      />
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1c1916] to-[#1f1b17]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative w-full max-w-md mx-auto px-6 py-24">
          <motion.div {...fadeUp} className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center mx-auto mb-6">
              <KeyRound className="h-7 w-7 text-[#c9a96e]" />
            </div>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-3">
              Partner Portal
            </p>
            <h1 className="font-serif text-3xl text-[#faf6f1]">Reset Password</h1>
            <p className="text-[#b8b0a4] text-sm mt-3">
              Enter your account email and we'll send a reset link.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <Card className="p-6 bg-[#1c1916]/80 border-[#2e2a25] backdrop-blur-md">
              {sent ? (
                <div className="text-center py-4">
                  <CheckCircle className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
                  <p className="text-[#faf6f1] font-medium mb-2">Check your inbox</p>
                  <p className="text-[#b8b0a4] text-sm">
                    If that email is registered, a reset link has been sent. It expires in 1 hour.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#b8b0a4]">Email address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-[#141210] border-[#2e2a25] text-[#faf6f1] placeholder:text-[#6a6259]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={submitting}>
                      {submitting ? "Sending..." : "Send Reset Link"}
                    </Button>
                  </form>
                </Form>
              )}
            </Card>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-center text-xs text-[#6a6259] mt-6"
          >
            Remember your password?{" "}
            <Link href="/broker/login">
              <span className="text-[#c9a96e] underline underline-offset-2 cursor-pointer">
                Sign in
              </span>
            </Link>
          </motion.p>
        </div>
      </section>
    </>
  );
}
