// External libraries
import * as React from "react";

// Internal components
import { Interactive } from "../Interactive";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/assist-chip.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link AssistChip Assist Chip}.
 */
export interface AssistChipProps extends SKComponent {
  /**
   * The text shown inside the Assist Chip.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * An icon can appear before the text (`children`) in an Assist Chip. In a
   * Chip Set with many chips, an icon can help the user find the right one
   * more quickly.
   *
   * - You are encouraged to use Material Icons as the value for `icon`.
   * - Favicons and branded icons can also be used here.
   * - Optional.
   */
  icon?: JSX.Element;

  /**
   * A message shown in a tooltip when the user hovers over the Assist Chip.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * Use elevation instead of an outline to signify the Assist Chip’s boundary.
   *
   * - **Important**: do not use this prop if you don’t have to. Only elevate
   *   an Assist Chip when its placement requires visual protection, such as on
   *   top of an image.
   * - Optional.
   */
  elevated?: boolean;

  /**
   * If the action the Assist Chip accomplishes is dangerous, like deleting
   * your account. If it is, the Assist Chip turns red (defined as `error` in
   * the palette).
   *
   * - Optional.
   */
  dangerous?: boolean;

  /**
   * Disable the Assist Chip and add a Progress spinner in front of the text to
   * signify loading status. `onClick` and `href` will have no effect.
   *
   * - Optional.
   */
  loading?: boolean;

  /**
   * Turns the Assist Chip gray and block any action associated with it.
   * `onClick` and `href` will have no effect.
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * The function called when the user interacts with the Assist Chip, similar
   * to `onClick` on `<button>`.
   *
   * - Incompatible with `href`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this FAB leads to, similar to `href` on `<a>`.
   *
   * - Incompatible with `onClick`.
   */
  href?: string;
}

/**
 * Assist Chips are similar to Buttons in that it helps users take action. The
 * difference is a Button is persistent (doesn’t change) and an Assist Chip is
 * dynamic and contextual (changes according to the context).
 *
 * The label of an Assist Chip should start with a verb, i.e. “**Turn on**
 * lights” or “**Save** to favorites”.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.6b3bv92d22u9 SKCom documentation}
 *
 * @param children The text shown inside the Assist Chip.
 * @param icon An icon can appear before the text (`children`) in an Assist Chip.
 * @param tooltip A message shown in a tooltip when the user hovers over the Assist Chip.
 * @param elevated Use elevation instead of an outline to signify the Assist Chip’s boundary.
 * @param dangerous If the action the Assist Chip accomplishes is dangerous, like deleting your account.
 * @param loading Disable the Assist Chip and add a Progress spinner in front of the text to signify loading status.
 * @param disabled Turns the Assist Chip gray and block any action associated with it.
 * @param onClick The function called when the user interacts with the Assist Chip, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Assist Chip leads to, similar to `href` on `<a>`.
 */
export function AssistChip({
  children,
  icon,
  tooltip,
  elevated,
  dangerous,
  loading,
  disabled,
  onClick,
  href,
  element,
  style,
  className,
}: AssistChipProps) {
  return (
    <Interactive
      href={!(disabled || loading) ? href : undefined}
      onClick={!(disabled || loading) ? onClick : undefined}
      element={disabled || loading ? "button" : element}
      attr={{
        "aria-disabled": disabled,
        title: tooltip,
      }}
      style={style}
      className={cn([
        "skc-assist-chip",
        elevated && "skc-assist-chip--elevated",
        dangerous && "skc-assist-chip--dangerous",
        className,
      ])}
    >
      {icon && <div className="skc-assist-chip__icon">{icon}</div>}
      <span className="skc-assist-chip__label">{children}</span>
    </Interactive>
  );
}

AssistChip.displayName = "AssistChip";

