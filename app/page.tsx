import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import ComparisonCategories from "@/components/ComparisonCategories";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { ArrowDownIcon } from "@/components/Icons";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Repair or Replace Calculator",
  description: "Use the Buy vs Repair calculator to compare repair costs, replacement prices, and cost per year in Indian Rupees.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Repair or Replace Calculator | ${siteName}`,
    description: "Compare repair costs, replacement prices, and cost per year before you decide.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-paper">
      <Header />
      <section className="relative px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-14 lg:px-10 lg:pt-16">
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-forest/10 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-forest">Make every rupee count</p>
          <h1 className="text-4xl font-bold tracking-[-0.045em] text-forest sm:text-6xl lg:text-[4.25rem]">Should You Repair<br className="hidden sm:block" /> or Buy New?</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink/60 sm:text-lg">Compare the real cost of fixing what you have with replacing it, then make a confident choice.</p>
          <a href="#calculator" className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/20 transition-colors hover:bg-[#d95c37] focus:outline-none focus:ring-4 focus:ring-coral/25">Start Comparing <ArrowDownIcon /></a>
        </div>
      </section>
      <Calculator />
      <ComparisonCategories />
      <SiteFooter />
    </main>
  );
}
