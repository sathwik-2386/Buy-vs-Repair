import Link from "next/link";
import { comparisonCategories } from "@/lib/comparisonCategories";

export default function ComparisonCategories() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-coral">Explore by item</p>
          <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl">Choose what you&apos;re comparing.</h2>
          <p className="mt-3 text-sm leading-6 text-ink/60">Start with a guide made for the item you have in mind.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {comparisonCategories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`} className="group rounded-2xl border border-forest/10 bg-white p-4 transition-colors hover:border-forest/25 hover:bg-mint/30 sm:p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-xl" aria-hidden="true">{category.icon}</span>
              <h3 className="mt-4 text-sm font-bold text-forest">{category.name}</h3>
              <p className="mt-1 text-xs font-medium text-ink/45 transition group-hover:text-coral">Compare options →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
