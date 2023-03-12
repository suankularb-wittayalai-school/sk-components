// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/chip.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link SuggestionChip Suggestion Chip}.
 */
export interface SuggestionChipProps extends SKComponent {
  /**
   * The text shown inside the Suggestion Chip.
Always required.
   */
  children?: any;

  /**
   * An icon can appear before the text (`children`) in an Suggestion Chip. In a Chip Set with many chips, an icon can help the user find the right one more quickly.
You are encouraged to use Material Icons as the value for `icon`.
Optional.
   */
  icon?: any;

  /**
   * A message shown in a tooltip when the user hovers over the Suggestion Chip.
Optional.
   */
  tooltip?: any;

  /**
   * Use elevation instead of an outline to signify the Suggestion Chip’s boundary.
Important: do not use this prop if you don’t have to. Only elevate an Suggestion Chip when its placement requires visual protection, such as on top of an image.
Optional.
   */
  elevated?: any;

  /**
   * If the Suggestion Chip is selected.
Optional.
   */
  selected?: any;

  /**
   * Turns the Suggestion Chip gray and block any action associated with it. `onClick` and `href` will have no effect.
Optional.
   */
  disabled?: any;

  /**
   * The function called when the user interacts with the Suggestion Chip, similar to `onClick` on `<button>`.
Incompatible with `href`.
   */
  onClick?: any;

  /**
   * The URL of the page this Suggestion Chip leads to, similar to `href` on `<a>`.
Incompatible with `onClick`.
   */
  href?: any;

  /**
   * Change the underlying element from `<a>` to a custom element. This is useful when a framework you’re using has a Link component for routing. An example is `next/link` from Next.js.
Incompatible with `onClick`.
   */
  element?: any;
}

/**
 * Dynamically generated suggestions, like quick-reply options, for instance.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.oxbjowubritq SKCom documentation}
 *
 * @param children The text shown inside the Suggestion Chip.
 * @param icon An icon can appear before the text (`children`) in an Suggestion Chip.
 * @param tooltip A message shown in a tooltip when the user hovers over the Suggestion Chip.
 * @param elevated Use elevation instead of an outline to signify the Suggestion Chip’s boundary.
 * @param selected If the Suggestion Chip is selected.
 * @param disabled Turns the Suggestion Chip gray and block any action associated with it.
 * @param onClick The function called when the user interacts with the Suggestion Chip, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Suggestion Chip leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
export function SuggestionChip({
  children,
  style,
  className,
}: SuggestionChipProps) {
  return (
    <button style={style} className={cn(["skc-suggestion-chip", className])}>
      {children}
    </button>
  );
}

SuggestionChip.displayName = "SuggestionChip";
