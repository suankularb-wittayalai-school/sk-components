// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/nav-drawer-item.css";

// Utilities
import { cn } from "../../utils/className";
import { useRipple } from "../../utils/animation";
import { motion } from "framer-motion";

/**
 * Props for {@link NavDrawerItem Navigation Drawer Item}.
 */
export interface NavDrawerItemProps extends SKComponent {
  /**
   * Icons help users identify pages more quickly.
   *
   * - Always required.
   */
  icon: JSX.Element;

  /**
   * The title of the destination page.
   *
   * - Always required.
   */
  label?: string | JSX.Element;

  /**
   * Some text aligned to the right of a Navigation Drawer Item. This is useful
   * for, for instance, displaying the number of new messages.
   *
   * - Optional.
   */
  metadata?: string | JSX.Element;

  /**
   * A message shown in a tooltip when the user hovers over the Navigation
   * Drawer Item.
   *
   * - Optional.
   */
  tooltip?: string;

  /**
   * Highlights the Navigation Drawer Item. If the user is currently on this
   * page, the Navigation Drawer Item should be highlighted.
   *
   * - Optional.
   */
  selected?: boolean;

  /**
   * @private
   */
  onClick?: () => any;

  /**
   * The URL of the page this Navigation Drawer Item leads to, similar to
   * `href` on `<a>`.
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
    ref,
    title,
    style,
    className,
    href,
    onMouseDown,
    onKeyDown,
  }: {
    children: React.ReactNode;
    ref: React.MutableRefObject<any>;
    title?: string;
    style?: React.CSSProperties;
    className: any;
    href: string;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
  }) => JSX.Element | null;
}

/**
 * A row of Buttons. NavDrawerItem handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.sacv3at35zp6 SKCom documentation}
 *
 * @param icon Icons help users identify pages more quickly.
 * @param label The title of the destination page.
 * @param metadata Some text aligned to the right of a Navigation Drawer Item.
 * @param tooltip A message shown in a tooltip when the user hovers over the Navigation Drawer Item.
 * @param selected Highlights the Navigation Drawer Item.
 * @param href The URL of the page this Navigation Drawer Item leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
export function NavDrawerItem({
  icon,
  label,
  metadata,
  tooltip,
  selected,
  onClick,
  href,
  element: Element,
  style,
  className,
}: NavDrawerItemProps) {
  // Ripple setup
  const linkRef = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(linkRef);

  const props = {
    ref: linkRef,
    "aria-current": selected,
    title: tooltip,
    style,
    className: cn([
      "skc-nav-drawer-item",
      selected && "skc-nav-drawer-item--selected",
      className,
    ]),
    href,
    onClick,
    ...rippleListeners,
  } satisfies JSX.IntrinsicElements["a"];

  const content = (
    <>
      <div className="skc-nav-drawer-item__icon">{icon}</div>
      <span className="skc-nav-drawer-item__label">{label}</span>
      {metadata && (
        <span className="skc-nav-drawer-item__metadata">{metadata}</span>
      )}
      <motion.span
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-nav-drawer-item__ripple"
        style={rippleStyle}
      />
    </>
  );

  return (
    <li>
      {Element ? (
        <Element {...props}>{content}</Element>
      ) : (
        <a {...props}>{content}</a>
      )}
    </li>
  );
}

NavDrawerItem.displayName = "NavDrawerItem";
