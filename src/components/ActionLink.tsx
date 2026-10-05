import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "text";
  external?: boolean;
};

export function ActionLink({ href, children, variant = "primary", external = false }: ActionLinkProps) {
  return (
    <a className={`action-link action-link--${variant}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}<ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
