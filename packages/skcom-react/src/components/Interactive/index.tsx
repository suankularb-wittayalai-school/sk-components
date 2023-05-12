// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/interactive.css";

// Utilities
import { cn } from "../../utils/className";
import { useRipple } from "../../utils/animation";
import { motion } from "framer-motion";

/**
 * Props for {@link Interactive}.
 */
export interface InteractiveProps<
  ElementProps extends {} = React.ComponentProps<"div">
> extends SKComponent {
  /**
   * The content to make interactive.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * @todo Prop documentation.
   */
  stateLayerEffect?: boolean;

  /**
   * @todo Prop documentation.
   */
  rippleEffect?: boolean;

  /**
   * Elevates the content on hover and focus to signify its interactivity.
   *
   * - Optional.
   */
  shadowEffect?: boolean;

  /**
   * The function called when the user interacts with the content, similar to
   * `onClick` on `<button>`.
   *
   * - Optional.
   */
  onClick?: () => any;

  /**
   * The URL of the page the content leads to, similar to `href` on `<a>`.
   *
   * - Incompatible with `onClick`.
   */
  href?: string;

  /**
   * The element of the container.
   *
   * - Defaults to `<div>`.
   * - Optional.
   */
  element?: keyof React.ReactHTML | React.FunctionComponent;

  /**
   * Attributes for the container.
   *
   * - Optional.
   */
  attr?: ElementProps;
}

/**
 * An interactive represents the user, whether by their initials or their picture.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children The content to make interactive.
 * @param stateLayerEffect TODO
 * @param rippleEffect TODO
 * @param shadowEffect Elevates the content on hover and focus to signify its interactivity.
 * @param onClick The function called when the user interacts with the content, similar to `onClick` on `<button>`.
 * @param href The URL of the page the content leads to, similar to `href` on `<a>`.
 * @param element The element of the container.
 * @param attr Attributes for the container.
 */
export function Interactive<
  ElementProps extends {} = React.ComponentPropsWithRef<"div">
>({
  children,
  stateLayerEffect,
  rippleEffect,
  shadowEffect,
  onClick,
  href,
  element,
  attr,
  style,
  className,
}: InteractiveProps<ElementProps>) {
  // Ripple setup
  const buttonRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(
    ((attr as React.ComponentPropsWithRef<any> | undefined)
      ?.ref as React.RefObject<HTMLElement>) || buttonRef
  );

  return React.createElement(
    // Container
    (element as keyof React.ReactHTML) ||
      (href ? "a" : onClick ? "button" : "div"),

    // Props
    {
      ref: buttonRef,
      onClick,
      ...rippleListeners,
      type: onClick || element === "button" ? "button" : undefined,
      href,
      style,
      className: cn([
        "skc-interactive",
        stateLayerEffect === false && "skc-interactive--no-state-layer",
        shadowEffect && "skc-interactive--shadow",
        className,
      ]),
      ...attr,
    },

    // Content
    children,

    // Ripple
    rippleEffect !== false ? (
      <motion.span
        aria-hidden
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-interactive__ripple"
        style={rippleStyle}
      />
    ) : null
  );
}

Interactive.displayName = "Interactive";
