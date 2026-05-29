export default function BeforeAfter() {
  return (
    <section className="bg-fog px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-3 inline-block h-px w-8 bg-cyan" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Real Results
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink/60">
            Visible difference in as little as 14 days. No sensitivity. No
            compromise on enamel health.
          </p>
        </div>

        {/* Before / After cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { days: "Day 1", shade: "bg-[#f5e6c8]", label: "Before" },
            { days: "Day 7", shade: "bg-[#f0ddb0]", label: "Week 1" },
            { days: "Day 14", shade: "bg-[#faf6ee]", label: "After" },
          ].map(({ days, shade, label }) => (
            <div key={days} className="flex flex-col items-center gap-3">
              {/* Placeholder swatch — replace with real before/after photography */}
              <div
                className={`relative flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl ${shade} border border-neutral-200`}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="h-8 w-24 rounded-full border-2 border-white/60 bg-white/30" />
                  <span className="text-xs font-medium text-ink/40 uppercase tracking-wider">
                    Smile photo
                  </span>
                </div>

                {/* Day badge */}
                <div className="absolute left-3 top-3 rounded-full bg-navy px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {days}
                </div>
              </div>

              <span
                className={`text-sm font-semibold uppercase tracking-widest ${
                  label === "After" ? "text-cyan" : "text-ink/50"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink/35">
          Individual results may vary. Replace placeholder images with real
          customer before/after photography.
        </p>
      </div>
    </section>
  );
}
