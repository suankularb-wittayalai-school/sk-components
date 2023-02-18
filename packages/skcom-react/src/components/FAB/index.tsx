// External libraries
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/fab.css";

// Utilities
import { cn } from "../../utils/className";
import { useRipple } from "../../utils/animation";

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

  /**
   * Change the underlying element from `<a>` to a custom element. This is
   * useful when a framework you’re using has a Link component for routing.
   * An example is `next/link` from Next.js.
   *
   * - Incompatible with `onClick`.
   */
  element?: ({
    children,
    className,
    href,
    onMouseDown,
    onKeyDown,
  }: {
    children: React.ReactNode;
    className: string;
    href: string;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
  }) => JSX.Element;
}

/**
 * The Floating Action Button or FAB is the main action of a page.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.v2ft1p7l7f8a SKCom documentation}
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
 * @param element Change the underlying element from `<a>` to a custom element.
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
  // Ripple setup
  const fabRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(fabRef);

  // Scroll direciton
  const [scrollDir, setScrollDir] = React.useState<"up" | "down">("up");

  // Default scroll position to the top
  let prevScrollY = 0;
  React.useEffect(() => {
    window.onscroll = () => {
      // Compare to previous position and set the direction
      const { scrollY } = window;
      const direction = prevScrollY < scrollY ? "down" : "up";
      prevScrollY = scrollY;
      setScrollDir(direction);
    };

    // Cleanup
    return () => {
      window.onscroll = null;
    };
  }, []);

  const content = (
    <AnimatePresence>
      {
        // Hide the FAB on scroll if `stateOnScroll` set to `disappear`
        !(stateOnScroll === "disappear" && !(scrollDir === "up")) && (
          <motion.div
            ref={fabRef}
            style={style}
            className={cn([
              "skc-fab",
              color === "surface"
                ? "skc-fab--surface"
                : color === "primary"
                ? "skc-fab--primary"
                : color === "secondary"
                ? "skc-fab--secondary"
                : color === "tertiary"
                ? "skc-fab--tertiary"
                : undefined,
              size === "small"
                ? "skc-fab--small"
                : size === "large"
                ? "skc-fab--large"
                : "skc-fab--standard",
              className,
            ])}
          >
            {icon && <div className="skc-fab__icon">{icon}</div>}
            {
              // Hide the label on scroll if `stateOnScroll` set to `minimize`
              !(stateOnScroll === "minimize" && !(scrollDir === "up")) &&
                children && <span className="skc-fab__label">{children}</span>
            }
            <motion.span
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

  return (
    // Render with `element` if defined
    href && element ? (
      element({
        children: content,
        className: "skc-fab__wrapper",
        href,
        ...rippleListeners,
      })
    ) : // Render an `<a>` if link passed in
    href ? (
      <a href={href} className="skc-fab__wrapper" {...rippleListeners}>
        {content}
      </a>
    ) : (
      // Otherwise, render a `<button>`
      <button type="button" className="skc-fab__wrapper" {...rippleListeners}>
        {content}
      </button>
    )
  );
}

FAB.displayName = "FAB";
