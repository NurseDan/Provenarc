import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Shield, Lock, Briefcase } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function BrokerLogin() {
  const { login, isLoggingIn } = useAuth();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
      toast({ title: "Welcome back", description: "You've been logged in successfully." });
      setLocation("/broker/dashboard");
    } catch {
      toast({
        title: "Login failed",
        description: "Invalid credentials. Please try again or contact your account manager.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
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
              <Briefcase className="h-7 w-7 text-[#c9a96e]" />
            </div>
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-3">
              Broker / Agent Portal
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-[#faf6f1]">
              Partner Login
            </h1>
            <p className="text-[#b8b0a4] text-sm mt-3">
              Access your referral dashboard, track projects, and manage commissions.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <Card className="p-6 bg-[#1c1916]/80 border-[#2e2a25] backdrop-blur-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#b8b0a4]">Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your broker username"
                            className="bg-[#141210] border-[#2e2a25] text-[#faf6f1] placeholder:text-[#6a6259]"
                            {...field}
                            data-testid="input-broker-username"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#b8b0a4]">Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Your password"
                            className="bg-[#141210] border-[#2e2a25] text-[#faf6f1] placeholder:text-[#6a6259]"
                            {...field}
                            data-testid="input-broker-password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoggingIn}
                    data-testid="button-broker-login"
                  >
                    {isLoggingIn ? "Authenticating..." : "Sign In"}
                    {!isLoggingIn && <Lock className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 pt-5 border-t border-[#2e2a25]">
                <div className="flex items-start gap-3">
                  <Shield className="h-4 w-4 text-[#c9a96e] mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-[#6a6259] leading-relaxed">
                    This portal is for authorized Provenarc broker partners only. All sessions are
                    encrypted and monitored. If you need access, contact your Provenarc account
                    manager.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-center text-xs text-[#6a6259] mt-6"
          >
            Not a partner yet?{" "}
            <a href="/partners" className="text-[#c9a96e] underline underline-offset-2">
              Learn about our referral program
            </a>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
