import "@suankularb-components/css/dist/css/components/chip-set.css";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * Chips are normally alongside each other. A Chip Set is a container for
 * Chips, handling gaps, wrap, etc.
 *
 * @param children Chips.
 * @param scrollable If the parent element is not wide enough for all Chips to be visible, the Chip Set can be scrolled horizontally.
 */
const ChipSet: StylableFC<{
  /**
   * Chips.
   *
   * - Must include ≥2 Chips.
   * - Must be the same type of Chips.
   * - Always required.
   */
  children: ReactNode;

  /**
   * If the parent element is not wide enough for all Chips to be visible, the
   * Chip Set can be scrolled horizontally.
   *
   * - Optional.
   */
  scrollable?: boolean;
}> = ({ children, scrollable, element: Element = "div", style, className }) => {
  // Put the Chip Set in a wrapper if it’s scrollable.
  if (scrollable)
    return (
      <Element style={style} className={cn("skc-chip-set__wrapper", className)}>
        <div className="skc-chip-set">{children}</div>
      </Element>
    );

  // Otherwise, just return the Chip Set.
  return (
    <Element style={style} className={cn("skc-chip-set", className)}>
      {children}
    </Element>
  );
};

ChipSet.displayName = "ChipSet";

export default ChipSet;
