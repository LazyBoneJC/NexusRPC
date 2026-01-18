"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: 0,
    description: "For personal projects and testing.",
    features: ["50K CU / month", "20 RPS", "2 Access Tokens", "All supported chains", "Dedicated nodes"],
    notIncluded: ["SLA", "Statistics", "Archive shared", "Team account"],
  },
  {
    name: "Starter",
    price: 39,
    description: "For small dApps and startups.",
    features: ["50M CU / month", "100 RPS", "10 Access Tokens", "All supported chains", "Dedicated nodes", "24/5 Support", "Statistics", "Archive shared"],
    notIncluded: ["Team account", "Custom AppChains"],
  },
  {
    name: "Advanced",
    price: 159,
    description: "For growing production apps.",
    features: ["220M CU / month", "300 RPS", "25 Access Tokens", "All supported chains", "Dedicated nodes", "24/5 Support", "Statistics", "Archive shared"],
    notIncluded: ["Team account", "Custom AppChains"],
  },
  {
    name: "Pro",
    price: 399,
    popular: true,
    description: "High scale performance needs.",
    features: ["600M CU / month", "500 RPS", "50 Access Tokens", "All supported chains", "Dedicated nodes", "24/7 Support", "Statistics", "Archive shared", "Team account"],
    notIncluded: ["Custom AppChains"],
  },
  {
    name: "Enterprise",
    price: 799,
    description: "Custom solutions for large scale.",
    features: ["Custom CU", "Custom RPS", "Custom Access Tokens", "All supported chains", "Dedicated nodes", "24/7 Support", "Advanced statistics", "Archive shared", "Team account", "Custom AppChains"],
    notIncluded: [],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Flexible pricing that <span className="text-primary text-glow">scales</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Grow and scale your business whenever you need it. Try our RPC provider with the best services and plans.
          </p>

          {/* Toggle */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <span className={cn("text-sm font-medium transition-colors", !annual ? "text-white" : "text-gray-500")}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-16 h-8 bg-gray-800 rounded-full relative p-1 transition-colors hover:bg-gray-700"
            >
              <motion.div
                animate={{ x: annual ? 32 : 0 }}
                className="w-6 h-6 bg-primary rounded-full shadow-lg"
              />
            </button>
            <span className={cn("text-sm font-medium transition-colors flex items-center gap-2", annual ? "text-white" : "text-gray-500")}>
              Annually <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">20% OFF</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "glass p-6 rounded-2xl flex flex-col relative border transition-all duration-300",
                tier.popular 
                  ? "border-primary shadow-[0_0_30px_rgba(139,92,246,0.15)] scale-105 z-10" 
                  : "border-white/5 hover:border-white/20 hover:bg-white/5"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  POPULAR CHOICE
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-400 h-10">{tier.description}</p>
              </div>

              <div className="mb-6">
                 <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-display font-bold">
                        ${annual && tier.price > 0 ? Math.round(tier.price * 0.8) : tier.price}
                    </span>
                    <span className="text-sm text-gray-500">/mo</span>
                 </div>
                 {annual && tier.price > 0 && (
                     <p className="text-xs text-green-400 mt-1">Save ${(tier.price * 0.2 * 12).toFixed(0)}/year</p>
                 )}
              </div>

              <Button 
                variant={tier.popular ? "default" : "secondary"} 
                className={cn("w-full mb-8 rounded-full", tier.popular ? "shadow-[0_0_15px_rgba(139,92,246,0.5)]" : "")}
              >
                {tier.price === 0 ? "Get Started" : "Start Free Trial"}
              </Button>

              <div className="space-y-4 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-xs">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-blue-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {tier.notIncluded.map((feature) => (
                   <div key={feature} className="flex items-start gap-3 text-xs opacity-50">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                        <X className="w-2.5 h-2.5 text-gray-500" />
                    </div>
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
