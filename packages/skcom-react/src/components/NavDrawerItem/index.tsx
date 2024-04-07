// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/nav-drawer-item.css";

// Utilities
import { cn } from "../../utils/className";
import { Interactive } from "../Interactive";

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
   * The function called when the user interacts with the Navigation Drawer
   * Item, similar to `onClick` on `<button>`.
   *
   * - Required if `href` is not defined.
   * - Incompatible with `href`.
   */
  onClick?: () => any;

  /**
   * The URL of the page this Navigation Drawer Item leads to, similar to
   * `href` on `<a>`.
   *
   * - Required if `onClick` is not defined.
   * - Incompatible with `onClick`.
   */
  href?: string;
}

/**
 * A destination in a Navigation Drawer. Should be a child of a Navigation
 * Drawer Section.
 *
 * @param icon Icons help users identify pages more quickly.
 * @param label The title of the destination page.
 * @param metadata Some text aligned to the right of a Navigation Drawer Item.
 * @param tooltip A message shown in a tooltip when the user hovers over the Navigation Drawer Item.
 * @param selected Highlights the Navigation Drawer Item.
 * @param onClick The function called when the user interacts with the Navigation Drawer Item.
 * @param href The URL of the page this Navigation Drawer Item leads to, similar to `href` on `<a>`.
 */
export function NavDrawerItem({
  icon,
  label,
  metadata,
  tooltip,
  selected,
  onClick,
  href,
  element,
  style,
  className,
}: NavDrawerItemProps) {
  return (
    <li>
      <Interactive
        href={href}
        onClick={onClick}
        element={element}
        attr={{ "aria-current": selected, title: tooltip }}
        style={style}
        className={cn([
          "skc-nav-drawer-item",
          selected && "skc-nav-drawer-item--selected",
          className,
        ])}
      >
        <div className="skc-nav-drawer-item__icon">{icon}</div>
        <span className="skc-nav-drawer-item__label">{label}</span>
        {metadata && (
          <span className="skc-nav-drawer-item__metadata">{metadata}</span>
        )}
      </Interactive>
    </li>
  );
}

NavDrawerItem.displayName = "NavDrawerItem";
