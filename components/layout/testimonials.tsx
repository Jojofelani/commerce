const reviews = [
  {
    name: "Abena K.",
    location: "Accra",
    rating: 5,
    quote:
      "I was skeptical at first, but after two weeks my teeth are noticeably whiter. The gel didn't cause any sensitivity at all — which surprised me. Will definitely reorder.",
  },
  {
    name: "Kofi M.",
    location: "Kumasi",
    rating: 5,
    quote:
      "LaserGlow is the real deal. I've tried strips from abroad that did nothing. This actually works, and the packaging feels premium. My dentist even noticed the difference.",
  },
  {
    name: "Esi T.",
    location: "Takoradi",
    rating: 5,
    quote:
      "Fast delivery, professional packaging, and most importantly — it works. I can smile without covering my mouth now. Thank you LaserGlow.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          className={`h-4 w-4 ${i < count ? "fill-cyan" : "fill-white/20"}`}
          aria-hidden="true"
        >
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-navy px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-3 inline-block h-px w-8 bg-cyan" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map(({ name, location, rating, quote }) => (
            <div
              key={name}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              {/* Big quote mark */}
              <span
                className="pointer-events-none absolute right-6 top-4 font-heading text-7xl font-bold leading-none text-cyan/15 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <Stars count={rating} />

              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{name}</p>
                <p className="text-xs text-white/40">{location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot-style badge */}
        <p className="mt-10 text-center text-xs text-white/30 tracking-wide">
          ✦ &nbsp; Verified customer reviews &nbsp; ✦
        </p>
      </div>
    </section>
  );
}
