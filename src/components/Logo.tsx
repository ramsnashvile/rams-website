import Image from "next/image";
import Link from "next/link";
import { event } from "@/data/event";

type LogoProps = {
  showText?: boolean;
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
};

const sizes = {
  sm: { box: 36, src: event.logoSmUrl },
  md: { box: 44, src: event.logoUrl },
};

export function Logo({
  showText = true,
  size = "md",
  className = "",
  onClick,
}: LogoProps) {
  const { box, src } = sizes[size];

  return (
    <Link
      href="/"
      className={`flex shrink-0 items-center gap-2.5 font-display font-bold tracking-wide ${className}`}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={`${event.orgShort} logo`}
        width={box}
        height={box}
        className="rounded-full border-2 border-saffron/50 shadow-md"
        priority
      />
      {showText && <span>RAMS</span>}
    </Link>
  );
}
