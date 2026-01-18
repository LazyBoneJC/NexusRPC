"use client";

import { motion } from "framer-motion";
import { Copy, ShieldCheck, Headphones } from "lucide-react";

const stats = [
  {
    icon: Copy,
    value: "100+",
    label: "Blockchain protocols",
    color: "text-primary",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Service availability",
    color: "text-secondary",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support service",
    color: "text-accent",
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-gray-950 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/5 transition-colors border border-white/5"
            >
              <stat.icon className={`w-10 h-10 mb-4 ${stat.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
              <h3 className={`text-4xl font-display font-bold mb-2 ${stat.color} text-glow`}>
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
