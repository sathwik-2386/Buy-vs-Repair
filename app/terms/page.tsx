import type { Metadata } from "next";
import InfoPageLayout from "@/components/InfoPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the Buy vs Repair terms of use for the repair-or-replace calculator website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <InfoPageLayout title="Terms of Use" intro="These terms describe the intended use of the Buy vs Repair calculator in plain language.">
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">Use of the calculator</h2>
        <p className="mt-3">The calculator provides a simple cost comparison based on the information you enter. It is intended as a helpful starting point for personal decision-making.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">Your decision</h2>
        <p className="mt-3">Repair quotes, product lifespans, safety considerations, and future costs can vary. Check the details that matter for your situation, and seek qualified advice where a decision involves safety, a warranty, or a significant expense.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">Website content</h2>
        <p className="mt-3">We aim to keep the calculator and written content useful and clear, but information may change over time. You may use the site for personal, non-commercial reference.</p>
      </section>
    </InfoPageLayout>
  );
}
