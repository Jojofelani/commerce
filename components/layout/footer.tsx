import Link from "next/link";
import LogoSquare from "components/logo-square";

const { COMPANY_NAME, SITE_NAME } = process.env;

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
    </svg>
  );
}

const PAYMENT_METHODS = [
  { name: "Visa", label: "VISA" },
  { name: "Mastercard", label: "MC" },
  { name: "PayPal", label: "PayPal" },
  { name: "MTN MoMo", label: "MoMo" },
];

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2024 + (currentYear > 2024 ? `-${currentYear}` : "");
  const copyrightName = COMPANY_NAME || SITE_NAME || "LaserGlow";

  return (
    <footer className="bg-navy text-sm text-white/60">
      {/* Cyan accent line */}
      <div className="h-[3px] w-full bg-cyan/40" />

      {/* Main three-column section */}
      <div className="mx-auto max-w-7xl px-6 py-14 min-[1320px]:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-block">
              <LogoSquare size="sm" />
            </Link>
            <p className="mt-5 max-w-[220px] text-sm leading-relaxed text-white/50">
              Ghana&apos;s leading professional-grade teeth whitening and dental care brand.
            </p>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm leading-relaxed text-white/55">
              <p>LaserGlow Dental Care<br />Accra, Ghana</p>
              <p>
                <span className="block text-white/35 text-xs mb-0.5">Phone</span>
                <a href="tel:+233000000000" className="transition-colors hover:text-cyan">
                  +233 00 000 0000
                </a>
              </p>
              <p>
                <span className="block text-white/35 text-xs mb-0.5">Email</span>
                <a href="mailto:info@laserglow.com" className="transition-colors hover:text-cyan">
                  info@laserglow.com
                </a>
              </p>
            </address>
          </div>

          {/* Col 3 — Newsletter */}
          <div>
            <h3 className="mb-2 font-heading text-base font-bold text-white">
              Stay up to Date with New Products
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-white/50">
              Get notified about new products, tips and offers. No spam — unsubscribe anytime.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Email address for newsletter"
                className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/8 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30"
              />
              <button
                type="submit"
                className="rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-cyan/90"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-6 py-5 md:flex-row md:gap-0 min-[1320px]:px-0">

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method.name}
                className="rounded border border-white/15 bg-white/8 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white/50"
                title={method.name}
              >
                {method.label}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/30 md:mx-auto">
            &copy; {copyrightDate} {copyrightName}. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              aria-label="LaserGlow on Instagram"
              className="rounded-full border border-white/15 bg-white/8 p-2 text-white/50 transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://facebook.com"
              aria-label="LaserGlow on Facebook"
              className="rounded-full border border-white/15 bg-white/8 p-2 text-white/50 transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://tiktok.com"
              aria-label="LaserGlow on TikTok"
              className="rounded-full border border-white/15 bg-white/8 p-2 text-white/50 transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              <TikTokIcon />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
