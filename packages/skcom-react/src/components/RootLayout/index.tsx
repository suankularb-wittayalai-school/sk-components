import "@suankularb-components/css/dist/css/components/root-layout.css";
import { cn } from "../../utils/className";
import { StylableFC } from "../../types";
import { ReactNode } from "react";

/**
 * The container of everything inside an application. Components which must
 * appear only once in like Navigation Drawer, Navigation Bar, FAB, and Page
 * Header only work optimally as direct descendants of Root Layout.
 *
 * Root Layout handles positioning of components and responsiveness.
 *
 * @param children Root Layout positions Navigation Drawer, Navigation Bar, and FAB. It can contain Navigation Drawer, Navigation Bar, FAB, Page Header, Content Layout, and Vertical Split Layout only.
 */
const RootLayout: StylableFC<{
  /**
   * Root Layout positions Navigation Drawer, Navigation Bar, and FAB. It can
   * contain Navigation Drawer, Navigation Bar, FAB, Page Header, Content
   * Layout, and Vertical Split Layout only.
   *
   * - Always required.
   */
  children: ReactNode;
}> = ({ children, element: Element = "div", className, style }) => (
  <Element style={style} className={cn("skc-root-layout", className)}>
    {children}
  </Element>
);

RootLayout.displayName = "RootLayout";

export default RootLayout;
