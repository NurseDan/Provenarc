import { useState } from "react";
import { useLocation } from "wouter";
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
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const schema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

type FormData = z.infer<typeof schema>;

function getToken() {
  const params = new URLSearchParams(window.location.search);
  return params.get("token") ?? "";
}

export default function ResetPassword() {
  const [submitting, setSubmitting] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const token = getToken();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirm: "" },
  });

  const onSubmit = async (data: FormData) => {
    if (!token) {
      toast({ title: "Invalid link", description: "No reset token found.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: data.password }),
      });
      if (!res.ok) {
        const body = await res.json();
        toast({ title: "Reset failed", description: body.message || "The link may have expired.", variant: "destructive" });
        return;
      }
      toast({ title: "Password updated", description: "You can now sign in with your new password." });
      setLocation("/broker/login");
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Reset Password"
        description="Set a new password for your Provenarc partner account."
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
              <Lock className="h-7 w-7 text-[#c9a96e]" />
            </div>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-3">
              Partner Portal
            </p>
            <h1 className="font-serif text-3xl text-[#faf6f1]">Set New Password</h1>
            <p className="text-[#b8b0a4] text-sm mt-3">
              Choose a strong password of at least 8 characters.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <Card className="p-6 bg-[#1c1916]/80 border-[#2e2a25] backdrop-blur-md">
              {!token ? (
                <p className="text-center text-sm text-[#b8b0a4] py-4">
                  This reset link is invalid or has expired. Please request a new one.
                </p>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#b8b0a4]">New password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Min. 8 characters"
                              className="bg-[#141210] border-[#2e2a25] text-[#faf6f1] placeholder:text-[#6a6259]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#b8b0a4]">Confirm password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Repeat password"
                              className="bg-[#141210] border-[#2e2a25] text-[#faf6f1] placeholder:text-[#6a6259]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={submitting}>
                      {submitting ? "Updating..." : "Update Password"}
                    </Button>
                  </form>
                </Form>
              )}
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
