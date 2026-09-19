"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/comparisonCategories";

type FaqSectionProps = {
  itemName: string;
  faqs: FaqItem[];
};

export default function FaqSection({ itemName, faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionId = useId();

  return (
    <section className="px-5 pb-24 sm:px-8 lg:px-10" aria-labelledby={`${sectionId}-heading`}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-coral">Helpful answers</p>
          <h2 id={`${sectionId}-heading`} className="text-3xl font-bold tracking-tight text-forest sm:text-4xl">{itemName} repair or replace FAQs</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `${sectionId}-question-${index}`;
            const answerId = `${sectionId}-answer-${index}`;

            return (
              <div key={faq.question} className="border-b border-forest/10 last:border-b-0">
                <h3 id={questionId}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-base font-bold text-forest transition hover:bg-mint/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-forest/15 sm:px-6"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl font-normal leading-none" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div id={answerId} role="region" aria-labelledby={questionId} hidden={!isOpen} className="px-5 pb-5 text-sm leading-6 text-ink/65 sm:px-6">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
