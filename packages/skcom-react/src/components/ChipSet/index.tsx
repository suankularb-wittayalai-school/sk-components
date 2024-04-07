// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/chip-set.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link ChipSet Chip Set}.
 */
export interface ChipSetProps extends SKComponent {
  /**
   * Chips.
   *
   * - Must include ≥2 Chips.
   * - Must be the same type of Chips.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * If the parent element is not wide enough for all Chips to be visible, the
   * Chip Set can be scrolled horizontally.
   *
   * - Optional.
   */
  scrollable?: boolean;
}

/**
 * Chips are normally alongside each other. A Chip Set is a container for
 * Chips, handling gaps, wrap, etc.
 *
 * @param children Chips.
 * @param scrollable If the parent element is not wide enough for all Chips to be visible, the Chip Set can be scrolled horizontally.
 */
export function ChipSet({
  children,
  scrollable,
  element: Element = "div",
  style,
  className,
}: ChipSetProps) {
  // Wrap the Chip Set in a wrapper if it is scrollable.
  if (scrollable)
    return (
      <Element
        style={style}
        className={cn(["skc-chip-set__wrapper", className])}
      >
        <div className="skc-chip-set">{children}</div>
      </Element>
    );

  // Otherwise, return the Chip Set.
  return (
    <Element style={style} className={cn(["skc-chip-set", className])}>
      {children}
    </Element>
  );
}

ChipSet.displayName = "ChipSet";
