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
          className="text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
