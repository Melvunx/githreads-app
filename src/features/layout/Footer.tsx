import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";
import { Home, PenSquare, User } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="container fixed inset-x-0 bottom-0 m-auto flex max-w-lg justify-between gap-1 border-t border-accent bg-background py-2">
      <Link
        href="/"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        <Home size={16} />
      </Link>
      <Link
        href="/write"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        <PenSquare size={16} />
      </Link>
      <Link
        href="/profile"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        <User size={16} />
      </Link>
    </div>
  );
};
