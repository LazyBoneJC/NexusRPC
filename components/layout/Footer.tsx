"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Hexagon } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return (
    <footer className="border-t border-white/10 bg-[#030712] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Hexagon className="w-6 h-6 text-primary fill-primary/20" />
              <span className="font-display font-bold text-xl text-white">
                NEXUS<span className="text-primary">RPC</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Supercharge your Web3 development with the fastest, most reliable RPC infrastructure.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Products",
              links: ["Dedicated Nodes", "Shared Nodes", "Archive Nodes", "Snapshots"],
            },
            {
              title: "Developers",
              links: ["Documentation", "API Reference", "Status", "Github"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
          ].map((column) => (
            <div key={column.title}>
              <h3 className="font-display font-bold text-white mb-6">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 NexusRPC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
