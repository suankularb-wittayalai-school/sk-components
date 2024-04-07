// External libraries
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/content-layout.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link ContentLayout Content Layout}.
 */
export interface ContentLayoutProps extends SKComponent {
  /**
   * The main content of a page is grouped into Sections inside of a Content
   * Layout.
   *
   * - Must only have Sections.
   * - Always required.
   */
  children: React.ReactNode;
}

/**
 * A simple width-clamped vertical flow of content with minimal default styling.
 *
 * @param children The main content of a page is grouped into Sections inside of a Content Layout.
 */
export function ContentLayout({
  children,
  element,
  style,
  className,
}: ContentLayoutProps) {
  return React.createElement(
    element || "main",
    { style, className: cn(["skc-content-layout", className]) },
    <div className="skc-content-layout__content">{children}</div>
  );
}

ContentLayout.displayName = "ContentLayout";
