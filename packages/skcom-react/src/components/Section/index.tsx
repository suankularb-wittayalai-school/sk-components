// External libraries
import { dash } from "radash";
import * as React from "react";

// Internal components
import { HeaderProps } from "../Header";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/section.css";

// Utilities
import { cn } from "../../utils/className";
import { matchDisplayName } from "../../utils/displayName";

/**
 * Props for {@link Section}.
 */
export interface SectionProps extends SKComponent {
  /**
   * Section must have exactly 1 Header as the first direct descendent. After
   * that, it can include anything.
   *
   * - Always required.
   */
  children: React.ReactNode;

  /**
   * @deprecated Use `element` instead.
   */
  sectionAttr?: React.ComponentProps<"section">;
}

/**
 * Section is a way to group content under one Header.
 *
 * @param children Section must have exactly 1 Header as the first direct descendent. After that, it can include anything.
 */
export function Section({
  children,
  element: Element = "section",
  style,
  className,
}: SectionProps) {
  // Find the Header in `children` and modify it to include `id`
  // This ID is generated from the text inside Header

  // Section uses this ID to link the `section` element and the `<h2>`-`<h6>`
  // element together, so screenreaders understand this section as a “region”
  // with Header as its name.

  let headerID: string | undefined;

  return (
    <Element style={style} className={cn(["skc-section", className])}>
      {React.Children.map(children, (child) => {
        if (matchDisplayName(child, "Header")) {
          headerID = `header-${dash((child as JSX.Element).props.children)}`;
          return React.cloneElement(child as JSX.Element, {
            hAttr: { id: headerID },
          });
        } else return child;
      })}
    </Element>
  );
}

Section.displayName = "Section";
