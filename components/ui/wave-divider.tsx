import clsx from "clsx";

export default function WaveDivider({
  flip = false,
  className,
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("w-full leading-none", className)} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/wave.png"
        alt=""
        className={clsx("w-full", { "rotate-180": flip })}
      />
    </div>
  );
}
