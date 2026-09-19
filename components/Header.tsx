import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
      <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight text-forest" aria-label="Buy vs Repair home">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest text-lg text-white">B</span>
        <span className="text-lg">Buy <span className="font-normal text-ink/50">vs</span> Repair</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#calculator" className="rounded-full border border-forest/15 px-4 py-2 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white">Calculator</Link>
      </nav>
    </header>
  );
}
