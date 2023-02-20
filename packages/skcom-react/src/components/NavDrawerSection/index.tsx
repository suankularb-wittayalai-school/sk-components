// External libraries
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
}

/**
 * A row of Buttons. NavDrawerSection handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children Destinations grouped into this section.
 * @param header The header of the section.
 */
export function NavDrawerSection({
  children,
  header,
  style,
  className,
}: NavDrawerSectionProps) {
  return (
    <>
      <li>
        <ul style={style} className={cn(["skc-nav-drawer-section", className])}>
          <li className="skc-nav-drawer-section__header">{header}</li>
          {children}
        </ul>
      </li>
    </>
  );
}

NavDrawerSection.displayName = "NavDrawerSection";
