// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/interactive.css";

// Utilities
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link Interactive}.
 */
export interface InteractiveProps<
  ElementProps extends {} = React.ComponentPropsWithRef<"div">
> extends SKComponent {
  /**
   * The content to make interactive.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * Show a state layer on top of the content that reacts in color to hover and
   * focus to signify its interactivity.
   *
   * - Enabled by default.
   * - Optional.
   */
  stateLayerEffect?: boolean;

  /**
   * Show an ink ripple effect, a soft-edge translucent circle, radiating out
   * of the click/tap position every click/tap to signify interactivity.
   *
   * - Enabled by default.
   * - Optional.
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
   * Attributes for the container.
   *
   * - Optional.
   */
  attr?: ElementProps;
}

/**
 * An interactive represents the user, whether by their initials or their picture.
 *
 * @param children The content to make interactive.
 * @param stateLayerEffect Show a state layer on top of the content that reacts in color to hover and focus to signify its interactivity.
 * @param rippleEffect Show an ink ripple effect, a soft-edge translucent circle, radiating out of the click/tap position every click/tap to signify interactivity.
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
  const Element = element || (href ? "a" : onClick ? "button" : "div");

  // Ripple setup
  const buttonRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(
    ((attr as React.ComponentPropsWithRef<any> | undefined)
      ?.ref as React.RefObject<HTMLElement>) || buttonRef
  );

  return (
    <Element
      ref={buttonRef}
      onClick={onClick}
      {...rippleListeners}
      type={onClick || element === "button" ? "button" : undefined}
      href={href}
      style={style}
      className={cn([
        "skc-interactive",
        stateLayerEffect === false && "skc-interactive--no-state-layer",
        rippleEffect === false && "skc-interactive--no-ripple",
        shadowEffect && "skc-interactive--shadow",
        className,
      ])}
      {...attr}
    >
      {/* Content */}
      {children}

      {/* Ripple */}
      {rippleEffect !== false && (
        <motion.span
          aria-hidden
          initial={{ scale: 0, opacity: 0.36 }}
          animate={rippleControls}
          className="skc-interactive__ripple"
          style={rippleStyle}
        />
      )}
    </Element>
  );
}

Interactive.displayName = "Interactive";
