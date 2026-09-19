export type FaqItem = {
  question: string;
  answer: string;
};

export type ComparisonCategory = {
  slug: string;
  name: string;
  icon: string;
  title: string;
  description: string;
  faqs: FaqItem[];
};

export const comparisonCategories: ComparisonCategory[] = [
  { slug: "phone", name: "Phone", icon: "📱", title: "Should you repair or replace your phone?", description: "Compare the cost of a phone repair with the value and expected life of a new device.", faqs: [
    { question: "When is a phone repair worth considering?", answer: "A repair is worth considering when the phone otherwise meets your needs and the repair cost is reasonable for the additional time you expect to use it. Check the repair quote, battery health, software support, and any warranty first." },
    { question: "Should I replace a cracked phone screen?", answer: "A screen repair can be practical if the phone is working well and has enough remaining software support. If there are multiple faults or the repair is close to the price of a suitable replacement, compare both annual costs." },
  ] },
  { slug: "laptop", name: "Laptop", icon: "💻", title: "Should you repair or replace your laptop?", description: "See whether fixing your current laptop makes more sense than buying a new one.", faqs: [
    { question: "Is it worth repairing an old laptop?", answer: "It can be, particularly for repairs such as a battery, storage drive, keyboard, or memory upgrade. Consider whether the laptop still runs the software you need and whether the repair will provide enough useful life." },
    { question: "What should I check before replacing a laptop?", answer: "Check the repair diagnosis, available warranty, operating system support, performance for your work, and the cost per year of each option. Back up your data before any repair or replacement." },
  ] },
  { slug: "car", name: "Car", icon: "🚗", title: "Should you repair or replace your car?", description: "Compare your car repair quote against the long-term cost of a replacement.", faqs: [
    { question: "How do I decide whether to repair or replace my car?", answer: "Start with a written repair estimate and assess the car's overall condition, safety, fuel costs, and expected future repairs. A single repair does not automatically mean a vehicle should be replaced." },
    { question: "Does a repair quote include all future car costs?", answer: "No. A repair quote usually covers the stated work only. Ask the mechanic about related wear, likely upcoming maintenance, and whether the repair has a parts or labour warranty." },
  ] },
  { slug: "ac", name: "AC", icon: "❄️", title: "Should you repair or replace your AC?", description: "Work out whether an AC repair gives you better value than a new unit.", faqs: [
    { question: "When should I repair an air conditioner?", answer: "Repair may be sensible when the issue is limited, the unit has been maintained, and a qualified technician expects reliable service after the fix. Compare the quote with the expected additional life." },
    { question: "What matters besides the AC repair cost?", answer: "Consider cooling performance, electricity use, refrigerant availability, warranty, and whether replacement parts are available. A technician can help identify whether the fault affects safety or reliability." },
  ] },
  { slug: "washing-machine", name: "Washing Machine", icon: "🧺", title: "Should you repair or replace your washing machine?", description: "Compare a washing machine repair with the useful life and cost of a replacement.", faqs: [
    { question: "Is a washing machine repair worth it?", answer: "It may be worth it when the repair targets a single replaceable part and the machine is otherwise in good condition. Compare the quote, the expected extra life, and the warranty on the repair." },
    { question: "What should I ask a washing machine repair technician?", answer: "Ask for the cause of the problem, a written estimate, the part and labour warranty, and whether other components show wear. This helps you estimate the likely value of the repair." },
  ] },
  { slug: "tv", name: "TV", icon: "📺", title: "Should you repair or replace your TV?", description: "Make a better TV repair decision with a simple yearly cost comparison.", faqs: [
    { question: "Can a TV usually be repaired?", answer: "Many TV faults can be diagnosed and repaired, but the practical option depends on the affected component, parts availability, and the price of a comparable new TV. Get a diagnostic quote before deciding." },
    { question: "What should I compare when replacing a TV?", answer: "Compare screen size and picture quality you need, repair warranty, replacement price, and useful life. A replacement may also involve delivery, installation, or disposal costs." },
  ] },
  { slug: "printer", name: "Printer", icon: "🖨️", title: "Should you repair or replace your printer?", description: "Compare a printer repair quote with the cost of a reliable new machine.", faqs: [
    { question: "When is it worth repairing a printer?", answer: "Repair can be worthwhile if the printer still suits your printing volume and the fault is isolated. Check the cost and availability of consumables and whether the repair carries a warranty." },
    { question: "Should ink and toner costs affect my printer decision?", answer: "Yes. Ongoing consumable costs can materially affect total ownership cost. Compare compatible cartridge or toner pricing and expected page yield alongside the repair or purchase price." },
  ] },
  { slug: "bike", name: "Bike", icon: "🚲", title: "Should you repair or replace your bike?", description: "See whether repairing your bike is the more cost-effective choice.", faqs: [
    { question: "When is it worth repairing a bike?", answer: "Routine wear items such as tyres, chains, brake pads, and cables are often repairable or replaceable. A safety inspection is important if there is frame damage, severe corrosion, or damage after a crash." },
    { question: "What bike repairs should a professional inspect?", answer: "A qualified mechanic should inspect structural damage, steering, braking, wheels, and suspension concerns. Do not ride a bike that may have a safety-related fault until it has been checked." },
  ] },
];

export function getComparisonCategory(slug: string) {
  return comparisonCategories.find((category) => category.slug === slug);
}
