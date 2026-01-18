import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Protocols } from "@/components/sections/Protocols";
import { CTA } from "@/components/sections/CTA";

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
