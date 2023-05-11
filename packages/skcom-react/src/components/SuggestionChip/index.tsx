// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/suggestion-chip.css";

// Utilities
import { useRipple } from "../../utils/animation";
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
   * Change the underlying element from `<a>` to a custom element. This is
   * useful when a framework you’re using has a Link component for routing. An
   * example is `next/link` from Next.js.
   *
   * - Incompatible with `onClick`.
   */
  element?: ({
    children,
    ref,
    style,
    className,
    href,
    onTouchStart,
    onMouseDown,
    onKeyDown,
  }: {
    children: React.ReactNode;
    ref: React.MutableRefObject<any>;
    style?: React.CSSProperties;
    className: any;
    href: string;
    onTouchStart: (event: React.TouchEvent) => void;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
  }) => JSX.Element | null;
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
 * @param element Change the underlying element from `<a>` to a custom element.
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
  element: Element,
  style,
  className,
}: SuggestionChipProps) {
  // Ripple setup
  const buttonRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(buttonRef);

  const props = {
    ref: buttonRef,
    "aria-disabled": disabled,
    title: tooltip,
    style: style,
    className: cn([
      "skc-suggestion-chip",
      elevated && "skc-suggestion-chip--elevated",
      selected && "skc-suggestion-chip--selected",
      className,
    ]),
    ...rippleListeners,
  } satisfies JSX.IntrinsicElements["a" | "button"];

  const content = (
    <>
      {icon && <div className="skc-suggestion-chip__icon">{icon}</div>}
      <span className="skc-suggestion-chip__label">{children}</span>
      <motion.span
        aria-hidden
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-suggestion-chip__ripple"
        style={rippleStyle}
      />
    </>
  );

  return (
    // Render with `element` if defined
    href && Element ? (
      <Element {...{ ...props, href }}>{content}</Element>
    ) : // Render an `<a>` if link passed in
    href ? (
      <a {...{ ...props, href }}>{content}</a>
    ) : (
      // Otherwise, render a `<button>`
      <button {...{ ...props, onClick }} type="button">
        {content}
      </button>
    )
  );
}

SuggestionChip.displayName = "SuggestionChip";
