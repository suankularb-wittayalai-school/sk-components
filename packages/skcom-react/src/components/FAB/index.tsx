// External libraries
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/fab.css";

// Utilities
import {
  transition,
  useAnimationConfig,
  useRipple,
} from "../../utils/animation";
import { cn } from "../../utils/className";
import { useBreakpoint, useScrollDirection } from "../../utils/window";

/**
 * Props for {@link FAB}.
 */
export interface FABProps extends SKComponent {
  /**
   * The text displayed inside the FAB.
   *
   * - Must be a string or a JSX Element.
   * - Incompatible with `size`.
   * - Normally optional but required if `icon` is undefined, as a FAB cannot
   *   be empty.
   */
  children?: React.ReactNode;

  /**
   * The color of the FAB.
   *
   * - Must be `surface`, `primary`, `secondary`, or `tertiary`. These colors
   *   are defined in the palette.
   * - Always required.
   */
  color: "surface" | "primary" | "secondary" | "tertiary";

  /**
   * How large/small the FAB is.
   *
   * - Must be `small`, `standard`, or `large`.
   * - Defaults to `standard`.
   * - Incompatible with `children`.
   */
  size?: "small" | "standard" | "large";

  /**
   * The icon displayed inside the FAB or alongside the label.
   *
   * - You are encouraged to use Material Icons as the value for `icon`.
   * - Required if `children` is undefined, as a FAB cannot be empty.
   */
  icon?: JSX.Element;

  /**
   * A description of the FAB for screen readers, similar to `alt` on `<img>`.
   *
   * - Required if the FAB just includes `icon`, because an icon has no
   *   significance for screen readers.
   */
  alt?: string;

  /**
   * A message shown in a tooltip when the user hovers over the FAB.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * The FAB can disappear or minimize when the user starts scrolling down to
   * keep the focus on the page’s content.
   *
   * - Can be `disappear` or `minimize`. `minimize` is only functional if
   *   `children` is defined.
   * - If set to `disappear`, the FAB completely disappears on scroll.
   * - If set to `minimize`, the text label (`children`) disappears on scroll,
   *   leaving just the icon in the FAB.
   * - Optional.
   */
  stateOnScroll?: "disappear" | "minimize";

  /**
   * The function called when the user interacts with the FAB, similar to
   * `onClick` on `<button>`.
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
 * The Floating Action Button or FAB is the main action of a page.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.v2ft1p7l7f8a SKCom documentation}
 *
 * @param children The text displayed inside the FAB.
 * @param color The color of the FAB.
 * @param size How large/small the FAB is.
 * @param icon The icon displayed inside the FAB or alongside the label.
 * @param alt A description of the FAB for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the FAB.
 * @param stateOnScroll The FAB can disappear or minimize when the user starts scrolling down.
 * @param onClick The function called when the user interacts with the FAB.
 * @param href The URL of the page this FAB leads to.
 */
export function FAB({
  children,
  color,
  size,
  icon,
  alt,
  tooltip,
  stateOnScroll,
  onClick,
  href,
  element,
  style,
  className,
}: FABProps) {
  // Animation config
  const { duration, easing } = useAnimationConfig();

  // Ripple setup
  const fabRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(fabRef);

  // Scroll direction
  const { atBreakpoint } = useBreakpoint();
  const scrollDir = useScrollDirection({ disabled: atBreakpoint !== "base" });

  return React.createElement(
    element || href ? "a" : "button",
    {
      "aria-label": alt,
      title: tooltip,
      href,
      onClick,
      className: "skc-fab__wrapper",
      ...rippleListeners,
    },
    <AnimatePresence initial={false}>
      {
        // Hide the FAB on scroll if `stateOnScroll` set to `disappear`
        !(
          atBreakpoint === "base" &&
          stateOnScroll === "disappear" &&
          scrollDir === "down"
        ) && (
          <motion.div
            ref={fabRef}
            layout
            initial={{ scale: 0.4, x: 20, y: 20, opacity: 0 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
            exit={{
              scale: 0.4,
              x: 20,
              y: 20,
              opacity: 0,
              transition: transition(
                duration.short2,
                easing.standardAccelerate
              ),
            }}
            transition={transition(duration.medium1, easing.standardDecelerate)}
            style={{
              ...style,
              borderRadius: { small: 12, standard: 16, large: 28 }[
                (atBreakpoint === "base" && size) || "standard"
              ],
            }}
            className={cn([
              "skc-fab",
              color === "surface"
                ? "skc-fab--surface"
                : color === "primary"
                ? "skc-fab--primary"
                : color === "secondary"
                ? "skc-fab--secondary"
                : color === "tertiary" && "skc-fab--tertiary",
              // Only apply size on mobile (the other sizes don’t fit in the
              // Navigation Rail)
              atBreakpoint === "base"
                ? size === "small"
                  ? "skc-fab--small"
                  : size === "large" && "skc-fab--large"
                : "skc-fab--standard",
              className,
            ])}
          >
            {/* Icon */}
            {icon && (
              <motion.div layout="position" className="skc-fab__icon">
                {icon}
              </motion.div>
            )}

            {/* Label */}
            <AnimatePresence initial={false}>
              {children &&
                // Only show the label on mobile (the label doesn’t fit in the
                // Navigation Rail)
                atBreakpoint === "base" &&
                // Hide the label on scroll if `stateOnScroll` set to `minimize`
                !(stateOnScroll === "minimize" && scrollDir === "down") && (
                  <motion.span
                    layout="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: transition(
                        duration.short2,
                        easing.standardAccelerate
                      ),
                    }}
                    transition={transition(
                      duration.medium1,
                      easing.standardDecelerate
                    )}
                    className="skc-fab__label"
                  >
                    {children}
                  </motion.span>
                )}
            </AnimatePresence>

            {/* Ripple */}
            <motion.span
              aria-hidden
              initial={{ scale: 0, opacity: 0.36 }}
              animate={rippleControls}
              className="skc-fab__ripple"
              style={rippleStyle}
            />
          </motion.div>
        )
      }
    </AnimatePresence>
  );
}

FAB.displayName = "FAB";
