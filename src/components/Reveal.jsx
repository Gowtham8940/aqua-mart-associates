import { motion } from "framer-motion";

/**
 * Scroll-triggered reveal wrapper (fade + rise), replaces the old
 * IntersectionObserver + CSS class approach with framer-motion's
 * viewport-aware animation. Animates once, respects prefers-reduced-motion
 * via <MotionConfig reducedMotion="user"> set at the app root.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.15,
  ...rest
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
