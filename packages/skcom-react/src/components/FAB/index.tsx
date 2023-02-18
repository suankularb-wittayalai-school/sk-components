// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/fab.css";

// Utilities
import { cn } from "../../utils/className";
import { useRipple } from "../../utils/animation";

/**
 * Props for {@link FAB}.
 */
export interface FABProps extends SKComponent {
  children?: React.ReactNode;
  color: "surface" | "primary" | "secondary" | "tertiary";
}

/**
 * The Floating Action Button or FAB is the main action of a page.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.v2ft1p7l7f8a SKCom documentation}
 *
 * @param
 */
export function FAB({ children, color, style, className }: FABProps) {
  // Ripple setup
  const fabRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(fabRef);

  return (
    <button
      ref={fabRef}
      style={style}
      className={cn([
        "skc-fab",
        color === "surface"
          ? "skc-fab--surface"
          : color === "primary"
          ? "skc-fab--primary"
          : color === "secondary"
          ? "skc-fab--secondary"
          : color === "tertiary"
          ? "skc-fab--tertiary"
          : undefined,
        className,
      ])}
      {...rippleListeners}
    >
      {children && <span className="skc-fab__label">{children}</span>}
      <motion.span
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-fab__ripple"
        style={rippleStyle}
      />
    </button>
  );
}

FAB.displayName = "FAB";
