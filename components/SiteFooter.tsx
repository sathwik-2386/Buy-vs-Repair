import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-forest/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-xs leading-5 text-ink/50">© {new Date().getFullYear()} Buy vs Repair. Better decisions, one item at a time.</p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-forest/70 sm:justify-end" aria-label="Footer navigation">
          {footerLinks.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-forest">{link.label}</Link>)}
        </nav>
      </div>
    </footer>
  );
}
