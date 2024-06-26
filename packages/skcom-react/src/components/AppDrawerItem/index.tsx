// External libraries
import * as React from "react";

// Internal components
import { Interactive } from "../Interactive";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/app-drawer-item.css";

// Utilities
import { cn } from "../../utils/className";

export interface AppDrawerItemProps extends SKComponent {
  /**
   * The logo image of the app.
   */
  logo: JSX.Element;

  /**
   * The name of the app.
   */
  name: string;

  /**
   * Triggers when the App Drawer Item is pressed.
   */
  onClick?: () => any;

  /**
   * The link to the app or the app’s install page.
   */
  href?: string;
}

/**
 * An app inside the App Drawer. A child of App Drawer Segment.
 *
 * @param logo The logo image of the app.
 * @param name The name of the app.
 * @param onClick Triggers when the App Drawer Item is pressed.
 * @param href The link to the app or the app’s install page.
 */
export function AppDrawerItem({
  logo,
  name,
  onClick,
  href,
  element: Element = "li",
  style,
  className,
}: AppDrawerItemProps) {
  return (
    <Element style={style} className={cn([`skc-app-drawer-item`, className])}>
      <Interactive
        onClick={onClick}
        href={href}
        element={
          href
            ? React.forwardRef((props, ref) => (
                <a ref={ref} {...props} target="_blank" />
              ))
            : "button"
        }
        className="light skc-app-drawer-item__logo"
      >
        {logo}
      </Interactive>
      <span className="skc-app-drawer-item__name">{name}</span>
    </Element>
  );
}
