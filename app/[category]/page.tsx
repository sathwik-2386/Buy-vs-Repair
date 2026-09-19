import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Calculator from "@/components/Calculator";
import FaqSection from "@/components/FaqSection";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { comparisonCategories, getComparisonCategory } from "@/lib/comparisonCategories";
import { siteName } from "@/lib/site";

type CategoryPageProps = { params: { category: string } };

export function generateStaticParams() {
  return comparisonCategories.map(({ slug }) => ({ category: slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getComparisonCategory(params.category);
  if (!category) return {};

  return {
    title: `${category.name} Repair or Replace Calculator`,
    description: category.description,
    alternates: { canonical: `/${category.slug}` },
    openGraph: {
      title: `${category.name} Repair or Replace Calculator | ${siteName}`,
      description: category.description,
      url: `/${category.slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getComparisonCategory(params.category);
  if (!category) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-paper">
      <Header />
      <section className="relative px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-10">
        <div className="absolute left-[12%] top-0 h-52 w-52 rounded-full bg-[#d8eddf] blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Link href="/" className="text-sm font-semibold text-forest/65 transition hover:text-forest">← All comparisons</Link>
          <span className="mx-auto mt-6 grid h-14 w-14 place-items-center rounded-2xl bg-mint text-3xl" aria-hidden="true">{category.icon}</span>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-forest sm:text-5xl">{category.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg">{category.description}</p>
        </div>
      </section>
      <Calculator initialItem={category.name} />
      <FaqSection itemName={category.name} faqs={category.faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: category.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <SiteFooter />
    </main>
  );
}
