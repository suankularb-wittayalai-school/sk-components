// External libraries
import * as React from "react";

// Internal components
import { HeaderProps } from "../Header";

// Types
import { SKComponent } from "../../types";

// Styles
import "@suankularb-components/css/dist/css/components/section.css";

// Utilities
import { cn } from "../../utils/className";
import { kebabify } from "../../utils/format";
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
   * Attributes for the underlying `<section>` element.
   *
   * - Optional.
   */
  sectionAttr?: React.HTMLAttributes<HTMLElement>;
}

/**
 * Section is a way to group content under one Header.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.cpfnymlipawc SKCom documentation}
 *
 * @param children Section must have exactly 1 Header as the first direct descendent. After that, it can include anything.
 * @param sectionAttr Attributes for the underlying `<section>` element.
 */
export function Section({
  children,
  sectionAttr,
  style,
  className,
}: SectionProps) {
  // Find the Header in `children` and modify it to include `id`
  // This ID is generated from the text inside Header

  // Section uses this ID to link the `section` element and the `<h2>`-`<h6>`
  // element together, so screenreaders understand this section as a “region”
  // with Header as its name.

  let headerID: string | undefined;
  const modifiedChildren: React.ReactNode =
    // For each child in `children`
    React.Children.map(children, (child) => {
      // If Header is found, grab the text and generate the ID, then modify the
      // Header to include the ID with the `id` attribute. This ID will be
      // referred to by Section.

      if (matchDisplayName(child, "Header")) {
        // Generate the ID
        headerID = `header-${kebabify((child as JSX.Element).props.children)}`;

        // Modify the Header to include ID
        return React.cloneElement(child as JSX.Element, {
          hAttr: { id: headerID },
        } satisfies Partial<HeaderProps>);
      }
      // If not, return the child unchanged
      else return child;
    });

  return (
    <section
      {...{ ...sectionAttr, style }}
      aria-labelledby={headerID}
      className={cn(["skc-section", className])}
    >
      {modifiedChildren}
    </section>
  );
}

Section.displayName = "Section";
