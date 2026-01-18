"use client";

import { motion } from "framer-motion";
import { Zap, Database, Globe, Lock } from "lucide-react";

const features = [
  {
    title: "Instant Access",
    description: "Connect to blockchain networks in milliseconds with our high-performance load balanced endpoints.",
    icon: Zap,
    gradient: "from-primary to-accent",
  },
  {
    title: "Dedicated Nodes",
    description: "Get exclusive access to dedicated infrastructure for enterprise-grade performance and reliability.",
    icon: Lock,
    gradient: "from-secondary to-primary",
  },
  {
    title: "Archive Data",
    description: "Access historical blockchain data instantly with our full archive node support across all major chains.",
    icon: Database,
    gradient: "from-accent to-secondary",
  },
  {
    title: "Global Reach",
    description: "Strategically located nodes worldwide ensure low latency and high availability wherever you are.",
    icon: Globe,
    gradient: "from-primary to-secondary",
  },
];

export function Features() {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Powering the <span className="text-secondary text-glow">Decentralized</span> Future
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We provide the infrastructure so you can focus on building the next generation of Web3 applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity`} />
              
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-white shadow-lg`}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
