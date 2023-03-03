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
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.vu5fu2ylc51e SKCom documentation}
 *
 * @param children Chips.
 * @param scrollable If the parent element is not wide enough for all Chips to be visible, the Chip Set can be scrolled horizontally.
 */
export function ChipSet({
  children,
  scrollable,
  style,
  className,
}: ChipSetProps) {
  return (
    <div
      style={style}
      className={cn([
        "skc-chip-set",
        scrollable && "skc-chip-set--scrollable",
        className,
      ])}
    >
      {children}
    </div>
  );
}

ChipSet.displayName = "ChipSet";
