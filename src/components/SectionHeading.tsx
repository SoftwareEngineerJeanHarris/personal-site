import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  level?: 1 | 2;
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, level = 1, id }: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header className={level === 1 ? "page-heading" : "section-heading"}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading id={id}>{title}</Heading>
      {description && <p className="heading-description">{description}</p>}
    </header>
  );
}
