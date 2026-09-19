import type { Metadata } from "next";
import InfoPageLayout from "@/components/InfoPageLayout";

export const metadata: Metadata = {
  title: "About Buy vs Repair",
  description: "Learn how Buy vs Repair helps people compare the cost of fixing an item with buying a replacement.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPageLayout title="About Buy vs Repair" intro="Buy vs Repair is a simple calculator for comparing the cost of repairing an item with the cost of replacing it.">
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">Why this tool exists</h2>
        <p className="mt-3">Repair-or-replace decisions often involve more than a single price quote. This tool puts repair cost, replacement cost, and expected useful life in one place so you can compare the options on a yearly basis.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">How to use it</h2>
        <p className="mt-3">Choose an item, enter a repair quote and the price of a comparable replacement, then estimate how long each option may last. The calculator shows the cost per year for both choices.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">A helpful starting point</h2>
        <p className="mt-3">The result is an estimate, not a guarantee. Reliability, safety, product features, warranty coverage, and the quality of a repair can all matter when making your final decision.</p>
      </section>
    </InfoPageLayout>
  );
}
