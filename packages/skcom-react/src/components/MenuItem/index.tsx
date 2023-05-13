// External libraries
import * as React from "react";

// Internal components
import { Interactive } from "../Interactive";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/menu-item.css";

// Utilities
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
 */
export function MenuItem({
  children,
  icon,
  metadata,
  selected,
  disabled,
  onClick,
  href,
  element,
  style,
  className,
}: MenuItemProps) {
  return (
    <li role="presentation">
      <Interactive
        href={href}
        onClick={onClick}
        element={element || (href ? "a" : "button")}
        attr={{
          role: "menuitem",
          "aria-selected": selected,
          "aria-disabled": disabled,
        }}
        style={style}
        className={cn([
          "skc-menu-item",
          selected && "skc-menu-item--selected",
          className,
        ])}
      >
        {icon && <div className="skc-menu-item__icon">{icon}</div>}
        <span className="skc-menu-item__label">{children}</span>
        {metadata && (
          <span className="skc-menu-item__metadata">{metadata}</span>
        )}
      </Interactive>
    </li>
  );
}

MenuItem.displayName = "MenuItem";
