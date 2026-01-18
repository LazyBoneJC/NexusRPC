"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto glass p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                    Start building Web3 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">block by block</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                    Get your free API key today and scale your DApp with the most reliable RPC provider.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="rounded-full text-lg px-10 h-14 bg-white text-black hover:bg-gray-200">
                        Get Started Free
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full text-lg px-10 h-14 border-white/20 text-white hover:bg-white/10 hover:border-white/40 group">
                        Contact Sales <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
