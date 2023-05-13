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

  /**
   * Attributes for the underlying `<div>` element used as the field.
   *
   * - Optional.
   */
  divAttr?: React.ComponentProps<"div">;
}

/**
 * Chips are normally alongside each other. A Chip Set is a container for
 * Chips, handling gaps, wrap, etc.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.vu5fu2ylc51e SKCom documentation}
 *
 * @param children Chips.
 * @param scrollable If the parent element is not wide enough for all Chips to be visible, the Chip Set can be scrolled horizontally.
 * @param divAttr Attributes for the underlying `<div>` element used as the field.
 */
export function ChipSet({
  children,
  scrollable,
  divAttr,
  style,
  className,
}: ChipSetProps) {
  return (
    <div
      style={style}
      className={cn([
        scrollable ? "skc-chip-set__wrapper" : "skc-chip-set",
        className,
      ])}
      {...(!scrollable ? divAttr : null)}
    >
      {scrollable ? (
        <div className="skc-chip-set" {...(scrollable ? divAttr : null)}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}

ChipSet.displayName = "ChipSet";
