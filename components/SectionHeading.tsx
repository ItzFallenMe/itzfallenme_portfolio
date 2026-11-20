import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-heading-title">{title}<span className="text-primary">.</span></h2>
      {children && <div className="section-heading-description">{children}</div>}
    </div>
  );
}
