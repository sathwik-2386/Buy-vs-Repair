"use client";

import { useMemo, useState } from "react";
import Field from "./Field";
import { CartIcon, CheckIcon, WrenchIcon } from "./Icons";
import { comparisonCategories } from "@/lib/comparisonCategories";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function toNumber(value: string) {
  return Number(value) || 0;
}

type CalculatorProps = {
  initialItem?: string;
};

export default function Calculator({ initialItem = "Laptop" }: CalculatorProps) {
  const [item, setItem] = useState(initialItem);
  const [age, setAge] = useState("3");
  const [replacementPrice, setReplacementPrice] = useState("1200");
  const [repairCost, setRepairCost] = useState("350");
  const [repairLife, setRepairLife] = useState("2");
  const [newLife, setNewLife] = useState("6");

  const results = useMemo(() => {
    const repair = toNumber(repairCost);
    const replace = toNumber(replacementPrice);
    const repairYears = toNumber(repairLife);
    const newYears = toNumber(newLife);
    const repairPercent = replace > 0 ? (repair / replace) * 100 : 0;
    const repairPerYear = repairYears > 0 ? repair / repairYears : 0;
    const newPerYear = newYears > 0 ? replace / newYears : 0;
    const difference = Math.abs(repairPerYear - newPerYear);
    const isRepairBetter = repairPerYear <= newPerYear;
    return { repairPercent, repairPerYear, newPerYear, difference, isRepairBetter };
  }, [repairCost, replacementPrice, repairLife, newLife]);

  const choice = results.isRepairBetter ? "Repair is the better value" : "Buying new is the better value";
  const savingsText = results.difference > 0 ? `${money.format(results.difference)} less per year` : "The yearly cost is the same";

  return (
    <section id="calculator" className="scroll-mt-6 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10" aria-labelledby="calculator-heading">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white shadow-card sm:rounded-[2rem]">
        <div className="grid lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-6 sm:p-9 lg:p-11">
            <div className="mb-7 border-b border-forest/10 pb-7 sm:mb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-coral">The calculator</p>
              <h2 id="calculator-heading" className="text-3xl font-bold tracking-[-0.03em] text-forest sm:text-4xl">Compare the numbers.</h2>
              <div className="mt-3 flex items-center gap-2 text-sm leading-6 text-ink/60"><span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />Results update as you type.</div>
            </div>

            <fieldset>
              <legend className="sr-only">Item and cost details</legend>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold tracking-tight text-ink">What are you deciding about?</span>
                  <select value={item} onChange={(event) => setItem(event.target.value)} className="h-12 w-full rounded-xl border border-ink/10 bg-white px-3 text-base font-medium text-ink outline-none transition-colors focus:border-forest focus:ring-4 focus:ring-forest/10 sm:text-sm">
                  {comparisonCategories.map((category) => <option key={category.slug}>{category.name}</option>)}
                  <option>Appliance</option><option>Other item</option>
                  </select>
                </label>
                <Field label="How old is it now?" value={age} onChange={setAge} suffix="years old" />
                <Field label="Replacement price" value={replacementPrice} onChange={setReplacementPrice} prefix="₹" />
                <Field label="Quoted repair cost" value={repairCost} onChange={setRepairCost} prefix="₹" />
                <Field label="Life added by repair" hint="How much longer should it last?" value={repairLife} onChange={setRepairLife} suffix="years" />
                <Field label="New item's useful life" hint="Expected lifespan of a new one" value={newLife} onChange={setNewLife} suffix="years" />
              </div>
            </fieldset>
            <p className="mt-7 rounded-xl bg-mint/70 px-4 py-3 text-xs leading-5 text-forest/70">This estimate uses the costs and lifespan you enter. Reliability, features, and warranty can matter too.</p>
          </div>

          <aside className="bg-forest p-6 text-white sm:p-9 lg:p-11" aria-label="Calculation results" aria-live="polite">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">Your result</p>
            <div className="mt-4 rounded-2xl bg-white/[0.09] p-5 ring-1 ring-white/10 sm:p-6">
              <div className="flex items-start gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${results.isRepairBetter ? "bg-[#bfe6cd] text-forest" : "bg-[#ffd4c7] text-[#a94427]"}`}><CheckIcon /></span>
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.02em]">{choice}</h3>
                  <p className="mt-1 text-sm text-white/70">For your {item.toLowerCase()}, this option costs {savingsText}.</p>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-2.5">
              <ResultRow icon={<WrenchIcon />} label="Repair cost" value={`${results.repairPercent.toFixed(0)}%`} detail="of replacement price" />
              <ResultRow icon={<WrenchIcon />} label="Repair cost per year" value={money.format(results.repairPerYear)} detail={`over ${repairLife || "0"} years`} />
              <ResultRow icon={<CartIcon />} label="New purchase per year" value={money.format(results.newPerYear)} detail={`over ${newLife || "0"} years`} />
            </div>

            <div className="mt-7 border-t border-white/15 pt-6">
              <div className="flex items-end justify-between gap-4">
                <div><p className="text-sm font-medium text-white/75">Yearly cost difference</p><p className="mt-1 text-xs text-white/45">Based on your inputs</p></div>
                <p className="text-3xl font-bold tracking-[-0.03em]">{money.format(results.difference)}</p>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15"><div className="h-full rounded-full bg-[#bfe6cd] transition-[width] duration-200" style={{ width: `${Math.min(Math.max(results.repairPercent, 4), 100)}%` }} /></div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ResultRow({ icon, label, value, detail }: { icon: React.ReactNode; label: string; value: string; detail: string }) {
  return <div className="flex items-center gap-3 rounded-xl bg-white/[0.07] p-3.5"><span className="text-[#bfe6cd]">{icon}</span><div className="min-w-0 flex-1"><p className="text-sm font-semibold">{label}</p><p className="mt-0.5 text-xs text-white/50">{detail}</p></div><p className="text-lg font-bold tracking-tight">{value}</p></div>;
}
