// External libraries
import { dash } from "radash";
import * as React from "react";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/nav-drawer-section.css";

// Utilities
import { cn } from "../../utils/className";

/**
 * Props for {@link NavDrawerSection Navigation Drawer Section}.
 */
export interface NavDrawerSectionProps extends SKComponent {
  /**
   * Destinations grouped into this section.
   *
   * - Must consist of Navigation Drawer Item(s).
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * The header of the section.
   *
   * - Normally optional but required if this is the first Navigation Drawer
   *   Section in a Navigation Drawer. In this case, it’d be the name of the app.
   */
  header?: string | JSX.Element;

  /**
   * A description of the Navigation Drawer Section for screen readers,
   * similar to `alt` on `<img>`.
   *
   * - Required if `header` is a JSX Element, as it is used to generate the ID
   *   crucial for accessibility.
   */
  alt?: string;
}

/**
 * A group of destinations within a Navigation Drawer.
 *
 * @param children Destinations grouped into this section.
 * @param header The header of the section.
 * @param alt A description of the Navigation Drawer Section for screen readers, similar to `alt` on `<img>`.
 */
export function NavDrawerSection({
  children,
  header,
  alt,
  element: Element = "section",
  style,
  className,
}: NavDrawerSectionProps) {
  const sectionID = `nav-section-${dash(
    (typeof header === "string" ? header : alt)!,
  )}`;

  return (
    <Element
      style={style}
      className={cn(["skc-nav-drawer-section", className])}
    >
      <h2
        id={sectionID}
        aria-label={alt}
        className="skc-nav-drawer-section__header"
      >
        {header}
      </h2>
      <ul role="list">{children}</ul>
    </Element>
  );
}

NavDrawerSection.displayName = "NavDrawerSection";
