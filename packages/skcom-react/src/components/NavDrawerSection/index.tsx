import "@suankularb-components/css/dist/css/components/nav-drawer-section.css";
import { dash } from "radash";
import { ReactNode } from "react";
import { StylableFC } from "../../types";
import { cn } from "../../utils/className";

/**
 * A group of destinations in a Navigation Drawer.
 *
 * @param children Destinations grouped into this section.
 * @param header The header of the section.
 * @param alt A description of the Navigation Drawer Section for screen readers, similar to `alt` on `<img>`.
 */
const NavDrawerSection: StylableFC<{
  /**
   * Destinations grouped into this section.
   *
   * - Must consist of Navigation Drawer Item(s).
   * - Always required.
   */
  children: ReactNode;

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
}> = ({
  children,
  header,
  alt,
  element: Element = "section",
  style,
  className,
}) => {
  const sectionID = `nav-section-${dash(
    (typeof header === "string" ? header : alt)!,
  )}`;

  return (
    <Element style={style} className={cn("skc-nav-drawer-section", className)}>
      <h2
        id={sectionID}
        aria-label={alt}
        className="skc-nav-drawer-section__header"
      >
        {header}
      </h2>
      ,<ul role="list">{children}</ul>
    </Element>
  );
};

NavDrawerSection.displayName = "NavDrawerSection";

export default NavDrawerSection;
