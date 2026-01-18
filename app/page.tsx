import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Stats = dynamic(() => import("@/components/sections/Stats").then(mod => mod.Stats));
const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features));
const Protocols = dynamic(() => import("@/components/sections/Protocols").then(mod => mod.Protocols));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => mod.Pricing));
const CTA = dynamic(() => import("@/components/sections/CTA").then(mod => mod.CTA));

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pt-20">
      <Hero />
      <Stats />
      <Features />
      <Protocols />
      <Pricing />
      <CTA />
    </div>
  );
}
