import type { Metadata } from "next";
import InfoPageLayout from "@/components/InfoPageLayout";

export const metadata: Metadata = {
  title: "Contact Buy vs Repair",
  description: "Contact Buy vs Repair with feedback, questions, or suggestions for the repair-or-replace calculator.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InfoPageLayout title="Contact" intro="Have feedback about the calculator or an idea for a category? We welcome thoughtful suggestions.">
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">Get in touch</h2>
        <p className="mt-3">Email us at <a className="font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest" href="mailto:hello@buyvsrepair.in">hello@buyvsrepair.in</a>.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">What you can write about</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-coral">
          <li>A correction or improvement to the calculator</li>
          <li>A product category you would like us to add</li>
          <li>A general question about using the website</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
