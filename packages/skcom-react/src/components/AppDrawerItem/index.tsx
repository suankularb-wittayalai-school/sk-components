import "@suankularb-components/css/dist/css/components/app-drawer-item.css";
import { forwardRef } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";
import Interactive from "../Interactive";

/**
 * An app inside the App Drawer. A child of App Drawer Segment.
 *
 * @param logo The logo image of the app.
 * @param name The name of the app.
 * @param onClick Triggers when the App Drawer Item is pressed.
 * @param href The link to the app or the app’s install page.
 */
const AppDrawerItem: StylableFC<{
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
}> = ({
  logo,
  name,
  onClick,
  href,
  element: Element = "li",
  style,
  className,
}) => (
  <Element style={style} className={cn(`skc-app-drawer-item`, className)}>
    <Interactive
      onClick={onClick}
      href={href}
      element={
        href
          ? forwardRef((props, ref) => (
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

AppDrawerItem.displayName = "AppDrawerItem";

export default AppDrawerItem;
