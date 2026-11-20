import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "quiet";
type Props = {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  external?: boolean;
};

const styles: Record<Variant, string> = {
  primary: "reference-button reference-button-primary",
  outline: "reference-button reference-button-outline",
  quiet: "reference-button reference-button-quiet",
};

export default function ActionButton({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  disabled,
  external = false,
}: Props) {
  const classes = `${styles[variant]} ${className}`.trim();
  if (href) {
    if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children}</a>;
    }
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} disabled={disabled} className={classes}>{children}</button>;
}
