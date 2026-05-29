function ToothIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 3 .5 5 0 3 1 7 2.5 7S10.5 16 12 16s2.5 3 3.5 3 2.5-4 2.5-7c0-2 .5-3.5.5-5C18.5 4.5 16 2 12 2Z" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function BeakerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path d="M9 3h6M9 3v7l-4 9h14l-4-9V3M9 12h6" />
    </svg>
  );
}

const pillars = [
  {
    Icon: ToothIcon,
    heading: "Dentist-Formulated",
    body: "Developed with dental professionals to ensure safe, effective whitening with every use.",
  },
  {
    Icon: ShieldCheckIcon,
    heading: "Enamel-Safe",
    body: "Our pH-balanced formula whitens without compromising your enamel integrity.",
  },
  {
    Icon: BeakerIcon,
    heading: "Professional-Grade",
    body: "Clinical-strength actives at concentrations trusted by dental practices across Ghana.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white px-6 py-20 lg:px-12 border-t border-neutral-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 flex flex-col items-center">
          <span className="mb-3 inline-block h-px w-8 bg-cyan" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Why LaserGlow
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {pillars.map(({ Icon, heading, body }) => (
            <div key={heading} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-cyan">
                <Icon />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-navy">
                {heading}
              </h3>
              <p className="text-sm leading-relaxed text-ink/80">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
