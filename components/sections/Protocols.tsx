"use client";

import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

const protocols = [
  { name: "Ethereum", color: "text-blue-400", border: "hover:border-blue-500/50", glow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]" },
  { name: "Bitcoin", color: "text-orange-400", border: "hover:border-orange-500/50", glow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]" },
  { name: "Solana", color: "text-purple-400", border: "hover:border-purple-500/50", glow: "hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]" },
  { name: "Polygon", color: "text-violet-400", border: "hover:border-violet-500/50", glow: "hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]" },
  { name: "Binance SC", color: "text-yellow-400", border: "hover:border-yellow-500/50", glow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]" },
  { name: "Avalanche", color: "text-red-400", border: "hover:border-red-500/50", glow: "hover:shadow-[0_0_30px_rgba(248,113,113,0.3)]" },
  { name: "Near", color: "text-white", border: "hover:border-white/50", glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]" },
  { name: "Arbitrum", color: "text-cyan-400", border: "hover:border-cyan-500/50", glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]" },
];

export function Protocols() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Supported <span className="text-primary text-glow">Protocols</span>
          </h2>
          <p className="text-gray-400">
            One API to access 100+ networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {protocols.map((protocol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 border border-white/5 ${protocol.border} ${protocol.glow} group`}
            >
              <Hexagon className={`w-12 h-12 ${protocol.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`} strokeWidth={1.5} />
              <span className="font-bold text-lg tracking-wide group-hover:text-white transition-colors">{protocol.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
