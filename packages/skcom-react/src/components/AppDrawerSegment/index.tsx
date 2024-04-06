import "@suankularb-components/css/dist/css/components/app-drawer-segment.css";
import { dash } from "radash";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A group of apps in the App Drawer.
 *
 * @param children The apps in this segment.
 * @param title The title of the group.
 */
const AppDrawerSegment: StylableFC<{
  /**
   * The apps in this segment.
   */
  children: ReactNode;

  /**
   * The title of the group.
   */
  title: string;
}> = ({ children, title, element: Element = "section", style, className }) => (
  <Element
    aria-labelledby={`drawer-${dash(title)}`}
    style={style}
    className={cn(`skc-app-drawer-segment`, className)}
  >
    <h3 id={`drawer-${dash(title)}`} className="skc-app-drawer-segment__title">
      {title}
    </h3>
    <ul className="skc-app-drawer-segment__content">{children}</ul>
  </Element>
);

AppDrawerSegment.displayName = "AppDrawerSegment";

export default AppDrawerSegment;
