// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/chip.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link FilterChip Filter Chip}.
 */
export interface FilterChipProps extends SKComponent {
  /**
   * The text displayed inside the chip.
   *
   * - Must be a string or a JSX Element.
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * An icon can appear before all content in an Filter Chip. In a page with many cards, icons can quickly orient users.
   *
   * - You are encouraged to use Material Icons as the value for `icon`.
   * - Optional.
   */
  icon?: JSX.Element;

  /**
   * A message shown in a tooltip when the user hovers over the Filter Chip.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * Use elevation instead of an outline to signify the Filter Chip’s boundary.
   *
   * - Important: do not use this prop if you don’t have to. Only elevate an Filter Chip when its placement requires visual protection, such as on top of an image.
   * - Optional.
   */
  elevated?: boolean;

  /**
   * If the Filter Chip is selected. `icon` is replaced with a checkmark if this is `true`.
   *
   * - Optional.
   */
  selected?: boolean;

  /**
   * Turns the Filter Chip gray and block any action associated with it. `onToggle` and `onMenuToggle` will have no effect.
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * Triggers when the user toggles the Filter Chip on or off.
   *
   * - Optional.
   */
  onToggle?: (state: boolean) => any;

  /**
   * Triggers when the user toggles the Menu by clicking the trailing dropdown icon on the Filter Chip.
   *
   * - Optional.
   */
  onMenuToggle?: () => any;

  /**
   * Turns the Filter Chip into a dropdown, displaying a Menu underneath the chip.
   *
   * - Must be a Menu.
   * - Optional.
   */
  menu?: JSX.Element;
}

/**
 * A set of Filter Chips provide product-authored options to narrow down
 * content. A Filter Chip should never appear alone and should be a child of
 * Chip Set.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.vps8muzdcylu SKCom documentation}
 *
 * @param children The text displayed inside the chip.
 * @param icon An icon can appear before all content in an Filter Chip.
 * @param tooltip A message shown in a tooltip when the user hovers over the Filter Chip.
 * @param elevated Use elevation instead of an outline to signify the Filter Chip’s boundary.
 * @param selected If the Filter Chip is selected.
 * @param disabled Turns the Filter Chip gray and block any action associated with it.
 * @param onToggle Triggers when the user toggles the Filter Chip on or off.
 * @param onMenuToggle Triggers when the user toggles the Menu by clicking the trailing dropdown icon on the Filter Chip.
 * @param menu Turns the Filter Chip into a dropdown, displaying a Menu underneath the chip.
 */
export function FilterChip({ children, style, className }: FilterChipProps) {
  return (
    <button style={style} className={cn(["skc-filter-chip", className])}>
      {children}
    </button>
  );
}

FilterChip.displayName = "FilterChip";
