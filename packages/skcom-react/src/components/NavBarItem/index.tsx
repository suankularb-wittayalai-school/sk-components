// External libraries
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/nav-bar-item.css";

// Utilities
import {
  transition,
  useAnimationConfig,
  useRipple,
} from "../../utils/animation";
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";

/**
 * Props for {@link NavBarItem Navigation Bar Item}.
 */
export interface NavBarItemProps extends SKComponent {
  /**
   * Icons help users identify pages more quickly, which is crucial for
   * frequent destinations like those from the Navigation Bar/Rail.
   *
   * - If the icon is sufficiently representative of the page, a label isn’t
   *   needed.
   * - Always required.
   */
  icon: JSX.Element;

  /**
   * An additional text label underneath the icon. This is useful if the icon
   * isn’t sufficiently representative of the page.
   *
   * - Optional.
   */
  label?: string | JSX.Element;

  /**
   * A description of the Navigation Bar Item for screen readers, similar to `alt` on `<img>`.
   *
   * - Required if the Navigation Bar Item just includes `icon`, because an
   *   icon has no significance for screen readers.
   */
  alt?: string;

  /**
   * A message shown in a tooltip when the user hovers over the Navigation Bar
   * Item.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * The number in the notification badge of this Navigation Bar Item.
   *
   * - Must be a positive integer or `null`. `null` displays a small red circle
   *   instead of a large one with numbers.
   * - Optional.
   */
  badge?: number | null;

  /**
   * Highlights the Navigation Bar Item. If the user is currently on this page,
   * the Navigation Bar Item should be highlighted.
   *
   * - Optional.
   */
  selected?: boolean;

  /**
   * This Navigation Bar Item will only show on the Navigation Rail visible on
   * larger screens and disappears on smaller screens. Since there can only be
   * a maximum of 5 destinations on a Navigation Bar, other destinations must
   * be hidden with `railOnly`.
   *
   * - Optional.
   */
  railOnly?: boolean;

  /**
   * The URL of the page this Navigation Bar Item leads to, similar to `href`
   * on `<a>`.
   *
   * - Always required.
   */
  href: string;

  /**
   * Change the underlying element from `<a>` to a custom element. This is
   * useful when a framework you’re using has a Link component for routing. An
   * example is `next/link` from Next.js.
   *
   * - Optional.
   */
  element?: ({
    children,
    title,
    style,
    className,
    href,
    onMouseDown,
    onKeyDown,
  }: {
    children: React.ReactNode;
    title?: string;
    style?: React.CSSProperties;
    className: any;
    href: string;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
  }) => JSX.Element | null;
}

/**
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.s8z7t3ulnwdb SKCom documentation}
 *
 * @param icon Icons help users identify pages more quickly, which is crucial for frequent destinations like those from the Navigation Bar/Rail.
 * @param label An additional text label underneath the icon.
 * @param alt A description of the Navigation Bar Item for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Navigation Bar Item.
 * @param badge The number in the notification badge of this Navigation Bar Item.
 * @param selected Highlights the Navigation Bar Item. If the user is currently on this page, the Navigation Bar Item should be highlighted.
 * @param railOnly This Navigation Bar Item will only show on the Navigation Rail visible on larger screens and disappears on smaller screens.
 * @param href The URL of the page this Navigation Bar Item leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
export function NavBarItem({
  icon,
  label,
  alt,
  tooltip,
  badge,
  selected,
  railOnly,
  href,
  element: Element,
  style,
  className,
}: NavBarItemProps) {
  // Animation config
  const { duration, easing } = useAnimationConfig();

  // Ripple setup
  const iconRef = React.useRef(null);

  const [clientHeight, setClientHeight] = React.useState(1080);
  React.useEffect(() => {
    if (window.innerWidth <= 600) setClientHeight(window.innerHeight);
    else setClientHeight(80);
  }, []);

  const { rippleListeners, rippleControls, rippleStyle } = useRipple(iconRef);

  // Label ID for `aria-labelledby`
  const navID = `nav-section-${kebabify(
    (typeof label === "string" ? label : alt)!
  )}`;

  const props = {
    "aria-current": selected,
    "aria-labelledby": label ? navID : undefined,
    href: href,
    title: tooltip,
    style: style,
    className: cn([
      "skc-nav-bar-item",
      selected && "skc-nav-bar-item--selected",
      railOnly && "skc-nav-bar-item--rail-only",
      className,
    ]),
    ...rippleListeners,
  } satisfies JSX.IntrinsicElements["a"];

  const content = (
    <>
      <div ref={iconRef} className="skc-nav-bar-item__icon">
        {icon}
        <LayoutGroup>
          <AnimatePresence>
            {badge !== undefined && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                layoutId={[navID, "badge"].join("-")}
                transition={transition(duration.short4, easing.standard)}
                className="skc-nav-bar-item__badge"
              >
                {badge !== null ? (badge > 99 ? "99+" : badge) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
        <motion.span
          initial={{ scale: 0, opacity: 0.36 }}
          animate={rippleControls}
          className="skc-nav-bar-item__ripple"
          style={rippleStyle}
        />
      </div>
      {label && (
        <span id={navID} className="skc-nav-bar-item__label">
          {label}
        </span>
      )}
    </>
  );

  return (
    // Render with `element` if defined
    Element ? (
      <Element {...props}>{content}</Element>
    ) : (
      // Otherwise, render an `<a>`
      <a {...props}>{content}</a>
    )
  );
}

NavBarItem.displayName = "NavBarItem";
