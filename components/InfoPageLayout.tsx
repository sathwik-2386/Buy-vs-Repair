import type { ReactNode } from "react";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

type InfoPageLayoutProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export default function InfoPageLayout({ title, intro, children }: InfoPageLayoutProps) {
  return (
    <main className="min-h-screen bg-paper">
      <Header />
      <article className="px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <header className="border-b border-forest/10 pb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Buy vs Repair</p>
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-forest sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/65 sm:text-lg">{intro}</p>
          </header>
          <div className="mt-9 space-y-9 text-sm leading-7 text-ink/70">{children}</div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
