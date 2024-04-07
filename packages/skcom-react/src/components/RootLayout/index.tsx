// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/root-layout.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link RootLayout Root Layout}.
 */
export interface RootLayoutProps extends SKComponent {
  /**
   * Root Layout positions Navigation Drawer, Navigation Bar, and FAB. It can
   * contain Navigation Drawer, Navigation Bar, FAB, Page Header, Content
   * Layout, and Vertical Split Layout only.
   *
   * - Always required.
   */
  children: React.ReactNode;
}

/**
 * The container of everything inside an application. Components which must
 * appear only once in like Navigation Drawer, Navigation Bar, FAB, and Page
 * Header only work optimally as direct descendants of Root Layout.
 *
 * Root Layout handles positioning of components and responsiveness.
 *
 * @param children Root Layout positions Navigation Drawer, Navigation Bar, and FAB. It can contain Navigation Drawer, Navigation Bar, FAB, Page Header, Content Layout, and Vertical Split Layout only.
 */
export function RootLayout({
  children,
  element: Element = "div",
  className,
  style,
}: RootLayoutProps) {
  return (
    <Element style={style} className={cn(["skc-root-layout", className])}>
      {children}
    </Element>
  );
}

RootLayout.displayName = "RootLayout";
