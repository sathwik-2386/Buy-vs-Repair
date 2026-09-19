import type { Metadata } from "next";
import InfoPageLayout from "@/components/InfoPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Buy vs Repair privacy policy for information about calculator entries and website data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPageLayout title="Privacy Policy" intro="This page explains, in plain language, how information is handled when you use Buy vs Repair.">
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">Calculator entries</h2>
        <p className="mt-3">The calculator runs in your browser. It does not require an account, and the values you enter are not saved by this website.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">Technical information</h2>
        <p className="mt-3">Like most websites, the service that hosts this site may process basic technical information needed to deliver pages, such as browser type, device information, and IP address. This website does not use calculator entries to identify you.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-forest">Changes to this page</h2>
        <p className="mt-3">If the site&apos;s data practices change, this page should be updated to reflect those changes. For privacy questions, use the contact details on the Contact page.</p>
      </section>
    </InfoPageLayout>
  );
}
