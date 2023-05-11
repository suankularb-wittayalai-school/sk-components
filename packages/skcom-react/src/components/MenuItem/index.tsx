// External libraries
import { motion } from "framer-motion";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/menu-item.css";

// Utilities
import { useRipple } from "../../utils/animation";
import { cn } from "../../utils/className";

/**
 * Props for {@link MenuItem Menu Item}.
 */
export interface MenuItemProps extends SKComponent {
  /**
   * The text displayed inside the Menu Item.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * An icon can appear before the text (`children`) in a Menu Item. In a long
   * Menu, icons can quickly orient users.
   *
   * - If one Menu Item in a Menu has an icon, the rest should have one too.
   * - You are encouraged to use Material Icons as the value for `icon`.
   * - Optional.
   */
  icon?: JSX.Element;

  /**
   * A message shown in a tooltip when the user hovers over the Menu Item.
   *
   * - Optional.
   */
  metadata?: string | JSX.Element;

  /**
   * If this Menu Item is selected in a dropdown Menu.
   *
   * - Optional.
   */
  selected?: boolean;

  /**
   * Turns the Menu Item text gray and block any action associated with it.
   * `onClick` and `href` will have no effect.
   * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * The value of a Select item, similar to `value` on `<option>`.
   *
   * - **Important**: this is intended to be used only when the Menu Item is
   *   inside a Select. This prop is not functional otherwise.
   * - Optional.
   */
  value?: any;

  /**
   * The function called when the user interacts with the Menu Item, similar
   * to `onClick` on `<button>`.
   *
   * - Incompatible with `href`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Menu Item leads to, similar to `href` on `<a>`.
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
    title,
    style,
    className,
    href,
    onTouchStart,
    onMouseDown,
    onKeyDown,
  }: {
    children: React.ReactNode;
    ref: React.MutableRefObject<any>;
    title?: string;
    style?: React.CSSProperties;
    className: any;
    href: string;
    onTouchStart: (event: React.TouchEvent) => void;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
  }) => JSX.Element | null;
}

/**
 * An action/option inside a temporary list.
 *
 * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.kvecy6esdzke SKCom documentation}
 *
 * @param children The text displayed inside the Menu Item.
 * @param icon An icon can appear before the text (`children`) in a Menu Item.
 * @param metadata A message shown in a tooltip when the user hovers over the Menu Item.
 * @param selected If this Menu Item is selected in a dropdown Menu.
 * @param disabled Turns the Menu Item text gray and block any action associated with it.
 * @param value The value of a Select item, similar to `value` on `<option>`.
 * @param onClick The function called when the user interacts with the Menu Item, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Menu Item leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
export function MenuItem({
  children,
  icon,
  metadata,
  selected,
  disabled,
  onClick,
  href,
  element: Element,
  style,
  className,
}: MenuItemProps) {
  // Ripple setup
  const itemRef: React.LegacyRef<any> = React.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(itemRef);

  // Props
  const props = {
    ref: itemRef,
    role: "menuitem",
    "aria-selected": selected,
    "aria-disabled": disabled,
    style,
    className: cn([
      "skc-menu-item",
      selected && "skc-menu-item--selected",
      className,
    ]),
    ...rippleListeners,
  } satisfies JSX.IntrinsicElements["button" | "a"];

  // Content
  const content = (
    <>
      {icon && <div className="skc-menu-item__icon">{icon}</div>}
      <span className="skc-menu-item__label">{children}</span>
      {metadata && <span className="skc-menu-item__metadata">{metadata}</span>}
      <motion.span
        aria-hidden
        initial={{ scale: 0, opacity: 0.36 }}
        animate={rippleControls}
        className="skc-menu-item__ripple"
        style={rippleStyle}
      />
    </>
  );

  return (
    <li role="presentation">
      {
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
      }
    </li>
  );
}

MenuItem.displayName = "MenuItem";
