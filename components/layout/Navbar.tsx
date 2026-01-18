"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Hexagon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/login") return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
             <Hexagon className="w-8 h-8 text-primary fill-primary/20 group-hover:rotate-90 transition-transform duration-500" />
             <div className="absolute inset-0 bg-primary blur-lg opacity-40 animate-pulse"></div>
          </div>
          <span className="font-display font-bold text-2xl tracking-wider text-white">
            NEXUS<span className="text-primary">RPC</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Products", "Pricing", "Developers", "Company"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-glow transition-all"
            >
              {item}
            </Link>
          ))}
          <Link href="/login">
            <Button className="bg-primary hover:bg-primary/80 text-white rounded-full px-6 shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-shadow hover:shadow-[0_0_25px_rgba(139,92,246,0.7)]">
              Dashboard
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {["Products", "Pricing", "Developers", "Company"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/80">
                Dashboard
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
