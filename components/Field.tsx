type FieldProps = {
  label: string;
  hint?: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: "number" | "text";
  prefix?: string;
  suffix?: string;
  placeholder?: string;
};

export default function Field({ label, hint, value, onChange, type = "number", prefix, suffix, placeholder }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold tracking-tight text-ink">{label}</span>
      {hint && <span className="mb-2 block text-xs leading-relaxed text-ink/55">{hint}</span>}
      <span className="relative block">
        {prefix && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-ink/45">{prefix}</span>}
        <input
          type={type}
          min={type === "number" ? 0 : undefined}
          step={type === "number" ? "any" : undefined}
          inputMode={type === "number" ? "decimal" : undefined}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={`h-12 w-full rounded-xl border border-ink/10 bg-white px-3 text-base font-medium text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-forest focus:ring-4 focus:ring-forest/10 sm:text-sm ${prefix ? "pl-7" : ""} ${suffix ? "pr-14" : ""}`}
        />
        {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-ink/45">{suffix}</span>}
      </span>
    </label>
  );
}
