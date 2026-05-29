import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 md:py-24 lg:px-12"
      style={{
        background:
          "linear-gradient(135deg, #f5f8fc 0%, #e8f7fd 40%, #c8ecf8 70%, #a8dff3 100%)",
      }}
    >
      {/* Decorative blurred blobs */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, #29abe2 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-1/3 h-[300px] w-[300px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, #15296e 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[200px] w-[200px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #29abe2 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">

        {/* Left — copy */}
        <div>
          <p className="animate-fade-up mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy/70">
            <span className="inline-block h-px w-6 bg-cyan align-middle" />
            Professional Dental Care
          </p>

          <h1 className="animate-fade-up font-heading text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
            Clinical Precision.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #29abe2, #15296e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fresh Confidence.
            </span>
          </h1>

          <p className="animate-fade-up-delay-1 mt-5 max-w-md text-base leading-relaxed text-ink/60 md:text-lg">
            Dentist-formulated whitening engineered for enamel safety — and
            results you&apos;ll see in days, not months.
          </p>

          <div className="animate-fade-up-delay-2 mt-8 flex items-center gap-5">
            <Link
              href="/search"
              prefetch={true}
              className="inline-block rounded-full bg-navy px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-navy/20 transition-all duration-200 hover:bg-cyan hover:text-navy hover:shadow-cyan/30"
            >
              Shop Now
            </Link>
            <Link
              href="/search"
              prefetch={true}
              className="text-sm font-medium text-navy/50 underline underline-offset-4 transition-colors duration-150 hover:text-navy"
            >
              See all products →
            </Link>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="relative flex items-center justify-center">
          <div className="overflow-hidden rounded-3xl bg-white">
            <Image
              src="/hero-image.png"
              alt="LaserGlow dental care products"
              width={0}
              height={0}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-[360px] w-auto md:h-[480px]"
              priority
            />
          </div>

          {/* Floating accent ring behind the image card */}
          <div
            className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 rounded-full border-2 border-cyan/20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-4 -left-4 h-32 w-32 rounded-full border-2 border-navy/10"
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  );
}
