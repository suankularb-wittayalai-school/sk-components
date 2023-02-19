// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/nav-bar-item.css";

// Utilities
import { cn } from "../../utils/className";
import { useRipple } from "../../utils/animation";
import { motion } from "framer-motion";

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
  element?: () => JSX.Element;
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
  element,
  style,
  className,
}: NavBarItemProps) {
  // Ripple setup
  const iconRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(iconRef);

  // Label ID for `aria-labelledby`
  const navID = `nav-${typeof label === "string" ? label.toLowerCase() : alt}`;

  return (
    <a
      aria-current={selected}
      aria-labelledby={label ? navID : undefined}
      href={href}
      title={tooltip}
      style={style}
      className={cn([
        "skc-nav-bar-item",
        selected && "skc-nav-bar-item--selected",
        railOnly && "skc-nav-bar-item--rail-only",
        className,
      ])}
      {...rippleListeners}
    >
      <div ref={iconRef} className="skc-nav-bar-item__icon">
        {icon}
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
    </a>
  );
}

NavBarItem.displayName = "NavBarItem";
