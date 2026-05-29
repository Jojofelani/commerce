const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "14 Days", label: "Visible Results" },
  { value: "5-Star", label: "Rated" },
  { value: "100%", label: "Enamel-Safe" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-neutral-100 bg-white">
      <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center px-6 py-8 text-center ${
              i < stats.length - 1
                ? "border-b border-neutral-100 md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <span className="font-heading text-3xl font-bold text-navy md:text-4xl">
              {value}
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-widest text-ink/50">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
