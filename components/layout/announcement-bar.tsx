const messages = [
  "✦ Free delivery on orders over GH₵500",
  "✦ Dentist-formulated · Enamel-safe · Ghana-made",
  "✦ Use code GLOW10 for 10% off your first order",
];

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-navy py-2.5 text-center text-xs font-medium tracking-wide text-white/90">
      <div className="flex animate-[marquee_30s_linear_infinite] items-center gap-16 whitespace-nowrap">
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="flex-none">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
