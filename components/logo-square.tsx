import clsx from "clsx";
import Image from "next/image";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <Image
      src="/logo.png"
      alt={process.env.SITE_NAME ?? "LaserGlow"}
      width={size === "sm" ? 100 : 140}
      height={size === "sm" ? 30 : 40}
      className={clsx("w-auto object-contain", {
        "h-[40px]": !size,
        "h-[30px]": size === "sm",
      })}
      priority
    />
  );
}
