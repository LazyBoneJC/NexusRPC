"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Box } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#030712]">
        {/* Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
             Live on Mainnet
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
            Build in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">Web3</span> <br />
            with RPC nodes.
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
             Scalable, reliable, and fast RPC infrastructure for 100+ blockchains. 
             Start building your dApp with enterprise-grade nodes today.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="rounded-full text-base px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all">
              Get a free endpoint <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-base px-8 border-white/10 text-white hover:bg-white/5 hover:border-white/20">
              Read documentation
            </Button>
          </div>
        </motion.div>

        {/* Visual Content - 3D Blocks Abstract */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] hidden lg:block perspective-1000"
        >
          {/* Main Floating Block */}
          <motion.div 
             animate={{ y: [-20, 20, -20], rotateY: [0, 10, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary/80 to-accent/80 rounded-3xl shadow-[0_0_50px_rgba(139,92,246,0.4)] backdrop-blur-xl border border-white/20 flex items-center justify-center z-20"
          >
            <Box className="w-32 h-32 text-white/90" strokeWidth={1} />
          </motion.div>

          {/* Floating Elements (Conveyor Belt concept abstract) */}
          <motion.div 
             animate={{ x: [0, -20, 0], y: [-10, 10, -10] }}
             transition={{ duration: 5, repeat: Infinity, delay: 1 }}
             className="absolute top-20 right-20 w-32 h-32 bg-secondary/20 rounded-2xl glass border-none -z-10"
          />
           <motion.div 
             animate={{ x: [0, 20, 0], y: [10, -10, 10] }}
             transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
             className="absolute bottom-20 left-20 w-40 h-40 bg-primary/20 rounded-2xl glass border-none -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
