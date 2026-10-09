import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-remington-orange transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      ))}
    </nav>
  );
}
