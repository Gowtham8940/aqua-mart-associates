import { motion } from "framer-motion";

const VARIANTS = {
  primary:
    "bg-gradient-to-br from-brand to-navy text-white shadow-[0_8px_20px_-6px_rgba(14,126,163,.55)] hover:shadow-[0_14px_26px_-8px_rgba(14,126,163,.6)]",
  wa: "bg-green text-white shadow-[0_8px_20px_-6px_rgba(27,166,114,.5)] hover:bg-green-d",
  ghost: "bg-white text-navy border border-line hover:border-teal hover:text-brand",
};

const SIZES = {
  base: "px-[22px] py-[15px] text-base",
  lg: "px-7 py-[17px] text-[1.06rem]",
};

/**
 * Shared CTA button. Renders as <a> when `href` is given, else <button>.
 * Uses a tiny motion lift on hover/tap for tactile feedback.
 */
export default function Button({
  as,
  href,
  variant = "primary",
  size = "base",
  block = false,
  icon: Icon,
  iconRight,
  className = "",
  children,
  ...rest
}) {
  const Tag = motion[as || (href ? "a" : "button")];
  const classes = [
    "inline-flex items-center justify-center gap-2.5 whitespace-nowrap",
    "font-display font-bold rounded-xl leading-none cursor-pointer select-none",
    "transition-colors duration-200",
    VARIANTS[variant],
    SIZES[size],
    block ? "w-full" : "",
    className,
  ].join(" ");

  return (
    <Tag
      href={href}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...rest}
    >
      {Icon && !iconRight && <Icon className="w-[19px] h-[19px] shrink-0" />}
      {children}
      {Icon && iconRight && <Icon className="w-[19px] h-[19px] shrink-0" />}
    </Tag>
  );
}
