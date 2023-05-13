// External libraries
import * as React from "react";

// Internal components
import { Interactive } from "../Interactive";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/suggestion-chip.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link SuggestionChip Suggestion Chip}.
 */
export interface SuggestionChipProps extends SKComponent {
  /**
   * The text shown inside the Suggestion Chip.
   *
   * - Always required.
   */
  children?: React.ReactNode;

  /**
   * An icon can appear before the text (`children`) in an Suggestion Chip. In
   * a Chip Set with many chips, an icon can help the user find the right one
   * more quickly.
   *
   * - You are encouraged to use Material Icons as the value for `icon`.
   * - Optional.
   */
  icon?: JSX.Element;

  /**
   * A message shown in a tooltip when the user hovers over the Suggestion
   * Chip.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * Use elevation instead of an outline to signify the Suggestion Chip’s
   * boundary.
   *
   * - **Important**: do not use this prop if you don’t have to. Only elevate
   *   an Suggestion Chip when its placement requires visual protection, such
   *   as on top of an image.
   * - Optional.
   */
  elevated?: boolean;

  /**
   * If the Suggestion Chip is selected.
   *
   * - Optional.
   */
  selected?: boolean;

  /**
   * Turns the Suggestion Chip gray and block any action associated with it.
   * `onClick` and `href` will have no effect.
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * The function called when the user interacts with the Suggestion Chip,
   * similar to `onClick` on `<button>`.
   *
   * - Incompatible with `href`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Suggestion Chip leads to, similar to `href` on
   * `<a>`.
   *
   * - Incompatible with `onClick`.
   */
  href?: string;

  /**
   * @todo Replace this with `element` from the `SKComponent` interface.
   */
  element?: keyof React.ReactHTML | React.FunctionComponent<any>;
}

/**
 * Dynamically generated suggestions, like quick-reply options, for instance.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.oxbjowubritq SKCom documentation}
 *
 * @param children The text shown inside the Suggestion Chip.
 * @param icon An icon can appear before the text (`children`) in an Suggestion Chip.
 * @param tooltip A message shown in a tooltip when the user hovers over the Suggestion Chip.
 * @param elevated Use elevation instead of an outline to signify the Suggestion Chip’s boundary.
 * @param selected If the Suggestion Chip is selected.
 * @param disabled Turns the Suggestion Chip gray and block any action associated with it.
 * @param onClick The function called when the user interacts with the Suggestion Chip, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Suggestion Chip leads to, similar to `href` on `<a>`.
 */
export function SuggestionChip({
  children,
  icon,
  tooltip,
  elevated,
  selected,
  disabled,
  onClick,
  href,
  element,
  style,
  className,
}: SuggestionChipProps) {
  return (
    <Interactive
      onClick={onClick}
      href={href}
      element={element}
      attr={{ "aria-disabled": disabled, title: tooltip }}
      style={style}
      className={cn([
        "skc-suggestion-chip",
        elevated && "skc-suggestion-chip--elevated",
        selected && "skc-suggestion-chip--selected",
        className,
      ])}
    >
      {icon && <div className="skc-suggestion-chip__icon">{icon}</div>}
      <span className="skc-suggestion-chip__label">{children}</span>
    </Interactive>
  );
}

SuggestionChip.displayName = "SuggestionChip";
